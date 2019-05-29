$(document).ready(function(){

    $("form").submit(function() {
        
        var city = $("input[type=text]").val();
        // $("h1").html(city)

        var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+",us&&appid=f5cacb8f8a1b22dc32d2583653f4851b";
        console.log(url)
        $.get(url, function(res){
            var temp = res.main.temp 
            console.log(temp)
            temp = Math.floor((temp -273.15) * (9/5) + 32)  //conversion to fahrenheit
            console.log(temp)
            $('p').html("Temperature: "+temp + " F")
            $("h1").html(res.name)

        },'json');
        
        return false
    });

});