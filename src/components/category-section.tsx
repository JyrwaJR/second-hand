import React from 'react';
import { Card, CardContent } from './ui/card';

interface Category {
  name: string;
  icon: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="w-full py-20 bg-white" id="categories-section">
      <div className="max-w-screen-xl mx-auto px-8">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-16">
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center text-5xl text-gray-800 bg-gray-100 rounded-full">
                {category.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
