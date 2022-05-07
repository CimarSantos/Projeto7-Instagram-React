import reactDom from "react-dom";
import Topo from "./components/Topo";
import Stories from "./components/Stories";

function App() {
    return (
      <div>
        <Topo />
        <Stories />
      </div>
    );
}



reactDom.render(App(), document.querySelector(".root"));
