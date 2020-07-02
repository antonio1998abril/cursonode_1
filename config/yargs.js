const descripcion ={
    demand:true,
    alias:'d',
    desc:'Descripcion crea elemnto'
};

const completado ={
    default: true,
    alias: 'c',
    desc:'Marca como completada el elemento'
};

const argv = require('yargs')
    .command('crear','crear comando',{
        descripcion
    })
    .command('actualizar','actualizar comando',{
        descripcion,
        completado
    })
    .command('borrar','eliminar comando',{
        descripcion
    })
    .command('lista','listar los ya completados',{
        completado:{
            alias:'c'
        }
    })
    .help()
    .argv;
module.exports={
    argv
}