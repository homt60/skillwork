window.onload = function()
{
    
    const initPerson = personGenerator.getPerson();
    document.getElementById('NameOutput').innerText = initPerson.surname+initPerson.firstName;

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
};