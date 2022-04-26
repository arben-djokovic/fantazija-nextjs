import torte from '../../../data/torte'

export default function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(torte)
    }
    else if(req.method === 'POST'){
        const kolac = req.body.item
        const newKolac = {
            id: Date.now(),
            ime: kolac.ime,
            kratakOpis: kolac.kratakOpis,
            slika: kolac.slika,
            cijena: kolac.cijena,
            slika: kolac.slika,
        }
        torte.push(newKolac)
        res.status(201).json(newKolac)
    }
} 