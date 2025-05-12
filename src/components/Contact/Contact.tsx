import { motion } from "framer-motion";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://twitter.com/kinkajoucoin",
  },
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    url: "https://t.me/kinkajoucoin",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    url: "https://discord.gg/kinkajoucoin",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/kinkajoucoin",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://tiktok.com/@kinkajoucoin",
  },
];

export default function Contact() {
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
    <section className="relative py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            Contact <span className="text-[#ADF99F]">Us</span>
          </h2>

          <p className="text-[#C3C3C3] text-lg max-w-2xl mx-auto mt-4">
            Email us at{" "}
            <span className="text-[#07DE4F]">support@kinkajoucoin.com</span> for
            any <br /> queries or support
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex justify-center items-center gap-3 max-w-4xl mx-auto"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="group w-12 h-12 text-2xl border bg-radial from-0% hover:bg-radial to-[#0F5214] hover:from-[#02FF08] hover:to-[#86FF89] hover:text-[#060609] rounded-full flex justify-center items-center">
                <social.icon className=" text-[#00FF06] group-hover:text-black" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
