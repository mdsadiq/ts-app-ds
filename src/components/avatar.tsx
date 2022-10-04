import React, { FC } from "react";

export interface IavatarProps {
  size?: "small" | "medium" | "large";
  shape: "circle" | "square";
  logo: string;
}

const avatar: FC<IavatarProps> = (props) => {
  return (
    <div style={{ border: "1px solid grey", padding: 5, display: 'flex' }}>
      <img src={props.logo} style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid #fff", marginRight: 10 }} alt="dummy-avatar" />
      <div>{props.size} - {props.shape}</div>
    </div>
  );
};
export default avatar;
// export type avatarProps;
