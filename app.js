//const argv= require('yargs').argv;
const argv= require('./config/yargs').argv;
const porHacer=require('./por-hacer/por-hacer');



let comando= argv._[0];

switch(comando){
    case 'crear':
        let tarea =porHacer.crear(argv.descripcion);
            console.log(tarea);
    break;
    case 'listar':
        let listado =porHacer.getListado();
           for (let tarea of listado){
               console.log(tarea.descripcion);
               console.log(tarea.completado);
           }
    break; 
    case 'actualizar':
    let actizado= porHacer.actualizar(argv.descripcion,argv.completado);
           console.log(actizado)
    break; 
    case 'borrar':
        let borrado=porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;

    case 'lista':
        let completados=porHacer.getCompletado(argv.completado);
           for (let tarea of completados){
            console.log(tarea.descripcion);
            console.log(tarea.completado)
           }
    break;
    default:
        console.log('no es reconozible esta acccion');
}
