const electron = require('electron');
const ipc = electron.ipcRenderer;

const btnClick = document.getElementById('btnClick');
btnClick.addEventListener("click", function(){
  ipc.send('open-box');
})
