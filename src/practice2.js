const inject = (items, sections)=>{
    for (let i = 0; i < sections.length; i++) {
        var index = sections[i].index+i;
        items.splice(index, 0, sections[i].content);
    }
    return items;
}
export { inject };
