function initMostwanted(people) {

    alert("Welcome to Most Wanted. Follow the prompts to find who you're looking for.");

    do {

        var searchType = prompt("Do you know the name of who you seek? If yes enter 'name' if not search by 'attributes'.")

    } while (!(searchType == "name" || searchType == "attributes"));

    switch (searchType) {

        case "name":

            var person = getPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);

            mainMenu(person, people);

            break;

        case "attributes":
                var Gender = prompt("What is their gender? (M=Male, F=Female)")    

                var Age = prompt("Approximately how old are they?");

                var Height = prompt("How tall is this person? (In INCHES)");

                var Weight = prompt("How much does this person weigh? (In LBS)");       

                var EyeColor = prompt("What is their eye color? Options: Brown, Blue, Hazel, Green or Black");

                var Occupation = prompt("What do they do? (EX: Nurse)");

                mainMenu(person, people);
            

            mainMenu(person, people);

            break;

    }

}



function mainMenu(person, people) {

    if (!person) {

        alert("Could not find who you are looking for plase try again");

        initMostwanted(people);

    }
    var displayOption = prompt("Found " + person.firstName + person.lastName + "\nWould you like to search thier 'info', 'family',  'descendants', or 'next of kin'?, otherwise enter 'exit' or 'restart'.");



    switch (displayOption) {
        case "family":
                       

            displayFamily(person, people);
            mainMenu(person, people)

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

        case "quit":
          return;

            break;
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

function displayFamily(person, people) {
        var parents = getParents(person.parents, people);
        var spouse = getSpouse(person.currentSpouse, people);
        var kids = getKids(person, people);
       // var siblings = getSiblings(person, people);



    alert("\nParent(s): " + parents + "\nSpouse: " + spouse + "\nKid(s): " + kids);

    mainMenu(person, people);


}    






function getParents(parentsId, people){


} 





function getSpouse(spouseId, people){

    var spouseById = people.filter(function(person){

            return (person.id === spouseId);

    });

    if(spouseById[0]){

        return spouseById[0].firstName +" "+ spouseById[0].lastName;

    }else{

        return "None";

    }

}





function getKids(parent, people){

    var kids = people.filter(function(person){

        for(var i =0; i <person.parents.length; i++){

            if(parent.id == person.parents[i]){

                return true;

            };

        }

        return false;

    });



    if(kids.length == 4){

        return kids[0].firstName +" "+ kids[0].lastName + ", " + kids[1].firstName +" "+ kids[1].lastName +

        ", " + kids[2].firstName +" "+ kids[2].lastName + ", and " + kids[3].firstName +" "+ kids[3].lastName;

    }else if(kids.length == 3){

        return kids[0].firstName +" "+ kids[0].lastName + ", " + kids[1].firstName +" "+ kids[1].lastName +

        ", and " + kids[2].firstName +" "+ kids[2].lastName;

    }else if(kids.length == 2){

        return kids[0].firstName +" "+ kids[0].lastName + " and " + kids[1].firstName +" "+ kids[1].lastName;

    }else if(kids.length == 1){

        return kids[0].firstName +" "+ kids[0].lastName;

    }else{

        return "None"

    }

}



function getDescendants(person, people) {

}

function getPersonId(id, people) {

    var personid = people.filter(function (person) {

        return (person.id === id);

    });

    return personid[0]
}
function nextOfkin (person, people){

}