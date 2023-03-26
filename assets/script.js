$(document).ready(function(){


    $("#submit4").click(function(e) {
        e.preventDefault();
        // Get input values
        // let city = $("#city").val();
        // let date = $("#datepicker").val();
        // let time = $("#time").val();
        
        //let city=$("#city").val();
        let dateInput=$("#dateInput").val();
        console.log(dateInput.split("-"));

        let arr=dateInput.split("-");

        let year=arr[0];
        let month=arr[1];
        let day=arr[2];

        console.log(year,month,day);

        
        
        let url2 = `http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=51.508515&longitude=-0.1254872&method=2`;
    
        
        $.ajax({
            url: url2,
            method: "get",
            success: function(apiData) {
                console.log(apiData);
                console.log(apiData.data);
                apiData.data.forEach(e => {
                    let table = $("#table")

            let tr = `
            <tr>
                <td>${e.date.gregorian.day}</td>
                <td>Fajr: ${e.timings.Fajr}</td>
                <td>Sunrise:${e.timings.Sunrise}</td>
                <td>Dhuhr:${e.timings.Dhuhr}</td>
                <td>Asr:${e.timings.Asr}</td>
                <td>Sunset:${e.timings.Sunset}</td>
                <td>Maghrib:${e.timings.Maghrib}</td>
                <td>Isha:${e.timings.Isha}</td>
                <td>Imsak:${e.timings.Imsak}</td>
                <td>Midnight:${e.timings.Midnight}</td>
                <td>Firstthird:${e.timings.Firstthird}</td>
                <td>Lastthird:${e.timings.Lastthird}</td>   
              </tr>
            `
            $("#table").append(tr);

                })        
            
            }
        });
                   
    })
                  
})








