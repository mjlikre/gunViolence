// function incidentDescription() {
//     let cors = "https://cors-anywhere.herokuapp.com/";
//     let incidentA = "http://www.post-gazette.com/local/south/2013/01/17/Man-arrested-in-New-Year-s-Eve-shooting-in-McKeesport/stories/201301170275";
//     let desDiv = " p";
//     let combo = (cors + incidentA)
//     $.ajaxSetup({
//         'headers':{
//             'header1':'origin',
//             'header2':'x-requested-with',
//         }
//     }
//     );
//     function httpGet(theUrl)
// {
//     if (window.XMLHttpRequest)
//     {// code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp=new XMLHttpRequest();
//     }
//     else
//     {// code for IE6, IE5
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//             return xmlhttp.responseText;
//         }
//     }
//     xmlhttp.open("GET", theUrl, false );
//     xmlhttp.send();    
// }
//     $('#incident').append(httpGet(combo));
// }

// incidentDescription();

// function myFunction() { 
    
// var page = "http://www.gunviolencearchive.org/incident/461105";

// var $dialog = $('<div></div>')
//                .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
//                .dialog({
//                    autoOpen: false,
//                    modal: true,
//                    height: 625,
//                    width: 500,
//                    title: "Some title"
//                });
// $dialog.dialog('open');
// } 

// myFunction();

$.get("https://cors-anywhere.herokuapp.com/http://www.dailybulletin.com/article/zz/20130105/NEWS/130109127", {}, function(results){
    //alert(results); // will show the HTML from anotherPage.html
    $('#incident').append$((results).find("div#block-system-main").html()); // show "scores" div in results
  });