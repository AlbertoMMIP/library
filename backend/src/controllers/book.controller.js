const Book =  require('../models/Book');
const invcontroller = require('../controllers/inventory.controller');

exports.createBook = async (req, res) => {
  try {
    const { title, description, urlimage, register_date, author, count } = req.body;
  
    let newBook = await Book.create({
      title, 
      description, 
      urlimage, 
      register_date, 
      author
    }, {
      fields: ['title', 'description', 'urlimage', 'register_date', 'author']
    });
    if (newBook) {
      for (let index = 0; index < count; index++) {
        invcontroller.createInventoryInside({inventory_code:this.generateCode(), book_id:newBook.id})
      }
      return res.json({
        message: 'Book created successfully',
        data: newBook
      })
    }
  } catch (error) {
    console.log("Error al crear Book => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.json({
      message: 'Books get successfully',
      data: books
    });
  } catch (error) {
    console.log("Error al consultar Books => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const book = await Book.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: 'Book get successfully',
      data: book
    })
  } catch (error) {
    console.log("Error al consultar Book => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookCount = await Book.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: 'Book deleted successfully',
      data: bookCount
    })
  } catch (error) {
    console.log("Error al eliminar Book => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, urlimage, register_date, author } = req.body;
    
    const books = await Book.findAll({
      attributes: ['id','title', 'description', 'urlimage', 'register_date', 'author'],
      where: {
        id
      }
    });
    
    if (books.length > 0) {
      books.forEach(async (book) => {
        await book.update({
          title, 
          description, 
          urlimage, 
          register_date, 
          author
        });
      });
    }

    return res.json({
      message: 'Book updated successfully',
      data: books
    })
  } catch (error) {
    console.log("Error al actualizar book => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.generateCode = () => {
  let random = Math.floor(Math.random() * (999999 - 1)) + 1;
  let code = random.toString().padStart(6,'0');
  return 'L' + code;
}