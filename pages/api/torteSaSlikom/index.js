import torteSaSlikom from '../../../data/torteSaSlikom'
export default function handler(req, res){
    res.status(200).json(torteSaSlikom)
} 