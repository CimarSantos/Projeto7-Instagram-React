function Story(props) {
    return (
      
          <div class="story">
            <div class="imagem">
              <img src={props.source} alt={props.alt} />
            </div>
                <div class="usuario">{props.usuario}</div>
          </div>
        
    );
}

export default function Stories() {
    return (
      <div class="corpo">
        <div class="esquerda">
          <div class="stories">
            <Story
                usuario="9gag"
                source="assets/img/9gag.svg"
                alt="9gag"
            />
            <Story
              usuario="meowed"
              source="assets/img/meowed.svg"
              alt="meowed"
            />
            <Story
              usuario="barked"
              source="assets/img/barked.svg"
              alt="barked"
            />
            <Story
              usuario="nathanwpylestrangeplanet"
              source="assets/img/nathanwpylestrangeplanet.svg"
              alt="nathanwpylestrangeplanet"
            />
            <Story
              usuario="wawawicomics"
              source="assets/img/wawawicomics.svg"
              alt="wawawicomics"
            />
            <Story
              usuario="respondeai"
              source="assets/img/respondeai.svg"
              alt="respondeai"
            />
            <Story
              usuario="filomoderna"
              source="assets/img/filomoderna.svg"
              alt="filomoderna"
            />
            <Story
              usuario="memeriagourmet"
              source="assets/img/memeriagourmet.svg"
              alt="memeriagourmet"
            />
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    );
}