var HomeView = Backbone.View.extend({
    
    initialize: function(){
        this.headerView     = new HeaderView();
        this.leftMenuView   = new LeftMenuView();
    },
    
    template: Handlebars.compile(
        
        
        '<div data-role="content" id="content">' +
            '<div class="ui-grid-a">' +
                '<div class="ui-block-a">' +
                    '<a href="#players" data-icon="user" class="ui-link ui-btn ui-icon-user ui-btn-icon-bottom">Players</a>' +
                '</div>' +
                '<div class="ui-block-b">' +
                    '<a href="#places" data-icon="navigation" class="ui-link ui-btn ui-icon-navigation ui-btn-icon-bottom">Places</a>' +
                '</div>' +
            '</div>' +
        '</div>'
    ),
    
    events: {
        'swiperight .ui-panel-wrapper': 'openLeftPanel'
    },

    openLeftPanel: function(){
        $( "#left-panel" ).panel( "open" );
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        
        $(this.el.childNodes).prepend(this.headerView.render().el);
        $(this.el).prepend(this.leftMenuView.render().el);
        
        this.delegateEvents();
        return this;
    }
    
});