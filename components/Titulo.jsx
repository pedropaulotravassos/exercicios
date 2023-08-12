export default (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.secundario}</h2>
    </>
  );
};
