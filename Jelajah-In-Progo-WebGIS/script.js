let map;
let allData = [];
let markers = [];
let activeCategory = "Semua";
let selectedData = null;

const categoryIcons = {
    "Wisata Alam": "fa-mountain-sun",
    "Wisata Rekreasi": "fa-person-hiking",
    "Wisata Budaya dan Religi": "fa-landmark"
};

document.addEventListener("DOMContentLoaded", () => {
    initMap();
    loadData();
    setupEvents();
});

function initMap() {
    map = L.map("map", {
        zoomControl: true
    }).setView([-7.75, 110.15], 11);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);
}

async function loadData() {
    try {
        const response = await fetch("/api/wisata");

        if (!response.ok) {
            throw new Error("Server tidak dapat membaca CSV.");
        }

        allData = await response.json();

        if (!allData.length) {
            throw new Error("Tidak ada data yang dapat dipetakan.");
        }

        updateStatistics();
        renderCategoryOverview();
        renderFilters();
        renderTable(allData);
        renderMarkers(allData);

        selectDestination(allData[0]);
    } catch (error) {
        console.error(error);

        document.getElementById("locationTable").innerHTML = `
            <tr>
                <td colspan="5">
                    Gagal memuat data: ${escapeHtml(error.message)}
                </td>
            </tr>
        `;
    }
}

function setupEvents() {
    const search = document.getElementById("searchInput");
    const clear = document.getElementById("clearSearch");
    const reset = document.getElementById("resetFilter");
    const locate = document.getElementById("locateButton");

    search.addEventListener("input", applyFilters);

    clear.addEventListener("click", () => {
        search.value = "";
        applyFilters();
        search.focus();
    });

    reset.addEventListener("click", () => {
        activeCategory = "Semua";
        document.querySelectorAll(".filter-chip").forEach(btn => {
            btn.classList.toggle(
                "active",
                btn.dataset.category === "Semua"
            );
        });

        search.value = "";
        applyFilters();
    });

    locate.addEventListener("click", () => {
        if (!navigator.geolocation) {
            alert("Browser Anda tidak mendukung geolocation.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                map.setView(
                    [
                        position.coords.latitude,
                        position.coords.longitude
                    ],
                    13
                );
            },
            () => {
                alert("Lokasi pengguna tidak dapat diakses.");
            }
        );
    });
}

function updateStatistics() {
    const kecamatan = new Set(
        allData.map(item => item.kecamatan.trim())
    );

    const kategori = new Set(
        allData
            .map(item => normalizeCategory(item.kategori_wisata))
            .filter(Boolean)
    );

    document.getElementById("statTotal").textContent = allData.length;
    document.getElementById("statKecamatan").textContent = kecamatan.size;
    document.getElementById("statKategori").textContent = kategori.size;
    document.getElementById("statKoordinat").textContent = allData.length;
}

function getCategories() {
    return [...new Set(
        allData
            .map(item => normalizeCategory(item.kategori_wisata))
            .filter(Boolean)
    )];
}

function renderCategoryOverview() {
    const container = document.getElementById("categoryOverview");
    const categories = getCategories();

    container.innerHTML = categories.map(category => {
        const count = allData.filter(
            item => normalizeCategory(item.kategori_wisata) === category
        ).length;

        const icon = categoryIcons[category] || "fa-location-dot";

        return `
            <div class="category-row">
                <div class="category-icon">
                    <i class="fa-solid ${icon}"></i>
                </div>
                <div>
                    <strong>${escapeHtml(category)}</strong>
                    <span>Data dari CSV</span>
                </div>
                <div class="category-count">${count}</div>
            </div>
        `;
    }).join("");
}

function renderFilters() {
    const container = document.getElementById("mapFilters");

    const categories = ["Semua", ...getCategories()];

    container.innerHTML = categories.map(category => `
        <button
            class="filter-chip ${category === "Semua" ? "active" : ""}"
            data-category="${escapeHtml(category)}"
        >
            ${escapeHtml(category)}
        </button>
    `).join("");

    container.querySelectorAll(".filter-chip").forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;

            container.querySelectorAll(".filter-chip").forEach(btn => {
                btn.classList.toggle("active", btn === button);
            });

            applyFilters();
        });
    });
}

function renderTable(data) {
    const tbody = document.getElementById("locationTable");
    const visible = data.slice(0, 12);

    tbody.innerHTML = visible.map(item => `
        <tr>
            <td>
                <strong>${escapeHtml(item.nama_wisata)}</strong>
                <span>${escapeHtml(item.desa)}, ${escapeHtml(item.kecamatan)}</span>
            </td>
            <td>
                <span class="table-category">
                    ${escapeHtml(normalizeCategory(item.kategori_wisata))}
                </span>
            </td>
            <td>
                ${escapeHtml(item.kecamatan)}
            </td>
            <td>
                ${escapeHtml(item.jam_operasional)}
            </td>
            <td>
                <button
                    class="table-action"
                    data-id="${escapeHtml(item.id)}"
                    title="Lihat di peta"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
            </td>
        </tr>
    `).join("");

    tbody.querySelectorAll(".table-action").forEach(button => {
        button.addEventListener("click", () => {
            const item = allData.find(
                row => String(row.id) === String(button.dataset.id)
            );

            if (item) {
                selectDestination(item);
                map.flyTo([item.latitude, item.longitude], 15);
                document.getElementById("peta").scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    document.getElementById("tableCount").textContent =
        `${data.length} data`;
}

function renderMarkers(data) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    const bounds = [];

    data.forEach(item => {
        const marker = L.circleMarker(
            [item.latitude, item.longitude],
            {
                radius: 8,
                color: "#ffffff",
                weight: 2,
                fillColor: markerColor(item.kategori_wisata),
                fillOpacity: 0.95
            }
        );

        marker.bindPopup(createPopup(item));

        marker.on("click", () => {
            selectDestination(item);
        });

        marker.addTo(map);
        markers.push(marker);
        bounds.push([item.latitude, item.longitude]);
    });

    document.getElementById("visibleCount").textContent =
        `${data.length} lokasi`;

    if (bounds.length) {
        map.fitBounds(bounds, {
            padding: [35, 35]
        });
    }
}

function createPopup(item) {
    const category = normalizeCategory(item.kategori_wisata);

    return `
        <div class="popup">
            <h3>${escapeHtml(item.nama_wisata)}</h3>
            <span class="pill">${escapeHtml(category)}</span>

            <p>
                <strong>Lokasi:</strong>
                ${escapeHtml(item.desa)}, ${escapeHtml(item.kecamatan)}
            </p>

            <p>
                <strong>Jam:</strong>
                ${escapeHtml(item.jam_operasional)}
            </p>

            <p>
                <strong>Tiket:</strong>
                ${escapeHtml(item.tiket_masuk)}
            </p>
        </div>
    `;
}

function applyFilters() {
    const keyword = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const filtered = allData.filter(item => {
        const category = normalizeCategory(item.kategori_wisata);

        const categoryMatch =
            activeCategory === "Semua" ||
            category === activeCategory;

        const searchText = [
            item.nama_wisata,
            item.kategori_wisata,
            item.kecamatan,
            item.desa,
            item.alamat,
            item.deskripsi
        ]
        .join(" ")
        .toLowerCase();

        const searchMatch =
            !keyword ||
            searchText.includes(keyword);

        return categoryMatch && searchMatch;
    });

    renderMarkers(filtered);
    renderTable(filtered);

    if (filtered.length) {
        selectDestination(filtered[0]);
    }

    renderSearchResults(filtered, keyword);
}

function renderSearchResults(data, keyword) {
    const box = document.getElementById("mapResults");

    if (!keyword) {
        box.classList.add("hidden");
        box.innerHTML = "";
        return;
    }

    if (!data.length) {
        box.innerHTML = `
            <div class="map-result">
                <strong>Tidak ada hasil</strong>
                <span>Coba kata kunci lain.</span>
            </div>
        `;
        box.classList.remove("hidden");
        return;
    }

    box.innerHTML = data.slice(0, 8).map(item => `
        <div class="map-result" data-id="${escapeHtml(item.id)}">
            <strong>${escapeHtml(item.nama_wisata)}</strong>
            <span>
                ${escapeHtml(item.kecamatan)}
                ·
                ${escapeHtml(normalizeCategory(item.kategori_wisata))}
            </span>
        </div>
    `).join("");

    box.classList.remove("hidden");

    box.querySelectorAll(".map-result").forEach(element => {
        element.addEventListener("click", () => {
            const item = allData.find(
                row => String(row.id) === String(element.dataset.id)
            );

            if (!item) return;

            selectDestination(item);
            map.flyTo([item.latitude, item.longitude], 15);

            const marker = markers.find(marker => {
                const p = marker.getLatLng();
                return p.lat === item.latitude &&
                       p.lng === item.longitude;
            });

            if (marker) {
                marker.openPopup();
            }

            box.classList.add("hidden");
        });
    });
}

function selectDestination(item) {
    selectedData = item;

    const category = normalizeCategory(item.kategori_wisata);

    // Sidebar peta
    document.getElementById("selectedPlace").innerHTML = `
        <div class="place-card">
            <h3>${escapeHtml(item.nama_wisata)}</h3>

            <span class="place-category">
                ${escapeHtml(category)}
            </span>

            <p class="place-description">
                ${escapeHtml(item.deskripsi)}
            </p>

            <div class="place-info">
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <span>Lokasi</span>
                        <strong>
                            ${escapeHtml(item.desa)}, ${escapeHtml(item.kecamatan)}
                        </strong>
                    </div>
                </div>

                <div>
                    <i class="fa-regular fa-clock"></i>
                    <div>
                        <span>Jam operasional</span>
                        <strong>${escapeHtml(item.jam_operasional)}</strong>
                    </div>
                </div>

                <div>
                    <i class="fa-solid fa-ticket"></i>
                    <div>
                        <span>Tiket masuk</span>
                        <strong>${escapeHtml(item.tiket_masuk)}</strong>
                    </div>
                </div>
            </div>

            <a
                class="primary-button place-route"
                href="https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}"
                target="_blank"
                rel="noopener"
            >
                <i class="fa-solid fa-route"></i>
                Lihat Rute
            </a>
        </div>
    `;

    // Detail destinasi
    document.getElementById("detailName").textContent = item.nama_wisata;
    document.getElementById("detailArea").textContent =
        `${item.desa}, ${item.kecamatan}, ${item.kabupaten || "Kulon Progo"}`;

    document.getElementById("detailCategory").textContent = category;
    document.getElementById("detailDescription").textContent = item.deskripsi;
    document.getElementById("detailHours").textContent = item.jam_operasional;
    document.getElementById("detailTicket").textContent = item.tiket_masuk;

    document.getElementById("detailCoordinates").textContent =
        `${item.latitude}, ${item.longitude}`;

    document.getElementById("detailSocial").textContent =
        item.media_sosial || "-";

    document.getElementById("detailToilet").textContent =
        item.toilet || "-";

    document.getElementById("detailMushola").textContent =
        item.mushola || "-";

    document.getElementById("detailFood").textContent =
        item.tempat_makan || "-";

    document.getElementById("routeButton").href =
        `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`;

    document.getElementById("detailMapButton").onclick = (event) => {
        event.preventDefault();
        map.flyTo([item.latitude, item.longitude], 15);

        setTimeout(() => {
            const marker = markers.find(m => {
                const p = m.getLatLng();
                return p.lat === item.latitude &&
                       p.lng === item.longitude;
            });

            if (marker) marker.openPopup();
        }, 400);
    };
}

function normalizeCategory(value) {
    // Hanya untuk tampilan/filter. CSV asli tidak diubah.
    return String(value || "").trim();
}

function markerColor(category) {
    const value = normalizeCategory(category);

    if (value === "Wisata Alam") return "#3f765f";
    if (value === "Wisata Rekreasi") return "#829553";
    if (value === "Wisata Budaya dan Religi") return "#8b6d4f";

    return "#6e8077";
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
