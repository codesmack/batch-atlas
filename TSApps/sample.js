var People = /** @class */ (function () {
    function People(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    People.prototype.printInfo = function () {
        var data = "My name is ".concat(this.name, ". My age is ").concat(this.age);
        console.log(data);
        return data;
    };
    return People;
}());
var p = new People("Walt", 25, "Nice guy");
p.printInfo();
