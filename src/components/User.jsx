import React from 'react'

import editSvg from "../assets/img/draw.svg";
import deleteSvg from "../assets/img/delete.svg";
import personSvg from "../assets/img/user.svg";

function User({name, surname, deleteUser, id}) {
    return (
        <React.Fragment>
            
            <tr>
              <td>
                <img src={personSvg} alt="person" />
              </td>
              <td>{name}</td>
              <td>{surname}</td>
              <td>
                <button className="edit">
                  <img src={editSvg} alt="edit" />
                </button>
                <button className="delete">
                  <img src={deleteSvg} alt="delete" />
                </button>
              </td>
            </tr>
        </React.Fragment>
    )
}

export default User
