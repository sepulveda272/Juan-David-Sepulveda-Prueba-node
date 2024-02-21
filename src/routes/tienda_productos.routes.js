import { Router } from "express";
import Tiendas_Productos_controllers from "../controller/tiendas_productos.controllers.js";

export const nuevo_tienda_producto_router = ({tiendas_Productos_model}) =>{
    const tienda_producto_router = Router();

    const tienda_productos_controllers = new Tiendas_Productos_controllers({tiendas_Productos_model});

    tienda_producto_router.get('/', tienda_productos_controllers.getAll);
    tienda_producto_router.post('/', tienda_productos_controllers.create)

    return tienda_producto_router;
}
