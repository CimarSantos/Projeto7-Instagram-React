import reactDom from "react-dom";

function Hello() {
  return <h1> Hello, world! </h1>;
}

reactDom.render(Hello(), document.querySelector(".root"));
