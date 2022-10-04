export interface mathProps {
    a: number;
    b: number;
}
declare const sum: (props: mathProps) => number;
declare const mul: (props: mathProps) => number;
export { sum, mul };
