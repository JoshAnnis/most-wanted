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
            do {

                var Gender = prompt("What is their gender? (M=Male, F=Female)");

            } while (!(Gender == "F" || Gender == "M"));



            do {

                var Age = prompt("Approximately how old are they? Please Type: '18 & Under', '18-25', '25-50' or '50+' ");

            } while (!(Age == "18 & Under" || Age == "18-25" || Age == "25-50" || Age == "50+"));



            var Height = prompt("How tall is this person? (In INCHES)");

            // (Inches, FT, In)



            var Weight = prompt("How much does this person weigh? (In LBS)");



            do {

                var EyeColor = prompt("What is their eye color? Options: Brown, Blue, Hazel, Green or Black");

            } while (!(EyeColor == "Brown" || EyeColor == "Blue" || EyeColor == "Hazel" || EyeColor == "Green" == "Black"));



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




    var displayOption = prompt("Found " + person.firstName + person.lastName + "\nWould you like to search thier 'info', 'family',  'descendants', or 'next of kin'?, otherwise enter 'exit' or 'restart'.");

    switch (displayOption) {

        case "family":
            displayFamily(person, people);


            break;

        case "info":
            getInfo(person, people);

            break;

        case "next of kin":
            getnextOfKin(person, people);

            break;

        case "descendants":

            var descendants = getDescendants(person, people);
            var message = "Descendants:"
            for (var i = 0; i < descendants.length; i++) {

                message += "\n" + descendants[i].firstName + " " + descendants[i].lastName + "";

            }
            alert(message)
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


function getnextOfkin(person, people) {


}



function displayFamily(person, people) {

    

    var spouse = getSpouse(person.currentSpouse, people);

    

    var parent = getParents(person, people);
    var kids= getKids(person,people)

}



function getDescendants(parent, people) {


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
}

function nextOfKin(person, people) {


}






function getParents(parentsid, people) {
    return people.filter(function (p) {
        if ((person.id == person.parents[0] && person.id) || person.id == person.parents[1].id) {
            return true;
        } else {
            return false;
        }
    })
};





function getPersonId(id, people) {
    var personid = people.filter(function (person) {
        return (person.id === id);
    });
    return personid[0]
}
function getSpouse(currentSpouseid, people){
    var spouseid = people.filter(function(person){
        return (person.id === spouseid);
    });
    if (spouseid[0]){
        return spouseid[0].firstName+ ""+ spouseid[0].lastName;
    }else{
        return "none";
    }
}


function searchAttributes(person, people) {

}
