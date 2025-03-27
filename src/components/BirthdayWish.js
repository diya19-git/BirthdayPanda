import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FaMusic, FaPalette, FaBirthdayCake } from "react-icons/fa";

const BirthdayWish = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [bgColor, setBgColor] = useState("black");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);

  const wishes = [
    "🎉 Happy Birthday, Panda! 🌟",
    "🎂 Wishing you a fantastic year ahead! 🎈",
    "🥳 May your day be filled with love and joy! 💖",
  ];

  const changeBackground = () => {
    const colors = ["lightblue"];
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const toggleMusic = () => {
    const audio = document.getElementById("birthday-music");
    if (!isPlaying) {
      audio.play();
      setShowGif(true);
    } else {
      audio.pause();
      setShowGif(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleButtonClick = () => {
    setButtonIndex((prev) => (prev + 1) % 3);
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white text-center transition-all duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {showConfetti && <Confetti />}

      {/* 🎉 Birthday Wish */}
      <motion.h1
        className="text-5xl font-extrabold drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {wishes[Math.floor(Math.random() * wishes.length)]}
      </motion.h1>

      <motion.img
        src="/birthday-gif.gif"
        alt="Birthday Celebration"
        style={{ width: "400px", height: "300px" }}
        className="mb-3 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />


<motion.img
        src="/birthday-gif2.gif"
        alt="Birthday Celebration"
        style={{ width: "400px", height: "300px" }}
        className="mb-1 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src="/birthday-gif3.webp"
        alt="Birthday Celebration"
        style={{ width: "400px", height: "300px" }}
        className="mb-1 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />


      {/* 🎊 Buttons */}
      <div style={{ width: "300px" ,marginLeft:"400px"}}>
        {buttonIndex === 0 && (
          <motion.button
            className="absolute w-full px-6 py-3 bg-white text-purple-500 font-bold rounded-full shadow-lg flex items-center justify-center gap-2"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => {
              setShowConfetti(true);
              handleButtonClick();
            }}
          >
            <FaBirthdayCake /> Celebrate Now!
          </motion.button>
        )}

        {buttonIndex === 1 && (
          <motion.button
            className="absolute w-full px-6 py-3 bg-white text-blue-500 font-bold rounded-full shadow-lg flex items-center justify-center gap-2"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => {
              changeBackground();
              handleButtonClick();
            }}
          >
            <FaPalette /> Turn on lights!
          </motion.button>
        )}

        {buttonIndex === 2 && (
          <motion.button
            className="absolute w-full px-6 py-3 bg-white text-green-500 font-bold rounded-full shadow-lg flex items-center justify-center gap-2"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => {
              toggleMusic();
              handleButtonClick();
            }}
          >
            <FaMusic /> {isPlaying ? "Pause Music" : "Play Music"}
          </motion.button>
        )}
      </div>

      {/* 🎵 Background Music */}
      <audio id="birthday-music" src="/birthday-music.mp3" loop></audio>
    </div>
  );
};

export default BirthdayWish;
