"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Globe,
  FlaskConical,
  Heart,
  History,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = [
  { name: "Fiction", icon: <BookOpen className="w-6 h-6 text-rose-600" /> },
  { name: "Science", icon: <FlaskConical className="w-6 h-6 text-rose-600" /> },
  { name: "History", icon: <History className="w-6 h-6 text-rose-600" /> },
  { name: "Romance", icon: <Heart className="w-6 h-6 text-rose-600" /> },
  { name: "Travel", icon: <Globe className="w-6 h-6 text-rose-600" /> },
  { name: "Biography", icon: <Users className="w-6 h-6 text-rose-600" /> },
  { name: "Fiction", icon: <BookOpen className="w-6 h-6 text-rose-600" /> },
  { name: "Science", icon: <FlaskConical className="w-6 h-6 text-rose-600" /> },
  { name: "History", icon: <History className="w-6 h-6 text-rose-600" /> },
  { name: "Romance", icon: <Heart className="w-6 h-6 text-rose-600" /> },
  { name: "Travel", icon: <Globe className="w-6 h-6 text-rose-600" /> },
  { name: "Biography", icon: <Users className="w-6 h-6 text-rose-600" /> },
];

const CategoryList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Explore by <span className="text-rose-600">Categories</span>
        </h2>

       <div className="relative">
         {/* Scroll Buttons */}
         <button
          onClick={scrollLeft}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-rose-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-rose-600" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-rose-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-rose-600" />
        </button>

        {/* Scrollable Categories */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto scroll-smooth px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="min-w-[140px] flex flex-col items-center justify-center bg-rose-50 rounded-2xl shadow-md py-6 hover:shadow-lg hover:scale-105 transition"
            >
              {cat.icon}
              <p className="mt-3 text-gray-800 font-medium">{cat.name}</p>
            </div>
          ))}
        </motion.div>
       </div>
      </div>
    </section>
  );
};

export default CategoryList;
