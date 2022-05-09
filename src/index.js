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
          <div class="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
      </>
    );
}



reactDom.render(App(), document.querySelector(".root"));
