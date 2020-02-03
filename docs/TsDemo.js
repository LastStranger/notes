"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TsDemo = () => {
    const el = document.getElementsByClassName('tsDemo');
    console.log('dd');
    const arr = [123];
    function sss(arg) {
        return {
            name: '1' + arg.name,
            age: 12
        };
    }
    sss({ name: 'dd', age: 1 });
    arr.push('1');
    let nam = 1;
    const arr2 = ["li"];
    // arr2.push(1);
    console.log(arr);
    for (const each of arr) {
        console.log(each);
    }
    const dd = (name, age) => {
        console.log('dd');
        return 1;
    };
    dd("li", 1);
    const studen = 1;
    return (React.createElement("div", { className: 'tsDemo' },
        "this is a tsDemo",
        React.createElement("div", null,
            "this is a div",
            React.createElement("div", null),
            React.createElement("span", null, "this is"))));
};
exports.default = TsDemo;
//# sourceMappingURL=TsDemo.js.map