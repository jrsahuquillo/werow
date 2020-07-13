import React from 'react';

function ListBoats(props) {
  const storedBoats = JSON.parse(localStorage.getItem("storedBoats"))
  const boats = storedBoats || props.boats;
  const listBoats = boats.map((boat, i) =>
    {
      const needHelmsman = boat.helmsman;
      return <li className="collection-item pb-2" key={i}>
        <p>
          {boat.name}
          <span> -> {boat.modality}</span>
          <span>( {boat.rowers} 👤 )</span>
          {needHelmsman ? (<span> -> Con Timonel</span>) : (<span> -> Sin Timonel</span>) }
        </p>
      </li>
    })

  if(!boats.length) return null;
  return(
    <div className="flex flex-col md:flex-row">
      <ul className="collection">
        {listBoats}
      </ul>
    </div>
  )
}

export default ListBoats;