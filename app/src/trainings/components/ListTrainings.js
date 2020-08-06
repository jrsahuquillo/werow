import React from 'react';

function ListTrainings({ trainings }) {
  const sortedTrainings = trainings.sort((a, b) => (a.date > b.date) ? 1 : (a.date === b.date) ? ((a.time > b.time) ? 1 : -1) : -1)
  const listTrainings = sortedTrainings.map((training, i) => {
    return <li className="collection-item pb-2" key={i}>
      <p>
        {training.date} - {training.time} - {training.boat} - Nivel: {training.level}
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