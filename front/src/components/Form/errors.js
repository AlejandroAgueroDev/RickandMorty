export default (form) => {
    const errors = {}

    const regex = /\w+@(gmail|hotmail|outlook|live)\.com(\.\w{2,3})*$/
    if(!regex.test(form.email)) {
        errors.email = "Debe ingresar un email valido"
    }

    if(!form.email) {
        errors.email = "El campo no puede estar vacio"
    }

    if(form.email.length > 35) {
        errors.email = "El mail esta largo"
    }

    if(!(/\d+/.test(form.password))) {
        errors.password = "La contraseña debe tener al menos un número"
    }

    
    if(form.password.length < 6) {
        errors.password = "La contraseña en muy corta" 
    } else if(form.password.length > 10 ) {
        errors.password = "La contraseña en muy larga"
    }

    return errors
}