import { makeElem } from "../functions/makeElement";
import { append } from "../functions/appendElement";

export { loadContact };

function loadContact(body){
    let bodyHeaderContainer = makeElem('div','bodyHeaderContainer');
    let bodyHeader = makeElem('div','bodyHeader','Contact Us');
    let bodyContent = makeElem('div',['bodyContent','contact']);

    let containerOne = makeElem('div','locationContainer');
    let locationOne = makeElem('div','locationHeader','The Food Restaurant Main Street');

    let mapContainerOne = makeElem('div','mapContainer');
    let mapOne = makeElem('img',['map','main']);

    append(mapContainerOne,mapOne);

    let descriptionOne = makeElem('div','locationDescription','Our original location where we invented food');
    let addressOne = makeElem('div','numberInfo','Address: 1234 Main Street, City 12345');
    let hoursOne = makeElem('div','numberInfo','Mon-Sun: 7pm - 1am');
    let phoneOne = makeElem('div','numberInfo','Phone Number: (123)-456-7890');

    append(containerOne,[locationOne,mapContainerOne,descriptionOne,addressOne,phoneOne,hoursOne]);

    let containerTwo = makeElem('div','locationContainer');
    let locationTwo = makeElem('div','locationHeader','The Food Restaurant : The Sequel');

    let mapContainerTwo = makeElem('div','mapContainer');
    let mapTwo = makeElem('img',['map','street']);
    append(mapContainerTwo,mapTwo);

    let descriptionTwo = makeElem('div','locationDescription','In our quest to conquer the food world, we opened a second location');
    let addressTwo = makeElem('div','numberInfo','Address: 1234 Street Street, City 23456');
    let hoursTwo = makeElem('div','numberInfo','Mon-Sun: 5pm - 12am');
    let phoneTwo = makeElem('div','numberInfo','Phone Number: (234)-567-8901');

    append(containerTwo,[locationTwo,mapContainerTwo,descriptionTwo,addressTwo,phoneTwo,hoursTwo]);
    append(bodyHeaderContainer,bodyHeader);
    append(bodyContent,[containerOne,containerTwo]);
    append(body,[bodyHeaderContainer,bodyContent]);
}