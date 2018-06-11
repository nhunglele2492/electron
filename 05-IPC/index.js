const electron = require('electron');
const ipc = electron.ipcRenderer;

const btnAsync = document.getElementById('btnAsync');
const btnSync = document.getElementById('btnSync');

btnAsync.addEventListener("click", function(){
  console.log('async msg 1');
  // Async message sender
  ipc.send('async-message');
  console.log('async msg2')
})

btnSync.addEventListener("click", function(){
  console.log('async msg 1');
  // Synchronous message emmiter and handler
  const reply = ipc.sendSync('sync-message')
  console.log(reply);
  console.log('async msg2')
})

// Async message handler
ipc.on('async-reply', function(event, arg) {
  console.log(arg);
})
