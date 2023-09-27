import { app, BrowserWindow, session } from "electron";
import path from "node:path";
import os from "node:os";
import { store } from "../src/redux/store";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  win = null;
});

// on macOS
const reactDevToolsPath = path.join(
  os.homedir(),
  "/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/3.1.1_0"
);

// on windows
const reactDevToolsPath2 =
  "C:\\Users\\bilal\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\3.1.3_5";

app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(reactDevToolsPath);
});

app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(reactDevToolsPath2);
});

app.whenReady().then(createWindow);

// Listen for the 'before-quit' event
app.on("before-quit", () => {
  // Get the Redux state from your store
  const reduxState = store.getState();

  // Save Redux state to localStorage
  localStorage.setItem("reduxState", JSON.stringify(reduxState));
});

app.on("window-all-closed", () => {
  app.quit();
});
