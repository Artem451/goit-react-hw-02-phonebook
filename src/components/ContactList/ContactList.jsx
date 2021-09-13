import React from "react";

function ContactList ({onContacts, onDelete}) {
    return (
        <ul>
        {onContacts.map(function ({id, name, number}) {
          return (
            <li key={id}>
              {name}: {number}
              <button type='button' onClick={() => {onDelete(id)}}>delete</button>
            </li>
          )
        })}
      </ul>
    )
}

export default ContactList