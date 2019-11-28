"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var first_test_1 = __importDefault(require("./suites/first.test"));
var second_test_1 = __importDefault(require("./suites/second.test"));
var third_test_1 = __importDefault(require("./suites/third.test"));
describe('Subject', function () {
    describe('first suite', first_test_1.default.bind(this));
    describe('second suite', second_test_1.default.bind(this));
    describe('third suite', third_test_1.default.bind(this));
});
