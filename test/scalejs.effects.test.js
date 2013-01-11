/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define(['../js/scalejs.effects-jqueryui'], function (extension) {
    describe('scalejs.linq extension', function () {
        it('is defined', function () {
            expect(extension).toBeDefined();
        });
    });
});