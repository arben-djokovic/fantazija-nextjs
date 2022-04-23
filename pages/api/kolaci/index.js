import kolaci from '../../../data/kolaci'
export default function handler(req, res){
    res.status(200).json(kolaci)
} 