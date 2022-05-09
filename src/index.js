import reactDom from "react-dom";
import Topo from "./components/Topo";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

function App() {
    return (
      <div>
        <Topo />
        <Stories />
        <Posts />
        <Sidebar />
      </div>
    );
}



reactDom.render(App(), document.querySelector(".root"));
