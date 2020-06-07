export const opciones = {
  start:[{title:'Books', href:'/books'}], 
  end:[{title:'Sign up', href:'/registerUser'},
  {title:'Log in', href:'/login'}]};

export const opcionesUser = {
  start:[{title:'Books', href:'/books'},
        {title:'Profile', href:'/profile'}], 
  end:[{title:'Log out', href:'/login', out:logout}]};

export const opcionesAdmin = {
  start:[{title:'Books', href:'/books'},
          {title:'Users', href:'/users'},
          {title:'Profile', href:'/profile'}], 
  end:[{title:'Register', href:'/registerBook'},
      {title:'Log out', href:'/login', out:logout}]};

function logout(){
  localStorage.removeItem('rol');
  localStorage.removeItem('name');
  localStorage.removeItem('id');
}
export const rol = {
  SUPERADMIN: 'SA',
  ADMIN: 'A',
  USUARIO: 'U'
}