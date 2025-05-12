import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-6"
    >
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 py-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[1px] w-full bg-gradient-to-r from-[#050D09] via-[#00FB06] to-[#050D09]"
        />
        <ul className="flex justify-center lg:justify-start items-center gap-5 mt-4">
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="javascript:void(0)"
              className="text-[#EEEEEE] hover:underline text-xs"
            >
              Privacy Policy
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="javascript:void(0)"
              className="text-[#EEEEEE] hover:underline text-xs"
            >
              Cookie Policy
            </a>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
