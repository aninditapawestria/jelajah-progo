import csv
import json
import os
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE_DIR = Path(__file__).resolve().parent
CSV_FILE = BASE_DIR / "data" / "Data Wisata Kulon Progo.csv"

def load_csv():
    # File CSV sumber menggunakan encoding CP1252.
    with open(CSV_FILE, "r", encoding="cp1252", newline="") as f:
        reader = csv.DictReader(f)
        data = []

        for row in reader:
            try:
                row["latitude"] = float(row["latitude"])
                row["longitude"] = float(row["longitude"])
            except (ValueError, TypeError):
                # Baris tanpa koordinat tidak dapat dibuat marker.
                continue

            data.append(row)

        return data

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/wisata":
            try:
                payload = json.dumps(
                    load_csv(),
                    ensure_ascii=False
                ).encode("utf-8")

                self.send_response(200)
                self.send_header(
                    "Content-Type",
                    "application/json; charset=utf-8"
                )
                self.send_header(
                    "Content-Length",
                    str(len(payload))
                )
                self.end_headers()
                self.wfile.write(payload)

            except Exception as e:
                payload = json.dumps({
                    "error": str(e)
                }).encode("utf-8")

                self.send_response(500)
                self.send_header(
                    "Content-Type",
                    "application/json; charset=utf-8"
                )
                self.send_header(
                    "Content-Length",
                    str(len(payload))
                )
                self.end_headers()
                self.wfile.write(payload)

            return

        super().do_GET()

if __name__ == "__main__":
    PORT = 8000
    os.chdir(BASE_DIR)

    server = ThreadingHTTPServer(
        ("localhost", PORT),
        Handler
    )

    print("=" * 58)
    print("Jelajah-In Progo — WebGIS Wisata Kulon Progo")
    print(f"Server aktif: http://localhost:{PORT}")
    print("Tekan Ctrl+C untuk menghentikan server.")
    print("=" * 58)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.")
        server.server_close()
