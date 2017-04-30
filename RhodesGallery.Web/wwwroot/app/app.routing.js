"use strict";
var router_1 = require("@angular/router");
var carousel_component_1 = require("./components/carousel.component");
var categories_component_1 = require("./components/categories.component");
var poems_component_1 = require("./components/poems.component");
var poem_component_1 = require("./components/poem.component");
var biography_component_1 = require("./components/biography.component");
var books_component_1 = require("./components/books.component");
var routes = [
    { path: '', component: carousel_component_1.default },
    { path: 'categories', component: categories_component_1.default },
    { path: 'poems/:id', component: poems_component_1.default },
    { path: 'poem/:id', component: poem_component_1.default },
    { path: 'biography', component: biography_component_1.default },
    { path: 'books', component: books_component_1.default },
    // Admin module invoked lazily
    { path: 'admin', loadChildren: 'app/secured-components/secured.module' }
];
exports.appRootRouters = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map