"use strict";

var expect = require("expect.js");

var Bundler = require("../lib/Bundler.js");


describe("Bundler", function () {

    var bundler;

    it("should throw an Error if there is no file on given path", function () {
        expect(
            function () {
                bundler = new Bundler("not/existing/Bundler.js");
            }
        ).to.throwError();
    });

    it("should throw an Error if given bundler does not provide a method get()", function () {
        expect(
            function () {
                bundler = new Bundler(__dirname + "/mocks/InvalidMockBundlerWithoutGet.js");
            }
        ).to.throwError();
    });

    it("shall throw an Error if given bundler does provide a method get() but get() is not returning a string", function () {
        expect(
            function () {
                bundler = new Bundler(__dirname + "/mocks/InvalidMockBundlerWithoutGet.js");
            }
        ).to.throwError();
    });

});