
/*global define*/
define('scalejs.effects-jqueryui/effects',[
    'jQuery',
    'jQuery-ui-effects'
], function (
    $
) {
    

    function show(element, config) {
        if ($(element).css('display') === 'none') {
            $(element).show(config);
        }
    }

    function hide(element, config) {
        if ($(element).css('display') !== 'none') {
            $(element).hide(config);
        }
    }

    function animate(element, properties, options) {
        $(element).animate(properties, options);
    }

    return {
        show: show,
        hide: hide,
        animate: animate
    };
});

/*global define*/
define('scalejs.effects-jqueryui',[
    './scalejs.effects-jqueryui/effects'
], function (
    effects
) {
    

    return {
        effects: {
            show: effects.show,
            hide: effects.hide,
            animate: effects.animate
        }
    };
});