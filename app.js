//GLOBALS
var api = "https://api.nasa.gov/planetary/apod?api_key=WHlmoaA5x0F2PWxzawL4b0EICMuyXtxjOTHrq2bq";
var body = document.getElementById('body');

function httpGet(api)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", api, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function newRandomDate(){

    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var currentDay = new Date().getDay();
    var year = getRandomIntInclusive(1996, currentYear);
    var month = getRandomIntInclusive(1, 12);
    var day = getRandomIntInclusive(1, 28);
    
    
    if( year == currentYear && month >= currentMonth ){
        console.log('true');
        
        month = getRandomIntInclusive(1, currentMonth);
        if( currentDay >= day ){
            day = getRandomIntInclusive(1, currentDay);
        }
    };
    
    
    if( year == 1997 && month <= 5 ){
        console.log('too early in 1997');
        
        month = getRandomIntInclusive(5, 12);
    };
    
    var dateRange = year + '-' + month + '-' + day;   
    return dateRange;
}



function newRandomSpacePic()
{
    var imgBackground = document.getElementById('space-container');
    var randomDate = newRandomDate();
    var apiRequest = api + '&date=' + randomDate;
    var apiResponse = httpGet(apiRequest);
    apiResponse = JSON.parse(apiResponse);
    
    console.log(apiResponse);
    
    var spacePicURL = apiResponse['hdurl'];
    
    console.log(spacePicURL);
    
    if( spacePicURL === undefined ){
        newRandomSpacePic();
    };
    
    var extension = spacePicURL.split('.')[3];
    
    console.log(extension);
    
    console.log(randomDate);
    
    /*
    if( extension != 'gif' && extension && 'jpg' && extension != 'png' && extension != 'jpeg' && extension != 'tiff' ){
        newRandomSpacePic();
    }
    */
    
    imgBackground.style.backgroundImage = 'url("' + spacePicURL +  '")';
}






body.addEventListener("click", newRandomSpacePic);

newRandomSpacePic();