﻿/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var effects = core.effects;

    describe('scalejs.effects extension', function () {
        it('is defined', function () {
            expect(effects).toBeDefined();
        });
    });
});