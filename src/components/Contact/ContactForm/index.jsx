import React from "react";

const ContactForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nama</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
            placeholder="Nama Anda"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors"
            placeholder="emailanda@gmail.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Pesan</label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="5"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none transition-colors resize-none"
            placeholder="Tulis pesan Anda di sini..."
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Kirim Pesan
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
