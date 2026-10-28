import React from 'react'

function MovieCard({movie, onDelete}){
  return (
      <div className='flex items-start bg-white rounded-xl p-10 shadow-md'>
        <img src={movie.img} alt={movie.name} className='w-25 h-28 object-cover mr-4 rounded' />

        <div>
            <h1 className="text-2xl font-bold">{movie.name}</h1>
            <p className='text-sm text-gray-500 mb-1'>{movie.genre}</p>
            <p className="text-sm text-gray-700">{movie.year}</p>
              <button onClick={() => onDelete(movie.id)} className='mt-2 text-sm p-2 rounded bg-red-500 text-white font-bold hover:bg-red-700'>
    O'chirish
  </button>
        </div>
      
    </div>
  )
}

export default MovieCard
