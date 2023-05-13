import connectMongoDB from "../../../database/conn"


export default async function handler (req, res){
    connectMongoDB().catch(() => res.status(405).json({error: "Error in the connection"}))

    const {method} = req

    switch(method){
        case 'GET':
            res.status(200).json({method, name: 'GET REQUEST'});
            break
        case 'POST':
            res.status(200).json({method, name: 'POST REQUEST'});
            break
        case 'PUT':
            res.status(200).json({method, name: 'PUT REQUEST'});
            break
        case 'DELETE':
            res.status(200).json({method, name: 'DELETE REQUEST'}); 
            break
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', ' DELETE'])
            res.status(405).end('Methodno not allowd')
            break
    }
}
