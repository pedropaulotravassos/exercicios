export default (props) => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#D22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Texto #01
      </h1>
      <h2 className={props.numero >= 0 ? "azul" : "vermelha"}> texto #02 </h2>
    </div>
  );
};
