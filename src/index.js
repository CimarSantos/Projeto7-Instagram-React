import reactDom from "react-dom";
import Topo from "./components/Topo";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

function App() {
    return (
      <>
        <Topo />
        <div class="corpo">
          <div class="esquerda">
            <Stories />
            <Posts />
          </div>
          <div class="sidebar">
            <Sidebar />
          </div>
        </div>
      </>
    );
}



reactDom.render(App(), document.querySelector(".root"));
