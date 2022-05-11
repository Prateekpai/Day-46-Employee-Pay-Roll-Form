//UC5

const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes',"");
    setSelectedIndex('#day','');
    setSelectedIndex('#month','');
    setSelectedIndex('#year','');
}

const unsetSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item =>{
        item.checked = false;
    });
}


const setTextValue = (id, value) =>{
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id,value) =>{
    const element = document.querySelector(id);
    element.value = value;
}