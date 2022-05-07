import amendoim from "../assets/img/meowed.svg";
import castanha from "../assets/img/barked.svg";
import amendoa from "../assets/img/dog.svg";

export default function Posts() {

    const postItens = [
      {
        UserSrc: amendoim,
        UserTitle: "meowed",
        PostContent: castanha,
        CurtidasSrc: amendoa,
        LikeFor: "respondeai",
        NumberLikes: "101.523",
      },
      {
        UserSrc: amendoim,
        UserTitle: "meowed",
        PostContent: castanha,
        CurtidasSrc: amendoa,
        LikeFor: "respondeai",
        NumberLikes: "101.523",
      },
    ];

    return (
      <div class="corpo">
        <div class="esquerda">
          <div class="posts">
            <div class="post">
              <div class="topo">
                <div class="usuario">
                                {postItens.map((UserImg) => {
                                    return (
                                      <>
                                        <img src={UserImg.UserSrc} />
                                        <img src={UserImg.PostContent} />
                                        <img src={UserImg.CurtidasSrc} />
                                      </>
                                    );
                      
                  })}

                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
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
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    Curtido por <strong>respondeai</strong> e{" "}
                    <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
} 