import { makeElem } from "../functions/makeElement";
import { append } from '../functions/appendElement';

export { loadAbout };

function loadAbout(body){
    let bodyHeader = makeElem('div','bodyHeader','About Us');
    let bodyContent = makeElem('div',['bodyContent','about']);
    let picture = makeElem('img','aboutPicture');
    let about = makeElem('div','aboutText','Serving food like no other restaurant has served food before. We work with only the finest of distributers to source our food, to ensure we serve nothing but excellence. Every dish has been blessed by our in-house priest so that you may have a taste of heaven. It\'s food, we\'re a restaurant - need I say more?');
    append(bodyContent,[picture,about]);
    append(body,[bodyHeader,bodyContent]);
}