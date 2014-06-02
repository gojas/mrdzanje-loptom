var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "players":"players",
        "places":"places",
        "player/:player": "player"
    },

    initialize:function () {
               
        this.leftMenuView = new LeftMenuView();
        
        this.headerView = new HeaderView();
        
        this.homeView = new HomeView();
        
        this.placesView = new PlacesView();
        
        this.playersView = new PlayersView();
        
        this.playerView = new PlayerView();
        
        
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            //TODO: try changing it to
            //Backbone.history.back()
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },
    
    players: function(){
        this.changePage(this.playersView);  
    },
    
    player: function(player){
        this.playerView.options.player = player;
        this.changePage(this.playerView);
    },

    places: function(){
        this.changePage(this.placesView);
    },

    home:function () {
        console.log('#home');
        
        this.changePage(this.homeView);
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        
        page.render();
        
        $('body').append($(page.el));
        
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        
    }

});

$(document).ready(function () {
    app = new AppRouter();

    Backbone.history.start();
});