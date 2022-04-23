import torteSaSlikom from '../../../data/torteSaSlikom'
export default function handler(req, res){
    const { tortaId } = req.query
    const torta = torteSaSlikom.find((tortaEl) => tortaEl.id.toString() == tortaId.toString())
    res.status(200).json(torta)
} 