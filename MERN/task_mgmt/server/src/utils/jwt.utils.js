import jwt from 'jsonwebtoken';

export const generateToken=(payload)=>{
    return jwt.sign(payload,'hdf@#jhkhdg%k',{expiresIn:'1d'});
}


export const verifyToken = (token) =>{
    return jwt.verify(token, 'hdf@#jhkhdg%k');
}