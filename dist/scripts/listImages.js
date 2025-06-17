// Extrae los nombres de archivos de una carpeta y genera un array de rutas
// filepath: /home/saboreje/web/react_parteluz/scripts/listImages.js

const fs = require('fs');
const path = require('path');

// Cambia esta ruta por la carpeta que quieras listar
const folder = path.join(__dirname, '../public/assets/images/guadiana');

const files = fs.readdirSync(folder)
  .filter(file => /\.(jpe?g|png|webp)$/i.test(file)) // Solo imágenes
  .map(file => `/assets/images/guadiana/${file}`);   // Ajusta la ruta pública

console.log(JSON.stringify(files, null, 2));