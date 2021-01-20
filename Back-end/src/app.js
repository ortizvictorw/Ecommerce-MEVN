//** MODULOS REQUERIDOS **/
require ('dotenv').config();
const coneccionDB = require ('./database/config')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require ('cors');



//** ROUTERS **/
const indexRouter = require('./routes/index');
//** API ROUTERS **/
const ApiProductosRouter = require('./routes/productos');
const ApiUsuariosRouter = require('./routes/usuarios');

//** REQUIRE DE CREACION DE ROLES AL INICIO **/
const CreateRole = require ('./libs/seteoInicial')


//** EJECUCION DE EXPRESS **/
const app = express();


//** CONECCION CON MONGO DB **/
coneccionDB();
//** CREACION DE ROLES AL INICIO **/
CreateRole();

//** MEDDLEWARES **/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//** RUTAS **/
app.use('/', indexRouter);
//** RUTAS API**/
app.use('/api/productos', ApiProductosRouter);
app.use('/api/usuarios', ApiUsuariosRouter);


module.exports = app;
