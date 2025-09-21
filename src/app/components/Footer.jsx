import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo + Tagline */}
        <div className="footer-col">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <p className="tagline">Empowering communities through education, healthcare, and social programs. </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Work</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} George Kithi Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
