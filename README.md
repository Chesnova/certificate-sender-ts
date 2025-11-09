# Certificate Sender (TypeScript + Playwright)

This project automates the process of generating personalized completion certificates from a PNG template and sending them via email to a list of participants read from a CSV file.

## 🚀 Getting Started

This application is built using TypeScript on Node.js.

### Prerequisites

1.  **Node.js (LTS recommended)**
2.  **npm (Node Package Manager)**

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_REPO_URL]
    cd certificate-sender-ts
    ```

2.  **Install Core Dependencies:**
    Currently, we only require dependencies for file reading and processing.

    ```bash
    npm install
    ```

    _(The main dependencies used so far are `csv-parser` and `@types/node`.)_

---

## ⚙️ Implemented Modules: Phase 1

### 1. Data Processor (`src/DataProcessor.ts`)

This module is responsible for handling input files:

- Reading participant data from **`temp/test-participants.csv`**.
- Reading the email body template (Markdown format) from **`temp/test-email.txt`**.

### 2. Input Files Required

For testing the `DataProcessor`, ensure the following placeholder files exist in the **`temp/`** directory:

1.  `test-participants.csv` (CSV with `firstName,lastName,email` headers).
2.  `test-email.txt` (The email template in Markdown format).
