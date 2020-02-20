$("#ec-table").append("LOADING DATA!")
$.get("https://texashealthdata.com/api/tcmhcc/ec", function(data){
        $("#ec-table").empty()
        for (var i=0; i<data.length; i++){
            var link = "#ecm"+(i+1);
            var name= "<td class='name'><a href='"+link+"'>" + data[i][0] + "</a></td>";
            console.log(name)
            var title= "<td class='title'>" + data[i][1] + "</td>";
            var institution= "<td class='institution'>" + data[i][2]+ "</td>";
            var bio = data[i][3]
            $("#ec-table").append("<tr>"+name+title+institution+"</tr>")

            if(bio){
                var ecmCard = $("<div class='ecm-card' id="+ link+">");
                var headshotDiv = $("<div class='headshot'>")
                var infoDiv = $("<div class='ecm-info'>")
                infoDiv.append("<h2 class='bio-name'>"+data[i][0]+"</h2>")
                infoDiv.append("<p class='bio'>"+bio+"</p>")

                ecmCard.append(headshotDiv)
                ecmCard.append(infoDiv)
                $(".committee").append(ecmCard)
            }
        }
})