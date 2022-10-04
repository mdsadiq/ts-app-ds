export interface mathProps {
  a: number;
  b: number;
}
const sum = function (props: mathProps) {
  return props.a + props.b;
};

const mul = function (props: mathProps) {
  return props.a * props.b;
};

export { sum, mul };
