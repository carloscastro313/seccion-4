const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicacion', opt)
    .command('crear', 'Crea un archivo de la tabla de multiplicacion', opt)
    .help()
    .argv;

module.exports = {
    argv
}