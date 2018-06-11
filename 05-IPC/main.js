const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let win;

function createWindow() {
  win = new BrowserWindow();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}


// Event handler for asynchronous incoming messages
ipc.on("async-message", function(event) {
  // Event emitter for sending asynchronous messages
  event.sender.send('async-reply', 'Reply message')
})

// Event handler for synchronous incoming messages
ipc.on("sync-message", function(event) {
  // Synchronous event emmision
  event.returnValue = "sync-reply";
})

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
