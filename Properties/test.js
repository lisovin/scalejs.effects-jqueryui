/// <reference path="../Scripts/require.js"/>
/// <reference path="../Scripts/jasmine.js"/>

/*global requirejs*/
requirejs({
    paths: {
		'scalejs' : '../Scripts/scalejs-0.1.1',
		'jQuery' : '../Scripts/jquery-1.8.3',
		'jQuery-ui-effects' : '../Scripts/jquery-ui-1.9.2.effects'
    }
}, ['../test/all.tests']);
