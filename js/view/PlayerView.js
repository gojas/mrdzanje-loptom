var PlayerView = Backbone.View.extend({
    
    initialize: function(options){
    this.options = options || {};
      this.headerView = new HeaderView();  
      this.leftMenuView   = new LeftMenuView();
    },
    
    template : Handlebars.compile(
        '<div data-role="content" id="content">' +
            '<div>{{player}}</div>' +
        '</div>'
    ),
    
    events: {
        'swiperight .ui-panel-wrapper': 'openLeftPanel'
    },
    
    openLeftPanel: function(){
        $( "#left-panel" ).panel( "open" );
    },
    
    render: function(){
        
        $(this.el).html(this.template(this.options));
        
        $(this.el.childNodes).prepend(this.headerView.render().el);
        $(this.el).prepend(this.leftMenuView.render().el);
        
        
        this.delegateEvents();
        return this;
    }
    
});