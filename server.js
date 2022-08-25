const express= require('express');
const exphbs= require('express-handlebars');
const path = require('path');

const app= express();
app.use(express.static("./public"));
app.use(express.urlencoded({extended:true}));


//motor plantilla
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



//BD
const PRODUCTO_DB=[
  {
    "nombre": "Escuadra",
    "precio": "123.45",
    "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
  },
  {
    "nombre": "Calculadora",
    "precio": 234.56,
    "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
  },
  {
    "nombre": "Globo Terraqueo",
    "precio": 345.67,
    "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
  }
];
//Rutas

app.get('/', (req,res)=>{
  res.render('productos',{PRODUCTO_DB});
})


app.post('/productos', ( req, res)=>{
      PRODUCTO_DB.push(req.body);
      console.log(PRODUCTO_DB);
      res.redirect('/');

});

/* ---------------------- Servidor ----------------------*/
const PORT = 9090;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', err => console.log(`error en server ${err}`));

/*
/*
    --install
    npm init -y && npm i express express-handlebars && nodemon server.js
*/


/* Utilizando la misma API de productos del proyecto entregable 
de la clase anterior, construir un web server (no REST) que incorpore:
-Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
-Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
-Ambas páginas contarán con un botón que redirija a la otra.
 */