var log = function() {
    console.log.apply(console, arguments);
};
    // Defaults
        TweenLite.defaultEase = Expo.easeOut;
        var dur = 0.5;
        var T = TweenLite.to;

$(function() {
    var docInner = $('#docInner');
    var sidePanel = $('> div > .sidePanel', docInner);
    var mainPanel = $('> div > .mainPanel', docInner);

    var onMainMenu = true;

    // Setup main panels
        // Main menu
        var panelMainMenu = $('> .container > .mainMenu', mainPanel);
            var panelMainMenu_newGame = $('> .newGame', panelMainMenu);

            panelMainMenu_newGame.bind({
                'mousedown': function() {
                    if( onMainMenu ) {
                        /*
                        sidePanel.css({marginLeft: '0px'});
                        mainPanel.css({marginLeft: '0px'});

                        panelMainMenu.css({marginLeft: '-750px'});
                        panelNewGame.css({marginLeft: '0'});
                        */

                        T(sidePanel, dur, {css: {marginLeft: 0}});
                        T(mainPanel, dur, {css: {marginLeft: 0}});

                        T(panelMainMenu, dur, {css: {marginLeft: -750}});
                        T(panelNewGame, dur, {css: {marginLeft: 0}});

                        onMainMenu = false;
                    }
                }
            });

        // New game
        var panelNewGame = $('> .container > .newGame', mainPanel);
            var panelNewGame_back = $('> .back', panelNewGame);

            panelNewGame_back.bind({
                'mousedown': function() {
                    if( !onMainMenu ) {
                        /*
                        sidePanel.css({marginLeft: '-175px'});
                        mainPanel.css({marginLeft: '90px'});

                        panelMainMenu.css({marginLeft: '0px'});
                        panelNewGame.css({marginLeft: '-750px'});
                        */
                        T(sidePanel, dur, {css: {marginLeft: -175}});
                        T(mainPanel, dur, {css: {marginLeft: 90}});

                        T(panelMainMenu, dur, {css: {marginLeft: 0}});
                        T(panelNewGame, dur, {css: {marginLeft: -750}});
                        onMainMenu = true;
                    }
                }
            });


    // Initial state
        // Panels
        sidePanel.css({marginLeft: '-175px'});
        mainPanel.css({marginLeft: '90px'});

        // Menus
        panelNewGame.css({marginLeft: '-750px'});
});