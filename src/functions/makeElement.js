export {makeElement as makeElem};

function makeElement(elem,className,text){
    if(!className && !text)
        return document.createElement(elem);
    else{
        let newElement = document.createElement(elem);

        if(typeof(className)=='object'){
            className.forEach(e => {
                newElement.classList.add(e);
            });
        }else 
            newElement.classList.add(className);
        if(text){
            newElement.textContent = text;
        }
        return newElement;
    }
}