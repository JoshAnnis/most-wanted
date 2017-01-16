function initMostwanted(people) {
    alert("Welcome to Most Wanted. Follow the prompts to find who you're looking for.");
    do {
        var searchType = prompt("Do you know the name of who you seek? If yes enter 'name' if not search by 'attributes'.");
    } while (!(searchType == "name" || searchType == "attributes"));
    switch (searchType) {
        case "name":
            var person = getPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
            mainMenu(person, people);
            break;

        case "attributes":

                var Gender = prompt("What is their gender? (M=Male, F=Female)");
                var Age = prompt("Approximately how old are they?");
                var Height = prompt("How tall is this person? (In INCHES)");
                var Weight = prompt("How much does this person weigh? (In LBS)");
                var EyeColor = prompt("What is their eye color? Options: Brown, Blue, Hazel, Green or Black");
                var Occupation = prompt("What do they do? (EX: Nurse)");
                mainMenu(person, people);
            break;
    }
  }

function mainMenu(person, people) {
    if (!person) {
        alert("Could not find who you are looking for plase try again");
        initMostwanted(people);
}
    var displayOption = prompt("Found"  +  person.firstName  +  person.lastName + "\nWould you like to search thier 'info', 'family',  'descendants', or 'next of kin'?, otherwise enter 'exit' or 'restart'.");
    switch (displayOption) {
        case "family":
            getFamily(person, people);
            mainMenu(person, people);
            break;

        case "info":
            getInfo(person, people);

            break;

        case "next of kin":

          getnextOfKin(person, people);

            break;

        case "descendants":

            getDescendants(person, people);
            mainMenu(person, people);

           break;
        case "restart":

            initMostwanted(people);

               break;
        case "exit":
        return;
        default:

			alert("There was an error processing your request.");

			return mainMenu(person, people);

    }

}

function getPerson(firstname, lastname, people) {
    var person = people.filter(person => person.firstName === firstname && person.lastName === lastname);

    return person[0];
}

function getInfo(person, people) {
    alert("Name: " + person.firstName + " " + person.lastName + "\nGender: " + person.gender +

        "\nTheir occupation is: " + person.occupation + "\nBirthday: " + person.dob +

        "\nHeight: " + person.height + " inches" + "\nWeight: " + person.weight + " lbs." +

        "\nEye Color: " + person.eyeColor);

    mainMenu(person, people);
}


function getFamily(person, people) {
  var kids = getKids(person, people);
     var parents =[];
  for(var i = 0; i < person.parents.length; i++){
      var parent = getPerson(person.parents[i],people);
      parents.push(parent);
      return parents;
        }
      }
      function getSpouse(person, people) {
        var spouse = getPerson(person.currentSpouse, people);
        if(!spouse){
var partner = {"firstName": "None", "lastname" : ""};
	}else{
  mainMenu(person, people);
  displayFamily(person, people);
		return "None";
}
}

function getKids(parent, people){
  var kids= people.filter(function(person){
    for (var i = 0; i < person.parents.length; i ++){
        if (person.parents[i] === parent.id) {
            return true;
        }
        else {
            return false;
        }
    }});
    return kids;
}
function getdescendants(people,person){

}


//function displayFamily(people,person){}
//alert("-The " +person.lastName+ " Family- \nParent(s): " + parent + "\nSpouse: " + spouse + "\nKid(s): " + kids);
