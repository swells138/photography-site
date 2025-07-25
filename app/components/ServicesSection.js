import React from 'react';

const services = [
  { id: 1, name: 'Graduations', price: '$100/hr' },
  { id: 2, name: 'Weddings', price: '$200/hr' },
  { id: 3, name: 'Cat Photo Shoots', price: '$80/hr' },
  { id: 4, name: "Baby's First Celebrations", price: '$90/hr' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-6 bg-gray-900 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center">Services</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border border-gray-700 rounded-md shadow flex items-center justify-between"
          >
            <span>{service.name}</span>
            <span className="text-gray-400">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
