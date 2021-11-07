const {usuariosGet}=require('../controllers/usuarios');
const {Router} = require('express');


const router = Router();

router.get('/', usuariosGet);

