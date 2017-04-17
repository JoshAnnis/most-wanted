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

                var Gender = prompt("What is their gender? (male, or female)");
                //var Age = prompt("Approximately how old are they?");
                var Height = prompt("How tall is this person? (In INCHES)");
                var Weight = prompt("How much does this person weigh? (In LBS)");
                var EyeColor = prompt("What is their eye color? Options: Brown, Blue, Hazel, Green or Black");
                var Occupation = prompt("What do they do? (EX: Nurse)");
                var filteredList = searchByAttributes("height","weight","gender","eyeColor","occupation","people");
                var selectedPerson = pickPerson(filteredList);
                mainMenu(selectedPerson, people);
            break;
    }
  }
function searchByAttributes(height, weight,gender, occupation, people){
return people.filter(function(person)
  {
  if (gender && (gender != person.gender)){return false;}
  if (height && (height != person.height)){return false;}
  if (weight && (weight != person.weight)){return false;}
  if (occupation && (occupation != person.occupation)){return false;}
  return people;
  });
  }

function pickPerson(filteredList){
  var message="";
for (var i=0; i < filteredList.length; i++){
 message += (i +" Name: "+filteredList[i].firstName+ " " +filteredList[i].lastName);
}
 alert(message);
 var choosePerson = prompt("Type the number of the person you would like to know more about? If none exists press enter.");
 if(!choosePerson){
   alert("Search criteria does not match the database.");
 }
return filteredList[choosePerson];
}


function mainMenu(person, people) {
    if (!person) {
        alert("Could not find who you are looking for plase try again");
        initMostwanted(people);
}
    var displayOption = prompt("Found "  +  person.firstName  +   person.lastName + "\nWould you like to search thier 'info', 'family',  'descendants', or 'kin'?, otherwise enter 'exit' or 'restart'.");
    switch (displayOption) {
        case "family":
        getFamily(person, people);

            break;
        case "info":
            getInfo(person, people);

            break;
        case "Kin":
          getnextOfKin(person, people);
        break;
        case "descendants":

        var descendantsFound = getDescendants(person, people);

        ShowDescendants(descendantsFound,people);

          mainMenu(person,people);

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

function getDescendants(person, people){
	var descendants = [];
	var id = person.id;
	for(var i = 0; i< data.length; i++){
		var persons = data[i];
		if(person.parents.indexOf(parseInt(id))>-1){
			descendants.push(person);
			var foundDescendants = GetDecendants(person,people);
			if(foundDescendants){
				descendants = descendants.concat(foundDescendants);
      }
		}
	}
	if(descendants.length === 0){
		return false;
	}
	return descendants;
}


function ShowDescendants(descendantsFound,people){
	var message="";
	for(var i=0; i<descendantsFound.length; i++){
		message += (descendantsFound[i].firstName+" "+descendantsFound[i].lastName+" ");
	}
	alert("Descendants found \n"+message);
	return descendantsFound;
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


function getFamily (person, people){
            var spouse = getSpouse (person, people);
            var parentOne = getParentOne (person, people);
            var parentTwo = getParentTwo (person,people);
            var siblings = findSiblings(person, people);
              var siblingString="";
              if (siblings.length === 0){
                siblingString === "None";
              }
              for (var i = 0; i < siblings.length; i ++){
                siblingString += siblings[i].firstName + " " + siblings[i].lastName + "\n";
              }
            var kids = getKids (person, people);

                var kidsString="";

                if (kids.length === 0){

                        kidsString += "None";
                  }

                for (var j = 0; j < kids.length; j ++){
                    kidsString += kids[j].firstName + " " + kids[j].lastName + "\n";
           }
            alert("Spouse: \n" + " " + spouse + " " + "\n\n" + "Parent(s): \n" + parentOne +  "\n" + parentTwo + "\n\n"     + "Sibling(s): \n" + siblingString + "\n\n" + "Children: \n" + kidsString + "\n");
    mainMenu (person, people) ;
}
function getSpouse (person,people){

    if (!person.currentSpouse){

    return "None";

    }

    else{

        var spouse = getPersonById(person.currentSpouse ,people);

    }

    return spouse.firstName + " " + spouse.lastName;

}

function findSiblings(myPerson, people){

    var parentIDs = myPerson.parents;

    var siblings = people.filter(function(person){

        if (myPerson.parents === [0] && parentIDs[0] === person.parents[0]){

          return false;

        }

        else if(parentIDs[0] === person.parents[0]){

            return true;

        }

    });

    return siblings;

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
function getParentOne (person, people){
    if (person.parents.length === 0){
    return "None";
    }
    else{
        var parentOne = getPersonById(person.parents[0], people);
     }
    return parentOne.firstName + " " + parentOne.lastName;
}
function getParentTwo (person, people){
    if (person.parents.length === 0 || person.parents.length === 1){
        return "";
    }
    else {
        var parentTwo = getPersonById(person.parents[1], people);
    }
     return parentTwo.firstName + " " + parentTwo.lastName ;
}
function getPersonById (id ,people) {

    if(id > 0){

    var personFamily = people.filter(function (person) {

        return person.id === id;});

}else{

  return false;

}

}
