$("#ec-table").append("LOADING DATA!")
$.get("https://texashealthdata.com/api/tcmhcc/ec", function(data){
        $("#ec-table").empty()
        for (var i=0; i<data.length; i++){
            var name= "<td class='name'>" + data[i][0] + "</td>";
            var title= "<td class='title'>" + data[i][1] + "</td>";
            var institution= "<td class='institution'>" + data[i][2]+ "</td>";
            
            $("#ec-table").append("<tr>"+name+title+institution+"</tr>")
        }
})