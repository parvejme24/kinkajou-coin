import { motion } from "framer-motion";
import ABOUT_IMAGE from "../../assets/about.png";

export default function About() {
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
    <motion.div
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 px-6"
    >
      <div className="container md:mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* about text  */}
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-[#CCD6D4] text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            About <br />
            <span className="bg-gradient-to-r from-[#ADF99F] to-[#00CC55]/80  bg-clip-text text-transparent leading-tight">
              KinkajouCoin
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#C3C3C3] text-md font-medium mt-5"
          >
            At KinkajouCoin, we envision a world where economic growth and
            environmental sustainability go hand in hand. Our mission is to
            harness the power of cryptocurrency to create a financial ecosystem
            that rewards responsible stewardship of the Earth's resources. We
            believe in transparency, accountability, and positive action—values
            that are reflected in everything we do.{" "}
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-gradient-to-r from-[#B9FEA4] to-[#48FF76] text-black px-8 py-3 rounded-lg titillium font-semibold text-xl cursor-pointer"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* image  */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ADF99F]/20 to-transparent rounded-full blur-3xl" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={ABOUT_IMAGE}
              alt="about"
              className="relative w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
