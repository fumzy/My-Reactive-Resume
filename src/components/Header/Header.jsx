import fumnanyaImg from "../../assets/fumnanya.jpeg";
import "./Header.css";

export function Header() {
  return (
    <header>
      <img src={fumnanyaImg} alt="Fumnanya Loveth Adeyanju" />
      <h1>Fumnanya Loveth Adeyanju</h1>
      <h2>Senior Software Engineer</h2>
      <p className="headline">.NET / React / Angular / TypeScript / Azure</p>
      <p>
        Building scalable web and cloud applications with a focus on
        performance, reliability, and clean software design.
      </p>
    </header>
  );
}
