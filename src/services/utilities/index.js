
export const validateEmail = (email) =>{
    const reg = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
    if (email.length === 0) return 2;
    if (reg.test(email) === false) return 1;
    return true;
}  