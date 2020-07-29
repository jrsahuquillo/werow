import React from 'react';

function ListTrainings({ trainings }) {
  const listTrainings = trainings.map((training, i) => {
    return <li className="collection-item pb-2" key={i}>
      <p>
        <span>📆</span> {training.date} - <span>🕰</span> {training.time} - <span>🚣🏻‍♀️</span> {training.boat} - Nivel: {training.level}
      </p>
    </li>
  })

  return (
    <div className="flex flex-col md:flex-row">
      <ul className="collection">
        {listTrainings}
      </ul>
    </div>
  )
}

export default ListTrainings;