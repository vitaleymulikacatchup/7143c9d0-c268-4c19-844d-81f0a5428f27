import React from 'react';

const ProductSection = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наші продукти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Від класичних сумішей до сезонних смаків - знайдіть свою ідеальну каву 
            для домашнього приготування
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coffee Products */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-starbucks-green flex items-center justify-center">
              <img 
                src="/images/coffee-bag-1.png" 
                alt="House Blend" 
                className="h-48 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">House Blend</h3>
              <p className="text-gray-600 mb-4">
                Наша фірмова суміш з багатим смаком та ароматом
              </p>
              <button className="btn-primary w-full">
                Дізнатися більше
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-starbucks-green flex items-center justify-center">
              <img 
                src="/images/coffee-bag-2.png" 
                alt="Veranda Blend" 
                className="h-48 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Veranda Blend</h3>
              <p className="text-gray-600 mb-4">
                М'який та збалансований смак для щоденного насолоди
              </p>
              <button className="btn-primary w-full">
                Дізнатися більше
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-starbucks-green flex items-center justify-center">
              <img 
                src="/images/coffee-bag-3.png" 
                alt="Breakfast Blend" 
                className="h-48 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Breakfast Blend</h3>
              <p className="text-gray-600 mb-4">
                Ідеальний початок дня з яскравим та свіжим смаком
              </p>
              <button className="btn-primary w-full">
                Дізнатися більше
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            Переглянути всі продукти
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;