import { createUser } from "../../../../services/users"

export const registerUser = (form) => {
  //Aplicar validaciones
  return createUser(form);
}