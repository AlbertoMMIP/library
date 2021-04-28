# Library
Full stack system to management the books loans in a library.

# Steps to init the system

# 0) Clone this repo

# 1) Make your local database
	a) Call to your database as => library
	b) Execute the scripts in order (Scripts are inside the path library/backend/sql/)
		1)000-db.sql
		2)001-insert_one.sql
		3)002-insert_two.sql
		4)003-insert_three.sql
		5)004-insert_four.sql

# 2) Start Back End
	a)Go to the folder /library/backend from your terminal
	b)Download the dependencies with npm install
	c)Make the file .env with the varibles of file env-example and put your sensitive information
	d)Run the project with npm start or npm run dev
	

# 3) Start Front End - (You need internet to download the images)
	a)Go to the folder /library/frontend from your terminal
	b)Download the dependencies with yarn install
 	c)Run the project with yarn start

# Thats all, Now you can go to localhost:3000 and see the system 

# 4) System functionalities
	a)General Profile
		a.1) See available books and filter by title or autor
		a.2) Sign up 
		a.3) Login
	b)User Profile (Users sign up from the system)
		b.1)See you profile
		b.2)See the requested books
		b.3)See exists books and filter by title or author
	c)Management Profile (superadmin)
		c.1)To login like a superadmin you must enter email admin@gmail.com and the pass 1234
		c2.)See the admin info 
		c.3)Make new books
		c.4)Management the books loans
		c.5)See all the registered users

		
