import React from 'react'
import { useState } from 'react'

function Modal({ onClose, onAdd }) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [submitted, setSubmitted] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (!name || !img || !genre || !year) {
            return;
        }

        const newMovie = {
            id: Date.now(),
            name: name,
            img: img,
            genre: genre,
            year: Number(year),
        };
        onAdd(newMovie);
    }
    return (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center'>

            <div className="bg-white p-6 rounded-lg w-96 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-xl">
                    +
                </button>

                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <div>
                        <p>Kino nomi</p>
                        <input placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='border px-3 py-2 rounded w-full'
                        />
                        {submitted && !name && <p className='text-red-500 text-sm'>Required</p>}
                    </div>


                    <div>
                        <p>Kino rasmi</p>
                        <input
                            placeholder='Imge URL'
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                        {submitted && !img && <p className="text-red-500 text-sm">Required</p>}
                    </div>

                    <div>
                        <p>Kino janiri</p>
                        <select value={genre} onChange={(e) => setGenre(e.target.value)} className='border px-3 py-2 rounded w-full'>
                            <option value="">Janrni tanlang</option>
                            <option value="Komediya">Komediya</option>
                            <option value="Multfilm">Multfilm</option>
                            <option value="Fantastika">Fantastika</option>
                            <option value="Drama">Drama</option>
                        </select>
                        {submitted && !genre && <p className='text-red-500 text-sm'>Majburiy maydon</p>}
                    </div>

                    

                    <div>
                        <p>Kino yili</p>
                        <input type='number' placeholder='Yili' value={year} onChange={(e) => setYear(e.target.value)} className='border px-3 py-2 rounded w-full' />
                        {submitted && !year && <p className='text-red-500 text-sm'>Majburiy maydon</p>}
                    </div>

                    <button type='submit' className='bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
                        Add Movie
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Modal

