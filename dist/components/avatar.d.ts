import { FC } from "react";
interface avatarProps {
    size?: "small" | "medium" | "large";
    shape: "circle" | "square";
    logo: string;
}
interface deprecatedProps {
    colors?: "success" | "disabled" | "warning";
}
export interface IavatarProps extends avatarProps, deprecatedProps {
}
declare const avatar: FC<IavatarProps>;
export default avatar;
