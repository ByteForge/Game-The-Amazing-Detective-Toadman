var log = function() {
    console.log.apply(console, arguments);
};
    // Defaults
        TweenLite.defaultEase = Expo.easeOut;
        var dur = 0.25;
        var T = TweenLite.to;

        var $pagePaddingTop     = 25; // in pixels
        var $pagePaddingBottom  = 25; // in pixels
        var $pagePaddingLeft    = 25; // in pixels
        var $pagePaddingRight   = 25; // in pixels

    // Page specifics
        var docWrapper = null;
        var pageWrapper = null;

$(function() {
    docWrapper = $('#docWrapper');
    pageWrapper = $('#pageWrapper');

    // Setup header link hover effects
        function bindHeaderLinkHover(button) {
            button.bind({
                'mouseenter': function() {
                    var $this = $(this);
                    var text = $('> i', $this);
                    T(text, dur, {css: {color: '#7D3407'}});
                },
                'mouseleave': function() {
                    var $this = $(this);
                    var text = $('> i', $this);
                    T(text, dur, {css: {color: '#B8AB96'}});
                }
            });
        }
        var headerLink_play = $('.play', pageWrapper);
        var headerLink_reg = $('.reg', pageWrapper);
        var headerLink_about = $('.about', pageWrapper);
        var headerLink_donate = $('.donate', pageWrapper);

        headerLink_play.bind({
            'mousedown': function() {
                window.location.href = 'game.html';
            }
        });

        bindHeaderLinkHover(headerLink_play);
        bindHeaderLinkHover(headerLink_reg);
        bindHeaderLinkHover(headerLink_about);
        bindHeaderLinkHover(headerLink_donate);

        // Setup login hover effect
        var headerLink_login = $('.login', pageWrapper);
            var headerLink_loginNormal = $('> i:nth-of-type(1)', headerLink_login);
            var headerLink_loginHover = $('> i:nth-of-type(2)', headerLink_login);

            var headerLink_auth = $('.auth', pageWrapper);
            var headerLink_auth_pass = $('.pass', headerLink_auth);
                // Initial positioning
                headerLink_auth_pass.css({marginLeft: '10px', marginRight: '-5px'});
            var isLoginActive = false;

        headerLink_login.bind({
            'mouseenter': function() {
                T(headerLink_loginNormal, dur, {css: {opacity: 0}});
                T(headerLink_loginHover, dur,  {css: {opacity: 1}});
            },
            'mouseleave': function() {
                if( !isLoginActive ) {
                    T(headerLink_loginNormal, dur, {css: {opacity: 1}});
                    T(headerLink_loginHover, dur,  {css: {opacity: 0}});
                }
            },
            'mousedown': function() {
                if( !isLoginActive ) {
                    T(headerLink_login, dur, {css: {top: -4}});
                    T(headerLink_auth, dur, {css: {opacity: 1}});
                    T(headerLink_auth_pass, dur, {css: {marginLeft: 15, marginRight: 0}})
                } else {
                    T(headerLink_login, dur, {css: {top: 0}});
                    T(headerLink_auth, dur, {css: {opacity: 0}});
                    T(headerLink_auth_pass, dur, {css: {marginLeft: 10, marginRight: -5}})
                }
                isLoginActive = !isLoginActive;
            }
        });

    setProperPageHeight();

    // Articles specifics
        // Add articles
        /*
        var articles = [
            new Article('Hidden Footprint', 'Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br><br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.'),
            new Article('About the Game', 'Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.'),
            new Article('The Horse and Ladybug', 'Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.'),
            new Article('The Dark Oasis', 'Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br><br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.'),
            new Article('The Hidden Cellar', 'Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.'),
            new Article('About the Game', 'Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br><br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.Vivamus vel risus at metus convallis laoreet a varius metus. Donec tempor, neque a fermentum accumsan, tellus ante auctor risus, id hendrerit quam odio at nisl. Maecenas aliquet velit justo, quis scelerisque mauris posuere ac. Maecenas sed hendrerit massa. Nam eget velit sed dui sagittis blandit in eget augue. Quisque a imperdiet odio. Donec massa elit, ultricies eu fermentum non, fringilla sit amet ante. Integer ultricies justo urna, id vulputate justo semper id. Aliquam vitae diam nibh. Vestibulum at ipsum a purus imperdiet lobortis in vel arcu. Vivamus egestas viverra egestas. Etiam eget sagittis nunc. Nulla posuere neque at mattis bibendum. Suspendisse iaculis odio eget augue semper, vel cursus nisl rutrum.'),
            new Article('Still Deeps', 'Adarem aut eu niv ar. Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br><br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius. Mauris vitae nulla at quam laoreet aliquet a in nibh.'),
            new Article('Crave Woods', 'Mauris vitae nulla at quam laoreet aliquet a in nibh. Adarem aut eu niv ar. Fusce nec pretium quam. Pellentesque dui risus, mollis quis molestie a, posuere nec massa. Integer facilisis laoreet ligula quis consequat. Etiam ultricies massa eget nisi consequat, sit amet eleifend elit pharetra.<br><br>Etiam rhoncus varius orci, vel elementum diam tincidunt et. Etiam volutpat leo rutrum eros ornare, non tristique massa tristique. Aliquam placerat scelerisque varius.')
        ];
        var shuffledArticles = shuffleArray(articles);

        var _1st_column = $('#_1st_column');
        var _2nd_column = $('#_2nd_column');
        var _3rd_column = $('#_3rd_column');
        var _4th_column = $('#_4th_column');

        //log(_1st_column);
        var artTemplate = $('<article/>', {class: 'article', html: '<h1></h1><p></p>'});
        var art1 = artTemplate.clone();
            $('h1', art1).html( articles[0].getTitle() );
            $('p', art1).html( articles[0].getContent() );
        var art2 = artTemplate.clone();
            $('h1', art2).html( articles[1].getTitle() );
            $('p', art2).html( articles[1].getContent() );

        //_1st_column.append(art1, art2);

        $('.article').each(function() {
            var $this = $(this);
            //log( $this);
            //$this.css({opacity: 0});
            T($this, 0.01, {css: {opacity: 0}});
            T($this, 1, {css: {opacity: 1}, delay: getRandomInt(1,100)/75 });
        });
        */

        // Set proper article height
        setProperArticlesHeight();
});

function setProperPageHeight() {
    var heightInPixels = getPageHeight() + 'px';
    docWrapper.css({height: heightInPixels});
}
function getPageHeight() {
    return pageWrapper.height() + $pagePaddingTop + $pagePaddingBottom;
}

function setProperArticlesHeight() {
    var articles = $('> .stories > .content > .articles', pageWrapper);
    var height = getArticlesHeight();
    if( height > 0 ) {
        height = height + 'px';
        $('section', articles).css({height: height});
    }
}
function getArticlesHeight() {
    var articles = $('> .stories > .content > .articles', pageWrapper);
    if(articles.length) {
        var height = articles.height();
        return height
    }
    return 0;
}
function shuffleArray(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}