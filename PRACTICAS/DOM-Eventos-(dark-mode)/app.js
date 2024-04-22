/*
Consigna: 
Realizar el código JavaScript necesario para que cuando el usuario presione el botón para cambiar el tema, cambie el 
aspecto de la aplicacion. 
- Si se encuentra en modo claro, y el usuario presiona el botón, entonces la aplicacion pasará a tener el modo oscuro. 
- Lo mismo si es al revés, pasara al modo claro si se encontraba en el modo oscuro, y el usuario presiona el botón.

A tener en cuenta:
1- El botón tiene el id "themeButton"
2- Utilizaremos la clase "dark-mode" en el body, para el caso de que seteemos el modo oscuro. 
3- Para el modo claro, quitaremos la clase "dark-mode" del body.

Desafio extra:
1- Identificar cuándo el body está en dark-mode, y cambiar la clase del botón.
  a- Que contenga la clase 'dark-button', en caso de que estemos en el dark-mode.
  b- Que contenga la clase 'light-button', en caso de que NO estemos en el dark-mode.

2- Cuando el body esté en dark-mode, cambiar la imagen. En la carpeta assets se encuentran dos archivos diferentes:
  a- Para el caso del dark-mode, usaremos la imagen moon.png
  b- Caso contrario, para el tema claro, usaremos la imagen sun.png
*/

const themeButton = document.querySelector('#themeButton')
const body = document.body
const image = document.querySelector('#themeImage')

themeButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode')
  if (body.classList.contains('dark-mode')) {
    // body.classList.remove('dark-mode')
    themeButton.className = 'dark-button'
    image.src = './assets/moon.png'
  } else {
    // body.classList.add('dark-mode')
    themeButton.className = 'light-button'
    image.src = './assets/sun.png'
  }
})