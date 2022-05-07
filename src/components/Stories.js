function Story(props) {
    return (
      
          <div class="story">
            <div class="imagem">
              <img src={props.source} />
            </div>
                    <div class="usuario">{props.usuario}</div>
          </div>
        
    );
}

export default function Stories() {
    return (
      <div class="corpo">
        <div class="stories">
          <Story usuario="9gag" source="assets/img/9gag.svg" />
          <Story usuario="meowed" source="assets/img/meowed.svg" />
          <Story usuario="barked" source="assets/img/barked.svg" />
          <Story
            usuario="nathanwpylestrangeplanet"
            source="assets/img/nathanwpylestrangeplanet.svg"
          />
          <Story usuario="wawawicomics" source="assets/img/wawawicomics.svg" />
          <Story usuario="respondeai" source="assets/img/respondeai.svg" />
          <Story usuario="filomoderna" source="assets/img/filomoderna.svg" />
          <Story
            usuario="memeriagourmet"
            source="assets/img/memeriagourmet.svg"
          />
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      </div>
    );
}