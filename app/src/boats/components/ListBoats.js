import React from 'react';

function ListBoats(props) {
  const boats = props.boats;
  const listBoats = boats.map((boat, i) => 
    {
      return <li className="collection-item" key={i}>
        <p>
          {boat.name}
          <span>({boat.rowers} remeros/as)</span>
          <span> -> timonel ({boat.helmsman.toString()})</span>
        </p>
      </li>
    })

  if(!boats.length) return null;
  return(
    <ul className="collection">
      {listBoats}
    </ul>
  )
}

export default ListBoats;