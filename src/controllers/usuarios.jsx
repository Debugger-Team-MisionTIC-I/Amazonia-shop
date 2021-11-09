const{ response, request } = require('express');


const usuariosGet = (req = request, res = response) => {


    res.json({
        msg: 'get usuarios'
    })
   
};
const usuariosDelete = (req=request , res= response) => {

    res.json({
      msg: 'delete usuarios'
 })
};
const usuariosPost = (req, res) => {
    
    res.json({
        msg: 'post usuarios'
    })
  
};
const usuariosPut = (req, res) => {

    res.json({
        msg: 'put usuarios'
    })        
 };

// Get Post Put Delete  CRUD

module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}
