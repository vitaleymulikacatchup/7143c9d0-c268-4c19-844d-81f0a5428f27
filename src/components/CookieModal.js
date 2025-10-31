import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex items-center mb-4">
          <img 
            src="/images/starbucks-logo.png" 
            alt="Starbucks" 
            className="h-8 w-8 mr-3"
          />
          <h3 className="text-lg font-bold text-gray-900">STARBUCKS</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Ми використовуємо "файли cookie" для того, щоб ви могли отримувати більше задоволення від 
          відвідування нашого веб-сайту. Файли cookie допомагають нам надавати вам персоналізований 
          контент та рекламу, функції соціальних мереж та аналізувати наш трафік. Ми також 
          передаємо інформацію про використання вами нашого сайту нашим партнерам із соціальних 
          мереж, реклами та аналітики, які можуть поєднувати її з іншою інформацією, яку ви їм 
          надали або яку вони зібрали в результаті використання вами їхніх послуг.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => setIsVisible(false)}
            className="btn-primary flex-1 text-sm py-2"
          >
            Прийняти все
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="btn-secondary flex-1 text-sm py-2"
          >
            Налаштувати або відхилити cookie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;