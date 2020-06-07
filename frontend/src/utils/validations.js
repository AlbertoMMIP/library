export const validaFormulario = (obj) => {
  let msg = "";
  for (const prop in obj) {
    if(obj[prop] === undefined || obj[prop] === '') msg +=  `El campo ${prop} es requerido -`;
  }

  return msg;
}