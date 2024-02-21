import { Router } from "express";
import Productos_controllers from "../controller/productos.controllers.js";

export const nuevo_producto_router = ({productos_model}) =>{
    const producto_router = Router();

    const productos_controllers = new Productos_controllers({productos_model});

    producto_router.get('/', productos_controllers.getAll);
    producto_router.post('/', productos_controllers.create)

    return producto_router;
}
