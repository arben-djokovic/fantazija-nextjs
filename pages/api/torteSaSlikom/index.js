import torteSaSlikom from '../../../data/torteSaSlikom'
export default function handler(req, res){
    res.status(200).json(torteSaSlikom)
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
        torteSaSlikom.push(newKolac)
        res.status(201).json(newKolac)
    }
} 