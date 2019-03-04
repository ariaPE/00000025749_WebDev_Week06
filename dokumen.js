function loadElement(){
	var h1 = document.createElement("h1");
	var nama1 = document.createTextNode("Nama : ");
	var chat1 = document.createTextNode("Chat : ");
	var nama2 = document.createTextNode("Nama : ");
	var chat2 = document.createTextNode("Chat : ");
	var text = document.createTextNode("CHATBOX");
	h1.appendChild(text);
	var title = document.getElementById("title");
	title.appendChild(h1).style.textAlign = "center";

	//button declaration
	var kirim = document.createElement("button");
	kirim.setAttribute("id", "kirim");
	kirim.setAttribute("style", "margin-top: 10px; margin-bottom: 10px;");
	kirim.setAttribute("onclick", "kirim1();");
	kirim.setAttribute("type", "button");
	kirim.innerHTML = "SEND!";

	var kirim2 = document.createElement("button");
	kirim2.setAttribute("id", "kirim2");
	kirim2.setAttribute("style", "margin-top: 10px; margin-bottom: 10px;");
	kirim2.setAttribute("onclick", "kirim_p2();");
	kirim2.setAttribute("type", "button");
	kirim2.innerHTML = "SEND!";

	//deklarasi kolom nama
	var input1 =  document.createElement("input");
	input1.setAttribute ("type", "text");
	input1.setAttribute ("style", "margin-bottom: 20px;");
	input1.setAttribute ("id", "nama1");

	var input2 =  document.createElement("input");
	input2.setAttribute ("type", "text");
	input2.setAttribute ("style", "margin-bottom: 20px;");
	input2.setAttribute ("id", "nama2");

	//deklarasi kolom chat
	var textarea1 = document.createElement("textarea");
	textarea1.setAttribute("id", "chat1");

	var textarea2 = document.createElement("textarea");
	textarea2.setAttribute("id", "chat2");

	//pembuatan elemen form, penting ga sih?
	var form1 = document.createElement("form");
	form1.setAttribute("id", "person_1");
	form1.setAttribute("style", "border-style: dashed; padding: 15px; border-width: 1px;");
	document.getElementById("p1").appendChild(form1);

	var form2 = document.createElement("form");
	form2.setAttribute("id", "person_2");
	form2.setAttribute("style", "border-style: dashed; padding: 15px; border-width: 1px;");
	document.getElementById("p2").appendChild(form2);

	form1.appendChild(nama1);
	form2.appendChild(nama2);

	form1.appendChild(input1).style.width = "100%";
	form1.appendChild(chat1);
	form2.appendChild(input2).style.width = "100%";
	form2.appendChild(chat2);
	form1.appendChild(textarea1).style.width = "100%";
	form1.appendChild(kirim);
	form2.appendChild(textarea2).style.width = "100%";
	form2.appendChild(kirim2);

//kirim.addEventListener("click", kirim1, false);
//kirim2.addEventListener("click", kirim2, false);

}

//var getNama2 = document.getElementById("nama2").value;
//var getChat1 = document.getElementById("chat1").value;
if (document.getElementById("history") == !NULL){
	var clear = document.createElement("button");
	clear.setAttribute("id", "clear");
	clear.setAttribute("style", "margin-top: 10px; margin-bottom: 10px;");
	clear.setAttribute("onclick", "clearChat();");
	clear.setAttribute("type", "button");
	clear.innerHTML = "Clear";

	document.getElementById("chatbox").appendChild(clear);
}

function kirim1 (x, y){

	var x = document.getElementById("nama1").value;
	var y = document.getElementById("chat1").value;
	//document.getElementById("history").innerHTML += "<u> " + getNama1 + "</u> <br />" + ;
	/** var boxChat1 = createElement("div");
	boxChat1.setAttribute ("id", "box1");
	boxChat1.setAttribute ("style", "border-width: 1px; border-style: solid; padding: 5px; background-color: green;");
	var history = document.getElementById("history");
	history.appendChild(boxChat1); **/

	var tampil = document.getElementById("history");

	tampil.innerHTML += "<div class='chat1'>" + "<u>" + x + "</u> <br /> <br />" + y + "</div>"; 
}

function kirim_p2 (r, s){

	var r = document.getElementById("nama2").value;
	var s = document.getElementById("chat2").value;

	var tampil = document.getElementById("history");
	tampil.innerHTML += "<div class='chat2'>" + "<u>" + r + "</u> <br /> <br />" + s + "</div>";

} 

function clearChat() {
	a = document.getElementById("history");
	while (a.firstChild){
		a.removeChild(a.firstChild);
	}
}

/**
var form1 = document.createElement("form");
form1.setAttribute("id", "person_1");
var form2 = document.createElement("form");
form2.setAttribute("id", "person_2");

var input =  document.createElement("input");
input.setAttribute ("type", "text");
input.setAttribute ("id", "nama");

var textarea = document.createElement("textarea");
textarea.setAttribute("id", "chat");

var nama1 = document.getElementById("chatbox");
**/
