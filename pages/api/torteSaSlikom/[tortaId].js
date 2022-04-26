import torteSaSlikom from '../../../data/torteSaSlikom'

export default function handler(req, res){
    const { tortaId } = req.query
    if(req.method === 'GET'){
        const torta = torteSaSlikom.find((tortaEl) => tortaEl.id.toString() == tortaId.toString())
        res.status(200).json(torta)
    }
    else if(req.method === 'DELETE'){
        const index = torteSaSlikom.findIndex((tortaEl) => tortaEl.id.toString() == tortaId.toString())
        const deletedItem = torteSaSlikom.find((tortaEl) => tortaEl.id.toString() == tortaId.toString())
        torteSaSlikom.splice(index, 1)
        res.status(200).json(deletedItem)
    }
} 