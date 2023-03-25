$(document).ready(function() {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });

        $("#submit-btn").click(function(e) {
            e.preventDefault();
            
            // Get input values
            let city = $("#city").val();
            let date = $("#datepicker").val();
            let time = $("#time").val();
            
            
            
            let url = `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=US&method=2&month=${date.slice(5,7)}&year=${date.slice(0,4)}`;
            
            $.ajax({
                url: url,
                method: "get",
                success: function(data) {
                    let timings = time === "day" ? data.data[0].timings : data.data[0].timings;
                    
                    
                    $("#fajr").text(timings.Fajr);
                    $("#sunrise").text(timings.Sunrise);
                    $("#dhuhr").text(timings.Dhuhr);
                    $("#asr").text(timings.Asr);
                    $("#sunset").text(timings.Sunset);
                    $("#maghrib").text(timings.Maghrib);
                    $("#isha").text(timings.Isha);
                    $("#imsak").text(timings.Imsak);
                    $("#midnight").text(timings.Midnight);
                    
                  
}





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



