import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-starbucks-light-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Про нас</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Наша компанія</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Наша кава</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Історії та новини</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Інвестори</a></li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-lg font-bold mb-4">Кар'єра</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Культура та цінності</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Можливості включення</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Коледж досягнень</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Центр кар'єри</a></li>
            </ul>
          </div>

          {/* Social Impact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Соціальний вплив</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Люди</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Планета</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Екологічна та соціальна звітність</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Служба підтримки клієнтів</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Зв'яжіться з нами</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Мій акаунт</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Знайти магазин</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Відповідальне розкриття інформації</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">Кава</span>
                <span className="text-sm text-gray-300">Рецепти</span>
              </div>
              <div className="w-12 h-12 bg-starbucks-green rounded-full flex items-center justify-center">
                <img 
                  src="/images/starbucks-logo.png" 
                  alt="Starbucks" 
                  className="h-8 w-8"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-600">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
                <a href="#" className="hover:text-white transition-colors">Умови використання</a>
                <a href="#" className="hover:text-white transition-colors">CA Supply Chain Act</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
              </div>
              <p>© 2024 Starbucks Coffee Company. Всі права захищені.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;