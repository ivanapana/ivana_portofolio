// src/components/Hero/index.jsx
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-rose-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full">
          <p className="text-rose-600 font-medium text-sm">
            Mahasiswi Informatika • Semester 5
          </p>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
          Ivana Sondakh
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Quality Assurance Enthusiast & Python Developer
        </p>
        <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Memastikan kualitas perangkat lunak melalui pengujian yang teliti dan
          otomatisasi berbasis Python.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("organization")}
            className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            Lihat Organisasi Saya
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-rose-500 text-rose-500 rounded-full font-medium hover:bg-rose-50 hover:scale-105 transition-all"
          >
            Hubungi Saya
          </button>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="mt-16 text-gray-400 hover:text-rose-500 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
