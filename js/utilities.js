function getInputValueById(inputId) {
    const element = document.getElementById(inputId)
    const value = element.value;
    
    element.value = ''
    
    return value;
}

function getFloatInputValueById(inputId) {
    const element = document.getElementById(inputId)
    const value = parseFloat(element.value);
    element.value = ''

    
    return value;
}

function getTextValueById(inputId) {
    const element = document.getElementById(inputId)
    const textValue = parseFloat(element.innerText);
    
    return textValue;
}

function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}