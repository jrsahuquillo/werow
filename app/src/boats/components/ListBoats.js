import React from 'react';

function ListBoats(props) {
  const boats = props.boats;
  const listBoats = boats.map((boat, i) => 
    {
      return <li className="collection-item" key={i}>
        <p>
          {boat.name}
          <span> -> {boat.modality}</span>
          <span>({boat.rowers} remeras/os)</span>
          <span> -> Timonel ({boat.helmsman.toString()})</span>
        </p>
      </li>
    })

  if(!boats.length) return null;
  return(
    <div className="flex flex-col md:flex-row border-b border-gray-200"> 
      <ul className="collection">
        {listBoats}
      </ul>
    </div>
  )
}

export default ListBoats;