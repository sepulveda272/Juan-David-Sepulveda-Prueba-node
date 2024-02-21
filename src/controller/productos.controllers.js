class Productos_controllers{
    constructor({ productos_model }){
        this.productos_model = productos_model;
    }

    getAll = async(req, res)=>{
        try {
            const producto = await this.productos_model.getAll();
            return res.json(producto)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async(req,res)=>{
        try {
            const newProducto = await this.productos_model.create({input: req.body});
            return res.status(201).json(newProducto)
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Productos_controllers;
