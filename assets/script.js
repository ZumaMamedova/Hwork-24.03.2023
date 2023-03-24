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
            <li>City:${data.location.name}</li>
            <li>Country:${data.location.country}</li>
            <li>Weather:${degree}</li>
            <li>Icon:</li>
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