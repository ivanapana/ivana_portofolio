// src/components/Contact/ContactInfo.jsx
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Informasi Kontak
        </h3>

        <div className="space-y-6">
          <a
            href="mailto:s22310210@student.unklab.ac.id"
            className="flex items-center gap-4 text-gray-600 hover:text-rose-500 transition-colors group"
          >
            <div className="p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl group-hover:scale-110 transition-transform">
              <Mail className="text-rose-500" size={24} />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm">s22310210@student.unklab.ac.id</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ivana-glory-m-sharon-sondakh-2821522a6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 hover:text-rose-500 transition-colors group"
          >
            <div className="p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl group-hover:scale-110 transition-transform">
              <Linkedin className="text-rose-500" size={24} />
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm">
                linkedin.com/in/ivana-glory-m-sharon-sondakh
              </p>
            </div>
          </a>

          <a
            href="https://github.com/ivanapana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 hover:text-rose-500 transition-colors group"
          >
            <div className="p-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl group-hover:scale-110 transition-transform">
              <Github className="text-rose-500" size={24} />
            </div>
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-sm">github.com/ivanapana</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
