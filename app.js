
/*  Remove this from your final submission
function printAllToConsole(dataObj){
	for (var key in dataObj) {
		if (dataObj.hasOwnProperty(key)) {
			console.log(key + " -> " + JSON.stringify(dataObj[key]));
		}
	}
}
printAllToConsole(data);
*/

function initSearch(people){
	alert("welcome to Most Wanted.follow the prompts to find who your looking for.");
	do{
		var searchType = prompt("Do you know the name of who you seek if yes enter 'name' if not search by 'attributes'.")		
	}while (!(searchType =="name" || searchType =="attributes"));
	switch(searchType){
		case"name"
		var person = getPerson(prompt("Enter person's first name"), prompt("Enter person's last name."), people);
		mainMenu(person,people);
		break;
		case "attributes"
		var Height = prompt("How tall is the individual that you seek");

		var weight = prompt("How much does the individual weigh");

		var Haircolor = prompt("What color hair do the individual have");

		var Eyecolor = prompt("What color eyes does the individual have");

		default:
		alert("there was an error processing your request");
		initMostWanted(people);
	}
}


		function getPerson(firstname, lastname, people){



}

		function mainMenu(person,people){
		alert("could not find that person");
		return initSearch(people);
		}
		var displayOption = prompt("found" + person.firstname + "" + person.lastname +"do you want to know their 'info' 'family , 'next of kin', or 'Descendants'? type the option you want or 'restart' , or 'quit' ")
		

	switch

}





