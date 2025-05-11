import { motion } from "framer-motion";
import BlogImage1 from "../../assets/w1.png";
import BlogImage2 from "../../assets/w2.png";
import BlogImage3 from "../../assets/w3.png";

const blogData = [
  {
    id: 1,
    image: BlogImage1,
    title: "Buy KinkajouCoins",
    description:
      "Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process, whether you are new to cryptocurrency or an experienced trader.",
  },
  {
    id: 2,
    image: BlogImage2,
    title: "Support Green Projects and Land Conservation",
    description:
      "Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries. This ensures that your investment supports both immediate carbon offsetting and long-term environmental preservation.",
  },
  {
    id: 3,
    image: BlogImage3,
    title: "Watch Your Impact Grow",
    description:
      "Our platform provides detailed reporting on the environmental impact of your investments. Track how your KinkajouCoins are contributing to specific projects, from reforestation efforts to wildlife protection, and see the physical land areas your investment helps protect",
  },
];

export default function HowItWorks() {
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            How It <span className="text-[#ADF99F]">Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B9FEA4] to-[#48FF76] rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F4F2A] to-[#113E14] rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-[#0F4F2A]/90 backdrop-blur-sm border border-[#113E14] rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <h3 className="text-lg text-center text-white mb-4">
                  {item.title}
                </h3>
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4F2A] to-transparent opacity-50" />
                </div>
                <p className="text-sm sm:text-base text-[#C3C3C3] text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
