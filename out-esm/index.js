var _x;
import { __awaiter } from "tslib";
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
    asyncMethod() {
        return __awaiter(this, void 0, void 0, function* () {
            return 0;
        });
    }
}
_x = new WeakMap();
export { B };
