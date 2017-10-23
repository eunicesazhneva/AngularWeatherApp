System.register(["./profile"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profile_1;
    var ProfileService;
    return {
        setters:[
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default Profile', ['New York', 'London', 'Berlin'])
                    ];
                }
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile ' + this.profiles.length;
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                };
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles.splice(this.profiles.indexOf(profile), 1);
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUNBO2dCQUFBO29CQUNZLGFBQVEsR0FBYzt3QkFDMUIsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDbkUsQ0FBQztnQkFlTixDQUFDO2dCQWJHLHVDQUFjLEdBQWQsVUFBZSxNQUFnQjtvQkFDM0IsSUFBTSxXQUFXLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN0RCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBQ0wscUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDJDQWtCQyxDQUFBIiwiZmlsZSI6InByb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHByb2ZpbGVzOiBQcm9maWxlW10gPSBbXG4gICAgICAgIG5ldyBQcm9maWxlKCdEZWZhdWx0IFByb2ZpbGUnLCBbJ05ldyBZb3JrJywgJ0xvbmRvbicsICdCZXJsaW4nXSlcbiAgICBdO1xuICAgIFxuICAgIHNhdmVOZXdQcm9maWxlKGNpdGllczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZU5hbWUgPSAnUHJvZmlsZSAnICsgdGhpcy5wcm9maWxlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBuZXcgUHJvZmlsZShwcm9maWxlTmFtZSwgY2l0aWVzKTtcbiAgICAgICAgdGhpcy5wcm9maWxlcy5wdXNoKHByb2ZpbGUpO1xuICAgIH1cblxuICAgIGdldFByb2ZpbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlcztcbiAgICB9XG5cbiAgICBkZWxldGVQcm9maWxlKHByb2ZpbGU6IFByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlcy5zcGxpY2UodGhpcy5wcm9maWxlcy5pbmRleE9mKHByb2ZpbGUpLCAxKTtcbiAgICB9XG59Il19
