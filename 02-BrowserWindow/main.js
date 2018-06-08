const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let winParent, winChild;

function createWindow() {
  winParent = new BrowserWindow({title: 'Parent'});
  winChild = new BrowserWindow({parent: winParent,modal: false, title: 'Child'});
}

app.on('ready', createWindow);
