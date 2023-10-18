saveButton = document.getElementById("saveButton");
keyInputField = document.getElementById("keyInput");
function saveSettings(){
    if(keyInputField.value != ""){
        keyInputField.value = keyInputField.value.toUpperCase();
    keyBind = keyInputField.value;
    }
}