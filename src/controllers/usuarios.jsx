import { MODULESPECIFIER_TYPES } from "@babel/types";   // importar el tipo de dato de babel


const usuariosGet = (req, res) => {
    res.json({
        msj: 'estoy GET usuarios'
    })
};
module.exports = {
    usuariosGet
}