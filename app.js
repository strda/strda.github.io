
const el = document.getElementById('body');
console.log(document.body)
document.body.addEventListener("click", (ev) => 
    {
        console.log("help");
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
    const isExpandableItem = !!ev.target.closest(".list-items");
    const expandable = ev.target.closest(".expandable");
    console.log(ev.target.closest(".expandable__title-bar"));
    console.log(isExpandableItem);
    if(isExpandableItem)
    {   
        console.log("button press")
    }
    else if(isExpandableTitle){
        expandable.classList.toggle("expandable--open");
    }
});