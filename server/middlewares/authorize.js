
import UsuarioPermiso from '../models/usuarioPermiso.js';

const authorize = (permisosRequeridos) => {
  return async (req, res, next) => {
    try {
      const usuarioId = req.user.id_usuario; // Supongo que el ID del usuario está en req.user
      const permisos = await UsuarioPermiso.findAll({
        where: { id_usuario: usuarioId },
        attributes: ['id_permiso'],
      });

      const permisosIds = permisos.map(p => p.id_permiso);

      const permisosValidos = permisosRequeridos.every(p => permisosIds.includes(p));

      if (!permisosValidos) return res.status(403).json({ error: 'Acceso denegado' });

      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

export default authorize;
