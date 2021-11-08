const{ response, request } = require('express');


const usuariosGet = (req, res) => {


    res.json({
        msg: 'get usuarios'
    })
   
};
const usuariosDelete = (req, res) => {

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



module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}
