import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BANNER_IMAGE from "../../assets/banner.png";

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
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

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
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
    <section className="relative min-h-screen bg-gradient-to-b from-black to-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="relative bg-black/40 backdrop-blur-sm border border-[#113E14] shadow-lg rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Info Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 lg:pr-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#ADF99F] leading-tight"
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {Object.entries(timeLeft).map(([key, value]) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#ADF99F]/20 to-transparent rounded-lg blur-sm" />
                        <p className="relative border border-[#ADF99F] rounded-lg px-2 sm:px-4 py-4 sm:py-6 text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          {value}
                        </p>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-[#C3C3C3] font-medium capitalize">
                        {key}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ADF99F]/20 to-transparent rounded-full blur-3xl" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={BANNER_IMAGE}
                alt="KinkajouCoin Banner"
                className="relative w-full h-auto max-w-[500px] mx-auto"
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
