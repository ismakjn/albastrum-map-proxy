import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import e from "express";
dotenv.config();

export const validateJWT = async (req, res, next) => {
  let _result = null
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token is required' });
        }

        const token = authHeader.split(' ')[1];

        const endpoint = process.env.AUTH_SERVICE_URL
        const url = endpoint.endsWith('/') ? `${endpoint}${token}` : `${endpoint}/${token}`

        try {
            await axios.get(url).then(res => res.data)
                .then(data => {
                    _result = data;
                })
                .catch(e => {
                    // console.log('here', e)
                    // return res.status(401).json({ message: e });
                })
        } catch (error) {
            // console.log('here exactly', error.message)
            return res.status(401).json({ message: error });
        }

        // req.user = validationResponse.data.user; //  { id, email, roles }
        next();
    } catch (error) {
      // console.log('here ...', error)
        return res.status(401).json({ message: error });
    }
};