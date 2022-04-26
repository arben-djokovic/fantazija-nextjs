import kolaci from '../../../data/kolaci'

export default function handler(req, res){
    const { kolacId } = req.query
    if(req.method === 'GET'){
        const kolac = kolaci.find((kolac) => kolac.id.toString() == kolacId.toString())
        res.status(200).json(kolac)
    }
    else if(req.method === 'DELETE'){
        const index = kolaci.findIndex((kolacEl) => kolacEl.id.toString() == kolacId.toString())
        const deletedItem = kolaci.find((kolacEl) => kolacEl.id.toString() == kolacId.toString())
        kolaci.splice(index, 1)
        res.status(200).json(deletedItem)
    }
} 