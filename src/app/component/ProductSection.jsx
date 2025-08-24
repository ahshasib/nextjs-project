"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, title: "Book Title 1", subtitle: "Author Name", price: "$15", image: "/book1.png" },
  { id: 2, title: "Book Title 2", subtitle: "Author Name", price: "$20", image: "/book2.png" },
  { id: 3, title: "Book Title 3", subtitle: "Author Name", price: "$12", image: "/book3.png" },
  { id: 4, title: "Book Title 4", subtitle: "Author Name", price: "$18", image: "/book4.png" },
  { id: 5, title: "Book Title 5", subtitle: "Author Name", price: "$22", image: "/book1.png" },
  { id: 6, title: "Book Title 6", subtitle: "Author Name", price: "$25", image: "/book2.png" },
  { id: 7, title: "Book Title 7", subtitle: "Author Name", price: "$19", image: "/book3.png" },
  { id: 8, title: "Book Title 8", subtitle: "Author Name", price: "$30", image: "/book4.png" },
];

const ProductSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 px-5 w-11/12 mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8">Our Books</h2>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-blue-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-blue-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-10"
      >
        {products.map((book) => (
          <div
            key={book.id}
            className="min-w-[250px] border border-gray-300 shadow-md p-4 flex flex-col"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <h3 className="text-lg font-bold mt-3">{book.title}</h3>
            <p className="text-gray-600">{book.subtitle}</p>
            <p className="text-blue-600 font-semibold mt-2">{book.price}</p>
            <button className="mt-auto bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition">
              See Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
