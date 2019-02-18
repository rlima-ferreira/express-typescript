import * as jwt from 'jsonwebtoken';

export default class Token {

    public async generate(data:any) {
        let token = await jwt.sign({ data }, process.env.SECRET, { expiresIn: "1d" });
        return token;
    }

    public async decode(token:string) {
        let data = await jwt.verify(token, process.env.SECRET);
        return data;    
    }

    public authorize(req:any, res:any, next:any) {
        let token = req.body.token || req.query.token || req.headers['authorization'];

        // Verifica se tem token caso sim segue para a próxima função, caso contrário retorna um erro
        if(!token) {
            res.send({ message: 'Acesso restrito', status: 'disconnected' });
        } 
        else {
            jwt.verify(token, process.env.SECRET, 
                (error:any, decoded:any) =>{
                    if(error) {
                        res.send({ message: 'Token inválido', status: 'invalid' })
                    } else {
                        next();
                    }
                }
            );
        }
    }
}