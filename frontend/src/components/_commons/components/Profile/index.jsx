import React from 'react';

function Profile({data}) {
  return (
    <div>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="profile" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <div className="field">
              <strong>{data.name}</strong> <small>{data.middle_name}  {data.last_name}</small> 
            </div>
            <div className="field">
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <strong > - Sex: {data.sex}</strong>
            </div>
            <div className="field">
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
              <strong > - Phone: {data.cell_phone}</strong>
            </div>
            <div className="field">
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <strong > - Email: {data.email}</strong>
            </div>
            <div className="field">
              <span className="icon is-small is-left">
                <i className="fas fa-hashtag"></i>
              </span>
              <strong > - Age: {data.age}</strong>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}


export default Profile;