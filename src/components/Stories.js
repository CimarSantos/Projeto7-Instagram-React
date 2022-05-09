import gag9 from "../assets/img/9gag.svg";
import meowed from "../assets/img/meowed.svg";
import barked from "../assets/img/barked.svg";
import nathanwpylestrangeplanet from "../assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../assets/img/wawawicomics.svg";
import respondeai from "../assets/img/respondeai.svg";
import filomoderna from "../assets/img/filomoderna.svg";
import memeriagourmet from "../assets/img/memeriagourmet.svg";


 const StoryContent = [
   {
     Src: gag9,
     alt: "9gag",
     usuario: "9gag",
   },
   {
     Src: meowed,
     alt: "meowed",
     usuario: "meowed",
   },
   {
     Src: barked,
     alt: "barked",
     usuario: "barked",
   },
   {
     Src: nathanwpylestrangeplanet,
     alt: "nathanwpylestrangeplanet",
     usuario: "nathanwpylestrangeplanet",
   },
   {
     Src: wawawicomics,
     alt: "wawawicomics",
     usuario: "wawawicomics",
   },
   {
     Src: respondeai,
     alt: "respondeai",
     usuario: "respondeai",
   },
   {
     Src: filomoderna,
     alt: "filomoderna",
     usuario: "filomoderna",
   },
   {
     Src: memeriagourmet,
     alt: "memeriagourmet",
     usuario: "memeriagourmet",
   },
 ]; 

function Story(props) {
    return (
      
          <div class="story">
            <div class="imagem">
              <img src={props.Src} alt={props.alt} />
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
            {StoryContent.map((Stories) => (
                <Story Src={Stories.Src} alt={Stories.alt} usuario={Stories.usuario}/>
            ))}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    );
}