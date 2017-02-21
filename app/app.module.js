(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                ng.MyDatePickerModule
            ],
            declarations: [
                app.AppComponent,
                app.HeroFormComponent
            ],
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
