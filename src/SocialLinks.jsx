import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://t.me/your-telegram-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-[#b80e0e] ease-in duration-300"
      >
        <FaTelegramPlane className="text-2xl" />
        Telegram
      </a>
      <a
        href="https://www.instagram.com/your-instagram-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-[#b80e0e] ease-in duration-300 "
      >
        <FaInstagram className="text-2xl" />
        Instagram
      </a>
      <a
        href="https://www.youtube.com/your-youtube-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-[#b80e0e] ease-in duration-300"
      >
        <FaYoutube className="text-2xl" />
        Youtube
      </a>
    </div>
  );
};

export default SocialLinks;
