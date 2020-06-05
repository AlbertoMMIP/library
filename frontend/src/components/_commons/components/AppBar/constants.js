export const opciones = {
  start:[{title:'Books', href:'/books'}], 
  end:[{title:'Sign up', href:'/secret'},
  {title:'Log in', href:'/secret'}]};

export const opcionesUser = {
  start:[{title:'Books', href:'/books'},
        {title:'My books', href:'/secret'},
        {title:'Profile', href:'/secret'}], 
  end:[{title:'Log out', href:'/secret'}]};

export const opcionesAdmin = {
  start:[{title:'Books', href:'/books'},
          {title:'Requests', href:'/secret'},
          {title:'Users', href:'/secret'},
          {title:'Profile', href:'/secret'}], 
  end:[{title:'Register', href:'/secret'},
      {title:'Log out', href:'/secret'}]};

export const rol = {
  SUPERADMIN: 'SA',
  ADMIN: 'A',
  USUARIO: 'U'
}