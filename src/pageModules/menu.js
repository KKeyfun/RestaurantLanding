import { makeElem } from "../functions/makeElement";
import { append } from "../functions/appendElement";

export { loadMenu };

function loadMenu(body){
    let bodyHeaderContainer = makeElem('div','bodyHeaderContainer');
    let bodyHeader = makeElem('div','bodyHeader','Menu');
    let bodyContent = makeElem('div',['bodyContent','menu']);

    let leftColumn = makeElem('div','menuDisplay');
    let salmonContainer = makeElem('div',['salmonContainer','pictureContainer']);
    let salmon = makeElem('img','salmon');
    let salmonLabel = makeElem('div','label','Salmon with Green Sauce');
    append(salmonContainer,[salmon,salmonLabel]);

    let cupcakeContainer = makeElem('div',['cupcakeContainer','pictureContainer']);
    let cupcake = makeElem('img','cupcake');
    let cupcakeLabel = makeElem('div','label','Dark Chocolate Cupcakes');
    append(cupcakeContainer,[cupcake,cupcakeLabel]);

    let menu = makeElem('div','menuContainer');
    let menuArr = [];
    menuArr.push(['Veal with Beef Sauce & Beans','Delicious calf meat drizzled in delicious, rich beef stock and paired with crispy, organic green beans']);
    menuArr.push(['Jumbo Shrimp Cocktail','Freshly caught shrimp served with a homemade tangy cocktail sauce']);
    menuArr.push(['Escargots Bourguignon','A delicacy served with garlic butter and a beautiful red wine']);
    menuArr.push(['Baked Oysters','Sweet oysters served with sauteed chopped bacon, onions, scallion, and wine']);
    menuArr.push(['Salmon with Green Sauce & Vegetables','Raw salmon served on a mix of celery and beans, and topped with a spectacular vegan sauce'])
    menuArr.push(['Barbecue Back Ribs','Grilled ribs, served with your choice of (A) Tangy barbecue sauce (B) Greek Classic sauce (Olive oil, oregano, lemon) ']);
    menuArr.push(['Dark Chocolate Cupcakes','Rich cupcakes made with 90% cacao chocolate, topped with a light, soft butter cream']);
    let menuItems = [];
    menuArr.forEach(elem=>{
        menuItems.push(addItem(elem[0],elem[1]));
    });
    let rightColumn = makeElem('div','menuDisplay');
    let vealContainer = makeElem('div',['vealContainer','pictureContainer']);
    let veal = makeElem('img','veal');
    let vealLabel = makeElem('div','label','Veal with Beef Sauce & Beans');
    append(vealContainer,[veal,vealLabel]);

    append(leftColumn,[vealContainer,cupcakeContainer]);
    append(menu,menuItems);
    append(rightColumn,salmonContainer);
    append(bodyHeaderContainer,bodyHeader);
    append(bodyContent,[leftColumn,menu,rightColumn]);
    append(body,[bodyHeaderContainer,bodyContent]);
}


function addItem(item,description){
    let itemContainer = makeElem('div','menuItem');
    let itemName = makeElem('div','itemName',item);
    let itemDesc = makeElem('div','itemDescription',description);
    append(itemContainer,[itemName,itemDesc]);
    return itemContainer;
}