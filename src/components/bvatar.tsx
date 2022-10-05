import React, { FC } from "react";

type avatarProps = {
  size?: "small" | "medium" | "large";
  shape: "circle" | "square";
  logo: string;
}

type deprecatedProps = {
  colors: "success" | "disabled" | "warning";
}

export type IavatarProps = avatarProps & deprecatedProps & Partial<HTMLButtonElement>;
const bvatar: FC<IavatarProps> = (props) => {
  return (
    <div style={{ border: "1px solid grey", padding: 5, display: 'flex' }}>
      <img src={props.logo} style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid #fff", marginRight: 10 }} alt="dummy-avatar" />
      <div>{props.size} - {props.shape}</div>
    </div>
  );
};
export default bvatar;
// export type avatarProps;

//interface way
// import React, { FC } from "react";

// // interface avatarProps {
// //   size?: "small" | "medium" | "large";
// //   shape: "circle" | "square";
// //   logo: string;
// // }

// interface DeprecatedProps {
//   colors?: "success" | "disabled" | "warning";
// }

// export interface IavatarProps extends DeprecatedProps {
//   size?: "small" | "medium" | "large";
//   shape: "circle" | "square";
//   logo: string;
// };


// const bvatar: FC<IavatarProps> = (props) => {
//   return (
//     <div style={{ border: "1px solid grey", padding: 5, display: 'flex' }}>
//       <img src={props.logo} style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid #fff", marginRight: 10 }} alt="dummy-avatar" />
//       <div>{props.size} - {props.shape}</div>
//     </div>
//   );
// };
// export default bvatar;
// // export type avatarProps;
