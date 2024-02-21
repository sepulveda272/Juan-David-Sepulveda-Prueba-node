class Tiendas_Productos_controllers{
    constructor({ tiendas_Productos_model }){
        this.tiendas_Productos_model = tiendas_Productos_model;
    }

    getAll = async(req, res)=>{
        try {
            const tiendaproducto = await this.tiendas_Productos_model.getAll();
            return res.json(tiendaproducto)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async(req,res)=>{
        try {
            const newTiendaProducto = await this.tiendas_Productos_model.create({input: req.body});
            return res.status(201).json(newTiendaProducto)
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Tiendas_Productos_controllers;
