//Skriver ut användarnamnet

const params = new URLSearchParams(window.location.search);
	
const email = params.get("email");
	document.getElementById("email").innerHTML = email;

//Chatt funktion där man skriver i fältet
function postChat(){
	let message
	 = document.getElementById("userInput").value;

	let userPost = document.createElement( "P" );
	userPost.innerHTML = message;
	document.getElementById("chatWindow").appendChild(userPost);
	
//Tidsramen för autosvaret	
	setTimeout( botAnswer, 4000 );
}

//Chatt funktion automatiskt svar och fönster
function botAnswer() {
	//  P tag blir till meddelande
	let botPost = document.createElement( "P" );
	
	// svar alternativ
	let aArray = [ "Hejsan!", "Tjena!", "Hallå!" ];
	
	// slumpar fram nummer
	let randomNumber= Math.floor( Math.random() * aArray.length )
	
	//väljer slumpmässigt text
	let randomText = aArray[randomNumber];
	
	//text som innehåll
	let botText = document.createTextNode( randomText );
	// text på P taggen
	botPost.appendChild( botText );
	// ger Pet class till boten
	botPost.classList.add( "botPost" );
	
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild( botPost );
}