import React, { useState } from "react";
import Carousel from "./Carousel";
import "./index.css";
import Balatro from "./bg";

const foodOptions = [
  {
    title: "Seblak Attaya",
    description: "Seblak kuah khas Attaya, pedesnya nampol!",
    image: "/seblak.jpg",
  },
  {
    title: "Mie Ayam Batik",
    description: "Mie ayam legendaris dengan rasa batik, bukan kain ya~",
    image: "/mie_batik.png",
  },
  {
    title: "Mie Ayam Medono",
    description: "Mie ayam khas Medono, kenikmatan tiada dua.",
    image: "/m.png",
  },
  {
    title: "Gemek Date",
    description: "Gemek enak buat quality time bareng si dia.",
    image: "/g.png",
  },
  {
    title: "Lamongan Kedungwuni",
    description: "Cocok buat malam minggu romantis bareng kamu.",
    image: "/p.png",
  },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [food, setFood] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Balatro background */}
      <div className="absolute inset-0 -z-10">
        <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center text-white px-4">
        <div className="bg-white text-black shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-500">
          {step === 1 && (
            <div className="space-y-4 text-center">
              <h2 className="text-xl font-semibold">
                Would you like to go out with me for a date?
              </h2>
              <button
                onClick={() => setStep(2)}
                className="bg-red-400 hover:bg-red-400 text-white px-6 py-2 rounded-full"
              >
                Yes
              </button>
              <button className="bg-gray-200 text-black px-6 py-2 rounded-full ml-2">
                No
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <label className="block font-medium">Your Name:</label>
              <input
                type="text"
                className="w-full p-2 rounded border"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
              />
              <button
                onClick={() => setStep(3)}
                className="bg-red-400 hover:bg-red-400 text-white px-6 py-2 rounded-full"
              >
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <label className="block font-medium">When are you free?</label>
              <input
                type="date"
                className="w-full p-2 rounded border"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                className="w-full p-2 rounded border"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <button
                onClick={() => setStep(4)}
                className="bg-red-400 hover:bg-red-400 text-white px-6 py-2 rounded-full"
              >
                Next
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <label className="block font-medium text-center">
                What do you want to eat?
              </label>

              {/* Centered Carousel */}
              <div className="flex justify-center">
                <Carousel
                  items={foodOptions}
                  baseWidth={300}
                  autoplay={true}
                  autoplayDelay={4000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                  setSelectedItem={(item) => setFood(item.title)}
                />
              </div>

              <button
                onClick={() => setStep(5)}
                className="bg-red-400 hover:bg-red-400 text-white px-6 py-2 rounded-full w-full"
              >
                Continue
              </button>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-2">
              {/* Audio autoplay */}
              <audio autoPlay hidden>
                <source src="/Vocaroo 12MP1Um7EIf5.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <img
                src="/image.png"
                alt="cute cat"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="text-lg font-semibold">
                See you soon, {name}! ❤️
              </h2>
              <p>
                Don’t forget on <strong>{date}</strong> at{" "}
                <strong>{time}</strong>
              </p>
              <p>
                We’ll eat: <strong>{food}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
