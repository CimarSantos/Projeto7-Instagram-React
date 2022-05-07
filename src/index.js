import reactDom from "react-dom";
import Topo from "./components/Topo";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

function App() {
    return (
      <div>
        <Topo />
        <Stories />
        <Posts />
      </div>
    );
}



reactDom.render(App(), document.querySelector(".root"));
