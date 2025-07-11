# 🌐 Circle Agency — Responsive Website Project

This is my first fully responsive website, created as part of the **IronHack Web Development Bootcamp**. The project consists of building a multi-page site for a fictional web design company — _Circle Agency_ — using **HTML5**, **CSS3**, and **Vanilla JavaScript**. The site is deployed via **Netlify** and version-controlled through **GitHub**.

---

## 📸 Live Preview

![Circle Agency Preview](path/to/your/screenshot.png)

---

## 🔗 Project Links

- 🚀 **Live Website**: [https://circleagency-ironhack.netlify.app/](https://circleagency-ironhack.netlify.app/)
- 💻 **GitHub Repository**: [https://github.com/AidaG91/IronHack-Project1](https://github.com/AidaG91/IronHack-Project1)
- 📊 **Presentation Slides**: [https://1drv.ms/p/c/821ca9991a95443d/Ea0zX56Za2FMsmlq23X2GwcBeYa-IEExbdU-EgvtSyFZeA?e=Fjh3vR](https://1drv.ms/p/c/821ca9991a95443d/Ea0zX56Za2FMsmlq23X2GwcBeYa-IEExbdU-EgvtSyFZeA?e=Fjh3vR)
- 📚 **DeepWiki Entry**: [https://deepwiki.com/AidaG91/IronHack-Project1](https://deepwiki.com/AidaG91/IronHack-Project1)

---

## 🛠️ Technologies Used

- **HTML5**: Semantic and accessible structure.
- **CSS3**: Responsive layout with Flexbox and CSS Grid.
- **Vanilla JavaScript (ES2023)**: DOM manipulation, form validation, API integration, interactivity.
- **Visual Studio Code**: Main code editor.
- **Git & GitHub**: Version control and repository management.
- **Netlify**: Static site deployment.
- **Figma**: Interpreting and replicating provided design files.

---

## 📐 Site Structure & Features

### 🧱 Website Pages

- **Home** (`index.html`): Introduction, client section, recent projects, testimonials, and services.
- **Projects** (`projects/1.html`): Dynamically generated content from an API.
- **Contact** (`contact.html`): Interactive form with custom validation.

### 📱 Responsive Design

- Fully responsive layout from mobile to large desktop screens.
- Built with **mobile-first** principles.
- Media queries, flexbox, grid, and absolute positioning for optimal design across devices.
- **Responsive hamburger menu** implemented.

### ⚙️ JavaScript Functionality

- **Form validation**:
  - All fields required.
  - Custom validation: If the user enters no input or invalid input in the form, they will get an error message.
- **API integration**:
  - Fetches the latest 3 projects dynamically (in reverse order).
  - Project details (for uuid = 1) rendered in `projects.html`.
  - Alert shown if project is not found (bonus logic included).
- **Dynamic UI elements**:
  - Hover states, interactivity, conditional rendering.

---

## 🎯 Challenges Overcome

- **Maintaining consistency across viewports**, particularly in card sizing and spacing for mobile layouts.
  - ✅ Solution: Precision with relative units, use of CSS Grid and Flexbox.
- **Complex navigation bar behavior**, especially positioning the “Contact Us” button on both desktop and mobile.
  - ✅ Solution: Two instances of the button shown/hidden conditionally based on screen size.
- **Handling API data**, including reordering and filtering specific project entries.
  - ✅ Solution: Used JavaScript array manipulation (`[...array].reverse().slice(0, 3)`).

---

## 🧭 Project Structure

📦IronHack-Project1
┣ 📂CSS
┃ ┣ 📜contact.css
┃ ┣ 📜global.css
┃ ┣ 📜index.css
┃ ┗ 📜projects.css
┣ 📂JS
┃ ┣ 📜contact.js
┃ ┣ 📜index.js
┃ ┗ 📜projects.js
┣ 📂media
┣ 📂pages
┃ ┣ 📜contact.html
┃ ┗ 📜projects.html
┣ 📜index.html
┗ 📜README.md

---

## ✨ Bonus Features & Improvements

- Custom 404 page (optional)
- Emoji graphics placed with absolute positioning
- Random fallback project selection from the API (bonus logic)
- Clean, readable code following **DRY** and **KISS** principles
- AI assistance used during development: **Gemini** and **GitHub Copilot**

---

## 👩‍💻 About the Author

**Aïda** — currently learning web development through the **IronHack Bootcamp**.  
Background in **English Studies**, **Translation** and **Audiovisual Localization**, with experience in **Project Management**. Now transitioning into tech with a focus on building clean, accessible, and responsive websites.

> _"You cannot be Ironhack, because I am Ironhack."_ 🦾

---
