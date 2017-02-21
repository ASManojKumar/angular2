(function(app) {
    app.Hero = Hero;

    function Hero(id, name, dob, age) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.age = age;
    }
})(window.app || (window.app = {}));
