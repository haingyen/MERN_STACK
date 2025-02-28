import { Router } from "express";

const blogRouter = Router();

blogRouter.get('/', (req, res) => res.send({title: 'GET all blog'}));

export default blogRouter;