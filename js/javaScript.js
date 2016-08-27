
/**
parser = new DOMParser();
var parsedXml;
inputXml = parsed.parseFromString(parseFromString, "xml/test")
myHeader = document.getElementById("jsRow");
myHeader.innerHTML += "<p>A page...</p>";
myHeader.innerHTML += inputXml;

*/

function writeToDiv (id){
	document.getElementById(id).innerHTML += "Yes?" + "<br><br><br>";
	document.write("The id of this div is: " + document.getElementById(id).id);
}

//Adapted from: http://www.w3schools.com/xml/tryit.asp?filename=tryxml_parsertest
function xmlToDiv (id){
var xmlHttp;
var xmlDoc;
xmlHttp.open("GET", "xml/test.xml", false);
xmlHttp.send();
xmlDoc = xmlHttp.responseXML;
document.write(xmlDoc.getElementById("Semester"));


document.write(xmlDoc.);
}
