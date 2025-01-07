## Demo and Snippets

- **Hosted Link:**
- **Screenshots:**

## Requirements/Purpose

### MVP

- Create a single-page desktop simulation of an operating system (OS) with features including a menu, apps, and modals

### Purpose

- The project demonstrates an interactive web-based OS using HTML, JavaScript, and CSS.

### Stacks Used

- **HTML, CSS, and JavaScript:** Simply and widely used for front-end projects.
- **Font Awesome:** For icons used in the menu and apps.
- **Open Weather API:** For fetching weather data.

## Build Steps

1. Clone the repository

```bash
git clone https://github.com/shirdheen/nology-fakeos-project
```

2. Open `index.html` in your browser.

## Design Goals/Approach

- **Design Goals**:
  - Mimic a simpler desktop operating system.
  - Includes the time and date displayed on the top.
  - Includes modals for Menu and a Weather App.
  - Interactive, and visually clean.
- **Implementation Choices**:
  - **Modular JavaScript Functions:** Modular JS files for functions like weather handling, and updating time.
  - **Dynamic z-Index:** Makes sure that the last clicked modal appears on top.
  - **SCSS:** Used for better styling and organisation.

## Features

- Wallpaper that scales dynamically to fit the viewport.
- A menu modal with options including: Settings, About, and Help.
- Weather modal that fetches live weather data using the OpenWeather API.
- Current date and time displayed dynamically.
- Clickable icons to open apps, with a tooltip displayed you hover on the icon.

## Known Issues

- The project is not fully responsive for mobile. It has been currently design for desktop purposes only.
- There are no animations for when the modals are opened.

## Bugs to be Fixed

- "Loading..." is not being displayed for the Dictionary API.

## Future Goals

- Add animations for modals.
- Introduce more app options like Notes, Dictionary, etc.
- Create a responsive design to support mobile views.
- Add a dark mode toggle for the **Settings** option in the menu.
- Add modals for **Help** and **About** options in the menu with some information on the OS.
