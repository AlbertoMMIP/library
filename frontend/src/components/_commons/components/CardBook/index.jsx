import React, { useState, useEffect } from "react";
import Modal from '../Modal';
import { getInventoriesByBook } from '../../../../services/inventories';

function CardBook({book, rol, users}) {
  const [openModal, setModal] = useState(false);
  const [inventory, setInventory] = useState([]);
  const handleModal = () => setModal(!openModal);

  useEffect(() => {
      getInventoriesByBook(book.id)
      .then(i => {
        setInventory(i.data.data);
      });
    
  },[book.id]);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={book.urlimage} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{book.title}</p>
            <p className="subtitle is-6">@{book.author}</p>
          </div>
        </div>

        <div className="content" style={{minHeight: 250}}>
          {book.description.substring(0,150)} . . .
          <br />
          <time dateTime="2016-1-1">Registrado el {book.register_date}</time>
        </div>
      </div>
      {rol &&
        <footer className="card-footer">
          <button onClick={handleModal}  className="button is-primary card-footer-item"><b>Click </b> to request loan</button>
      </footer>
      }
      <div id='modal'>
        {openModal && <Modal close={handleModal} users={users} title={book.title} inventory={inventory} />}
      </div>
    </div>
    
  );
}

export default CardBook;
