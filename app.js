//requires
//const fs = require('fs');//nativo de node
//const fs = require('express');//paquete no nativo de node, pero instalado a posteriori
//const fs = require('./fs'); //creado por nosotros; da directorio de acceso

//const argv = require('./config/yargs');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0]
switch(comando){
  case 'listar':
    listarTabla(argv.base, argv.limite)
      //.then()
      //.cathc();
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(colors.green('Archivo creado:') + `${archivo}`))//(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e));
    break;
  default:
    console.log('Comando no reconocido');
}
//console.log(argv.base);
//console.log(argv.limite);
//let base = 'abc';
//let argv2 = process.argv;
//console.log(process.argv); para ver que devuelve process.argv
//let argv = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')[1]; //en cmd ponemos node app --base = 5 (nos quedamos con el 5)
// let data ='';
//
// for (let i =1; i<=10;i++){
//   //console.log(`${base} * ${i} = ${base * i}`);
//   data+=`${base} * ${i} = ${base * i}\n`;
// }
//
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err)=>{
//   if(err) throw err;
//   console.log('El archivo `tabla-${base}.txt` ha sido creado');
// })





//console.log(module); //para ver los modulos cargados
//console.log(multiplicar);
