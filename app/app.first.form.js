(function(app) {
    app.HeroFormComponent = ng.core
        .Component({
            selector: 'hero-form',
            templateUrl: 'app/data-submit-form.html'
        })
        .Class({
            constructor: [function() {
                this.model = new app.Hero();
                this.submitted = false;
                this.secondSubmitted = false;
            }],
            onSubmit: function() {
                this.submitted = true;
                this.model.newDate = this.model.dob.formatted;
                this.cities = ['Bangalore', 'Delhi', 'Noida'];
            },
            secondSubmit: function() {
                this.submitted = false;
                this.secondSubmitted = true;
            },
            secondConstructor: [function() {
                this.secondModel = new app.Hero1();
            }],
        });
})(window.app || (window.app = {}));
