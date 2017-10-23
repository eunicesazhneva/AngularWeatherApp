System.register(["angular2/core", "./profile.service", "./weather/weather.service", "./weather/weather-item"], function(exports_1, context_1) {
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
    var core_1, profile_service_1, weather_service_1, weather_item_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_profileService, _weatherService) {
                    this._profileService = _profileService;
                    this._weatherService = _weatherService;
                }
                SidebarComponent.prototype.onSaveNew = function () {
                    var cities = this._weatherService.getWeatherItems().map(function (element) {
                        return element.cityName;
                    });
                    this._profileService.saveNewProfile(cities);
                };
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    var _this = this;
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherData(profile.cities[i])
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                            _this._weatherService.addWeatherItem(weatherItem);
                        });
                    }
                };
                SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
                    event.stopPropagation();
                    this._profileService.deleteProfile(profile);
                };
                SidebarComponent.prototype.ngOnInit = function () {
                    this.profiles = this._profileService.getProfiles();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n        <h3>Saved Profiles</h3>\n        <button (click)=\"onSaveNew()\">Save List to Profile</button>\n        <article class=\"profile\" *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n            <h4>{{ profile.profileName }}</h4>\n            <p>Cities: {{ profile.cities.join(', ') }}</p>\n            <span class=\"delete\" (click)=\"onDeleteProfile($event, profile)\">X</span>\n        </article>\n    ",
                        styleUrls: ['src/css/sidebar.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUdJLDBCQUFxQixlQUErQixFQUFVLGVBQStCO29CQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBRWpHLG9DQUFTLEdBQVQ7b0JBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxPQUFvQjt3QkFDcEYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFBOUIsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDcEQsS0FBSyxFQUFFOzZCQUNQLFNBQVMsQ0FDTixVQUFBLElBQUk7NEJBQ0EsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDNUYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3JELENBQUMsQ0FDSixDQUFDO29CQUNWLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwwQ0FBZSxHQUFmLFVBQWdCLEtBQVksRUFBRSxPQUFnQjtvQkFDMUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkEvQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGtiQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM5QixDQUFDOztvQ0FBQTtnQkFtQ0YsdUJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELCtDQWtDQyxDQUFBIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLWl0ZW1cIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2lkZWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgzPlNhdmVkIFByb2ZpbGVzPC9oMz5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25TYXZlTmV3KClcIj5TYXZlIExpc3QgdG8gUHJvZmlsZTwvYnV0dG9uPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2ZpbGVcIiAqbmdGb3I9XCIjcHJvZmlsZSBvZiBwcm9maWxlc1wiIChjbGljayk9XCJvbkxvYWRQcm9maWxlKHByb2ZpbGUpXCI+XG4gICAgICAgICAgICA8aDQ+e3sgcHJvZmlsZS5wcm9maWxlTmFtZSB9fTwvaDQ+XG4gICAgICAgICAgICA8cD5DaXRpZXM6IHt7IHByb2ZpbGUuY2l0aWVzLmpvaW4oJywgJykgfX08L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZVwiIChjbGljayk9XCJvbkRlbGV0ZVByb2ZpbGUoJGV2ZW50LCBwcm9maWxlKVwiPlg8L3NwYW4+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL3NpZGViYXIuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb2ZpbGVzOiBQcm9maWxlW107XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLCBwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHt9XG5cbiAgICBvblNhdmVOZXcoKSB7XG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJJdGVtcygpLm1hcChmdW5jdGlvbiAoZWxlbWVudDogV2VhdGhlckl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNpdHlOYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2Uuc2F2ZU5ld1Byb2ZpbGUoY2l0aWVzKTtcbiAgICB9XG5cbiAgICBvbkxvYWRQcm9maWxlKHByb2ZpbGU6IFByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuY2xlYXJXZWF0aGVySXRlbXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmNpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoV2VhdGhlckRhdGEocHJvZmlsZS5jaXRpZXNbaV0pXG4gICAgICAgICAgICAgICAgLnJldHJ5KClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtID0gbmV3IFdlYXRoZXJJdGVtKGRhdGEubmFtZSwgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBkYXRhLm1haW4udGVtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGVQcm9maWxlKGV2ZW50OiBFdmVudCwgcHJvZmlsZTogUHJvZmlsZSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UuZGVsZXRlUHJvZmlsZShwcm9maWxlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlcyA9IHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVzKCk7XG4gICAgfVxufSJdfQ==
