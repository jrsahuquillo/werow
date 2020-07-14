import React from 'react';

function ListBoats({boats}) {
  const listBoats = boats.map((boat, i) =>
    {
      const needHelmsman = boat.helmsman;
      const modality = boat.modality === "fijo" ? "Banco Fijo" : "Banco Móvil"
      return <li className="collection-item pb-2" key={i}>
        <p>
          {boat.name}
          <span> -> {modality}</span>
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