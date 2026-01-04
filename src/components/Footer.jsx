import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e4f0ff] pt-12 py-4">
      <div className="container mx-auto flex justify-center items-center space-x-6">
        <Link
          to="/contact"
          className="text-blue-400 hover:underline"
        >
          Contact
        </Link>
        <a
          href="https://instagram.com/myumase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
