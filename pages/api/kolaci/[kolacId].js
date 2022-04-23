import kolaci from '../../../data/kolaci'

export default function handler(req, res){
    const { kolacId } = req.query
    const kolac = kolaci.find((kolac) => kolac.id.toString() == kolacId.toString())
    res.status(200).json(kolac)
} 