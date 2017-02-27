(function(app) {
    app.Hero = Hero;

    function Hero(name, dob, age, zipcode, city) {
        this.name = name;
        this.dob = dob;
        this.age = age;
        this.city = city;
        this.zipcode = zipcode;
    }
})(window.app || (window.app = {}));
