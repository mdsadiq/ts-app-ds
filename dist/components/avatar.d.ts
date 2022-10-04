import { FC } from "react";
export interface IavatarProps {
    size?: "small" | "medium" | "large";
    shape: "circle" | "square";
    logo: string;
}
declare const avatar: FC<IavatarProps>;
export default avatar;
