import express from "express";
import cors from "cors";

import {nuevo_producto_router} from '../routes/productos.routes.js'
import Productos_model from "../models/Productos.js";
import { nuevo_tienda_producto_router } from "../routes/tienda_productos.routes.js";
import Tiendas_Productos_model from "../models/tienda_Productos.js";

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            producto: '/api/producto',
            tproducto: '/api/tiendaPro'
        };
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    routes(){
       this.app.use(this.paths.producto,nuevo_producto_router({productos_model: Productos_model}))
       this.app.use(this.paths.tproducto,nuevo_tienda_producto_router({tiendas_Productos_model: Tiendas_Productos_model}))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server online ${this.port}`);
        })
    }
}

export default Server;