
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
    alert("welcome to Most Wanted. Follow the prompts to find who your looking for.");
    do {
        var searchType = prompt("Do you know the name of who you seek if yes enter 'name' if not search by 'attributes'.")
    } while (!(searchType == "name" || searchType == "attributes"));
    switch (searchType) {
        case "name":
            var listOfPeople = getPerson(prompt("Enter person's first name"), prompt("Enter person's last name."), people);
            if (listOfPeople.length > 0)
            mainMenu(listOfPeople[0], people);
            break;
        case "attributes":
            var Height = prompt("How tall is the individual you seek?");

            var weight = prompt("How much does the individual weigh?");

            var Haircolor = prompt("What color hair does the individual have?");

            var Eyecolor = prompt("What color eyes does the individual have?");

            var Gender = prompt("What gender is the individual?");
        
            var age = prompt("When's the individual's date of birth?"); 
            mainMenu(people, person)             
        break;
    }
}




function mainMenu (person, people){
        if(!person)
            alert("could not find who you are looking for");
            initMostwanted(people);
    

    var getFamily = prompt("found"+ person.firstname +"" + person.lastname+ "", 'would you like to know about, family,  descendants,  next of kin, or would you like to exit or restart' );

    switch (getFamily){
            case "family":
            var familyinfo = prompt()



        break;


            case "next of kin":




        break;


            case "descendants":



        break;


            case "restart":
            initMostwanted(people)


        break;


            case "quit":


         break;

    }

}










function getPerson(person, people) {
     var listOfPeople = people.filter(person => person.firstname === fristname && person.lastname === lastname);
     return listOfPeople;  

}






