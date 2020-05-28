const opts = {
  base:{
    demand: true,    //base es obligatorio
    alias: 'b'
  },
  limite:{
    alias: 'l',
    default: 10   //Valor por defecto
  }
}

const argv = require('yargs')
  .command('listar','Imprime en consola la tabla de multiplicar', opts)
  .command('crear','Crea un archivo con la tabla de multiplicar',opts)
  .help()
  .argv;


module.exports = {
  argv
}
