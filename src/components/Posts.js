import meowed from "../assets/img/meowed.svg";
import gatoTelefone from "../assets/img/gato-telefone.svg";
import respondeAi from "../assets/img/respondeai.svg";
import barked from "../assets/img/barked.svg";
import dog from "../assets/img/dog.svg";
import adorableAnimals from "../assets/img/adorable_animals.svg"

const postItens = [
  {
    UserSrc: meowed,
    AltSrc: "meowed",
    UserTitle: "meowed",
    PostContent: gatoTelefone,
    CurtidasSrc: respondeAi,
    LikeFor: "respondeai",
    AltSrcContent: "respondeai",
    NumberLikes: "101.523",
  },
  {
    UserSrc: barked,
    AltSrc: "barked",
    UserTitle: "barked",
    PostContent: dog,
    CurtidasSrc: adorableAnimals,
    LikeFor: "adorable_animals",
    AltSrcContent: "adorable_animals",
    NumberLikes: "99.159",
  },
];

function Post(props) {
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.UserSrc} alt={props.AltSrc} />
            <p> {props.UserTitle} </p>
          </div>

          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.PostContent} alt={props.AltSrcContent} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.CurtidasSrc} alt={props.AltSrcContent} />
            <div class="texto">
              Curtido por <strong>{props.LikeFor}</strong> e outras{" "}
              <strong>{props.NumberLikes}</strong>
            </div>
          </div>
        </div>
      </div>
    );
}

export default function Posts() {

  return (
    <div class="posts">
      {postItens.map((itens) => (
        <Post
          UserSrc={itens.UserSrc}
          Alt={itens.Alt}
          UserTitle={itens.UserTitle}
          PostContent={itens.PostContent}
          CurtidasSrc={itens.CurtidasSrc}
          LikeFor={itens.LikeFor}
          AltSrcContent={itens.AltSrcContent}
          NumberLikes={itens.NumberLikes}
        />
      ))}
    </div>
  );
}
