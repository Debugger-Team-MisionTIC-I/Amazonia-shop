import { MODULESPECIFIER_TYPES } from "@babel/types";   // importar el tipo de dato de babel

const{ response, request } = require('express');


const usuariosGet = (req, res) => {


    res.json({
        msg: 'get usuarios'
    })
   
};
const usuariosPost = (req, res) => {
    
    res.json({
        msg: 'post usuarios'
    })
  
};const usuariosPut = (req, res) => {

    res.json({
        msg: 'put usuarios'
    })

   const usuariosDelete = (req, res) => {

        res.json({
          msg: 'delete usuarios'
     })
    };

       
        
    };



module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}
