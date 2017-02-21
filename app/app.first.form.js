(function(app) {
    app.HeroFormComponent = ng.core
        .Component({
            selector: 'hero-form',
            templateUrl: 'app/data-submit-form.html'
        })
        .Class({
            constructor: [function() {
                this.powers = ['Really Smart', 'Super Flexible',
                    'Super Hot', 'Weather Changer'
                ];
                this.model = new app.Hero();
                this.submitted = false;
            }],
            onSubmit: function() {
                this.submitted = true;
                console.log(this.model);
            },
        });
})(window.app || (window.app = {}));
