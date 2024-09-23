const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const axios = require('axios')
const fs = require("fs");
const express = require('express')
const prueba = express()

const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 210,
      autoHideMenuBar: true,
      frame: false,      
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
 
  const principal = () => {  
    console.log("Ejecutando funcion de impresion de reporte Zeta, espere por favor ...");
  fs.readFile("C:/ruta.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    //console.log(data);
    let urls = data.split(',');
    //console.log(urls);
    for (let step = 0; step < urls.length; step++) {
        prueba.set('urls[step]', urls[step]);
        axios.get(prueba.get('urls[step]'))
        .then(response => {
          const {mensajeRespuesta} = response.data
          console.log(mensajeRespuesta);    
        })
        .catch(error => {
          //console.log(error);
          function falla() {
            console.log('Error al imprimir!!!');
        }
        setTimeout(falla, 5000);
        });
      //console.log(urls[step]);
    }
    
  });
  }
  principal()
  setTimeout(app.quit, 15000)
  

  