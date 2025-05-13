import { motion } from "framer-motion";
import RBG from "../../assets/r-bg.png";
import Roadmap_Image from "../../assets/roadmap.png";

export default function Roadmap() {
  return (
    <motion.div
      id="roadmap"
      className="t-10"
      style={{ backgroundImage: `url(${RBG})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-black/70 py-10">
        <div className="container mx-auto px-5 lg:px-0">
          <motion.h2 
            className="text-4xl font-semibold text-white text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Roadmap Highlights{" "}
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-[520px] mx-auto text-center mt-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're on a mission, and this is just the beginning. The Matrix won't
            know what hit it. Here's our game plan to dominate the crypto space
          </motion.p>

          <motion.div 
            className="flex justify-center mt-10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src={Roadmap_Image} 
              alt="Roadmap" 
              draggable={false}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
