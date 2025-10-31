import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-warm-gray min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="Starbucks products" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Starbucks<br />at Home
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Насолоджуйтесь улюбленою кавою Starbucks, не виходячи з дому. 
            Відкрийте для себе наш асортимент кави та напоїв для домашнього приготування.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4">
              Дізнатися більше
            </button>
            <button className="btn-secondary text-lg px-8 py-4 bg-white border-white text-starbucks-green hover:bg-gray-100">
              Переглянути продукти
            </button>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-end space-x-8 pb-12">
            <img 
              src="/images/product-1.png" 
              alt="Starbucks House Blend" 
              className="h-32 md:h-40 object-contain"
            />
            <img 
              src="/images/product-2.png" 
              alt="Starbucks Veranda" 
              className="h-36 md:h-44 object-contain"
            />
            <img 
              src="/images/product-3.png" 
              alt="Starbucks Breakfast Blend" 
              className="h-32 md:h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;