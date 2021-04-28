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