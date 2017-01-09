
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
        do{

                var Gender = prompt("What is their gender? (M=Male, F=Female)");

            }while(!(Gender == "F" || Gender == "M"));



            do{

            var Age = prompt("Approximately how old are they? Please Type: '18 & Under', '18-25', '25-50' or '50+' ");

            }while(!(Age == "18 & Under" || Age == "18-25" || Age == "25-50" || Age == "50+"));



                var Height = prompt("Approximately how tall is this person? (In INCHES)");

                // (Inches, FT, In)



                var Weight = prompt("About how much does this person weigh? (In LBS)");



            do{

                var EyeColor = prompt("What is their eye color? Options: Brown, Blue, Hazel, Green or Black");

            }while(!(EyeColor == "Brown" || EyeColor == "Blue" || EyeColor == "Hazel" || EyeColor == "Green" || EyeColor == "Black"));



                var Occupation = prompt("What is their line of work? (EX: Nurse)");

                mainMenu(person, people)
        break;
    }
}










function mainMenu(person, people) {
    if (!person){
        alert("Could not find who you are looking for plase try again");
        initMostwanted(people);
    }
        



    var displayOption = prompt("Found " +  person.firstName  +  person.lastName  + "Would you like to search 'info', 'family',  'descendants', or 'next of kin'?, otherwise enter 'exit' or 'restart'.");
        
    switch (displayOption){

        case "family":
        getFamily(person, people);

            break;
           
           case "info":
            getInfo(person, people);

            break;
            
            

            case "next of kin":
            getnextOfKin(person, people);

            break;


            case "descendants":
            getDescendants(person, people);
            break;


            case "restart":
            initMostwanted(people);


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
function getInfo(person,people){
    alert("Name: " +person.firstName + " " +person.lastName + "\nGender: " +person.gender+

     "\nTheir occupation is: "+ person.occupation + "\nBirthday: " +person.dob +

      "\nHeight: " +person.height + " inches" + "\nWeight: " +person.weight + " lbs." +

      "\nEye Color: " +person.eyeColor);

    mainMenu(person, people);
}

 
function getFamily(person, people){
            var spouse = getPersonById(person.currentSpouse, people);

            var personParents = getPersonById(person.parents[0], people);

            var personFamily =alert("Parents:" + " " + personParents.firstName + " " + personParents.lastName + "\n" + "Spouse:" + " " + spouse.firstName + " " + spouse.lastName);
            mainMenu(person, people)
}
function getparents(person, people){
  
}