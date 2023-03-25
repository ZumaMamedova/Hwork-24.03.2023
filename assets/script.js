$(document).ready(function(){


    // $("#datepicker").datepicker({
    //     dateFormat: "yy-mm-dd"
    // });

    $("#submit4").click(function(e) {
        e.preventDefault();
        console.log('sdfgh');
        // Get input values
        // let city = $("#city").val();
        // let date = $("#datepicker").val();
        // let time = $("#time").val();
        let year = $("#year").val();
        let month = $("#month").val();
        
        
        let url2 = `http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2`
    
        
        $.ajax({
            url: url2,
            method: "get",
            success: function(data) {
                console.log(data);
                data.data.forEach(e => {
                    console.log(e.timings);

                    let ul = $("#ul")

            let html = `

                <li>Fajr: ${e.timings.Fajr}</li>
                
            `;
            ul.text(html)
        });
               
            }
        })
    })
                  
})





// $(document).ready(function() {

//     $("button").click(function(e) {
//         e.preventDefault();
//         let city = $("#city").val();
//         let time = $("#time").val();
//         let url = `http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2`;

//         $.ajax({
//             url: url,
//             method: "get",
//             success: function(data) {
//                 time = $("#time").val() === "day" ? data.data[0].timings : data.data[31].timings;
//                 let html = `
//                     <ul>
//                         <li>Fajr: ${time.Fajr}</li>
//                         <li>Sunrise: ${time.Sunrise}</li>
//                         <li>Dhuhr: ${time.Dhuhr}</li>
//                         <li>Asr: ${time.Asr}</li>
//                         <li>Sunset: ${time.Sunset}</li>
//                         <li>Maghrib: ${time.Maghrib}</li>
//                         <li>Isha: ${time.Isha}</li>
//                         <li>Imsak: ${time.Imsak}</li>
//                         <li>Midnight: ${time.Midnight}</li>
//                     </ul>`;
//                 $("#result").html(html);
//                 $("#city").val("");
//             },
//             error: function(error) {
//                 if (error.status == 400) {
//                     console.log("Error 400");
//                 }
//             }
//         });
//     });
// });



