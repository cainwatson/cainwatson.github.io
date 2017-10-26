/* global $ _ opspark */

$(document).ready(function() {
    
    const billypedia = {
        init: function() {
            billypedia.getApi();
        },
        getApi: function() {
            $.getJSON('data.json', function(data) {
                billypedia.data = data;
            }).success(function() {
                billypedia.topRated();
                billypedia.generalRecordings();
                billypedia.riderDataTable();
                billypedia.addEventHandlers();
            }).fail(function() { console.log('getJSON on discography failed!'); });
        },
        topRated: function() {
            let topRated = billypedia.data.discography.topRated;
            topRated = _.map(topRated, function(curData) {
                let $par = $('<p>').text(curData.title);
                $par.attr('data-record-art', curData.art);
                return $par;
            });
            $('#list-top-rated').before($('<img>').attr('id', 'top-rated-img').attr("src", billypedia.data.discography.topRated[0].art));
            $('#list-top-rated').append(topRated);
        },
        generalRecordings: function() {
            $('#sidebar')
                         .append($('<section>').attr("id", "section-recordings")
                         .append($('<h2>').text("General Recordings"))
                         .append($('<img>').attr('id', 'general-img').attr("src", billypedia.data.discography.recordings[0].art))
                         .append($('<ul>').attr("id", "list-recordings"))
            );
            
            let recordings = billypedia.data.discography.recordings;
            _.forEach(recordings, function(data){
                $('#list-recordings').append($('<p>').attr("class", "title").attr('data-art', data.art).text(data.title));
            });
            
        },
        riderDataTable: function() {
            var createTable = function(rider){
                var createRow = function(rider){
                    var $row = $("<tr>");
                    var $type = $("<td>").text(rider.type);
                    //var $inbetween = $("<td>").text(" ");
                    var $desc = $("<td>").text(rider.desc);
                    $row.append($type);
                    //$row.append($inbetween);
                    $row.append($desc);
                    return $row;
                };
                var $table = $("<table>").attr('class','rider-table');
                var $rows = rider.map(createRow);
                $table.append($rows);
                return $table;
            };
            let rider = billypedia.data.rider;
            $('<div>').attr('id', 'rider-div')
                      .append($('<h3>').text('Rider Data'))
                      .append(createTable(rider).attr('id', 'rider-data-table')).appendTo('.content');
        },
        billyCount: 0,
        addEventHandlers: function() {
            // billy pics
            $('#image-billy').on("click", function(e){
                billypedia.billyCount++;
                if(billypedia.billyCount >= billypedia.data.images.billy.length) { billypedia.billyCount = 0; }
                $('#image-billy').attr('src', billypedia.data.images.billy[billypedia.billyCount]);
            });
            
            // top rated
            $('#list-top-rated').children().on('click', function(e) {
               $('#top-rated-img').attr('src', $(e.currentTarget).attr('data-record-art')); 
            });
            
            // general recordings
            $('.title').on('click', function(e) {
                $('#general-img').attr('src', $(this).attr('data-art'));
            });
    
        },
    };
    
    billypedia.init();
    
    $('body').fadeIn(1250);
});
