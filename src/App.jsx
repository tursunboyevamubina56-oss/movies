import React, {useState} from 'react'
import MovieCard from './components/MovieCard'
import Modal from './components/Modal'
import moviesData from './Data/movies'

const App = () => {


   const [movies, setMovies] = useState(moviesData);
  const [showModal, setShowModal] = useState(false)


  function openModal(){
    setShowModal(true);
  }

  function closeModal(){
    setShowModal(false);
  }

  function addMovie(newMovie){
    setMovies([...movies, newMovie]);
    closeModal();
  }

  function deleteMovie(id) {
  setMovies(movies.filter((movie) => movie.id !== id));
}

  return (
      <div className='min-h-screen bg-white p-6'>
         <h1 className='text-3xl font-bold mb-4'>MY Movies</h1>

         <button onClick={openModal} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add Movie</button>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onDelete={deleteMovie} />
          ))}
         </div>

           {showModal && <Modal onClose={closeModal} onAdd={addMovie}/>}

    </div>
  )
}

export default App
