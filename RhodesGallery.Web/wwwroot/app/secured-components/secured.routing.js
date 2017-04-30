"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var securedRoutes = [
    { path: '', component: login_component_1.default }
];
exports.appSecuredRoutes = router_1.RouterModule.forChild(securedRoutes);
//# sourceMappingURL=secured.routing.js.map