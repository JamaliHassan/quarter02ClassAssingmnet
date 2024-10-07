import Link from "next/link";
import style from './navStyle.module.css'
const Navbar = () => {
  return (
    <nav>
      <ul className={style.nav}>
        <li className="li">
          <Link rel="stylesheet" href=".">
            Home
          </Link>
        </li>
        <li className="li">
          <Link rel="stylesheet" href="/About">
            About
          </Link>
        </li>
        <li className="li">
          <Link rel="stylesheet" href="/Services">
            Services
          </Link>
        </li>
        <li className="li">
          <Link rel="stylesheet" href="/Contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
