$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/apppBFgxOUm4RbQQU/Imported%20table?api_key=keyfIJmVVuHtf9e2u";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.camera_shop_name);
                       items.push(value.fields.camera_shop_url);
                       items.push(value.fields.camera_shop_address);
                       items.push(value.fields.camera_shop_phone_number);
                       items.push(value.fields.camera_shop_hours);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "companycamera_shop_name",
                       defaultContent:""},
                     { title: "camera_shop_url",
                         defaultContent:"" },
                     { title: "camera_shop_address",
                       defaultContent:"" },
                     { title: "camera_shop_phone_number",
                       defaultContent:""},
                     { title: "camera_shop_hours",
                         defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready