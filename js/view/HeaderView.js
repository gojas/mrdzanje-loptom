var HeaderView = Backbone.View.extend({
    
    template: Handlebars.compile(
        '<div data-role="header">' +
            '<a href="#left-panel" class="ui-btn ui-corner-all ui-icon-bars ui-btn-icon-notext">Bars Icon</a>' +
            '<h1>Gojko nindja</h1>' +
            '<a data-rel="popup" id="open-login-popup" data-position-to="window" class="ui-btn ui-corner-all ui-icon-user ui-btn-icon-notext" data-transition="pop">Sign in</a>' +
        '</div>' + 
        '<div data-role="popup" id="login-popup" data-theme="a" class="ui-corner-all">' + 
            '<form>' +
                '<div style="padding:10px 20px;">' +
                    '<h3>'+Translations.please_sign_in+'</h3>' +
                    '<label for="un" class="ui-hidden-accessible">Username:</label>' +
                    '<input type="text" name="user" id="un" value="" placeholder="username" data-theme="a">' +
                    '<label for="pw" class="ui-hidden-accessible">Password:</label>' +
                    '<input type="password" name="pass" id="pw" value="" placeholder="password" data-theme="a">' +
                    '<button type="submit" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Sign in</button>' +
                '</div>' +
            '</form>' +
        '</div>'
    ),
    
    events: {
        'click #open-login-popup': 'openLoginPopup'
    },
    
    openLoginPopup: function(e){
        console.log('njo');
        e.preventDefault()
        
        //trying loading... working yeeeeee
        $.mobile.loading('show');
        $('#login-popup').popup('open',{transition: 'pop'})
        $.mobile.loading('hide');
    },
    
    render:function (eventName) {
        $(this.el).html(this.template());
        
        this.delegateEvents();
        return this;
    }
    
});

