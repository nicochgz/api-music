const {handleHttpError} = require('../utils/handleError');
/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role; //['user']
        
        //roles puede ser ['admin', 'user', 'artist']
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) //true o false
        if(!checkValueRol) {
            handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);
            return
        }
        next()
    } catch(e) {
        handleHttpError(res, 'ERROR_PERMISSIONS', 403);
    }
}

module.exports = checkRol;