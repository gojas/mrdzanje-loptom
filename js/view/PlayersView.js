var PlayersView = Backbone.View.extend({
    
    initialize: function(){
      this.headerView = new HeaderView();  
      this.leftMenuView   = new LeftMenuView();
    },
    
    //will use collection later
    players : [
        {
            user: "gojas",
            name: "Gojko",
            rating: 4,
            age: 23,
            email: "gojas90@gmail.com"
        },
        {
            user: "baneeex",
            name: "Branko",
            rating: 4.5,
            age: 24,
            email: "baneeex90@gmail.com"
        },
        {
            user: "shkomi",
            name: "Milan",
            rating: 2,
            age: 24,
            email: "shkomi90@gmail.com"
        }
    ],
    
    template : Handlebars.compile(
        '<div data-role="content" id="content">' +
            '<ul data-role="listview" data-theme="a" data-divider-theme="a" class="ui-listview ui-group-theme-a">' +
                
                '{{#each this}}'+
                    '<li>'+
                        '<a href="#player/{{this.user}}">' + 
                            '<h2>{{this.name}}: {{this.email}}</h2>' + 
                            '<h3>Rating: {{this.rating}}</h3>' +
                        '</a>' +
                    '</li>' +
                '{{/each}}' +
                
            '</ul>' +
        '</div>'
    ),
    
    events: {
        'swiperight .ui-panel-wrapper': 'openLeftPanel'
    },
    
    openLeftPanel: function(){
        $( "#left-panel" ).panel( "open" );
    },
    
    render: function(){
        $(this.el).html(this.template(this.players));
        
        $(this.el.childNodes).prepend(this.headerView.render().el);
        $(this.el).prepend(this.leftMenuView.render().el);
        
        
        this.delegateEvents();
        return this;
    }
    
});