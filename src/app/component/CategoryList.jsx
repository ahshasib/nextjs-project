"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, FlaskConical, Heart, History, Users } from "lucide-react";

const categories = [
  { name: "Fiction", icon: <BookOpen className="w-6 h-6 text-rose-600" /> },
  { name: "Science", icon: <FlaskConical className="w-6 h-6 text-rose-600" /> },
  { name: "History", icon: <History className="w-6 h-6 text-rose-600" /> },
  { name: "Romance", icon: <Heart className="w-6 h-6 text-rose-600" /> },
  { name: "Travel", icon: <Globe className="w-6 h-6 text-rose-600" /> },
  { name: "Biography", icon: <Users className="w-6 h-6 text-rose-600" /> },
];

const CategoryList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Explore by <span className="text-rose-600">Categories</span>
        </h2>

        {/* Category Items */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-rose-50 rounded-2xl shadow-md py-6 hover:shadow-lg hover:scale-105 transition"
            >
              {cat.icon}
              <p className="mt-3 text-gray-800 font-medium">{cat.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryList;
