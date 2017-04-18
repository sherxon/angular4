var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var baseObject = (function () {
    function baseObject(l, w) {
        this.l = 0;
        this.w = 0;
        this.l = l;
        this.w = w;
    }
    return baseObject;
}());
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle(x, y) {
        return _super.call(this, x, y) || this;
    }
    rectangle.prototype.calcSize = function () {
        return this.l * this.w;
    };
    return rectangle;
}(baseObject));
var rec = new rectangle(5, 2);
console.log(rec.calcSize());
