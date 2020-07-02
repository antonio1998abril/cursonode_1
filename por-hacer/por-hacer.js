const fs= require('fs');

let listadoPorHacer=[];

const guardardb =()=>{
    let data= JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if( err)  throw new Error('error al crear el archivo'.err);
    })
}

const cargardb=()=>{
    try {
        listadoPorHacer=require('../db/data.json');
    }catch(error){
        listadoPorHacer=[];
    }
    
}
const getListado=()=>{
    cargardb();
    return listadoPorHacer;
}



const actualizar=(descripcion,completado=true)=>{
    cargardb();
    let index=listadoPorHacer.findIndex(tarea =>{
        return tarea.descripcion === descripcion;
    });
    if (index >=0){
        listadoPorHacer[index].completado=completado;
        guardardb();
        return true;
    }else{
        return false;
    }
}

const crear =(descripcion)=>{
    cargardb();
    let porHacer={
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardardb();
    return porHacer;
}

const borrar=(descripcion)=>{
    cargardb();
    let nuevoListado=listadoPorHacer.filter(tarea=>{
        return tarea.descripcion !== descripcion;
    });
    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer=nuevoListado;
        guardardb();
        return true;
    } 
}
const getCompletado=(completado)=>{
    cargardb();
    if (completado === undefined){
        return listadoPorHacer;
    }
    return listadoPorHacer.filter(tarea=>{
        return tarea.completado ===JSON.parse(completado)
    })

}

module.exports ={
    crear,
    guardardb,
    cargardb,
    getListado,
    actualizar,
    borrar,
    getCompletado

}