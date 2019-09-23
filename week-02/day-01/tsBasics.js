var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.skills = [];
    }
    Person.prototype.addSkill = function (input) {
        this.skills.push(input);
        return 'The skill has been added.';
    };
    Person.prototype.printName = function () {
        return "This person's name : " + this.name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.printSkills = function () {
        return "This person's name: " + this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Student;
}(Person));
var person1 = new Person('Jeff', 27);
console.log(person1.addSkill('JS'));
