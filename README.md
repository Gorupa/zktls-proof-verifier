🔐 zkTLS Proof Verifier

A lightweight web tool to inspect and verify zkTLS proof files directly in the browser.


Upload a proof.json file and view its metadata such as server source, timestamp, and proof hash.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-zktls--proof-1a73e8?style=for-the-badge)](https://gorupa.github.io/zktls-proof-verifier/demo)


🧠 Concept
zkTLS (Zero-Knowledge TLS) allows proving that data was retrieved from a specific website
without revealing the full TLS session.

This enables:
Verifiable web scraping
Trustless data verification
Privacy-preserving proofs
This project provides a simple interface to inspect zkTLS proof files.


⚙️ How It Works

Upload a proof.json file
The tool parses the proof structure
Metadata is displayed in the browser
Everything runs client-side.

📂 Example Proof


{
  "server": "services.ecourts.gov.in",
  "timestamp": "2026-03-16T10:45:00Z",
  "dataHash": "0x9f9234aa8823bc9fa123"
}

🚀 Run Locally

Clone the repository:

git clone



Open:
index.html

No build tools required.
