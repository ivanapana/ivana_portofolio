import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    alert("Pesan terkirim! (tes2)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
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
    </section>
  );
};

export default Contact;
