import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BANNER_IMAGE from "../../assets/banner.png";
import GRID from "../../assets/grid.png";
import "./Banner.css";

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${GRID})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Add a dark overlay to ensure content visibility */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative bg-black/40 backdrop-blur-sm border border-[#113E14] shadow-lg rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Info Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 lg:pr-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#ADF99F] to-[#00CC55]/80  bg-clip-text text-transparent leading-tight"
              >
                KinkajouCoin: A Greener Future in Your Wallet
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-[#C3C3C3] leading-relaxed"
              >
                KinkajouCoin is not just another cryptocurrency—it's a movement
                toward sustainability and environmental stewardship. By
                integrating blockchain technology with carbon credits and real
                land ownership, we offer a unique opportunity for individuals
                and businesses to invest in a greener future.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-6">
                <h5 className="text-lg sm:text-xl text-[#C3C3C3] font-semibold">
                  Crypto Market Starts in
                </h5>
                <div className="flex items-center gap-4">
                  {Object.entries(timeLeft).map(
                    ([key, value], index, array) => (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#ADF99F]/20 to-transparent rounded-lg blur-sm" />
                          <div className="flex items-center gap-2">
                            <p className="relative border border-[#adf99f7c] rounded-lg text-xl sm:text-2xl md:text-3xl font-bold text-white px-5 py-5">
                              {value}
                            </p>
                            {index < array.length - 1 && (
                              <span className="text-white text-4xl">:</span>
                            )}
                          </div>
                        </div>
                        <p className="mt-2 -ml-2 text-sm sm:text-base text-[#C3C3C3] font-medium capitalize">
                          {key}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-first md:order-last"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ADF99F]/20 to-transparent rounded-full blur-3xl" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={BANNER_IMAGE}
                alt="KinkajouCoin Banner"
                className="relative w-full h-auto lg:w-[500px] max-w-[500px] mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
