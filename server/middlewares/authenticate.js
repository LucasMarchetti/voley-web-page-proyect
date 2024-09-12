import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  try {
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(403).json({ message: 'Formato de token inválido' });
    }

    const authToken = tokenParts[1];
    console.log('Token extraído:', authToken); 

    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = decoded; 

    next();
    
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};

export default authenticate;
