"use strict";
const restify = require("restify");
const dotenv = require("dotenv");
dotenv.config();
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  origins: ['http://localhost:3000'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
})

// connection database
const db = require("./src/db");
const connection = new db.Connection().knex();

const {DocRepository} = require("./src/repositories/DocRepository");

// import controller
const { HomeController } = require("./src/controller/HomeController");
const { DocController } = require("./src/controller/DocController");

const server = restify.createServer();
server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: false }));
server.pre(restify.plugins.pre.context());
server.use(restify.plugins.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false
}));

// repository
const docRepository = new DocRepository(connection);

// controller
const homeController = new HomeController();
const docController = new DocController(docRepository);

//router
server.get('/', (req, res, next) => homeController.index(req, res, next));
server.get('/members', (req, res, next) => docController.getAllMember(req, res, next));
server.get('/documents', (req, res, next) => docController.getAllDoc(req, res, next));
server.get('/documents/:id', (req, res, next) => docController.getDetailDoc(req, res, next));
server.post('/documents', (req, res, next) => docController.createNewDoc(req, res, next));

server.listen(process.env.PORT_APP, () =>{
    console.log('Listening at port %s', process.env.PORT_APP);
});
