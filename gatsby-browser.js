import "./src/styles/global.css";

export const onClientEntry = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gloria+Hallelujah&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};
