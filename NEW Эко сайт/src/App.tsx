import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { DevicePage } from './components/DevicePage';
import { InitiativesPage } from './components/InitiativesPage';
import { ContactPage } from './components/ContactPage';
import { SubmitIdeaPage } from './components/SubmitIdeaPage';
import { FloatingParticles } from './components/FloatingParticles';
import { Menu, X, Leaf } from 'lucide-react';

type Page = 'home' | 'about' | 'device' | 'initiatives' | 'submit-idea' | 'contact';
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'contact') {
        setCurrentPage('contact');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage mousePosition={mousePosition} onNavigate={(page) => navigateTo(page as Page)} />;
      case 'about':
        return <AboutPage onNavigate={(page) => navigateTo(page as Page)} mousePosition={mousePosition} />;
      case 'device':
        return <DevicePage mousePosition={mousePosition} onNavigate={(page) => navigateTo(page as Page)} />;
      case 'initiatives':
        return <InitiativesPage />;
      case 'submit-idea':
        return <SubmitIdeaPage />;
      case 'contact':
        return <ContactPage mousePosition={mousePosition} />;
      default:
        return <HomePage mousePosition={mousePosition} onNavigate={(page) => navigateTo(page as Page)} />;
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Упрощённый фоновый градиент */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/50 via-black to-black pointer-events-none" />
      
      {/* Плавающие частицы - упрощённые */}
      <FloatingParticles />

      {/* Упрощённая навигация */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-emerald-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigateTo('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Leaf className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-white tracking-tight">RescueWave</h1>
                <p className="text-emerald-400 text-xs tracking-wide">FUTURE TECH</p>
              </div>
            </motion.div>

            {/* Desktop меню */}
            <nav className="hidden lg:flex gap-2">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О проекте' },
                { id: 'device', label: 'Устройство' },
                { id: 'initiatives', label: 'Инициативы' },
                { id: 'submit-idea', label: 'Предложить идею' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`px-5 py-2.5 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-emerald-200/70 hover:text-emerald-300 hover:bg-emerald-500/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Mobile меню кнопка */}
            <button
              className="lg:hidden p-2 text-emerald-400 hover:text-emerald-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile меню */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="lg:hidden mt-4 flex flex-col gap-2 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {[
                  { id: 'home', label: 'Главная' },
                  { id: 'about', label: 'О проекте' },
                  { id: 'device', label: 'Устройство' },
                  { id: 'initiatives', label: 'Инициативы' },
                  { id: 'submit-idea', label: 'Предложить идею' },
                  { id: 'contact', label: 'Контакты' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id as Page)}
                    className={`px-5 py-3 text-left rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-emerald-200/70 bg-emerald-500/5 hover:bg-emerald-500/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Упрощённый футер */}
      <footer className="relative z-10 mt-24 border-t border-emerald-500/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-emerald-300 mb-3">RescueWave</h3>
              <p className="text-emerald-200/60 leading-relaxed">
                Инновационные технологии для защиты окружающей среды и борьбы с городскими пожарами
              </p>
            </div>

            <div>
              <h4 className="text-emerald-300 mb-3">Навигация</h4>
              <div className="flex flex-col gap-2">
                {['home', 'about', 'device', 'initiatives', 'submit-idea', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => navigateTo(page as Page)}
                    className="text-left text-emerald-200/60 hover:text-emerald-300 transition-colors"
                  >
                    {page === 'home' && 'Главная'}
                    {page === 'about' && 'О проекте'}
                    {page === 'device' && 'Устройство'}
                    {page === 'initiatives' && 'Инициативы'}
                    {page === 'submit-idea' && 'Предложить идею'}
                    {page === 'contact' && 'Контакты'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-emerald-300 mb-3">Контакты</h4>
              <p className="text-emerald-200/60">
                Email: info@econova.future
                <br />
                Тел: +994 (055) 555-55-55
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-500/20 pt-6 text-center">
            <p className="text-emerald-200/40 tracking-wide">
              © 2025 RescueWave • FUTURE ECOLOGY TECHNOLOGY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
