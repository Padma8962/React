# React
A JavaScript library for building user interfaces (UI)

# React Dom
Renders React to browser DOM

# React Native 
Builds mobile apps

#
step 1 :  npx create-react-app --Project name---

NPX is a tool that comes with npm.
It allows you to run Node.js packages without installing them globally.

step 2: go to newly created project file(package.json should be visible)

step 3: npm run build /npm run start 

# React structure
# React Project Structure

```text
my-app/
│
├── node_modules/      # Installed packages/dependencies
├── public/            # Static files
│   ├── index.html     # Main HTML file
│   └── favicon.ico
│
├── src/               # Main React source code
│   ├── assets/        # Images, fonts, icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── App.js         # Root component
│   ├── index.js       # Entry point of React app
│   ├── App.css        # Styles for App component
│   └── ...
│
├── .gitignore         # Files/folders ignored by Git
├── package.json       # Project metadata & dependencies
├── package-lock.json  # Exact dependency versions
└── README.md          # Project documentation
```

## Folder Description

| Folder/File     | Description                                               |
| --------------- | --------------------------------------------------------- |
| `src/`          | Contains all React application code.                      |
| `public/`       | Stores static files that are served directly.             |
| `assets/`       | Images, fonts, icons, and other resources.                |
| `components/`   | Reusable UI components such as Navbar, Button, Card, etc. |
| `pages/`        | Components representing entire pages/screens.             |
| `App.js`        | Root component of the application.                        |
| `index.js`      | Entry point that renders the React app.                   |
| `package.json`  | Contains project dependencies and scripts.                |
| `node_modules/` | Installed npm packages.                                   |
| `.gitignore`    | Specifies files and folders Git should ignore.            |

## Application Flow

```text
index.html
    ↓
index.js
    ↓
App.js
    ↓
Components
    ↓
Browser UI
```
