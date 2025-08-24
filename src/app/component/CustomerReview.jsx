"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "John Doe",
    review: "This website is amazing! I got my books very quickly.",
    rating: 5,
  },
  {
    name: "Sarah Ali",
    review: "Great collection of books at reasonable prices.",
    rating: 4,
  },
  {
    name: "Rahim Khan",
    review: "Loved the service, highly recommended!",
    rating: 5,
  },
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // প্রতি 5 সেকেন্ডে রিভিউ পরিবর্তন হবে
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { name, review, rating } = reviews[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto text-center bg-gray-100 p-8 mb-10 rounded-lg shadow-md">
      <p className="text-lg italic text-gray-700 mb-4">“{review}”</p>
      <h3 className="font-bold text-gray-900">{name}</h3>
      <div className="text-yellow-500 mt-2">
        {"⭐".repeat(rating)} {/* Rating Show */}
      </div>
    </div>
  );
};

export default CustomerReview;

