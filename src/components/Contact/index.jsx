// src/components/Contact/index.jsx
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert("Pesan berhasil dikirim! 💖");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Gagal mengirim pesan. Coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Terjadi kesalahan. Pastikan json-server sedang berjalan di port 3001."
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20"
      id="contact"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            Hubungi Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
