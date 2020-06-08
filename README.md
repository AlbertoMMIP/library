# Library
Sistema fullstack para gestionar el préstamo de libros de una biblioteca.
# Instrucciones para levantar el sistema
# 0) Clonar este repositorio
# 1) Base de datos
        a) Crear una base de datos llamada library
         b) Ejecutar el archivo db.sql de la ruta library/backend/sql/db.sql para crear las tablas
         c) Ejecutar los archivo inserts_num.sql (one, two, three, four)  de la la ruta library/backend/sql/ para registrar los datos necesarios.
# 2) Back End
	a)Ingresar al directorio /library/backend desde la terminal 
	b)Descargar las dependencias npm install
         c)generar el archivo .env con las siguientes variables con la configuración de tu equipo
PORT=3000
DB=library
DB_USER=tu usuario
DB_PASS=tu pass
DB_HOST=localhost
DB_SERVER=postgres
	d)Ejecutar con npm start o npm run dev

# 3) Front End
	a)Ingresar al directorio /library/frontend desde la terminal 
	b)Descargar las dependencias yarn install
 	c)Ejecutar con yarn start

# 4) Funcionalidades del Sistema
	a)Perfil General
		a.1) Ver los libros en existencia con filtro por titulo o autor
		a.2) Registrarse 
		a.3) Hacer Login
	b)Perfil de Usuario (Usuario registrado desde el sistema)
		b.1)Visualizar su perfil
		b.2)Visualizar el historial de libros que ha solicitado
		b.3)Visualizar los libros en existencia con filtro por titulo o autor
	c)Perfil de Administrador (Usuario registrado dentro del punto 1 en la sección base de datos)
		c.1)Para ingresar a esta sección debes usar el email admin@gmail.com y el pass 1234
		c2.)Visualizar tu información 
		c.3)Crear nuevos libros
		c.4)Gestionar los prestamos de la librería
		c.5)Visualizar los usuarios registrados en el sistema

		