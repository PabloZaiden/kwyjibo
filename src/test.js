"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const K = require('./controller');
let MyController = class MyController {
};
MyController = __decorate([
    K.Controller("/"), 
    __metadata('design:paramtypes', [])
], MyController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyController;
let MyDevController = class MyDevController {
};
MyDevController = __decorate([
    K.Controller(MyController, "/dev"),
    //will mount in [root for MyController]/dev
    K.Dev(),
    K.Middleware(Middleware1, Middleware2), 
    __metadata('design:paramtypes', [])
], MyDevController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyDevController;
//# sourceMappingURL=test.js.map