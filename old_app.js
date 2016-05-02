var api = "https://api.nasa.gov/planetary/apod?api_key=WHlmoaA5x0F2PWxzawL4b0EICMuyXtxjOTHrq2bq";


function httpGet(api)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", api, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



function setImgSrc(imgID, imgSource)
{
    imgID = arguments[0]; imgSource = arguments[1];
    console.log(imgID);
    var img = document.getElementById(imgID);
    console.log(imgSource);
    console.log(img);
    img.src = imgSource;
}



function newRandomPic()
{
    
    var date = new Date;
    var currentYear = date.getFullYear();
    
    var year = Math.round( Math.random() * (currentYear - 1996) + 1996 );
    var day = Math.round( Math.random() * 6 );
    var month = Math.round( Math.random() * 11 );
    
    if( month != 0 ){
        month = 0 + month;
    };

    
    var randomDate = year + '-' + month + '-' + day;
    
    var apiDate = api + '&date=' + randomDate;
    
    
    var source = httpGet(apiDate);
    
    source = JSON.parse(source);
    source = source["hdurl"];
    
    
    //document.write(year);
    
    //document.write(' ' + day);
    
    //document.write(' ' + month);

    setImgSrc("space", source);

    
    
}


//newRandomPic();


document.getElementById("space-container").addEventListener("click", newRandomPic);





var img = document.getElementById("space");


var test = httpGet(api);


test = JSON.parse(test);




img.src = test["hdurl"];

console.log(test);


var date = new Date();

var year = date.getFullYear();





console.log(date);