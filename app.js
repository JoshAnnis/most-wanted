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
                       
            var kid = getKids(person, people);
            var spouse =getspouse(person.currenySpouse, people)
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
            var kids = getKids(person, people);
            var message = "kids:"
            for (var i = 0; i < kids.length; i++) {
            message += "\n" + kids[i].firstName + " " + kids[i].lastName + "";}
            alert(message)
}    
function getspouse(spouseId, people){

    var spouseId = people.filter(function (person) {

        return (person.id === spouseId);

    });

    if(spouseId[0]){
        return spouseId[0].firstName+ ""+spouseId[1].lastName;

    }else{
        return "None"

    }
}
function getnextOfkin(person, people) {

}




function getKids(parent, people) {


     var kids = people.filter(function (person) {
        if (person.parents[0] == parent.id) {
         return true;
        } else if (person.parents[1] == parent.id) {
           return true;
        } else {
            return false;
        }
    });
    return kids;


mainMenu(person, people)
}



function getDescendants(person, people) {

}

function getPersonId(id, people) {

    var personid = people.filter(function (person) {

        return (person.id === id);

    });

    return personid[0]
}
