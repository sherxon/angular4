var Person = (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);
