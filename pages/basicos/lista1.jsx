export default function lista1() {
  return <div>{getSpans(10)}</div>;
}

function getSpans(number) {
  return Array(number)
    .fill(1)
    .map((x, i) => <span>{i + 1},</span>);
}