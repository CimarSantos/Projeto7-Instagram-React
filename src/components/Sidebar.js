import SideUserSrc from "../assets/img/catanacomics.svg";
import BadVibesMemes from "../assets/img/bad.vibes.memes.svg"
import ChibiDart from "../assets/img/chibirdart.svg"
import Razoes from "../assets/img/razoesparaacreditar.svg"
import adorableAnimals from "../assets/img/adorable_animals.svg"
import SmallCuteCats from "../assets/img/smallcutecats.svg"

const SideUserContent = [
    {
        img: SideUserSrc,
        userName: "catanacomics",
        name: "Catana"
    },
]

function SideUser(props) {
    return (
      
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <strong>{props.userName}</strong>
                <p>{props.name}</p>
          </div>
        </div>
      
    );
}

const SideBarContent = [
  {
    SugestionImg: BadVibesMemes,
    SugestionName: "bad.vibes.memes",
    SugestionStatus: "Segue você",
  },
  {
    SugestionImg: ChibiDart,
    SugestionName: "chibirdart",
    SugestionStatus: "Segue você",
  },
  {
    SugestionImg: Razoes,
    SugestionName: "razoesparaacreditar",
    SugestionStatus: "Novo no Instagram",
  },
  {
    SugestionImg: adorableAnimals,
    SugestionName: "adorable_animals",
    SugestionStatus: "Segue você",
  },
  {
    SugestionImg: SmallCuteCats,
    SugestionName: "smallcutecats",
    SugestionStatus: "Segue você",
  },
];

function SideBarSugestions(props) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={props.SugestionImg} />
          <div class="texto">
            <div class="nome">
              <p>{props.SugestionName}</p>
            </div>
            <div class="razao">
              <p>{props.SugestionStatus}</p>
            </div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );
}

export default function Sidebar() {
    return (
      <div class="sidebar">
        {SideUserContent.map((UserContent) => (
          <SideUser
            img={UserContent.img}
            userName={UserContent.userName}
            name={UserContent.name}
          />
        ))}
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {SideBarContent.map((SideSugestions) => (
            <SideBarSugestions
              SugestionImg={SideSugestions.SugestionImg}
              SugestionName={SideSugestions.SugestionName}
              SugestionStatus={SideSugestions.SugestionStatus}
            />
          ))}
        </div>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    );
}