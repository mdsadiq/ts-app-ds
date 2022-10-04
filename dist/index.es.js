import React from 'react';

var avatar = function (props) {
    return (React.createElement("div", { style: { border: "1px solid grey", padding: 5, display: 'flex' } },
        React.createElement("img", { src: props.logo, style: { width: 20, height: 20, borderRadius: "50%", border: "2px solid #fff", marginRight: 10 }, alt: "dummy-avatar" }),
        React.createElement("div", null,
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

export { avatar as Avatar, mul, sum };
//# sourceMappingURL=index.es.js.map
