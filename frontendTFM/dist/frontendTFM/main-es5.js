(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n        <div><a href=\"#\" class=\"navbar-brand\">Proyecto</a></div>\r\n         <!--boton asociado con collapse como indica data-toggle. La clase collapse navbar-collapse indica que parte estará oculta en el navbar para tamaños inferiores a lg-->\r\n        <button class=\"navbar-toggler navbar-dark\" type=\"button\" data-toggle=\"collapse\"  data-target=\"#navigation\"  aria-expanded=\"false\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navigation\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n            <!--En el navbar se muestran todas las opciones de la aplicación-->\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#inicio\">Inicio</a>\r\n            </li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#evaluaciones\"> Evaluaciones</a></li>\r\n            <li>\r\n                <a class=\"nav-link\" href=\"#\" (click)=logOut()>Logout</a>\r\n            </li>  \r\n        </ul>\r\n        </div>\r\n    </nav>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/constructos/constructos.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/constructos/constructos.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Constructos</h1>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardarConstructos()\">\r\n            <div *ngIf=\"bConstructosIniciados\">\r\n                <div class=\"form-group\" *ngFor='let num of [0,1,2,3,4,5,6,7,8,9,10,11,12,13]'>\r\n                    <label for=\"'constructos'+num\">{{this.usuarioRejilla.constructos[num].txtpregunta}} </label>\r\n\r\n                    <div *ngIf=\"this.usuarioRejilla.constructos[num].tipopregunta == 'Parecidos'\">\r\n                        <p>{{this.usuarioRejilla.constructos[num].preguntaAux1}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"constructos+{{num}}\"\r\n                            [(ngModel)]=\"this.usuarioRejilla.poloIzquierdo[num]\" autocomplete=\"off\" required>\r\n\r\n                        <p>{{this.usuarioRejilla.constructos[num].preguntaAux2}}\r\n                            {{this.usuarioRejilla.poloIzquierdo[num]}}:</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{num}}\"\r\n                            [(ngModel)]=\"this.usuarioRejilla.poloDerecho[num]\" autocomplete=\"off\" required>\r\n                        <br>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"this.usuarioRejilla.constructos[num].tipopregunta == 'Diferencias'\">\r\n                        <p>{{this.usuarioRejilla.constructos[num].preguntaAux1}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloIzquierdo+{{num}}\"\r\n                            [(ngModel)]=\"this.usuarioRejilla.poloIzquierdo[num]\" autocomplete=\"off\" required>\r\n\r\n                        <p>{{this.usuarioRejilla.constructos[num].preguntaAux2}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{num}}\"\r\n                            [(ngModel)]=\"this.usuarioRejilla.poloDerecho[num]\" autocomplete=\"off\" required>\r\n                        <br>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar Constructos</button>\r\n                <div *ngIf=\"f.submitted\" class=\"alert alert-danger mt-3\">Debe de introducir todos los\r\n                    constructos\r\n                </div>\r\n            </div>\r\n\r\n            <!-- \r\n            <div class=\"form-group\" *ngIf=\"varAux<= 13\">\r\n                <label for=\"constructos+{{varAux}}\">{{constructos[varAux].txtpregunta}} </label>\r\n                <div *ngIf=\"parecidos\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"constructos+{{varAux}}\"\r\n                        [(ngModel)]=\"poloIzquierdo[varAux]\" autocomplete=\"off\" required>\r\n                </div>\r\n                <div *ngIf=\"!segundaPregunta\">\r\n                    <button class=\"btn btn-dark\" (click)=incrementarVar() [disabled]=\"!f.valid\">Siguiente</button>\r\n                </div>\r\n\r\n                <div *ngIf=\"segundaPregunta\">\r\n                    <div *ngIf=\"parecidos\">\r\n                        <p>{{preguntasPolos[this.varAux].preg1}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{varAux}}\"\r\n                            [(ngModel)]=\"poloDerecho[varAux]\" autocomplete=\"off\" required>\r\n                        <button class=\"btn btn-dark\" (click)=incrementarVar() [disabled]=\"!f.valid\">Siguiente</button>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"diferencias\">\r\n                        <p>{{preguntasPolos[this.varAux].preg1}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloIzquierdo+{{varAux}}\"\r\n                            [(ngModel)]=\"poloIzquierdo[varAux]\" autocomplete=\"off\" required>\r\n                        <p>{{preguntasPolos[this.varAux].preg2}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{varAux}}\"\r\n                            [(ngModel)]=\"poloDerecho[varAux]\" autocomplete=\"off\" required>\r\n                        <button *ngIf=\"varAux!= 13\" class=\"btn btn-dark\" (click)=incrementarVar()\r\n                            [disabled]=\"!f.valid\">Siguiente</button>\r\n                    </div>\r\n                </div>                \r\n            </div>\r\n\r\n            <div *ngIf=\"varAux===13\" class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar Constructos</button>\r\n                <div *ngIf=\"f.submitted\" class=\"alert alert-danger mt-3\">Debe de introducir todos los\r\n                    elementos\r\n                </div>\r\n            </div>\r\n            -->\r\n        </form>\r\n\r\n\r\n\r\n        <!-- <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardarConstructos()\">\r\n            <div class=\"form-group\" *ngIf=\"varAux<= 13\">\r\n                <label for=\"constructos+{{varAux}}\">{{constructos[varAux].txtpregunta}} </label>\r\n                <div *ngIf=\"parecidos\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"constructos+{{varAux}}\"\r\n                        [(ngModel)]=\"poloIzquierdo[varAux]\" autocomplete=\"off\" required>\r\n                </div>\r\n                <div *ngIf=\"!segundaPregunta\">\r\n                    <button class=\"btn btn-dark\" (click)=incrementarVar() [disabled]=\"!f.valid\">Siguiente</button>\r\n                </div>\r\n\r\n                <div *ngIf=\"segundaPregunta\">\r\n                    <div *ngIf=\"parecidos\">\r\n                        <p>{{preguntasPolos[this.varAux].preg1}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{varAux}}\"\r\n                            [(ngModel)]=\"poloDerecho[varAux]\" autocomplete=\"off\" required>\r\n                        <button class=\"btn btn-dark\" (click)=incrementarVar() [disabled]=\"!f.valid\">Siguiente</button>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"diferencias\">\r\n                        <p>{{preguntasPolos[this.varAux].preg1}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloIzquierdo+{{varAux}}\"\r\n                            [(ngModel)]=\"poloIzquierdo[varAux]\" autocomplete=\"off\" required>\r\n                        <p>{{preguntasPolos[this.varAux].preg2}}</p>\r\n                        <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{varAux}}\"\r\n                            [(ngModel)]=\"poloDerecho[varAux]\" autocomplete=\"off\" required>\r\n                        <button *ngIf=\"varAux!= 13\" class=\"btn btn-dark\" (click)=incrementarVar()\r\n                            [disabled]=\"!f.valid\">Siguiente</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"varAux===13\" class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar Constructos</button>\r\n                <div *ngIf=\"f.submitted\" class=\"alert alert-danger mt-3\">Debe de introducir todos los\r\n                    elementos\r\n                </div>\r\n            </div>\r\n        </form> -->\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/elementos/elementos.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elementos/elementos.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">Elementos</h1>\r\n<div class=\"card\">\r\n   <div class=\"card-body\">\r\n      <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardar()\">\r\n         <div class=\"form-group\" *ngFor='let num of [2,3,4,5,6,7,8,9,10]'>\r\n            <label for=\"'elemento'+num\">{{this.usuarioDatos.rejilla.elementos[num].descripcion}} </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"elemento+{{num}}\"\r\n               [(ngModel)]=\"this.usuarioDatos.rejilla.elementos['nombre'+num]\" autocomplete=\"off\" required>\r\n            <label for=\"'descripcion'+num\">Descripción:</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"descripcion+{{num}}\"\r\n               [(ngModel)]=\"this.usuarioDatos.rejilla.elementos['descripcionUsuario'+num]\" autocomplete=\"off\">\r\n         </div>\r\n\r\n         <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar elementos</button>\r\n            <div *ngIf=\"f.submitted\" class=\"alert alert-danger mt-3\">Debe de introducir todos los\r\n               elementos\r\n            </div>\r\n         </div>\r\n      </form>\r\n   </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-lg-6\" id=\"logincont\">\r\n   <h1 class=\"text-center\">Inicio de Sesión</h1>\r\n   <div class=\"card\">\r\n      <div class=\"card-body\">\r\n         <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onLogin()\">\r\n            <div class=\"form-group\">\r\n               <label for=\"nombreUsuario\">Nombre de Usuario: </label>\r\n               <input type=\"text\" class=\"form-control\" name=\"nombreusuario\" [(ngModel)]=\"form.nombreUsuario\"\r\n                  autocomplete=\"off\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <label for=\"password\">Contraseña: </label>\r\n               <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\"\r\n                  autocomplete=\"off\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Iniciar sesión</button>\r\n               <div *ngIf=\"f.submitted && isLoginFail\" class=\"alert alert-danger mt-3\">Usuario o contraseña incorrectos.\r\n               </div>\r\n            </div>\r\n         </form>\r\n      </div>\r\n   </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"authority === 'admin'\">\r\n  <app-admin></app-admin>\r\n</div>\r\n<div *ngIf=\"authority === 'user'\">\r\n  <!-- <app-user></app-user> -->\r\n  <app-user2></app-user2>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-rejilla/mostrar-rejilla.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-rejilla/mostrar-rejilla.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 col-md-10\">\r\n  <div class=\"table-responsive\">\r\n     <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardarPuntuaciones()\">  \r\n      <table class=\"table table-bordered table-hover table-sm\" id=\"resultadoRejilla\" >\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Orden</th>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\">Polo izquierdo</th>\r\n          <th scope=\"col\">Polo derecho</th>\r\n          <th scope=\"col\" *ngFor='let num of [0,1,2,3,4,5,6,7,8,9,10,11]' ><p class=\"vertical\">{{elementosUsuario[num].nombre}}</p></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n         \r\n                 \r\n       <tr *ngFor='let num1 of [0,1,2,3,4,5,6,7,8,9,10,11,12,13]'>\r\n          <td><input type=\"text\" class=\"form-control\" name=\"ordenConstructos+{{num1}}\" [(ngModel)]=\"ordenConstructos[num1]\"\r\n              autocomplete=\"off\" required></td>\r\n          <td scope=\"row\">{{num1+1}}</td>\r\n          <td>{{polosUsuario[num1].txtpoloizq}}</td>\r\n          <td>{{polosUsuario[num1].txtpoloder}}</td>\r\n        <td  *ngFor='let aux of [0,1,2,3,4,5,6,7,8,9,10,11]'><input type=\"text\" class=\"form-control\" name=\"puntuacion+{{num1}}+{{aux}}\" [(ngModel)]=\"puntuaciones[num1][aux]\"\r\n                  autocomplete=\"off\" required></td>\r\n       </tr>\r\n        \r\n      </tbody>\r\n    </table>\r\n   <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar Puntuaciones</button>\r\n        </form>\r\n  </div>\r\n  </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/puntuar-rejilla/puntuar-rejilla.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/puntuar-rejilla/puntuar-rejilla.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 col-md-10\">\r\n    <div class=\"table-responsive\">\r\n       <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardarPuntuaciones()\">  \r\n        <table class=\"table table-bordered table-hover table-sm\" id=\"resultadoRejilla\" >\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Orden</th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\">Polo izquierdo</th>\r\n            <th scope=\"col\">Polo derecho</th>\r\n            <th scope=\"col\" *ngFor='let num of [0,1,2,3,4,5,6,7,8,9,10,11]' ><p class=\"vertical\">{{elementosUsuario[num].nombre}}</p></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n           \r\n                   \r\n         <tr *ngFor='let num1 of [0,1,2,3,4,5,6,7,8,9,10,11,12,13]'>\r\n            <td><input type=\"text\" class=\"form-control\" name=\"ordenConstructos+{{num1}}\" [(ngModel)]=\"ordenConstructos[num1]\"\r\n                autocomplete=\"off\" required></td>\r\n            <td scope=\"row\">{{num1+1}}</td>\r\n            <td>{{polosUsuario[num1].txtpoloizq}}</td>\r\n            <td>{{polosUsuario[num1].txtpoloder}}</td>\r\n          <td  *ngFor='let aux of [0,1,2,3,4,5,6,7,8,9,10,11]'><input type=\"text\" class=\"form-control\" name=\"puntuacion+{{num1}}+{{aux}}\" [(ngModel)]=\"puntuaciones[num1][aux]\"\r\n                    autocomplete=\"off\" required></td>\r\n         </tr>\r\n          \r\n        </tbody>\r\n      </table>\r\n     <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar Puntuaciones</button>\r\n          </form>\r\n    </div>\r\n    </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n   <div><a href=\"#\" class=\"navbar-brand\">Proyecto</a></div>\r\n   <!--boton asociado con collapse como indica data-toggle. La clase collapse navbar-collapse indica que parte estará oculta en el navbar para tamaños inferiores a lg-->\r\n   <button class=\"navbar-toggler navbar-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\r\n      aria-expanded=\"false\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n   </button>\r\n   <div class=\"collapse navbar-collapse\" id=\"navigation\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n         <!--En el navbar se muestran todas las opciones de la aplicación-->\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#inicio\">Inicio</a>\r\n         </li>\r\n         <li class=\"nav-item\"><a class=\"nav-link\" href=\"#nuevaeva\" data-toggle=\"modal\" data-target=\"#nuevaEvaluacion\">\r\n               Nueva evaluación</a></li>\r\n         <li class=\"nav-item\"><a class=\"nav-link\" href=\"#repetireva\"> Repetir evaluación</a></li>\r\n         <li>\r\n            <a class=\"nav-link\" href=\"#\" (click)=logOut()>Logout</a>\r\n         </li>\r\n      </ul>\r\n   </div>\r\n</nav>\r\n\r\n\r\n<!-- <app-mostrar-rejilla></app-mostrar-rejilla>-->\r\n<div *ngIf=\"rejillaIniciada\" class=\"container col-lg-10\">\r\n   <h1 class=\"text-center\">Elementos</h1>\r\n   <div class=\"card\">\r\n      <div class=\"card-body\">\r\n         <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardar()\">\r\n            <div class=\"form-group\" *ngFor='let num of [3,4,5,6,7,8,9,10,11]'>\r\n               <label for=\"'elemento'+num\">{{elementos[num-1].descripcion}} </label>\r\n               <input type=\"text\" class=\"form-control\" name=\"elemento+{{num}}\" [(ngModel)]=\"elementos['nombre'+num]\"\r\n                  autocomplete=\"off\" required>\r\n               <label for=\"'descripcion'+num\">Descripción:</label>\r\n               <input type=\"text\" class=\"form-control\" name=\"descripcion+{{num}}\"\r\n                  [(ngModel)]=\"elementos['descripcionUsuario'+num]\" autocomplete=\"off\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n               <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar elementos</button>\r\n               <div *ngIf=\"f.submitted\" class=\"alert alert-danger mt-3\">Debe de introducir todos los\r\n                  elementos\r\n               </div>\r\n            </div>\r\n         </form>\r\n      </div>\r\n   </div>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"mostrarConstructos\" class=\"container col-lg-10\">\r\n   <h1 class=\"text-center\">Constructos</h1>\r\n   <div class=\"card\">\r\n      <div class=\"card-body\">\r\n         <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"guardarConstructos()\">\r\n            <div class=\"form-group\" *ngIf=\"varAux<= 13\">\r\n               <label for=\"constructos+{{varAux}}\">{{constructos[varAux].txtpregunta}} </label>\r\n               <div *ngIf=\"parecidos\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"constructos+{{varAux}}\"\r\n                     [(ngModel)]=\"poloIzquierdo[varAux]\" autocomplete=\"off\" required>\r\n               </div>\r\n               <div *ngIf=\"!segundaPregunta\">\r\n                  <button class=\"btn btn-dark\" (click)=incrementarVar() [disabled]=\"!f.valid\">Siguiente</button>\r\n               </div>\r\n\r\n               <div *ngIf=\"segundaPregunta\">\r\n                  <div *ngIf=\"parecidos\">\r\n                     <p>{{preguntasPolos[this.varAux].preg1}}</p>\r\n                     <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{varAux}}\"\r\n                        [(ngModel)]=\"poloDerecho[varAux]\" autocomplete=\"off\" required>\r\n                     <button class=\"btn btn-dark\" (click)=incrementarVar() [disabled]=\"!f.valid\">Siguiente</button>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"diferencias\">\r\n                     <p>{{preguntasPolos[this.varAux].preg1}}</p>\r\n                     <input type=\"text\" class=\"form-control\" name=\"poloIzquierdo+{{varAux}}\"\r\n                        [(ngModel)]=\"poloIzquierdo[varAux]\" autocomplete=\"off\" required>\r\n                     <p>{{preguntasPolos[this.varAux].preg2}}</p>\r\n                     <input type=\"text\" class=\"form-control\" name=\"poloDerecho+{{varAux}}\"\r\n                        [(ngModel)]=\"poloDerecho[varAux]\" autocomplete=\"off\" required>\r\n                     <button *ngIf=\"varAux!= 13\" class=\"btn btn-dark\" (click)=incrementarVar()\r\n                        [disabled]=\"!f.valid\">Siguiente</button>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"varAux===13\" class=\"form-group\">\r\n               <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!f.valid\">Guardar Constructos</button>\r\n               <div *ngIf=\"f.submitted\" class=\"alert alert-danger mt-3\">Debe de introducir todos los\r\n                  elementos\r\n               </div>\r\n            </div>\r\n         </form>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"puntuarRejilla\">\r\n   <app-puntuar-rejilla></app-puntuar-rejilla>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"nuevaEvaluacion\" tabindex=\"-1\" role=\"dialog\">\r\n   <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"modificarDatos\">Nueva evaluación</h5>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <table>\r\n               <tr>\r\n                  <td align=\"justify\" colspan=\"10\">A continuación iniciará una nueva evaluación. En primer lugar deberá\r\n                     rellenar los 12 elementos que se le piden.\r\n                  </td>\r\n               </tr>\r\n               <tr>\r\n                  <td colspan=\"2\" align=\"left\">\r\n                     <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">Cerrar</button>\r\n                  </td>\r\n                  <td colspan=\"6\"></td>\r\n                  <td colspan=\"2\" align=\"right\">\r\n                     <button type=\"button\" (click)=\"iniciarRejilla()\" id=\"guardarcambios\" data-dismiss=\"modal\"\r\n                        class=\"btn btn-dark\">Continuar</button>\r\n                  </td>\r\n               </tr>\r\n            </table>\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user2/user2.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user2/user2.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n   <div><a href=\"#\" class=\"navbar-brand\">Proyecto</a></div>\r\n   <!--boton asociado con collapse como indica data-toggle. La clase collapse navbar-collapse indica que parte estará oculta en el navbar para tamaños inferiores a lg-->\r\n   <button class=\"navbar-toggler navbar-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\r\n      aria-expanded=\"false\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n   </button>\r\n   <div class=\"collapse navbar-collapse\" id=\"navigation\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n         <!--En el navbar se muestran todas las opciones de la aplicación-->\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#inicio\">Inicio</a>\r\n         </li>\r\n         <li class=\"nav-item\"><a class=\"nav-link\" href=\"#nuevaeva\" data-toggle=\"modal\" data-target=\"#nuevaEvaluacion\">\r\n               Nueva evaluación</a></li>\r\n         <li class=\"nav-item\"><a class=\"nav-link\" href=\"#repetireva\"> Repetir evaluación</a></li>\r\n         <li>\r\n            <a class=\"nav-link\" href=\"#\" (click)=logOut()>Logout</a>\r\n         </li>\r\n      </ul>\r\n   </div>\r\n</nav>\r\n\r\n\r\n<div id=\"inicio\">\r\n   <h1>Resultado Evaluaciones</h1>\r\n   <label>Lista de Rejillas</label>\r\n   <div *ngFor=\"let info of resultadoRejillas\">\r\n\r\n      <p class=\"principal\"> {{info.idrejilla}} <mat-icon (click)=toggleDisplay(info.idrejilla)\r\n            class=\"mat-icon-rtl-mirror\">{{info.idrejilla}} {{info.isShow ? 'chevron_right' : 'expand_more'}} </mat-icon>\r\n      </p>\r\n\r\n      <div id=\"segundaRama\" [hidden]=\"info.isShow\">\r\n         <p id=\"resumen\">Resumen rejilla</p>\r\n         <p class=\"elementoResumen\">Elementos<mat-icon (click)=showElementos(info.idrejilla)\r\n               class=\"mat-icon-rtl-mirror\">{{info.idrejilla}} {{info.isShowElementos? 'chevron_right' : 'expand_more'}}\r\n            </mat-icon>\r\n         </p>\r\n         <div [hidden]=\"info.isShowElementos\" *ngFor=\"let elemento of info.elementos\">\r\n            <p class=\"resumen\">Elemento</p>\r\n            <p class=\"resultadoResumen\">Nombre Elemento:</p>\r\n            <p class=\"resultadoResumen\">{{elemento.nombreelemento}}</p>\r\n            <p class=\"resultadoResumen\">Rol Elemento:</p>\r\n            <p class=\"resultadoResumen\">{{elemento.rolelemento}}</p>\r\n         </div>\r\n         <p class=\"elementoResumen\">Constructos <mat-icon (click)=showConstructos(info.idrejilla)\r\n               class=\"mat-icon-rtl-mirror\">{{info.idrejilla}}\r\n               {{info.isShowConstructos ? 'chevron_right' : 'expand_more'}} </mat-icon>\r\n         </p>\r\n         <div [hidden]=\"info.isShowConstructos\" *ngFor=\"let constructo of info.constructos\">\r\n            <p class=\"resultadoResumen\">Constructo</p>\r\n            <p class=\"resultadoResumen\">{{constructo.idconstructo}}</p>\r\n            <p class=\"resultadoResumen\">Polo izquierdo</p>\r\n            <p class=\"resultadoResumen\">{{constructo.txtpoloizq}}</p>\r\n            <p class=\"resultadoResumen\">Polo derecho</p>\r\n            <p class=\"resultadoResumen\">{{constructo.txtpoloder}}</p>\r\n         </div>\r\n         <p class=\"elementoResumen\">Fecha Inicio</p>\r\n         <p class=\"resultadoResumen\">{{info.fechahora}}</p>\r\n         <p class=\"elementoResumen\">Fecha Finalización</p>\r\n         <p class=\"resultadoResumen\">{{info.fechahorafin}}</p>\r\n         <p class=\"elementoResumen\">Comentario </p>\r\n         <p class=\"resultadoResumen\">{{info.comentariopaciente}}</p>\r\n         <p class=\"elementoResumen\">Evaluaciones </p>\r\n         <div *ngFor=\"let evaluacion of  info.evaluaciones\">\r\n            <p (click)=showRejillaCompleta(info.idrejilla) class=\"resultadoResumen\">\r\n               {{evaluacion.idevaluacion}} </p>\r\n            <div *ngIf=\"mostrarEvaluacion\">\r\n               <app-mostrar-rejilla></app-mostrar-rejilla>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"bMostrarElementos\">\r\n   <app-elementos [bModo_test]=\"this.modo_test\" [usuarioDatos]=\"this.usuarioDatos\"\r\n      (emitterOutputComponente)=\"obtenerSalidaElementosComponent($event)\">\r\n   </app-elementos>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"bMostrarConstructos\">\r\n   <app-constructos [bModo_test]=\"this.modo_test\" [usuarioRejilla]=\"this.usuarioDatos.rejilla\"\r\n      (emitterOutputComponente)=\"obtenerSalidaConstructosComponent($event)\">\r\n   </app-constructos>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"bPuntuarRejilla\">\r\n   <app-puntuar-rejilla></app-puntuar-rejilla>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"nuevaEvaluacion\" tabindex=\"-1\" role=\"dialog\">\r\n   <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"modificarDatos\">Nueva evaluación</h5>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <table>\r\n               <tr>\r\n                  <td align=\"justify\" colspan=\"10\">A continuación iniciará una nueva evaluación. En primer lugar\r\n                     deberá\r\n                     rellenar los 12 elementos que se le piden.\r\n                  </td>\r\n               </tr>\r\n               <tr>\r\n                  <td colspan=\"2\" align=\"left\">\r\n                     <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">Cerrar</button>\r\n                  </td>\r\n                  <td colspan=\"6\"></td>\r\n                  <td colspan=\"2\" align=\"right\">\r\n                     <button type=\"button\" (click)=\"iniciarRejilla()\" id=\"guardarcambios\" data-dismiss=\"modal\"\r\n                        class=\"btn btn-dark\">Continuar</button>\r\n                  </td>\r\n               </tr>\r\n            </table>\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/admin/admin.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/admin/admin.component.ts ***!
          \******************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(tokenService, router) {
                    this.tokenService = tokenService;
                    this.router = router;
                }
                AdminComponent.prototype.ngOnInit = function () { };
                AdminComponent.prototype.logOut = function () {
                    this.tokenService.sesion_logOut();
                    this.router.navigate(['login']);
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
            var routes = [
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
                { path: '**', redirectTo: 'login', pathMatch: 'full' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'frontendTFM';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
            /* harmony import */ var _interceptors_rejilla_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/rejilla-interceptor.service */ "./src/app/interceptors/rejilla-interceptor.service.ts");
            /* harmony import */ var _mostrar_rejilla_mostrar_rejilla_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mostrar-rejilla/mostrar-rejilla.component */ "./src/app/mostrar-rejilla/mostrar-rejilla.component.ts");
            /* harmony import */ var _constructos_constructos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constructos/constructos.component */ "./src/app/constructos/constructos.component.ts");
            /* harmony import */ var _puntuar_rejilla_puntuar_rejilla_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./puntuar-rejilla/puntuar-rejilla.component */ "./src/app/puntuar-rejilla/puntuar-rejilla.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _elementos_elementos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elementos/elementos.component */ "./src/app/elementos/elementos.component.ts");
            /* harmony import */ var _user2_user2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user2/user2.component */ "./src/app/user2/user2.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                        _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                        _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                        _mostrar_rejilla_mostrar_rejilla_component__WEBPACK_IMPORTED_MODULE_11__["MostrarRejillaComponent"],
                        _constructos_constructos_component__WEBPACK_IMPORTED_MODULE_12__["ConstructosComponent"],
                        _puntuar_rejilla_puntuar_rejilla_component__WEBPACK_IMPORTED_MODULE_13__["PuntuarRejillaComponent"],
                        _elementos_elementos_component__WEBPACK_IMPORTED_MODULE_15__["ElementosComponent"],
                        _user2_user2_component__WEBPACK_IMPORTED_MODULE_16__["User2Component"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_18__["MatTreeModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
                    ],
                    providers: [_interceptors_rejilla_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["interceptorProvider"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/constructos/constructos.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/constructos/constructos.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN0cnVjdG9zL2NvbnN0cnVjdG9zLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/constructos/constructos.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/constructos/constructos.component.ts ***!
          \******************************************************/
        /*! exports provided: ConstructosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructosComponent", function () { return ConstructosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_polos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/polos */ "./src/app/models/polos.ts");
            /* harmony import */ var _services_rejilla_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rejilla.service */ "./src/app/services/rejilla.service.ts");
            /* harmony import */ var _services_constructos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constructos.service */ "./src/app/services/constructos.service.ts");
            var ConstructosComponent = /** @class */ (function () {
                function ConstructosComponent(rejillaService, constructosService) {
                    this.rejillaService = rejillaService;
                    this.constructosService = constructosService;
                    this.emitterOutputComponente = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    // constructos: Constructos[];
                    // polos: Array<Polos> = [];
                    // poloIzquierdo: Array<string> = [];
                    // poloDerecho: Array<string> = [];
                    this.bConstructosIniciados = false;
                    this.yer_cont_log = 0;
                    console.log("YERAY-LOG - ConstructosComponent-constructor() - " + (++this.yer_cont_log).toString());
                }
                ConstructosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("YERAY-LOG - ConstructosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
                    this.rejillaService.backend_getConstructos().subscribe(function (data) {
                        console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-data - " + (++_this.yer_cont_log).toString());
                        console.log(data);
                        _this.usuarioRejilla.constructos = data;
                        _this.rejillaService.sesion_setConstructos(_this.usuarioRejilla.constructos);
                        console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-elementosUsuario - " + (++_this.yer_cont_log).toString());
                        console.log(_this.usuarioRejilla.elementosUsuario);
                        console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-constructos - " + (++_this.yer_cont_log).toString());
                        console.log(_this.usuarioRejilla.constructos);
                        console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-idRejilla - " + (++_this.yer_cont_log).toString());
                        console.log(_this.usuarioRejilla.idRejilla);
                        _this.inicializarContructos();
                        _this.bConstructosIniciados = true;
                    }, function (err) {
                    });
                };
                ConstructosComponent.prototype.inicializarContructos = function () {
                    console.log("YERAY-LOG - ConstructosComponent-inicializarContructos() - " + (++this.yer_cont_log).toString());
                    //Reemplazamos en los constructos los nombres reales de los elementos indicados por el paciente
                    for (var i = 0; i < 14; i++) {
                        this.usuarioRejilla.constructos[i].txtpregunta = this.usuarioRejilla.constructos[i].txtpregunta.replace("#1", this.usuarioRejilla.elementosUsuario[this.usuarioRejilla.constructos[i].idelemento1].nombre);
                        this.usuarioRejilla.constructos[i].txtpregunta = this.usuarioRejilla.constructos[i].txtpregunta.replace("#2", this.usuarioRejilla.elementosUsuario[this.usuarioRejilla.constructos[i].idelemento2].nombre);
                        switch (this.usuarioRejilla.constructos[i].tipopregunta.toUpperCase()) {
                            case "PARECIDOS": {
                                this.usuarioRejilla.constructos[i].preguntaAux1 = "";
                                this.usuarioRejilla.constructos[i].preguntaAux2 = "Que es para ti lo opuesto a...";
                                break;
                            }
                            case "DIFERENCIAS": {
                                this.usuarioRejilla.constructos[i].preguntaAux1 = "Nos diferenciamos en que yo soy:";
                                this.usuarioRejilla.constructos[i].preguntaAux2 = "y el/ella es:";
                                break;
                            }
                        }
                        //Si estamos en modo test
                        if (this.bModo_test) {
                            this.usuarioRejilla.poloIzquierdo[i] = 'val_test_poloIzq_' + i;
                            this.usuarioRejilla.poloDerecho[i] = 'val_test_poloDer_' + i;
                        }
                        this.usuarioRejilla.polos[i] = new _models_polos__WEBPACK_IMPORTED_MODULE_2__["Polos"](this.usuarioRejilla.idRejilla, i, this.usuarioRejilla.poloIzquierdo[i], this.usuarioRejilla.poloDerecho[i]);
                    }
                    console.log(this.usuarioRejilla.constructos);
                    console.log(this.usuarioRejilla.poloIzquierdo);
                    console.log(this.usuarioRejilla.poloDerecho);
                    console.log(this.usuarioRejilla.polos);
                };
                ConstructosComponent.prototype.guardarConstructos = function () {
                    console.log("YERAY-LOG - ConstructosComponent-guardarConstructos() - " + (++this.yer_cont_log).toString());
                    console.log(this.usuarioRejilla.polos);
                    this.constructosService.sesion_setConstructosUsuario(this.usuarioRejilla.polos);
                    this.constructosService.sesion_setElementosUsuario(this.usuarioRejilla.elementosUsuario);
                    //ykk - Enviar constructos y elementos al back
                    this.emitterOutputComponente.emit({ bPuntuarRejilla: true });
                };
                return ConstructosComponent;
            }());
            ConstructosComponent.ctorParameters = function () { return [
                { type: _services_rejilla_service__WEBPACK_IMPORTED_MODULE_3__["RejillaService"] },
                { type: _services_constructos_service__WEBPACK_IMPORTED_MODULE_4__["ConstructosService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConstructosComponent.prototype, "bModo_test", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConstructosComponent.prototype, "usuarioRejilla", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ConstructosComponent.prototype, "emitterOutputComponente", void 0);
            ConstructosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-constructos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./constructos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/constructos/constructos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./constructos.component.css */ "./src/app/constructos/constructos.component.css")).default]
                })
            ], ConstructosComponent);
            /***/ 
        }),
        /***/ "./src/app/elementos/elementos.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/elementos/elementos.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9lbGVtZW50b3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/elementos/elementos.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/elementos/elementos.component.ts ***!
          \**************************************************/
        /*! exports provided: ElementosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementosComponent", function () { return ElementosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/elementos-usuario */ "./src/app/models/elementos-usuario.ts");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            /* harmony import */ var _services_rejilla_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rejilla.service */ "./src/app/services/rejilla.service.ts");
            var ElementosComponent = /** @class */ (function () {
                function ElementosComponent(tokenService, rejillaService) {
                    this.tokenService = tokenService;
                    this.rejillaService = rejillaService;
                    this.emitterOutputComponente = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.yer_cont_log = 0;
                }
                ElementosComponent.prototype.ngOnInit = function () {
                    console.log("YERAY-LOG - ElementosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
                    //Si no se hace esto da un error raro
                    this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementosEvaluacion();
                    this.inicializarRejilla();
                };
                ElementosComponent.prototype.inicializarRejilla = function () {
                    var _this = this;
                    console.log("YERAY-LOG - ElementosComponent-inicializarRejilla() - " + (++this.yer_cont_log).toString());
                    this.rejillaService.backend_getElementos().subscribe(function (data) {
                        _this.usuarioDatos.rejilla.elementos = data;
                        console.log(data);
                        _this.rellenar_modo_test();
                        _this.rejillaService.sesion_setElementos(_this.usuarioDatos.rejilla.elementos);
                        console.log(_this.usuarioDatos.rejilla.elementos);
                    }, function (err) {
                        console.log("YERAY-LOG - error");
                    });
                };
                ElementosComponent.prototype.guardar = function () {
                    console.log("YERAY-LOG - ElementosComponent-guardar() - " + (++this.yer_cont_log).toString());
                    this.usuarioDatos.rejilla.elementosUsuario[0] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"]("Yo actual", null);
                    this.usuarioDatos.rejilla.elementosUsuario[1] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"]("Yo dentro de dos años", null);
                    this.usuarioDatos.rejilla.elementosUsuario[2] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre2, this.usuarioDatos.rejilla.elementos.descripcionUsuario2);
                    this.usuarioDatos.rejilla.elementosUsuario[3] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre3, this.usuarioDatos.rejilla.elementos.descripcionUsuario3);
                    this.usuarioDatos.rejilla.elementosUsuario[4] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre4, this.usuarioDatos.rejilla.elementos.descripcionUsuario4);
                    this.usuarioDatos.rejilla.elementosUsuario[5] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre5, this.usuarioDatos.rejilla.elementos.descripcionUsuario5);
                    this.usuarioDatos.rejilla.elementosUsuario[6] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre6, this.usuarioDatos.rejilla.elementos.descripcionUsuario6);
                    this.usuarioDatos.rejilla.elementosUsuario[7] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre7, this.usuarioDatos.rejilla.elementos.descripcionUsuario7);
                    this.usuarioDatos.rejilla.elementosUsuario[8] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre8, this.usuarioDatos.rejilla.elementos.descripcionUsuario8);
                    this.usuarioDatos.rejilla.elementosUsuario[9] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre9, this.usuarioDatos.rejilla.elementos.descripcionUsuario9);
                    this.usuarioDatos.rejilla.elementosUsuario[10] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"](this.usuarioDatos.rejilla.elementos.nombre10, this.usuarioDatos.rejilla.elementos.descripcionUsuario10);
                    this.usuarioDatos.rejilla.elementosUsuario[11] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_2__["ElementosUsuario"]("Yo ideal", null);
                    this.emitterOutputComponente.emit({ bMostrarConstructos: true, elementosUsuario: this.usuarioDatos.rejilla.elementosUsuario });
                };
                //Para hacer pruebas, usamos este método que rellena todo de forma automática
                ElementosComponent.prototype.rellenar_modo_test = function () {
                    if (this.bModo_test) {
                        for (var i = 0; i <= 11; i++) {
                            this.usuarioDatos.rejilla.elementos['nombre' + i] = 'nombre_' + i;
                            this.usuarioDatos.rejilla.elementos['descripcionUsuario' + i] = 'nombre_' + i;
                        }
                    }
                };
                return ElementosComponent;
            }());
            ElementosComponent.ctorParameters = function () { return [
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
                { type: _services_rejilla_service__WEBPACK_IMPORTED_MODULE_4__["RejillaService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ElementosComponent.prototype, "bModo_test", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ElementosComponent.prototype, "usuarioDatos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ElementosComponent.prototype, "emitterOutputComponente", void 0);
            ElementosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-elementos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./elementos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elementos/elementos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./elementos.component.css */ "./src/app/elementos/elementos.component.css")).default]
                })
            ], ElementosComponent);
            /***/ 
        }),
        /***/ "./src/app/interceptors/rejilla-interceptor.service.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/interceptors/rejilla-interceptor.service.ts ***!
          \*************************************************************/
        /*! exports provided: RejillaInterceptorService, interceptorProvider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejillaInterceptorService", function () { return RejillaInterceptorService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProvider", function () { return interceptorProvider; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            var RejillaInterceptorService = /** @class */ (function () {
                function RejillaInterceptorService(tokenService) {
                    this.tokenService = tokenService;
                }
                RejillaInterceptorService.prototype.intercept = function (req, next) {
                    var autReq = req;
                    var token = this.tokenService.sesion_getToken();
                    if (token != null) {
                        autReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
                    }
                    return next.handle(autReq);
                };
                return RejillaInterceptorService;
            }());
            RejillaInterceptorService.ctorParameters = function () { return [
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
            ]; };
            RejillaInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RejillaInterceptorService);
            var interceptorProvider = [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: RejillaInterceptorService, multi: true }];
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#logincont{\r\n    margin-top: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW5jb250e1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _models_login_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/login-usuario */ "./src/app/models/login-usuario.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, tokenService, router) {
                    this.authService = authService;
                    this.tokenService = tokenService;
                    this.router = router;
                    this.form = {};
                    this.isLogged = false;
                    this.isLoginFail = false;
                    this.roles = [];
                }
                LoginComponent.prototype.ngOnInit = function () {
                    if (this.tokenService.sesion_getToken()) {
                        this.isLogged = true;
                        this.isLoginFail = false;
                        this.roles = this.tokenService.sesion_getAuthorities();
                        this.router.navigate(['menu']);
                    }
                };
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this.usuario = new _models_login_usuario__WEBPACK_IMPORTED_MODULE_3__["LoginUsuario"](this.form.nombreUsuario, this.form.password);
                    this.authService.backend_login(this.usuario).subscribe(function (data) {
                        _this.tokenService.sesion_setToken(data.token);
                        _this.tokenService.sesion_setUserName(data.nombreUsuario);
                        _this.tokenService.sesion_setAuthorities(data.authorities);
                        _this.tokenService.sesion_setUserId(data.idUsuario);
                        _this.isLogged = true;
                        _this.isLoginFail = false;
                        _this.roles = _this.tokenService.sesion_getAuthorities();
                        _this.router.navigate(['menu']);
                    }, function (err) {
                        _this.isLogged = false;
                        _this.isLoginFail = true;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/menu/menu.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/menu/menu.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/menu/menu.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/menu/menu.component.ts ***!
          \****************************************/
        /*! exports provided: MenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function () { return MenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            var MenuComponent = /** @class */ (function () {
                function MenuComponent(tokenService, router) {
                    this.tokenService = tokenService;
                    this.router = router;
                    this.info = {};
                }
                MenuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.tokenService.sesion_getToken()) {
                        this.router.navigate(['login']);
                    }
                    else {
                        this.roles = [];
                        this.roles = this.tokenService.sesion_getAuthorities();
                        this.idUsuario = this.tokenService.sesion_getUserId();
                        this.roles.every(function (rol) {
                            if (rol === 'ROLE_ADMIN') {
                                _this.authority = 'admin';
                                return false;
                            }
                            _this.authority = 'user';
                            return true;
                        });
                    }
                };
                return MenuComponent;
            }());
            MenuComponent.ctorParameters = function () { return [
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
                })
            ], MenuComponent);
            /***/ 
        }),
        /***/ "./src/app/models/elementos-usuario.ts": 
        /*!*********************************************!*\
          !*** ./src/app/models/elementos-usuario.ts ***!
          \*********************************************/
        /*! exports provided: ElementosUsuario */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementosUsuario", function () { return ElementosUsuario; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ElementosUsuario = /** @class */ (function () {
                function ElementosUsuario(nombre, descripcionUsuario) {
                    this.nombre = nombre;
                    this.descripcionUsuario = descripcionUsuario;
                }
                return ElementosUsuario;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/informacion-rejilla.ts": 
        /*!***********************************************!*\
          !*** ./src/app/models/informacion-rejilla.ts ***!
          \***********************************************/
        /*! exports provided: InformacionRejilla */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionRejilla", function () { return InformacionRejilla; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var InformacionRejilla = /** @class */ (function () {
                function InformacionRejilla(isShow, nombrepaciente, idrejilla, idpaciente, fechahora, fechahorafin, comentariopaciente, comentariopsicologo, elementos, constructos, evaluaciones, isShowElementos, isShowConstructos) {
                    this.elementos = [];
                    this.constructos = [];
                    this.evaluaciones = [];
                    this.isShow = isShow;
                    this.nombrepaciente = nombrepaciente;
                    this.idrejilla = idrejilla;
                    this.idpaciente = idpaciente;
                    this.fechahora = fechahora;
                    this.fechahorafin = fechahorafin;
                    this.comentariopaciente = comentariopaciente;
                    this.comentariopsicologo = comentariopsicologo;
                    this.elementos = elementos;
                    this.constructos = constructos;
                    this.evaluaciones = evaluaciones;
                    this.isShowElementos = isShowElementos;
                    this.isShowConstructos = isShowConstructos;
                }
                return InformacionRejilla;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/login-usuario.ts": 
        /*!*****************************************!*\
          !*** ./src/app/models/login-usuario.ts ***!
          \*****************************************/
        /*! exports provided: LoginUsuario */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsuario", function () { return LoginUsuario; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LoginUsuario = /** @class */ (function () {
                function LoginUsuario(nombreUsuario, password) {
                    this.nombreUsuario = nombreUsuario;
                    this.password = password;
                }
                return LoginUsuario;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/orden-constructos.ts": 
        /*!*********************************************!*\
          !*** ./src/app/models/orden-constructos.ts ***!
          \*********************************************/
        /*! exports provided: OrdenConstructos */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenConstructos", function () { return OrdenConstructos; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var OrdenConstructos = /** @class */ (function () {
                function OrdenConstructos(id, idevaluacion, idconstructo, ordenconstructo) {
                    this.id = id;
                    this.idevaluacion = idevaluacion;
                    this.idconstructo = idconstructo;
                    this.ordenconstructo = ordenconstructo;
                }
                return OrdenConstructos;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/polos.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/polos.ts ***!
          \*********************************/
        /*! exports provided: Polos */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polos", function () { return Polos; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Polos = /** @class */ (function () {
                function Polos(idrejilla, idconstructo, txtpoloizq, txtpoloder) {
                    this.idrejilla = idrejilla;
                    this.idconstructo = idconstructo;
                    this.txtpoloizq = txtpoloizq;
                    this.txtpoloder = txtpoloder;
                }
                return Polos;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/preguntas-polos.ts": 
        /*!*******************************************!*\
          !*** ./src/app/models/preguntas-polos.ts ***!
          \*******************************************/
        /*! exports provided: PreguntasPolos */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPolos", function () { return PreguntasPolos; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var PreguntasPolos = /** @class */ (function () {
                function PreguntasPolos(preg1, preg2) {
                    this.preg1 = preg1;
                    this.preg2 = preg2;
                }
                return PreguntasPolos;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/puntuaciones.ts": 
        /*!****************************************!*\
          !*** ./src/app/models/puntuaciones.ts ***!
          \****************************************/
        /*! exports provided: Puntuaciones */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Puntuaciones", function () { return Puntuaciones; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Puntuaciones = /** @class */ (function () {
                //constructor(id:number,idevaluacion:number,idconstructo:number,idelemento: number, puntuacion: number) {
                //  this.id=id;
                function Puntuaciones(idevaluacion, idconstructo, idelemento, puntuacion) {
                    this.idevaluacion = idevaluacion;
                    this.idconstructo = idconstructo;
                    this.idelemento = idelemento;
                    this.puntuacion = puntuacion;
                }
                return Puntuaciones;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/usuario-datos.ts": 
        /*!*****************************************!*\
          !*** ./src/app/models/usuario-datos.ts ***!
          \*****************************************/
        /*! exports provided: UsuarioDatos */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioDatos", function () { return UsuarioDatos; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _models_usuario_rejilla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/usuario-rejilla */ "./src/app/models/usuario-rejilla.ts");
            var UsuarioDatos = /** @class */ (function () {
                // idRejilla: number;
                // elementos: any = {};
                // elementosUsuario: any = {};
                function UsuarioDatos() {
                    this.rejilla = new _models_usuario_rejilla__WEBPACK_IMPORTED_MODULE_1__["UsuarioRejilla"];
                }
                return UsuarioDatos;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/usuario-rejilla.ts": 
        /*!*******************************************!*\
          !*** ./src/app/models/usuario-rejilla.ts ***!
          \*******************************************/
        /*! exports provided: UsuarioRejilla */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRejilla", function () { return UsuarioRejilla; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var UsuarioRejilla = /** @class */ (function () {
                function UsuarioRejilla() {
                    this.elementos = {};
                    this.elementosUsuario = {};
                    this.polos = [];
                    this.poloIzquierdo = [];
                    this.poloDerecho = [];
                    // constructor(nombre: string, descripcionUsuario: string) {
                    //    this.nombre = nombre;
                    //    this.descripcionUsuario = descripcionUsuario;
                    // }
                }
                return UsuarioRejilla;
            }());
            /***/ 
        }),
        /***/ "./src/app/mostrar-rejilla/mostrar-rejilla.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/mostrar-rejilla/mostrar-rejilla.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#resultadoRejilla{\r\n    margin-top:80px;\r\n}\r\n.vertical{\r\n    -webkit-writing-mode: vertical-lr;\r\n        -ms-writing-mode: tb-lr;\r\n            writing-mode: vertical-lr;\r\ntransform: rotate(180deg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9zdHJhci1yZWppbGxhL21vc3RyYXItcmVqaWxsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUNBQXlCO1FBQXpCLHVCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0IseUJBQXlCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9zdHJhci1yZWppbGxhL21vc3RyYXItcmVqaWxsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc3VsdGFkb1JlamlsbGF7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbn1cclxuLnZlcnRpY2Fse1xyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxudHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/mostrar-rejilla/mostrar-rejilla.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/mostrar-rejilla/mostrar-rejilla.component.ts ***!
          \**************************************************************/
        /*! exports provided: MostrarRejillaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarRejillaComponent", function () { return MostrarRejillaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MostrarRejillaComponent = /** @class */ (function () {
                function MostrarRejillaComponent(idEvaluacion) {
                    this.idEvaluacion = idEvaluacion;
                }
                MostrarRejillaComponent.prototype.ngOnInit = function () {
                };
                return MostrarRejillaComponent;
            }());
            MostrarRejillaComponent.ctorParameters = function () { return [
                { type: Number }
            ]; };
            MostrarRejillaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mostrar-rejilla',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mostrar-rejilla.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mostrar-rejilla/mostrar-rejilla.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mostrar-rejilla.component.css */ "./src/app/mostrar-rejilla/mostrar-rejilla.component.css")).default]
                })
            ], MostrarRejillaComponent);
            /***/ 
        }),
        /***/ "./src/app/puntuar-rejilla/puntuar-rejilla.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/puntuar-rejilla/puntuar-rejilla.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#resultadoRejilla{\r\n    margin-top:80px;\r\n}\r\n.vertical{\r\n    -webkit-writing-mode: vertical-lr;\r\n        -ms-writing-mode: tb-lr;\r\n            writing-mode: vertical-lr;\r\ntransform: rotate(180deg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVudHVhci1yZWppbGxhL3B1bnR1YXItcmVqaWxsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUNBQXlCO1FBQXpCLHVCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0IseUJBQXlCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHVudHVhci1yZWppbGxhL3B1bnR1YXItcmVqaWxsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc3VsdGFkb1JlamlsbGF7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbn1cclxuLnZlcnRpY2Fse1xyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxudHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/puntuar-rejilla/puntuar-rejilla.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/puntuar-rejilla/puntuar-rejilla.component.ts ***!
          \**************************************************************/
        /*! exports provided: PuntuarRejillaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuarRejillaComponent", function () { return PuntuarRejillaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_constructos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/constructos.service */ "./src/app/services/constructos.service.ts");
            /* harmony import */ var _models_puntuaciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/puntuaciones */ "./src/app/models/puntuaciones.ts");
            /* harmony import */ var _services_puntuaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/puntuaciones.service */ "./src/app/services/puntuaciones.service.ts");
            /* harmony import */ var _services_rejilla_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rejilla.service */ "./src/app/services/rejilla.service.ts");
            /* harmony import */ var _models_orden_constructos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/orden-constructos */ "./src/app/models/orden-constructos.ts");
            var modo_test = true;
            var PuntuarRejillaComponent = /** @class */ (function () {
                function PuntuarRejillaComponent(constructosService, puntuacionesService, rejillaService) {
                    this.constructosService = constructosService;
                    this.puntuacionesService = puntuacionesService;
                    this.rejillaService = rejillaService;
                    this.elementosUsuario = [];
                    this.polosUsuario = [];
                    this.puntuaciones = [[], []];
                    this.ordenConstructos = new Array;
                    this.ordenConstructosFinales = new Array;
                    this.puntuacionesFinales = new Array;
                    this.k = 0;
                }
                PuntuarRejillaComponent.prototype.ngOnInit = function () {
                    for (var i = 0; i < 14; i++) {
                        this.puntuaciones[i] = [];
                    }
                    this.elementosUsuario = this.constructosService.sesion_getElementosUsuario();
                    this.polosUsuario = this.constructosService.sesion_getConstructosUsuario();
                    this.idRejilla = this.rejillaService.sesion_getRejillaId();
                    if (modo_test) {
                        for (var i = 0; i < 14; i++) {
                            this.ordenConstructos[i] = i;
                            for (var j = 0; j < 12; j++) {
                                this.puntuaciones[i][j] = j;
                            }
                        }
                    }
                };
                PuntuarRejillaComponent.prototype.guardarPuntuaciones = function () {
                    var _this = this;
                    this.puntuacionesService.backend_insertEvaluacion(this.idRejilla).subscribe(function (data) {
                        _this.idEvaluacion = data;
                        console.log(_this.idEvaluacion);
                        for (var i = 0; i < 14; i++) {
                            _this.ordenConstructosFinales[i] = new _models_orden_constructos__WEBPACK_IMPORTED_MODULE_6__["OrdenConstructos"](0, _this.idEvaluacion, i + 1, _this.ordenConstructos[i]);
                            //console.log(this.ordenConstructosFinales[i]);
                            for (var j = 0; j < 12; j++) {
                                _this.puntuacionesFinales[_this.k] = new _models_puntuaciones__WEBPACK_IMPORTED_MODULE_3__["Puntuaciones"](_this.idEvaluacion, i + 1, j + 1, _this.puntuaciones[i][j]);
                                _this.k++;
                            }
                        }
                        _this.insertPuntuaciones();
                    }, function (err) {
                    });
                };
                PuntuarRejillaComponent.prototype.insertPuntuaciones = function () {
                    var _this = this;
                    this.puntuacionesService.backend_insertPuntuaciones(this.puntuacionesFinales).subscribe(function (data) {
                        _this.idEvaluacion = data;
                    }, function (err) {
                    });
                    this.insertOrdenConstructos();
                };
                PuntuarRejillaComponent.prototype.insertOrdenConstructos = function () {
                    var _this = this;
                    this.puntuacionesService.backend_insertOrdenConstructos(this.ordenConstructosFinales).subscribe(function (data) {
                        _this.idEvaluacion = data;
                    }, function (err) {
                    });
                };
                return PuntuarRejillaComponent;
            }());
            PuntuarRejillaComponent.ctorParameters = function () { return [
                { type: _services_constructos_service__WEBPACK_IMPORTED_MODULE_2__["ConstructosService"] },
                { type: _services_puntuaciones_service__WEBPACK_IMPORTED_MODULE_4__["PuntuacionesService"] },
                { type: _services_rejilla_service__WEBPACK_IMPORTED_MODULE_5__["RejillaService"] }
            ]; };
            PuntuarRejillaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-puntuar-rejilla',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puntuar-rejilla.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/puntuar-rejilla/puntuar-rejilla.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puntuar-rejilla.component.css */ "./src/app/puntuar-rejilla/puntuar-rejilla.component.css")).default]
                })
            ], PuntuarRejillaComponent);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var cabecera = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
            var AuthService = /** @class */ (function () {
                function AuthService(httpClient) {
                    this.httpClient = httpClient;
                    this.authURL = 'http://localhost:8080/api/auth/';
                }
                AuthService.prototype.backend_login = function (usuario) {
                    return this.httpClient.post(this.authURL + 'login', usuario, cabecera);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/constructos.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/constructos.service.ts ***!
          \*************************************************/
        /*! exports provided: ConstructosService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructosService", function () { return ConstructosService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ELEMENTOSUSUARIO = 'ElementosUsuario';
            var CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
            var cabecera = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
            var ConstructosService = /** @class */ (function () {
                function ConstructosService(httpClient) {
                    this.httpClient = httpClient;
                    this.constructosURL = 'http://localhost:8080/api/constructos/';
                }
                ConstructosService.prototype.backend_insertConstructos = function (polos) {
                    console.log("Entra en el bucle");
                    //console.log(polos);
                    return this.httpClient.post(this.constructosURL + 'insertPolos', polos, cabecera);
                };
                ConstructosService.prototype.backend_getElementosUser = function (idRejilla) {
                    return this.httpClient.post(this.constructosURL + 'getElementosUsuario', idRejilla, cabecera);
                };
                ConstructosService.prototype.backend_getPolosUsuario = function (idRejilla) {
                    return this.httpClient.post(this.constructosURL + 'getPolos', idRejilla, cabecera);
                };
                ConstructosService.prototype.sesion_setElementosUsuario = function (elementosUsuario) {
                    window.sessionStorage.removeItem(ELEMENTOSUSUARIO);
                    window.sessionStorage.setItem(ELEMENTOSUSUARIO, JSON.stringify(elementosUsuario));
                };
                ConstructosService.prototype.sesion_getElementosUsuario = function () {
                    return JSON.parse(sessionStorage.getItem(ELEMENTOSUSUARIO));
                };
                ConstructosService.prototype.sesion_getConstructosUsuario = function () {
                    return JSON.parse(sessionStorage.getItem(CONSTRUCTOSUSUARIO));
                };
                ConstructosService.prototype.sesion_setConstructosUsuario = function (constructosUsuario) {
                    window.sessionStorage.removeItem(CONSTRUCTOSUSUARIO);
                    window.sessionStorage.setItem(CONSTRUCTOSUSUARIO, JSON.stringify(constructosUsuario));
                };
                return ConstructosService;
            }());
            ConstructosService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ConstructosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ConstructosService);
            /***/ 
        }),
        /***/ "./src/app/services/elementos.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/elementos.service.ts ***!
          \***********************************************/
        /*! exports provided: ElementosService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementosService", function () { return ElementosService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ELEMENTOSUSUARIO = 'ElementosUsuario';
            var CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
            var cabecera = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
            var ElementosService = /** @class */ (function () {
                function ElementosService(httpClient) {
                    this.httpClient = httpClient;
                    this.constructosURL = 'http://localhost:8080/api/elementos/';
                }
                ElementosService.prototype.getElementosByIdRejilla = function (idRejilla) {
                    return this.httpClient.post(this.constructosURL + 'getElementosUsuario', idRejilla, cabecera);
                };
                return ElementosService;
            }());
            ElementosService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ElementosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ElementosService);
            /***/ 
        }),
        /***/ "./src/app/services/puntuaciones.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/services/puntuaciones.service.ts ***!
          \**************************************************/
        /*! exports provided: PuntuacionesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuacionesService", function () { return PuntuacionesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ELEMENTOSUSUARIO = 'ElementosUsuario';
            var CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
            var cabecera = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
            var PuntuacionesService = /** @class */ (function () {
                function PuntuacionesService(httpClient) {
                    this.httpClient = httpClient;
                    this.constructosURL = 'http://localhost:8080/api/';
                }
                PuntuacionesService.prototype.backend_insertEvaluacion = function (idRejilla) {
                    return this.httpClient.post(this.constructosURL + 'insertEvaluacion', idRejilla, cabecera);
                };
                PuntuacionesService.prototype.backend_getEvaluacionesUsuario = function (idRejilla) {
                    return this.httpClient.post(this.constructosURL + 'getEvaluacionesUsuario', idRejilla, cabecera);
                };
                PuntuacionesService.prototype.backend_getPuntuaciones = function (idEvaluacion) {
                    return this.httpClient.post(this.constructosURL + 'getPuntuaciones', idEvaluacion, cabecera);
                };
                PuntuacionesService.prototype.backend_getOrden = function (idEvaluacion) {
                    return this.httpClient.post(this.constructosURL + 'getOrden', idEvaluacion, cabecera);
                };
                PuntuacionesService.prototype.backend_insertPuntuaciones = function (puntuaciones) {
                    return this.httpClient.post(this.constructosURL + 'insertPuntuaciones', puntuaciones, cabecera);
                };
                PuntuacionesService.prototype.backend_insertOrdenConstructos = function (ordenConstructos) {
                    return this.httpClient.post(this.constructosURL + 'insertOrdenConstructos', ordenConstructos, cabecera);
                };
                return PuntuacionesService;
            }());
            PuntuacionesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PuntuacionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PuntuacionesService);
            /***/ 
        }),
        /***/ "./src/app/services/rejilla.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/rejilla.service.ts ***!
          \*********************************************/
        /*! exports provided: RejillaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejillaService", function () { return RejillaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var cabecera = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
            var REJILLA_KEY = 'RejillaNumber';
            var ELEMENTOS = 'ElementosEvaluacion';
            var CONSTRUCTOS = 'ConstructosEvaluacion';
            var RejillaService = /** @class */ (function () {
                function RejillaService(httpClient) {
                    this.httpClient = httpClient;
                    this.authURL = 'http://localhost:8080/api/rejilla/';
                }
                RejillaService.prototype.getRejillasUser = function (idUsuario) {
                    return this.httpClient.post(this.authURL + 'getRejillasUser', idUsuario, cabecera);
                };
                RejillaService.prototype.backend_nuevaRejilla = function (idUsuario) {
                    return this.httpClient.post(this.authURL + 'nueva', idUsuario, cabecera);
                };
                RejillaService.prototype.backend_getElementos = function () {
                    return this.httpClient.post(this.authURL + 'getElementos', cabecera);
                };
                RejillaService.prototype.backend_getConstructos = function () {
                    return this.httpClient.post(this.authURL + 'getConstructos', cabecera);
                };
                RejillaService.prototype.sesion_setRejillaId = function (rejillaId) {
                    window.sessionStorage.removeItem(REJILLA_KEY);
                    window.sessionStorage.setItem(REJILLA_KEY, JSON.stringify(rejillaId));
                };
                RejillaService.prototype.sesion_getRejillaId = function () {
                    return JSON.parse(sessionStorage.getItem(REJILLA_KEY));
                };
                RejillaService.prototype.sesion_setElementos = function (elementos) {
                    window.sessionStorage.removeItem(ELEMENTOS);
                    window.sessionStorage.setItem(ELEMENTOS, JSON.stringify(elementos));
                };
                RejillaService.prototype.sesion_getElementosEvaluacion = function () {
                    return JSON.parse(sessionStorage.getItem(ELEMENTOS));
                };
                RejillaService.prototype.sesion_setConstructos = function (constructos) {
                    window.sessionStorage.removeItem(CONSTRUCTOS);
                    window.sessionStorage.setItem(CONSTRUCTOS, JSON.stringify(constructos));
                };
                RejillaService.prototype.sesion_getConstructosEvaluacion = function () {
                    return JSON.parse(sessionStorage.getItem(CONSTRUCTOS));
                };
                return RejillaService;
            }());
            RejillaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RejillaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RejillaService);
            /***/ 
        }),
        /***/ "./src/app/services/token.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/token.service.ts ***!
          \*******************************************/
        /*! exports provided: TokenService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function () { return TokenService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TOKEN_KEY = 'AuthToken';
            var USERNAME_KEY = 'AuthUserName';
            var AUTHORITIES_KEY = 'AutAuthorities';
            var USERID_KEY = 'AuthUserId';
            var TokenService = /** @class */ (function () {
                function TokenService() {
                    this.roles = [];
                }
                TokenService.prototype.sesion_setToken = function (token) {
                    window.sessionStorage.removeItem(TOKEN_KEY);
                    window.sessionStorage.setItem(TOKEN_KEY, token);
                };
                TokenService.prototype.sesion_getToken = function () {
                    return sessionStorage.getItem(TOKEN_KEY);
                };
                TokenService.prototype.sesion_setUserName = function (userName) {
                    window.sessionStorage.removeItem(USERNAME_KEY);
                    window.sessionStorage.setItem(USERNAME_KEY, userName);
                };
                TokenService.prototype.sesion_getUserName = function () {
                    return sessionStorage.getItem(USERNAME_KEY);
                };
                TokenService.prototype.sesion_setUserId = function (userId) {
                    window.sessionStorage.removeItem(USERID_KEY);
                    window.sessionStorage.setItem(USERID_KEY, JSON.stringify(userId));
                };
                TokenService.prototype.sesion_getUserId = function () {
                    return JSON.parse(sessionStorage.getItem(USERID_KEY));
                };
                TokenService.prototype.sesion_setAuthorities = function (authorities) {
                    window.sessionStorage.removeItem(AUTHORITIES_KEY);
                    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
                };
                TokenService.prototype.sesion_getAuthorities = function () {
                    var _this = this;
                    this.roles = [];
                    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
                        JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                            _this.roles.push(authority.authority);
                        });
                    }
                    return this.roles;
                };
                TokenService.prototype.sesion_logOut = function () {
                    window.sessionStorage.clear();
                };
                return TokenService;
            }());
            TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TokenService);
            /***/ 
        }),
        /***/ "./src/app/user/user.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/user/user.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/user/user.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/user.component.ts ***!
          \****************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            /* harmony import */ var _services_rejilla_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rejilla.service */ "./src/app/services/rejilla.service.ts");
            /* harmony import */ var _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/elementos-usuario */ "./src/app/models/elementos-usuario.ts");
            /* harmony import */ var _models_preguntas_polos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/preguntas-polos */ "./src/app/models/preguntas-polos.ts");
            /* harmony import */ var _models_polos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/polos */ "./src/app/models/polos.ts");
            /* harmony import */ var _services_constructos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/constructos.service */ "./src/app/services/constructos.service.ts");
            // import { FlatTreeControl } from '@angular/cdk/tree';
            var modo_test = true;
            var UserComponent = /** @class */ (function () {
                function UserComponent(tokenService, router, rejillaService, constructosService) {
                    this.tokenService = tokenService;
                    this.router = router;
                    this.rejillaService = rejillaService;
                    this.constructosService = constructosService;
                    this.mostrarConstructos = false;
                    this.rejillaIniciada = false;
                    this.elementos = {};
                    this.elementosUsuario = {};
                    this.constructosUsuario = {};
                    this.polos = [];
                    this.parecidos = false;
                    this.diferencias = false;
                    this.preguntas = {};
                    this.segundaPregunta = false;
                    this.poloDerecho = [];
                    this.poloIzquierdo = [];
                    this.preguntasPolos = {};
                    this.devuelto = {};
                    this.puntuarRejilla = false;
                    this.yer_cont_log = 0;
                }
                UserComponent.prototype.ngOnInit = function () {
                    this.idUsuario = this.tokenService.sesion_getUserId();
                    if (this.rejillaService.sesion_getRejillaId() != null) {
                        this.rejillaIniciada = true;
                        this.elementos = this.rejillaService.sesion_getElementosEvaluacion();
                        this.idRejilla = this.rejillaService.sesion_getRejillaId();
                        console.log(this.idRejilla);
                    }
                };
                UserComponent.prototype.iniciarRejilla = function () {
                    var _this = this;
                    console.log("YERAY-LOG - iniciarRejilla() - " + (++this.yer_cont_log).toString());
                    this.rejillaService.backend_nuevaRejilla(this.idUsuario).subscribe(function (data) {
                        _this.idRejilla = data;
                        _this.rejillaService.sesion_setRejillaId(_this.idRejilla);
                        _this.rejillaIniciada = true;
                    }, function (err) {
                    });
                    this.rejillaService.backend_getElementos().subscribe(function (data) {
                        _this.elementos = data;
                        console.log(_this.elementos);
                        _this.rellenar_modo_test();
                        _this.rejillaService.sesion_setElementos(_this.elementos);
                    }, function (err) {
                    });
                };
                UserComponent.prototype.guardar = function () {
                    var _this = this;
                    console.log("YERAY-LOG - guardar() - " + (++this.yer_cont_log).toString());
                    this.elementosUsuario[0] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"]("Yo actual", null);
                    this.elementosUsuario[1] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"]("Yo dentro de dos años", null);
                    this.elementosUsuario[2] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre3, this.elementos.descripcionUsuario3);
                    this.elementosUsuario[3] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre4, this.elementos.descripcionUsuario4);
                    this.elementosUsuario[4] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre5, this.elementos.descripcionUsuario5);
                    this.elementosUsuario[5] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre6, this.elementos.descripcionUsuario6);
                    this.elementosUsuario[6] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre7, this.elementos.descripcionUsuario7);
                    this.elementosUsuario[7] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre8, this.elementos.descripcionUsuario8);
                    this.elementosUsuario[8] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre9, this.elementos.descripcionUsuario9);
                    this.elementosUsuario[9] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre10, this.elementos.descripcionUsuario10);
                    this.elementosUsuario[10] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"](this.elementos.nombre11, this.elementos.descripcionUsuario11);
                    this.elementosUsuario[11] = new _models_elementos_usuario__WEBPACK_IMPORTED_MODULE_5__["ElementosUsuario"]("Yo ideal", null);
                    this.rejillaService.backend_getConstructos().subscribe(function (data) {
                        _this.constructos = data;
                        _this.rejillaService.sesion_setConstructos(_this.constructos);
                        console.log(_this.elementosUsuario);
                        console.log(_this.constructos);
                        _this.mostrarContructos();
                    }, function (err) {
                    });
                };
                UserComponent.prototype.mostrarContructos = function () {
                    console.log("YERAY-LOG - mostrarContructos() - " + (++this.yer_cont_log).toString());
                    for (var i = 0; i < 14; i++) {
                        for (var u = 0; u < 12; u++) {
                            var r = "#" + (u + 1);
                            var re = new RegExp(r);
                            this.constructos[i].txtpregunta = this.constructos[i].txtpregunta.replace(re, this.elementosUsuario[u].nombre);
                        }
                    }
                    //reemplazar los numeros por elementousuario
                    this.rejillaIniciada = false;
                    this.mostrarConstructos = true;
                    this.varAux = 0;
                    this.parecidos = true;
                };
                UserComponent.prototype.incrementarVar = function () {
                    if (this.segundaPregunta) {
                        this.polos[this.varAux] = new _models_polos__WEBPACK_IMPORTED_MODULE_7__["Polos"](this.idRejilla, this.varAux + 1, this.poloIzquierdo[this.varAux], this.poloDerecho[this.varAux]);
                        this.varAux++;
                        this.segundaPregunta = false;
                        if (this.constructos[this.varAux].tipopregunta === 'Parecidos') {
                            this.parecidos = true;
                            this.diferencias = false;
                        }
                        else {
                            this.parecidos = false;
                            this.diferencias = true;
                        }
                    }
                    else {
                        if (this.parecidos) {
                            this.preguntasPolos[this.varAux] = new _models_preguntas_polos__WEBPACK_IMPORTED_MODULE_6__["PreguntasPolos"]("Que es para ti lo opuesto a" + this.poloIzquierdo[this.varAux], null);
                        }
                        else {
                            this.preguntasPolos[this.varAux] = new _models_preguntas_polos__WEBPACK_IMPORTED_MODULE_6__["PreguntasPolos"]("Nos diferenciamos en que yo soy:", "y el/ella es:");
                        }
                        this.segundaPregunta = true;
                    }
                    console.log("YERAY-LOG - incrementarVar() - " + (++this.yer_cont_log).toString());
                    console.log(this.varAux + ": " + this.segundaPregunta + " - " + this.constructos[this.varAux].tipopregunta);
                };
                UserComponent.prototype.guardarConstructos = function () {
                    var _this = this;
                    console.log("YERAY-LOG - guardarConstructos() - " + (++this.yer_cont_log).toString());
                    console.log(this.polos);
                    this.polos[this.varAux] = new _models_polos__WEBPACK_IMPORTED_MODULE_7__["Polos"](this.idRejilla, this.varAux + 1, this.poloIzquierdo[this.varAux], this.poloDerecho[this.varAux]);
                    this.constructosService.backend_insertConstructos(this.polos).subscribe(function (data) {
                        _this.devuelto = data;
                    }, function (err) {
                    });
                    this.constructosService.sesion_setConstructosUsuario(this.polos);
                    this.constructosService.sesion_setElementosUsuario(this.elementosUsuario);
                    this.mostrarConstructos = false;
                    this.puntuarRejilla = true;
                };
                UserComponent.prototype.logOut = function () {
                    this.tokenService.sesion_logOut();
                    this.router.navigate(['login']);
                };
                //Para hacer pruebas, usamos este método que rellena todo de forma automática
                UserComponent.prototype.rellenar_modo_test = function () {
                    if (modo_test) {
                        for (var i = 3; i <= 11; i++) {
                            this.elementos['nombre' + i] = 'nombre_' + i;
                            this.elementos['descripcionUsuario' + i] = 'nombre_' + i;
                        }
                    }
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_rejilla_service__WEBPACK_IMPORTED_MODULE_4__["RejillaService"] },
                { type: _services_constructos_service__WEBPACK_IMPORTED_MODULE_8__["ConstructosService"] }
            ]; };
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/user2/user2.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/user2/user2.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#inicio{\r\n    margin-top: 100px;\r\n    margin-left: 80px;\r\n}\r\n#segundaRama{\r\n    margin-left: 40px;\r\n}\r\n#resumen{\r\n    font-size: 18px;\r\n   font-style: italic;\r\n}\r\n.elementoResumen{\r\n    margin-left: 20px; \r\n}\r\n.resultadoResumen{\r\n    margin-left: 40px; \r\n}\r\n.principal{\r\n   margin-left: 20px;\r\n}\r\n.mat-icon-rtl-mirror{\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    margin-left:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcjIvdXNlcjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtHQUNoQixrQkFBa0I7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIyL3VzZXIyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5pY2lve1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG4jc2VndW5kYVJhbWF7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4jcmVzdW1lbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5lbGVtZW50b1Jlc3VtZW57XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgXHJcbn1cclxuLnJlc3VsdGFkb1Jlc3VtZW57XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDsgXHJcbn1cclxuLnByaW5jaXBhbHtcclxuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLm1hdC1pY29uLXJ0bC1taXJyb3J7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tbGVmdDowO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/user2/user2.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/user2/user2.component.ts ***!
          \******************************************/
        /*! exports provided: User2Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User2Component", function () { return User2Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _models_usuario_datos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/usuario-datos */ "./src/app/models/usuario-datos.ts");
            /* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
            /* harmony import */ var _services_rejilla_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rejilla.service */ "./src/app/services/rejilla.service.ts");
            /* harmony import */ var _services_constructos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/constructos.service */ "./src/app/services/constructos.service.ts");
            /* harmony import */ var _services_elementos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/elementos.service */ "./src/app/services/elementos.service.ts");
            /* harmony import */ var _models_informacion_rejilla__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/informacion-rejilla */ "./src/app/models/informacion-rejilla.ts");
            /* harmony import */ var _services_puntuaciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/puntuaciones.service */ "./src/app/services/puntuaciones.service.ts");
            /* harmony import */ var _mostrar_rejilla_mostrar_rejilla_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mostrar-rejilla/mostrar-rejilla.component */ "./src/app/mostrar-rejilla/mostrar-rejilla.component.ts");
            var User2Component = /** @class */ (function () {
                function User2Component(tokenService, router, rejillaService, constructosService, elementosService, puntuacionesService) {
                    this.tokenService = tokenService;
                    this.router = router;
                    this.rejillaService = rejillaService;
                    this.constructosService = constructosService;
                    this.elementosService = elementosService;
                    this.puntuacionesService = puntuacionesService;
                    this.bMostrarConstructos = false;
                    this.bMostrarElementos = false;
                    this.bPuntuarRejilla = false;
                    this.modo_test = true;
                    this.rejillas = [];
                    this.polosInicio = [];
                    this.elementosInicio = [];
                    this.evaluaciones = [];
                    this.resultadoRejillas = [];
                    this.puntuaciones = {};
                    this.orden = {};
                    this.auxEvaluaciones = 0;
                    this.mostrarEvaluacion = false;
                    this.yer_cont_log = 0;
                    this.devuelto = {};
                }
                User2Component.prototype.ngOnInit = function () {
                    console.log("YERAY-LOG - User2Component-ngOnInit() - " + (++this.yer_cont_log).toString());
                    this.usuarioDatos = new _models_usuario_datos__WEBPACK_IMPORTED_MODULE_3__["UsuarioDatos"];
                    this.usuarioDatos.idUsuario = this.tokenService.sesion_getUserId();
                    this.getRejillasUser();
                    if (this.rejillaService.sesion_getRejillaId() != null) {
                        this.bMostrarElementos = true;
                        this.usuarioDatos.rejilla.idRejilla = this.rejillaService.sesion_getRejillaId();
                        this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementosEvaluacion();
                        console.log(this.usuarioDatos.rejilla.idRejilla);
                    }
                    console.log(this.resultadoRejillas);
                };
                User2Component.prototype.toggleDisplay = function (idrejilla) {
                    this.resultadoRejillas.forEach(function (resultado) {
                        if (resultado.idrejilla == idrejilla) {
                            resultado.isShow = !resultado.isShow;
                        }
                    });
                };
                User2Component.prototype.showElementos = function (idrejilla) {
                    this.resultadoRejillas.forEach(function (resultado) {
                        if (resultado.idrejilla == idrejilla) {
                            resultado.isShowElementos = !resultado.isShowElementos;
                        }
                    });
                };
                User2Component.prototype.showConstructos = function (idrejilla) {
                    this.resultadoRejillas.forEach(function (resultado) {
                        if (resultado.idrejilla == idrejilla) {
                            resultado.isShowConstructos = !resultado.isShowConstructos;
                        }
                    });
                };
                User2Component.prototype.iniciarRejilla = function () {
                    this.bMostrarElementos = true;
                    console.log("YERAY-LOG - User2Component-iniciarRejilla() - " + (++this.yer_cont_log).toString());
                };
                User2Component.prototype.logOut = function () {
                    this.tokenService.sesion_logOut();
                    this.router.navigate(['login']);
                };
                User2Component.prototype.obtenerSalidaElementosComponent = function (event) {
                    console.log("YERAY-LOG - User2Component-obtenerSalidaElementosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bMostrarConstructos);
                    console.log(event.elementosUsuario);
                    this.usuarioDatos.rejilla.elementosUsuario = event.elementosUsuario;
                    this.bMostrarConstructos = event.bMostrarConstructos;
                    if (this.bMostrarConstructos) {
                        this.bMostrarElementos = false;
                    }
                };
                User2Component.prototype.obtenerSalidaConstructosComponent = function (event) {
                    var _this = this;
                    console.log("YERAY-LOG - User2Component-obtenerSalidaConstructosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bPuntuarRejilla);
                    this.bPuntuarRejilla = event.bPuntuarRejilla;
                    if (this.bPuntuarRejilla) {
                        this.bMostrarConstructos = false;
                        this.constructosService.backend_insertConstructos(this.usuarioDatos.rejilla.polos).subscribe(function (data) {
                            _this.devuelto = data;
                        }, function (err) {
                        });
                        console.log("YERAY-LOG - User2Component-obtenerSalidaConstructosComponent()-backend_insertConstructos - " + (++this.yer_cont_log).toString() + " - " + event.bPuntuarRejilla);
                        console.log(this.devuelto);
                    }
                };
                User2Component.prototype.getRejillasUser = function () {
                    var _this = this;
                    this.aux = 0;
                    this.rejillaService.getRejillasUser(this.usuarioDatos.idUsuario).subscribe(function (data) {
                        _this.rejillas = data;
                        _this.getInformacion();
                    });
                };
                User2Component.prototype.getInformacion = function () {
                    var _this = this;
                    this.rejillas.forEach(function (rejilla) {
                        _this.getPolosUsuario(rejilla);
                    });
                    this.rejillas.forEach(function (rejilla) {
                        _this.getElementos(rejilla.idrejilla);
                    });
                };
                User2Component.prototype.getPolosUsuario = function (rejilla) {
                    var _this = this;
                    this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(function (data) {
                        if (Object.entries(data).length !== 0) {
                            _this.evaluaciones = data;
                        }
                        else {
                            _this.evaluaciones = null;
                        }
                    });
                    this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(function (data) {
                        _this.polosInicio = data;
                        console.log(_this.polosInicio);
                        _this.resultadoRejillas[_this.aux] = new _models_informacion_rejilla__WEBPACK_IMPORTED_MODULE_8__["InformacionRejilla"](true, null, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, _this.polosInicio, _this.evaluaciones, true, true);
                        _this.aux++;
                    });
                };
                User2Component.prototype.getElementos = function (idrejilla) {
                    var _this = this;
                    this.elementosService.getElementosByIdRejilla(idrejilla).subscribe(function (data) {
                        _this.resultadoRejillas.forEach(function (resultado) {
                            if (resultado.idrejilla === idrejilla) {
                                resultado.elementos = data;
                            }
                        });
                    });
                };
                User2Component.prototype.getEvaluacionesUser = function () {
                    var _this = this;
                    this.rejillas.forEach(function (rejilla) {
                        _this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(function (data) {
                            if (Object.entries(data).length !== 0) {
                                _this.evaluaciones = data;
                            }
                        });
                    });
                };
                User2Component.prototype.showRejillaCompleta = function (idEvaluacion) {
                    this.mostrarEvaluacion = !this.mostrarEvaluacion;
                    this.rejillaCompleta = new _mostrar_rejilla_mostrar_rejilla_component__WEBPACK_IMPORTED_MODULE_10__["MostrarRejillaComponent"](idEvaluacion);
                };
                return User2Component;
            }());
            User2Component.ctorParameters = function () { return [
                { type: _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_rejilla_service__WEBPACK_IMPORTED_MODULE_5__["RejillaService"] },
                { type: _services_constructos_service__WEBPACK_IMPORTED_MODULE_6__["ConstructosService"] },
                { type: _services_elementos_service__WEBPACK_IMPORTED_MODULE_7__["ElementosService"] },
                { type: _services_puntuaciones_service__WEBPACK_IMPORTED_MODULE_9__["PuntuacionesService"] }
            ]; };
            User2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user2',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user2/user2.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user2.component.css */ "./src/app/user2/user2.component.css")).default]
                })
            ], User2Component);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Yeray\Descargas\__GIT\Rejilla\frontendTFM\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map