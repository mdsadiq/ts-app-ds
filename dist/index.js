'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var avatar = function (props) {
    return (React__default["default"].createElement("div", { style: { border: "1px solid grey", padding: 5, display: 'flex' } },
        React__default["default"].createElement("img", { src: props.logo, style: { width: 20, height: 20, borderRadius: "50%", border: "2px solid #fff", marginRight: 10 }, alt: "dummy-avatar" }),
        React__default["default"].createElement("div", null,
            props.size,
            " - ",
            props.shape)));
};
// export type avatarProps;

var sum = function (props) {
    return props.a + props.b;
};
var mul = function (props) {
    return props.a * props.b;
};

exports.Avatar = avatar;
exports.mul = mul;
exports.sum = sum;
//# sourceMappingURL=index.js.map
