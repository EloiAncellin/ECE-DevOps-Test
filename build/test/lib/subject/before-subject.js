"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependency1_1 = require("../../../lib/dependency1");
var dependency2_1 = require("../../../lib/dependency2");
var subject_1 = require("../../../lib/subject");
before(function () {
    var dep1 = new dependency1_1.Dependency1();
    var dep2 = new dependency2_1.Dependency2();
    this.subject = new subject_1.Subject(dep1, dep2);
});
