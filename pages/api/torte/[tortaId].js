import torte from '../../../data/torte'

export default function handler(req, res){
    const { tortaId } = req.query
    if(req.method === 'GET'){
        const torta = torte.find((tortaEl) => tortaEl.id.toString() == tortaId.toString())
        res.status(200).json(torta)
    }
    else if(req.method === 'DELETE'){
        const index = torte.findIndex((tortaEl) => tortaEl.id.toString() == tortaId.toString())
        const deletedItem = torte.find((tortaEl) => tortaEl.id.toString() == tortaId.toString())
        torte.splice(index, 1)
        res.status(200).json(deletedItem)
    }
} 