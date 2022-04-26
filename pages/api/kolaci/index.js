import kolaci from '../../../data/kolaci'
export default function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(kolaci)
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
        kolaci.push(newKolac)
        res.status(201).json(newKolac)
    }
} 