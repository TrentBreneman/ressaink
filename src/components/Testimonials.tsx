"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I got my first tattoo at Certified with Resa Klingenberg. My experience was awesome from beginning to end. My initial consultation to go over my ideas was quick and easy. On the day of my appointment, we made a couple revisions and then it was a go. The work went fast, Resa was fun to talk to and I LOVE MY TATTOO!! Highly recommend!",
      author: "Julie M.",
    },
    {
      quote:
        "Professional, clean, and a true artist. My blackwork piece is stunning and healed beautifully. Highly recommend!",
      author: "Anonymous",
    },
    {
      quote:
        "A fantastic experience from start to finish. Reesa's talent speaks for itself, and her studio is super welcoming.",
      author: "Anonymous",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="text-white font-bold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
