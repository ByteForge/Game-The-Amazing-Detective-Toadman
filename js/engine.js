// Article handling
    var ArticleManager = (function(){
        // Static properties
        // Static methods
        var $self = {};

        // Instance constructor
        function ArticleManager() {
        };

        // Instance properties
        // Instance methods
        var $this = {};

        for(var o in $self) { if($self.hasOwnProperty(o)) { ArticleManager[o] = $self.o; } }
        for(var o in $this) { if($this.hasOwnProperty(o)) { ArticleManager.prototype[o] = $this.o; } }
        return ArticleManager;
    })();

        var Article = (function(){
            // Static properties
            // Static methods

            // Instance constructor
            function Article(title, content) {
                this._title = title;
                this._content = content;
            };
            var proto = Article.prototype;
                proto.getTitle = function() {
                    return this._title;
                };
                proto.getContent = function() {
                    return this._content;
                };

            return Article;
        })();