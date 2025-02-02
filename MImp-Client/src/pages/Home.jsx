import React, { useEffect, useState } from "react";
import { LucideStarHalf, Star } from "lucide-react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainVideo from "../assets/vidoes/video1.mp4"; // Use correct path for the video file
import { isTokenValid} from "../services/AuthServices";
import { getUserdata, removeUserdata } from "../services/storageServices";
import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const {isLoggedOut, logout} = useAuth();
  const Token = getUserdata()?.token;
  console.log(isTokenValid(Token));
  useEffect(() => {
    if (Token != null && isTokenValid(Token)) {
      console.log('Token is valid');
    } else {
      if(Token != null && !isTokenValid(Token)) {
        toast.error('Session Expired');
        removeUserdata();
        logout();
      }
    }
  }, [isLoggedOut])

  return (
    <>
      <ToastContainer />
      <div className="w-full min-h-screen bg-gradient-to-r from-green-900 to-blue-900 flex flex-col items-center relative">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={MainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay Content */}
        <div className="w-full h-[90vh] flex flex-col items-center justify-center bg-cover relative z-10">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center font-bold backdrop-blur-md bg-white/20 rounded-lg p-6 shadow-lg m-6">

            <h2 className="text-3xl sm:text-4xl text-white">Explore All corners of the World</h2>
            <div className="flex items-center space-x-1 mt-4">
              <div className="flex space-x-1">
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <LucideStarHalf color="orange" fill="orange" />
              </div>
              <span className="font-bold text-white">4.5 + Ratings</span>
            </div>
            <div className="mt-8 flex flex-col items-center">
              <p className="text-2xl sm:text-4xl text-yellow-300 font-bold">
                Discover your Next Adventure with Us
              </p>
              <p className="text-base sm:text-lg text-white">
                Your personal trip Mate and travel curator, provides Information tailored to your interests.
              </p>
            </div>
            {!isLoggedOut ? (
              <Link to={"/endoutput"}>
                <div className="mt-4 w-[8rem] h-[3rem] bg-yellow-500 text-white rounded-md flex justify-center items-center hover:bg-yellow-600 transition duration-300">
                  Search now
                </div>  
              </Link>
            ) : (
              <Link to={"/register"}>
                <div className="mt-4 w-[8rem] h-[3rem] bg-yellow-500 text-white rounded-md flex justify-center items-center hover:bg-yellow-600 transition duration-300">
                  Get Started
                </div>
              </Link>
            )}
          </div>
        </div>
        {/* Additional Content */}
        <div className="w-full flex flex-col items-center mt-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Happy User's Review</h2>
        </div>
        <div className="w-full h-auto overflow-x-auto p-5 sm:p-10 flex space-x-4 relative z-10">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Home;
