import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LOGO_ICON from "../../assets/logo-icon.png";
import LOGO_TEXT from "../../assets/logo-text.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Boy Now", id: "buyNow" },
    { name: "About", id: "about" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "Roadmap", id: "roadmap" },
    { name: "How It Works", id: "works" },
    { name: "Faq", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 72; // Height of the fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 py-5 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={LOGO_ICON} alt="Logo Icon" className="h-8 w-auto" />
          <img src={LOGO_TEXT} alt="Logo Text" className="h-8 w-[150px] lg:w-[200px] ml-2" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center gap-8 text-[#EEEEEE]">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? "text-[#48FF76]"
                    : "hover:text-[#48FF76]"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-10 bg-gradient-to-r from-[#B9FEA4] to-[#48FF76] text-black px-6 py-2 rounded titillium font-semibold"
          >
            Connect Wallet
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] bg-black/95 backdrop-blur-sm lg:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col items-center justify-center h-full gap-8 text-[#EEEEEE]">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`text-2xl cursor-pointer transition-colors ${
                      activeSection === item.id
                        ? "text-[#48FF76]"
                        : "hover:text-[#48FF76]"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </motion.li>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-[#B9FEA4] to-[#48FF76] text-black px-8 py-3 rounded-lg titillium font-semibold text-xl"
                >
                  Connect Wallet
                </motion.button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
