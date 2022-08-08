import dotenv from 'dotenv';
import { Jwt } from 'jsonwebtoken';

export default class JwtService {
    // private JWT_SECRET: MySecret; precisso criar uma var para salvar o meu segredo, ja que não posso usar o   .env

    constructor()

    const createToken = (data) => {
        const token = Jwt.sign({ data }, process.env.JWT_SECRET);
        return token;
    };

    const validateToken = (token) => {
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET);
            return data;
        } catch (e) {
            const error = new Error('Expired or invalid token');
            error.name = 'TokenNotFoundError';
            throw error;
        }
    };
}

module.exports = { createToken, validateToken };
