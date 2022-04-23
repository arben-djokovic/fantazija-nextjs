import torte from '../../../data/torte'

export default function handler(req, res){
    const { tortaId } = req.query
    const torta = torte.find((tortaEl) => tortaEl.id.toString() == tortaId.toString())
    res.status(200).json(torta)
} 