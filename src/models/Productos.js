import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Productos_model {
    static async getAll(){
        try {
            const producto = await connection.query('SELECT * FROM productos');
            return producto
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error;
        }
    }


    static async create({input}){
        try {
            const {estado,kit,barcode,nombre,presentacion,descripcion,foto,peso} = input
            const newProducto = await connection.query('INSERT INTO productos(estado,kit,barcode,nombre,presentacion,descripcion,foto,peso) VALUES (?,?,?,?,?,?,?,?)',
            [estado,kit,barcode,nombre,presentacion,descripcion,foto,peso])
            return newProducto
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error;
        }
    }
}

export default Productos_model;