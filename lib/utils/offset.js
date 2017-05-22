"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* @type 获取dom 行对body的left
* @author : Mantou
*/
function offset(self, obj) {
    if (!obj) {
        obj = {};
        obj.left = 0;
        obj.top = 0;
    }
    while (self) {
        obj.left += self.offsetLeft - (self.scrollLeft || 0);
        obj.top += self.offsetTop - (self.scrollTop || 0);
        self = self.offsetParent;
    }
    obj.top += document.body.scrollTop;
    return obj;
}

function offsetLeft(self) {
    return offset(self).left;
}

function offsetTop(self) {
    return offset(self).top;
}

function position(dom) {
    if (!dom) {
        return;
    }
    return {
        left: offsetLeft(dom),
        top: offsetTop(dom),
        width: dom.offsetWidth,
        height: dom.offsetHeight
    };
}

exports.offsetTop = offsetTop;
exports.offsetLeft = offsetLeft;
exports.offset = offset;
exports.position = position;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(offset, "offset", "dev/mtui/utils/offset.jsx");

    __REACT_HOT_LOADER__.register(offsetLeft, "offsetLeft", "dev/mtui/utils/offset.jsx");

    __REACT_HOT_LOADER__.register(offsetTop, "offsetTop", "dev/mtui/utils/offset.jsx");

    __REACT_HOT_LOADER__.register(position, "position", "dev/mtui/utils/offset.jsx");
}();

;
//# sourceMappingURL=offset.js.map