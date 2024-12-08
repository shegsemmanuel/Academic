"use client"

import React, { useEffect } from 'react';
import Navbar from './Navbar';

const Navbarin: React.FC = () => {
  useEffect(() => {
    // The debounce function receives our function as a parameter
    // const debounce = (fn:()=> unknown) => {

    //   // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    //   let frame: number;

    //   // The debounce function returns a new function that can receive a variable number of arguments
    //   return (...params: number[]) => {
    //     if (frame) {
    //       cancelAnimationFrame(frame);
    //     }

    //     // Queue our function call for the next frame
    //     frame = requestAnimationFrame(() =>{
    //       // Call our Function and pass any params we received
    //       fn();
    //     });
    //   }
    // };

      // Reads out the scroll position and stores it in the data attribute
          // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Listen for new scroll events, here we debounce our 'storeScroll' function
    document.addEventListener('scroll', (storeScroll), { passive:true });

      // Update scroll position for first time
     storeScroll();
  }, [])
  return (
    <>
        <Navbar />
    </>
  );
};

export default Navbarin;
