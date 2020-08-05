"use strict";
var _x;
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
const tslib_1 = require("tslib");
class A {
}
class B extends A {
    constructor() {
        super(...arguments);
        _x.set(this, 1);
    }
    getX() {
        return tslib_1.__classPrivateFieldGet(this, _x);
    }
    setX(v) {
        tslib_1.__classPrivateFieldSet(this, _x, v);
    }
    asyncMethod() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return 0;
        });
    }
}
exports.B = B;
_x = new WeakMap();
