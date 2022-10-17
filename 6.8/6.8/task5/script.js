document.querySelector('#go').onclick = function() {

    document.querySelector('#duplicateField').textContent = document.querySelector('#inputt').value;
    console.log(document.querySelector('#inputt').value);
    document.querySelector('#inputt').value = "";
};
  
  