import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import book from '../assets/cover.png';
import useFetch from '../hooks/useFetch';

export default function BookList() {

  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let search = param.get('search')
  

    let { data: books, loading, error } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`);

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
          
            {loading && <p>loading ... </p>}
            {/* book list */}
            {!!books && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    {books.map((b) => (
                        <Link to={`/books/${b.id}`} key={b.id}>
                            <div className='p-4 border border-1'>
                                <img src={book} alt="" />
                                <div className='text-center space-y-2 mt-3'>
                                    <h1>{b.title}</h1>
                                    <p>{b.description}</p>
                                    {/* genres */}
                                    <div className='flex flex-wrap'>
                                        {b.categories.map((c) => (
                                            <span key={c} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {c}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {books && !books.length && <p className='text-center text-xl text-gray-500'>No Search Result Found</p>}
        </div>
    )
}