(function(app) {
    app.Hero = Hero;

    app.Hero1 = Hero1;

    function Hero(name, dob, age, zipcode, city) {
        this.name = name;
        this.dob = dob;
        this.age = age;
        this.city = city;
        this.zipcode = zipcode;
    }

    function Hero1(name, dob, age) {
        this.name = name;
        this.dob = dob;
        this.age = age;
    }
})(window.app || (window.app = {}));
