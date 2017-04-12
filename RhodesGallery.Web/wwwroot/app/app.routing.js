"use strict";
var router_1 = require("@angular/router");
var carousel_component_1 = require("./components/carousel.component");
var categories_component_1 = require("./components/categories.component");
var routes = [
    { path: '', component: carousel_component_1.default },
    { path: 'categories', component: categories_component_1.default }
];
exports.appRootRouters = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map