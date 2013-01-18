/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "jQuery":  "Scripts/jquery-1.9.0",
        "jQuery-ui-effects":  "Scripts/jquery-ui-1.10.0.effects",
        "scalejs":  "Scripts/scalejs-0.1.12",
        "scalejs.effects-jqueryui":  "../scalejs.effects-jqueryui/build/scalejs.effects-jqueryui-0.1.1"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.effects-jqueryui"
        ]
    },
    "shim":  {
        "jQuery":  {
            "exports":  "jQuery"
        },
        "jQuery-ui-effects":  {
            "deps":  [
                "jQuery"
            ]
        }
    }
}, ['tests/all.tests']);
