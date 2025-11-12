// src/components/Organization/index.jsx
import React, { useState, useEffect } from "react";

const Organization = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch("http://localhost:3001/organizations");
        if (response.ok) {
          const data = await response.json();
          setOrganizations(data);
        }
      } catch (err) {
        console.error("Gagal memuat data organisasi:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  if (loading) {
    return (
      <section
        id="organization"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <p className="text-gray-500">Memuat data organisasi...</p>
      </section>
    );
  }

  return (
    <section
      id="organization"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            Organisasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-rose-500 hover:-translate-x-2"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-rose-500 transition-colors">
                    {org.role}
                  </h3>
                  <p className="text-rose-500 font-medium">
                    {org.organization}
                  </p>
                </div>
                <span className="mt-2 md:mt-0 inline-block px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 rounded-full text-sm font-medium">
                  {org.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organization;
