# PWAPad - Progressive Web Application Text Editor

![License: MIT](https://img.shields.io/badge/license-MIT-green)

## Description

**PWAPad** is a modern Progressive Web Application (PWA) designed for developers and writers to create notes or code snippets with or without an internet connection. It ensures reliable data storage using IndexedDB, allows offline functionality, and can be installed as a standalone application on your device.

This single-page application uses Webpack, Babel, and Workbox to deliver a seamless experience, featuring:
- Offline functionality
- Automatic data persistence with IndexedDB
- Service worker integration for caching
- Easy installation as a PWA

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [License](#license)

---

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd PWAPad
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Deploy the app locally:
   ```bash
   npm run start
   ```

---

## Usage

- Open the application in your browser.
- Create notes or code snippets in the editor.
- Save your work automatically by clicking away or losing focus on the editor window.
- Install the app to your device using the **Install** button.
- Access and edit your saved content offline.

---

## Features

- IndexedDB integration for persistent storage.
- Automatic content saving when the window loses focus.
- Webpack bundling with plugins for HTML generation, service worker, and manifest file creation.
- Offline functionality with service worker caching.
- Installable as a Progressive Web Application (PWA).
- Modern user interface styled with CSS.

---

## Technologies Used

- **JavaScript (ES6+)**
- **IndexedDB with `idb` wrapper**
- **Webpack**
- **Workbox (Service Workers)**
- **Babel**
- **CSS**

---

## Screenshots

### Application Interface
![Application Interface](./Assets/app-screenshot.png)

### IndexedDB Storage
![IndexedDB Storage](./Assets/idb-screenshot.png)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contribution

Contributions are welcome! If you'd like to contribute, please open a pull request or issue on the [GitHub repository](<repository-url>).

---

## Questions

For any questions, feel free to contact the developer:

- **GitHub**: [your-github-username](https://github.com/yaseminvatan)

---

## Live Deployment

Check out the live application here: [PWAPad on Render](https://pwapad.onrender.com)
```

Let me know if you'd like further adjustments!