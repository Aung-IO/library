import React, { useState } from "react";

export default function Create() {
  let [title,setTitle] = useState();
  let [description,setDescription] = useState();
  let [category,setCategory] = useState();
  let [newCategory, setNewCategory] = useState([ ])

let addCategory = (e) => {
  setNewCategory( prev => [category, ...prev])
  setCategory('')
}

  return (
    <form className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Book Title
          </label>
          <input value={title} onChange={e => setTitle(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            placeholder="Enter Book Title"
          />
          <p className="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Book Description
          </label>
          <input value={description} onChange={e => setDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            placeholder="Enter Book Description"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Book Category
          </label>
         <div className="flex items-center space-x-2 ">
         <input value={category} onChange={e => setCategory(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            placeholder="Enter Book Category"
          />
        <button type="button" onClick={addCategory} className="bg-primary p-2.5 rounded-lg mb-3">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
         </div>
          <p className="text-gray-600 text-xs italic"></p>
        </div>
      </div>

      {/* New Category */}
      <div className=" space-x-2">
              {newCategory.map((c) => (
                <span
                  className="bg-primary text-white rounded-full text-sm px-2 py-1"
                  key={c}
                >
                  {c}
                </span>
              ))}
            </div>
      {/* create book */}

     <div className="flex justify-end">
     <button className="text-white bg-primary px-3 py-2 rounded-2xl flex justify-center items-center gap-2">
        <span className="hidden md:block">Create Book</span>
      </button>
     </div>
    </form>
  );
}
