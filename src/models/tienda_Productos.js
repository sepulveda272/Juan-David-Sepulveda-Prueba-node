import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Tiendas_Productos_model {
    static async getAll(){
        try {
            const tienda_producto = await connection.query('SELECT * FROM tiendas_productos');
            return tienda_producto
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error;
        }
    }


    static async create({input}){
        try {
            const {compra_maxima, valor, id_promocion, id_tienda, id_producto} = input
            const newTiendaProducto = await connection.query('INSERT INTO tiendas_productos(compra_maxima, valor, id_promocion, id_tienda, id_producto) VALUES (?,?,?,?,?)',
            [compra_maxima, valor, id_promocion, id_tienda, id_producto])
            return newTiendaProducto
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error;
        }
    }
}

export default Tiendas_Productos_model;