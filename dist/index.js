'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var bvatar = function (props) {
    return (React__default["default"].createElement("div", { style: { border: "1px solid grey", padding: 5, display: 'flex' } },
        React__default["default"].createElement("img", { src: props.logo, style: { width: 20, height: 20, borderRadius: "50%", border: "2px solid #fff", marginRight: 10 }, alt: "dummy-avatar" }),
        React__default["default"].createElement("div", null,
            props.size,
            " - ",
            props.shape)));
};
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

var sum = function (props) {
    return props.a + props.b;
};
var mul = function (props) {
    return props.a * props.b;
};

exports.Bvatar = bvatar;
exports.mul = mul;
exports.sum = sum;
//# sourceMappingURL=index.js.map
