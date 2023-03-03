import { BsLinkedin, BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import "./page.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-title">
        <b>Want to know more or just chat? You are welcome!</b>
      </p>
      <ul className="footer-list">
        <li>
          <Link
            href={"https://www.linkedin.com/in/frostmakr/"}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <BsLinkedin className="footer-link__icon" />
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/MakrFrost"}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <BsGithub className="footer-link__icon" />
          </Link>
        </li>
        <li>
          <Link
            href={"https://t.me/frostdevm"}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <BsTelegram className="footer-link__icon" />
          </Link>
        </li>
        <li>
          <Link
            href={"http://surl.li/eyeyq"}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <BsInstagram className="footer-link__icon" />
          </Link>
        </li>
      </ul>
      <p className="footer-descr">
        Like me on LinkedIn, GitHub, Telegram, Instagram.
      </p>
    </footer>
  );
}
