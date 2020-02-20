$(".loading").append("LOADING DATA!")
$.get("https://texashealthdata.com/api/tcmhcc/ec", function(data){
        // $("#ec-table").empty()
        // for (var i=0; i<data.length; i++){
        //     var link = "#ecm"+(i+1);
        //     var id = "ecm"+(i+1);
        //     var name= "<td class='name'><a href='"+link+"'>" + data[i][0] + "</a></td>";
        //     console.log(name)
        //     var title= "<td class='title'>" + data[i][1] + "</td>";
        //     var institution= "<td class='institution'>" + data[i][2]+ "</td>";
        //     var bio = data[i][3]
        //     $("#ec-table").append("<tr>"+name+title+institution+"</tr>")

        //     if(bio){
        //         var ecmCard = $("<div class='ecm-card' id="+ id+">");
        //         var headshotDiv = $("<div class='headshot'>")
        //         var infoDiv = $("<div class='ecm-info'>")
        //         infoDiv.append("<h2 class='bio-name'>"+data[i][0]+"</h2>")
        //         infoDiv.append("<p class='bio'>"+bio+"</p>")

        //         ecmCard.append(headshotDiv)
        //         ecmCard.append(infoDiv)
        //         $(".committee").append(ecmCard)
        //     }
        // }
        $(".loading").empty();
        for (var i=0; i<data.length; i++){
            var link = "#ecm"+(i+1);
            var ariaControl = "ecm"+(i+1);
            var name = data[i][0]
            var cred = data[i][1]
            var title = data[i][2]
            var institution = data[i][3]
            var biography = data[i][4]
            var imgsrc = "https://utsystem.edu/pophealth/tcmhcc/assets/img/headshots/"+ data[i][5]

            var ecmCard = $("<div class='ecm-card'>")
            var button = $("<a data-toggle='collapse' class='toggle-wrap collapsed' href='"+link+"' aria-expanded='false' aria-controls="+ariaControl+">")
            var expanded = $("<div class='collapse collapse-content' id='"+ariaControl+"'>")

            var headshot = $("<div class='headshot'>")
            headshot.append("<div class='headshot-wrap'><img src='"+imgsrc+"'></div>")
            var info = $("<p class='bio'>"+biography+"</p>")
            expanded.append(headshot)
            expanded.append(info)

            var nameToggle = $("<div class='name-toggle'>")
            nameToggle.append("<h2 class='name'>"+name+"<br><span>"+cred+"</span></h2>")
            nameToggle.append("<p class='title'>"+title+"</p>")
            nameToggle.append("<p class='institution'>"+institution+"</p>")
            button.append(nameToggle)
            ecmCard.append(button)
            ecmCard.append(expanded)

            $(".committee").append(ecmCard)

        }



})