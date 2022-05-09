import meowed from "../assets/img/meowed.svg";
import gatoTelefone from "../assets/img/gato-telefone.svg";
import respondeAi from "../assets/img/respondeai.svg";
import barked from "../assets/img/barked.svg";
import dog from "../assets/img/dog.svg";
import adorableAnimals from "../assets/img/adorable_animals.svg"

const postItens = [
  {
    UserSrc: meowed,
    UserTitle: "meowed",
    PostContent: gatoTelefone,
    CurtidasSrc: respondeAi,
    LikeFor: "respondeai",
    NumberLikes: "101.523",
  },
  {
    UserSrc: barked,
    UserTitle: "barked",
    PostContent: dog,
    CurtidasSrc: adorableAnimals,
    LikeFor: "adorable_animals",
    NumberLikes: "99.159",
  },
];

function Post(props) {
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.UserSrc} />
            <p> {props.UserTitle} </p>
          </div>

          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.PostContent} />
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
            <img src={props.CurtidasSrc} />
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
    <div class="corpo">
      <div class="esquerda">
        <div class="posts">
          {postItens.map((itens) => (
            <Post
              UserSrc={itens.UserSrc}
              UserTitle={itens.UserTitle}
              PostContent={itens.PostContent}
              CurtidasSrc={itens.CurtidasSrc}
              LikeFor={itens.LikeFor}
              NumberLikes={itens.NumberLikes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
