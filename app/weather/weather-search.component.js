System.register(["angular2/core", "./weather.service", "./weather-item", "rxjs/Subject"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1, weather_item_1, Subject_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSubmit = function () {
                    var weatherItem = new weather_item_1.WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n        <section class=\"weather-search\">\n            <form (ngSubmit)=\"onSubmit()\">\n                <label for=\"city\">City</label>\n                <input ngControl=\"location\" type=\"text\" id=\"city\" (input)=\"onSearchLocation(input.value)\" required #input>\n                <button type=\"submit\">Add City</button>\n            </form>\n            <div>\n                <span class=\"info\">City found:</span> {{data.name}}\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUlJLGdDQUFvQixlQUE4QjtvQkFBOUIsb0JBQWUsR0FBZixlQUFlLENBQWU7b0JBSDFDLGlCQUFZLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7b0JBQzdDLFNBQUksR0FBUSxFQUFFLENBQUM7Z0JBR2YsQ0FBQztnQkFFRCx5Q0FBUSxHQUFSO29CQUNJLElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUVyRCxDQUFDO2dCQUVELGlEQUFnQixHQUFoQixVQUFpQixRQUFlO29CQUM1QixJQUFJLENBQUMsWUFBWTt5QkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQseUNBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWTt5QkFDWixZQUFZLENBQUMsR0FBRyxDQUFDO3lCQUNqQixvQkFBb0IsRUFBRTt5QkFDdEIsU0FBUyxDQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQzt5QkFDMUUsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQ3pCLENBQUM7Z0JBQ1YsQ0FBQztnQkF6Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMGVBV1Q7cUJBQ0osQ0FBQzs7MENBQUE7Z0JBNEJGLDZCQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCwyREEyQkMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vd2VhdGhlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1dlYXRoZXJJdGVtfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW1cIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLXNlYXJjaCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3ZWF0aGVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgKGlucHV0KT1cIm9uU2VhcmNoTG9jYXRpb24oaW5wdXQudmFsdWUpXCIgcmVxdWlyZWQgI2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBDaXR5PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb1wiPkNpdHkgZm91bmQ6PC9zcGFuPiB7e2RhdGEubmFtZX19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgZGF0YTogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTpXZWF0aGVyU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zdCB3ZWF0aGVySXRlbSA9IG5ldyBXZWF0aGVySXRlbSh0aGlzLmRhdGEubmFtZSwgdGhpcy5kYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIHRoaXMuZGF0YS5tYWluLnRlbXApO1xuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbSk7XG5cbiAgICB9XG5cbiAgICBvblNlYXJjaExvY2F0aW9uKGNpdHlOYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgICAgICAgLm5leHQoY2l0eU5hbWUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSgzMDApXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICAgICAgLnN3aXRjaE1hcCgoaW5wdXQ6c3RyaW5nKSA9PiB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YShpbnB1dCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdfQ==
