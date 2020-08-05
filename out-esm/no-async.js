var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _x;
class A {
}
class B extends A {
    constructor() {
        super(...arguments);
        _x.set(this, 1);
    }
    getX() {
        return __classPrivateFieldGet(this, _x);
    }
    setX(v) {
        __classPrivateFieldSet(this, _x, v);
    }
}
_x = new WeakMap();
export { B };
