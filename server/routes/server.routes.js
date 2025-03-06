import { Router } from "express";

const serverRouter = Router();

serverRouter.get('/', (req, res) => res.send({title: 'GET all blog'}));

export default serverRouter;