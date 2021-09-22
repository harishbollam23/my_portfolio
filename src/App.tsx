import "./App.scss";
import Typical from "react-typical";
import plane from "./assets/images/plane.gif";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="intro-sec">
        <img src={plane} alt="plane" className="plane" />
        <span className="title">Harish Bollam</span>
        <p className="typical-wrapper">
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Front-End Engineer",
              3000,
              "Blogger",
              3000,
              "Mentor",
              3000,
            ]}
          />
        </p>
      </section>
    </div>
  );
}

export default App;
