$(document).ready(function){

    $("button").click(function(e){
        e.preventDEafult();
        let city=$("#city").val();


        $.ajax({
            url:"http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2",
            method:"get",
            success:function(data){

            time=time==day?data.current.time_d:data.current.time_m;
            let html=`
            <ul>
            <li>Fajr:${data.location.time}</li>
            <li>Sunrise:${data.location}</li>
            <li>:${time}</li>
            <li>Dhuhr:${time}</li>
            <li>Asr:${time}</li>
            <li>Sunset:${time}</li>
            <li>Maghrib:${time}</li>
            <li>Isha:${time}</li>
            <li>Imsak:<${time}/li>
            <li>Midnight:${time}</li>
            </ul>


        `
        $("#result").html(html)
        $("#city").val("")

        },
        error:function(error){
            if(error.status==400);


            }
        })
    })
}