# Certificate Sender (TypeScript + Playwright)

This project automates the process of generating personalized completion certificates from a PNG template and sending them via email to a list of participants read from a CSV file.

## 🚀 Getting Started

This application is built using TypeScript on Node.js.

### Prerequisites

1.  **Node.js (LTS recommended)**
2.  **npm (Node Package Manager)**
3.  **Graphics Dependencies** (Requires compilation support for the `canvas` library, usually handled automatically by `npm install`).

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

3.  **Configure TypeScript:**
    A base `tsconfig.json` is included to configure the compiler for modern Node.js module resolution.

---

## ⚙️ Implemented Modules: Phase 2 Complete

### 1. Data Processor (`src/DataProcessor.ts`)

This module is responsible for handling input files:

- Reading participant data from **`temp/test-participants.csv`** (CSV with `firstName,lastName,email` headers).
- Reading the email body template (Markdown format) from **`temp/test-email.txt`**.

### 2. Certificate Generator (`src/Generator.ts`)

This module handles the graphics processing:

- Loads the PNG template (`temp/certificate_template.png`).
- Draws the participant's name using the **Arial** font (`30px`) in color **`#595959`** onto the template (at coordinates X: 27, Y: 245).
- Saves the final image to the **`certificates/`** directory. (This directory is excluded via `.gitignore`).

### 3. Required Input Files 📁

For successful operation and testing, ensure the following placeholder files exist in the **`temp/`** directory:

- `test-participants.csv`: Contains the list of participants.
- `test-email.txt`: Contains the email template body (Markdown format).
- `certificate_template.png`: The certificate image template.

---

## 🧪 Testing the Generator (Manual)

To manually test the certificate output:

```bash
npm run test:cert
```
