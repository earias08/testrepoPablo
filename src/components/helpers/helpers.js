const campoRequerido = (dato) => {
    if (dato.trim().length > 0) {
        return true;
    } else {
        return false;
    }
};

// otra forma de hacer es sin llaves
const rangoPrecio = (dato) => {
    if (dato > 0 && dato <= 5000)
        return true;
    else
        return false;
};

export {campoRequerido, rangoPrecio}