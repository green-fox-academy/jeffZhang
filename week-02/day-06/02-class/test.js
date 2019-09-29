//class in ts
;
(function () {
    var Garden = /** @class */ (function () {
        function Garden(width, length) {
            this.width = width;
            this.length = length;
        }
        Garden.prototype.area = function () {
            return this.width * this.length;
        };
        Garden.prototype.circumference = function () {
            return this.width * 2 + this.length * 2;
        };
        Garden.prototype.efficiency = function () {
            return this.area() / this.circumference();
        };
        return Garden;
    }());
    var garden = new Garden(10, 10);
    console.log(garden.area());
})();
