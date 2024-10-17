const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Directorios que contienen las imágenes
const directories = [
  "./Curso/sco/contenido/images",
];

// Función para renombrar archivos a minúsculas
const renameFilesToLowerCase = (directory) => {
  try {
    // Obtener archivos utilizando glob.sync
    const files = glob.sync(`${directory}/**/*.*`);
    files.forEach((file) => {
      const fileName = path.basename(file);
      const dirName = path.dirname(file);
      const lowerCaseFileName = fileName.toLowerCase();
      const newFilePath = path.join(dirName, lowerCaseFileName);
      // Verificar si el nombre del archivo original tiene alguna letra en mayúsculas
      if (fileName !== lowerCaseFileName) {
        fs.renameSync(file, newFilePath);
        console.log(`Archivo renombrado: ${file} -> ${newFilePath}`);
      }
    });
  } catch (err) {
    console.error(`Error al buscar archivos en ${directory}:`, err);
  }
};

// Iterar sobre los directorios y renombrar archivos
directories.forEach((directory) => {
  renameFilesToLowerCase(directory);
});
