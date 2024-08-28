import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
        <Navbar />
        
        <div className="min-h-screen p-96 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <Footer />    
        </div>       
    </>
  );
}

export default Contact;