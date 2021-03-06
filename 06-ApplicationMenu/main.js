const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const Menu = electron.Menu;
const shell = electron.shell;

let win;

function createWindow() {
  win = new BrowserWindow();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.webContents.openDevTools();

  var menu = Menu.buildFromTemplate([
      {
          label: 'Menu',
          submenu: [
              {label:'Adjust Notification Value'},
              {label:'CoinMarketCap'},
              {label:'Exit'}
          ]
      }
  ])

  console.log(menu);
  Menu.setApplicationMenu(menu);

  win.on('closed', () => {
    win = null;
  })
}

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
