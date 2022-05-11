// UC3

const save = ()=>{
    try{
        let employeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch (e){
        return;
    }
}

const createEmployeePayroll = () =>{
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name=getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollObj.date = Date.parse(date);
    alert(employeePayrollObj.toString());
    return employeePayrollObj;
}
const getSelectedValues = (propertyValue)=> {
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=> {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}
const getElementById=(id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue=(id) => {
    let value=document.getElementById(id).value;
    return value;
}
