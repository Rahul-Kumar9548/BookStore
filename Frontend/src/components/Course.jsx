import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([])

  useEffect(()=>{
          const getBook = async()=>{
            try {
              const res = await axios.get("http://localhost:4000/book");
              console.log(res.data);
              setBook(res.data)
            } catch (error) {
                console.log(error);
            }
          } 
          getBook();       
  },[])
  return (
    <>
       <div className="max-w-screen-2*l container mx-auto md:px-20 px-4">
 
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
                we're delighted to have you{" "} 
                <span className="text-pink-500">here</span>
            </h1>
            <p className="mt-12">
            A course description is a brief overview of a course that helps students decide if it's a good fit for their interests and goals.
             It should be clear and concise, and written for students, but may also be read by parents, employers, and other universities.
            </p>  
             <Link to={"/"}>              
             <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
              </button>
             </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
           {book.map((item)=>(
                 <Cards key={item.id} item={item}/>
           ))}     
        </div>
       </div>
    </>
  );
}

export default Course;