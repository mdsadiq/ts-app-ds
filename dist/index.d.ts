import { FC } from 'react';

declare type avatarProps = {
    size?: "small" | "medium" | "large";
    shape: "circle" | "square";
    logo: string;
};
declare type deprecatedProps = {
    colors: "success" | "disabled" | "warning";
};
declare type IavatarProps = avatarProps & deprecatedProps & Partial<HTMLButtonElement>;
declare const bvatar: FC<IavatarProps>;

interface mathProps {
    a: number;
    b: number;
}
declare const sum: (props: mathProps) => number;
declare const mul: (props: mathProps) => number;

export { IavatarProps as AvatarProps, bvatar as Bvatar, mathProps, mul, sum };
//# sourceMappingURL=index.d.ts.map
