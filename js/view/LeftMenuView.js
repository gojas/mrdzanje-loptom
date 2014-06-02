var LeftMenuView = Backbone.View.extend({
    
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
    
    template: Handlebars.compile(
            
        '<div data-role="panel" id="left-panel" data-theme="b">' +
            '<!--REMOTE STUFF <ul id="find-people-and-places" data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Find a city..." data-filter-theme="a"></ul>-->' +
            '<ul data-role="listview" data-filter="true" data-filter-reveal="true" data-inset="true" data-filter-placeholder="Search players...">'+
                '{{#each this}}'+
                    '<li>'+
                        '<a href="#player/{{this.name}}">{{this.name}}</a>' +
                    '</li>' +
                '{{/each}}' +
            '</ul>'+
        '</div>'
    ),
    
    events: {
        'filterablebeforefilter #find-people-and-places': 'findPeopleAndPlaces'
    },
    
//    findPeopleAndPlaces: function(e){
//        value = $('input').val();
//        input = $('#find-people-and-places');
//        
//        html = "";
//        input.html( "" );
//        if(value.length > 2){
//            input.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
//            input.listview( "refresh" );
//            $.ajax({
//                url: "http://gd.geobytes.com/AutoCompleteCity",
//                dataType: "jsonp",
//                crossDomain: true,
//                data: {
//                    q: value
//                }
//            })
//            .then( function ( response ) {
//                $.each( response, function ( i, val ) {
//                    if(val.length == 0){
//                        html += "<li>" + 'Nothing found..' + "</li>";
//                    }else{
//                        html += "<li>" + val + "</li>";
//                    }
//                });
//                input.html( html );
//                input.listview( "refresh" );
//                input.trigger( "updatelayout");
//            });
//        }
//    },
    
    findPeopleAndPlaces: function(){
        //
        
    },
    
    render: function(){
        $(this.el).html(this.template(this.players));
        return this;
    }
    
});