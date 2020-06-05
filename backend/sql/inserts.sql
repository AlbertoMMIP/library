-- Se generan los catalogos que se utilizarán
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('SA','Super administrador','rol');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('A','Administrador','rol');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('U','Usuario','rol');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('AC','Activo','estatus');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('F','Finalizado','estatus');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('V','Plazo vencido','estatus');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('P','En prestamo','estatus');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('D','Disponible','estatus');
INSERT INTO public.catalogs (code,description,type_catalog)
	VALUES ('E','Eliminado','estatus');



-- Se genera el usuario super administrador
INSERT INTO public.users ("name",sex,cell_phone,email,"password",rol)
	VALUES ('SUPER ADMIN','H','5578687852','josealberto.martinezmarquez@gamil.com','1234','SA');


-- INSERTAMOS ALGUNOS LIBROS DE https://lavozdelmuro.net/100-libros-que-todo-ser-humano-deberia-leer/
INSERT INTO public.books (title,description,urlimage,register_date,author)
	VALUES ('Matar a un Ruiseñor','Matar un ruiseñor es una novela de la escritora estadounidense Harper Lee. Publicada en 1960, tuvo un éxito instantáneo, ganando el premio Pulitzer y pasando a convertirse en un clásico de la literatura moderna estadounidense.','https://lavozdelmuro.net/wp-content/uploads/2015/01/1.-matar-a-un-ruise%C3%B1or-1.jpg','2020-06-03','Harper Lee');
INSERT INTO public.books (title,description,urlimage,register_date,author)
	VALUES ('Orgullo y prejuicio','Publicada por primera vez como una obra anónima, es una de las obras más famosas de la escritora Jane Austen, y una de las primeras comedias románticas en la historia de la novela. Su primera frase es, además, una de las más famosas en la literatura inglesa: «Es una verdad mundialmente reconocida que un hombre soltero, poseedor de una gran fortuna, necesita una esposa.»','https://lavozdelmuro.net/wp-content/uploads/2015/01/2.-Orgullo-y-prejuicio-1.jpg','2020-06-03','Jane Austen');
INSERT INTO public.books (title,description,urlimage,register_date)
	VALUES ('El Diario de Ana Frank','La conmovedora recopilación de los tres cuadernos escritos por la niña judía Ana Frank (Annelies Marie Frank) entre el 12 de junio de 1942 y el 1 de agosto de 1944, donde relata su huida de los nazis y persecución durante la Segunda Guerra Mundial.','https://lavozdelmuro.net/wp-content/uploads/2015/01/3.-El-diario-de-Ana-Frank-1.jpg','2020-06-03');
INSERT INTO public.books (title,description,urlimage,register_date,author)
	VALUES ('1984','Considerada como una de las obras cumbre de la distopía, 1984 es una novela política de ficción sobre un futuro hipervigilado y controlado por un gobierno estricto y la policía del pensamiento y la neolengua. El «Gran Hermano» recibe su nombre de este libro.','https://lavozdelmuro.net/wp-content/uploads/2015/01/4.-1984.jpg','2020-06-03','George Orwell');
INSERT INTO public.books (title,description,urlimage,register_date,author)
	VALUES ('Harry Potter y la piedra filosofal','Es el primer libro de la serie literaria Harry Potter, un niño huérfano criado por sus tíos que descubre en su undécimo cumpleaños que es un mago. En la novela se narran sus primeros pasos en la comunidad mágica, su ingreso en el Colegio Hogwarts, donde se enfrentará a su mayor enemigo, Lord Voldemort.','https://lavozdelmuro.net/wp-content/uploads/2015/01/5.-Harry-Potter-y-la-piedra-filosofal-1.jpg','2020-06-03','JK. Rowling');
