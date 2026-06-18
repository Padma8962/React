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