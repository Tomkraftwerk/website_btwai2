import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // React Router für Navigation
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Über das Projekt', href: '#about' },
  { name: 'Veranstaltungen', href: '#events' },
  { name: 'Informationen / FAQ', href: '#faq' },
  { name: 'Über den Initiator', href: '#team' },
  { name: 'Informiere Dich', href: '#info' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Prüft die aktuelle URL

  // Funktion für Smooth Scrolling
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              location.pathname === "/" ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href === "#events" ? "/" : item.href}
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) =>
              location.pathname === "/" ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-900 hover:text-blue-600"
                  onClick={(e) => { handleClick(e, item.href); setMobileMenuOpen(false); }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href === "#events" ? "/" : item.href}
                  className="block py-2 text-gray-900 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
