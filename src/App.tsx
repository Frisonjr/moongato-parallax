import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import moon from "./images/moon.png";
import land from "./images/land.png";
import cat from "./images/cat.gif";

function App() {
  const ref = React.useRef();

  return (
    <div className="App">
      <Parallax pages={4} ref={ref as any}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} alt="cat" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          // @ts-ignore
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Gato</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          // @ts-ignore
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Cheguei</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
