
const el = document.getElementById('body');
console.log(document.body);



function resizeEvent()
{
        // Get screen resolution
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Display the resolution on the page


    console.log(`Screen Resolution: ${screenWidth}x${screenHeight}`);
}

window.addEventListener("resize",resizeEvent);
/*
addEvent(document, "keypress", function (e) {
    e = e || window.event;
    console.log(e);
    // use e.keyCode
});

function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}*/

document.body.addEventListener("click", (ev) => 
    {
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
    const isInternalExpandableTitle = !!ev.target.closest(".internal-expandable__title-bar");
    const isExpandableItem = !!ev.target.closest(".list-items");

    const expandable = ev.target.closest(".expandable");
    const internalExpandable = ev.target.closest(".internal-expandable");

    if(isExpandableItem)
    {   
        console.log("button press")
    }
    else if(isExpandableTitle){
        expandable.classList.toggle("expandable--open");
    }
    else if(isInternalExpandableTitle)
    {
        internalExpandable.classList.toggle("internal-expandable--open");
    }
});