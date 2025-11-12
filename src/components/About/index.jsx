// src/components/About/index.jsx
import React from "react";
import ivanaPhoto from "../../assets/images/ivana.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-2">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={ivanaPhoto}
                    alt="Ivana Sondakh"
                    className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Halo, saya Ivana!
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mahasiswa Informatika semester 5 Universitas Klabat yang tertarik
              pada dunia pengujian perangkat lunak (Software Testing) dan
              pengembangan solusi berbasis Python.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Saya percaya bahwa perangkat lunak yang andal lahir dari proses
              pengujian yang sistematis dan otomatisasi yang cerdas.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Keahlian Teknis
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Software Testing",
                  "QA Automation",
                  "Postman",
                  "Git/GitHub",
                  "HTML/CSS",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-rose-200 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-rose-100">
            <h4 className="font-bold text-gray-800">🎓 Pendidikan</h4>
            <p className="text-gray-600 mt-2">Informatika, Semester 5</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-rose-100">
            <h4 className="font-bold text-gray-800">💼 Fokus Utama</h4>
            <p className="text-gray-600 mt-2">Quality Assurance & Python</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-rose-100">
            <h4 className="font-bold text-gray-800">🎯 Minat</h4>
            <p className="text-gray-600 mt-2">
              Software Testing, QA Automation, Problem Solving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
