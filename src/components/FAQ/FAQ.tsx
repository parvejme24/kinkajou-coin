import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What is KinkajouCoin?",
    answer:
      "KinkajouCoin is a cryptocurrency that is used to purchase carbon credits, secure land for conservation, and fund environmental sanctuaries. It combines blockchain technology with environmental impact, allowing users to invest in a greener future while potentially earning returns.",
  },
  {
    id: 2,
    question: "How do I purchase KinkajouCoin?",
    answer:
      "You can purchase KinkajouCoin through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process, whether you're new to cryptocurrency or an experienced trader. We support various payment methods including major cryptocurrencies and fiat currencies.",
  },
  {
    id: 3,
    question: "How does KinkajouCoin contribute to environmental conservation?",
    answer:
      "Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries. A portion of each transaction is automatically allocated to these initiatives, ensuring that your investment directly supports environmental preservation.",
  },
  {
    id: 4,
    question: "Is KinkajouCoin a good investment?",
    answer:
      "While we can't provide financial advice, KinkajouCoin offers a unique value proposition by combining cryptocurrency with environmental impact. The value is tied to both market performance and the growing importance of environmental conservation initiatives.",
  },
  {
    id: 5,
    question: "How can I track my environmental impact?",
    answer:
      "Our platform provides detailed reporting on the environmental impact of your investments. You can track how your KinkajouCoins are contributing to specific projects, from reforestation efforts to wildlife protection, and see the physical land areas your investment helps protect.",
  },
  {
    id: 6,
    question: "What makes KinkajouCoin different from other cryptocurrencies?",
    answer:
      "KinkajouCoin stands out by directly linking cryptocurrency value to environmental impact. Unlike other cryptocurrencies, each transaction contributes to real-world conservation efforts, creating a tangible connection between digital assets and environmental preservation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="faq"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-black"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Frequently Asked <span className="text-[#ADF99F]">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B9FEA4] to-[#48FF76] rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                initial={false}
                animate={{
                  backgroundColor:
                    openIndex === item.id ? "#212121" : "transparent",
                }}
                className="border border-[#113E14] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === item.id ? null : item.id)
                  }
                  className="w-full px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center">
                        <span className="text-[#B6B6B6] text-lg font-semibold w-10 h-10 flex justify-center items-center bg-[#113E14] rounded-full ">
                          {item.id}
                        </span>
                      </div>
                      <h3
                        className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                          openIndex === item.id
                            ? "text-[#3CFF71]"
                            : "text-[#B6B6B6]"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: openIndex === item.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke={openIndex === item.id ? "#01ED06" : "#B6B6B6"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-[#C3C3C3]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
