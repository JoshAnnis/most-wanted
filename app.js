
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

function initMostwanted(people) {
    alert("Welcome to Most Wanted. Follow the prompts to find who you're looking for.");
    do {
        var searchType = prompt("Do you know the name of who you seek? If yes enter 'name' if not search by 'attributes'.")
    } while (!(searchType == "name" || searchType == "attributes"));
    switch (searchType) {
        case "name":
        var person= getPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
        mainMenu(person, people);
        break;
        case "attributes":
        var Height = prompt("How tall is the individual?");

        var weight = prompt("How much does the individual weigh?");

        var Eyecolor = prompt("What color eyes does the individual have?");

        var Gender = prompt("What gender is the individual?");

        var age = prompt("When's the individual's date of birth?");
        mainMenu(person, people);
        break;
    }
}










function mainMenu(person, people) {
    if (!person){
        alert("Could not find who you are looking for plase try again");
        initMostwanted(people);
    }
        



    var displayOption = prompt("Found " + person.firstName + person.lastName + "Would you like to search 'info', 'family',  'descendants', or 'next of kin'?, otherwise enter 'exit' or 'restart'.");
        
    switch (displayOption){

        case "family":
        getfamily(person, people);

            break;
           
           case "info":
            getinfo(person, people);

            break;
            
            

            case "next of kin":
            getnextOfKin(person, people);

            break;


            case "descendants":
            getDescendants(person, people);
            break;


            case "restart":
            initMostwanted(person, people);
            initMostwanted(people)


            break;


            case "quit":
            


            return;
            break;
            

        }

    }
function getPerson(firstname, lastname, people){
       var person = people.filter(person => person.firstName === firstname && person.lastName === lastname);
       return person[0];
}