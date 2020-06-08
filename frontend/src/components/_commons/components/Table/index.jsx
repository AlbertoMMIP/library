import React from "react";
// import { useHistory } from 'react-router';

function Table({ data }) {
  // const history = useHistory();
  // const gotoProfile = (id) => {
  //   history.push('/profile')
  // }

  return (
    <table className="table">
      <thead>
        <tr>
          <th><abbr title="ID">ID</abbr></th>
          <th>Name</th>
          <th><abbr title="Middle Name">Middle Name</abbr></th>
          <th><abbr title="Last Name">Last Name</abbr></th>
          <th><abbr title="BirthDay">Age</abbr></th>
          <th><abbr title="Sex">Sex</abbr></th>
          <th><abbr title="Phone">Phone</abbr></th>
          <th><abbr title="Email">Email</abbr></th>
          {/* <th><abbr>Action</abbr></th> */}
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th><abbr title="ID">ID</abbr></th>
          <th>Name</th>
          <th><abbr title="Middle Name">Middle Name</abbr></th>
          <th><abbr title="Last Name">Last Name</abbr></th>
          <th><abbr title="BirthDay">Age</abbr></th>
          <th><abbr title="Sex">Sex</abbr></th>
          <th><abbr title="Phone">Phone</abbr></th>
          <th><abbr title="Email">Email</abbr></th>
          {/* <th><abbr>Action</abbr></th> */}
        </tr>
      </tfoot>
      <tbody>
        {data ? 
          data.map(u => (
            <tr key={u.id} >
              <th>{u.id}</th>
              <td><strong>{u.name}</strong></td>
              <td>{u.middle_name}</td>
              <td>{u.last_name}</td>
              <td>{u.age}</td>
              <td>{u.sex}</td>
              <td>{u.cell_phone}</td>
              <td>{u.email}</td>
              {/* <td>
                <button className="button is-link" onClick={() => gotoProfile(u.id)} >Perfil</button>   
              </td> */}
            </tr>
            )
          ) :
          <tr>
            <th>1</th>
            <td><strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>Qualification for the </td>
          </tr>
        }
      </tbody>
    </table>
  );
}

export default Table;