"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
function suite() {
    it('should return "good" when sending "good"', function () {
        var result = this.test.ctx.subject.do('good');
        assert_1.default.strictEqual(result, 'good');
    });
}
exports.default = suite;
