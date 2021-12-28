import "./Footer.css";
import youtube from "./youtube.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

export default function Contacto() {
  return (
    <footer>
      <h4> &copy;  Player Store 2021</h4>
      <ul>
        <li>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
