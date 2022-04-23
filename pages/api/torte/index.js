import torte from '../../../data/torte'
export default function handler(req, res){
    res.status(200).json(torte)
} 