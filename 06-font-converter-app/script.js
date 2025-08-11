function convertFont(){
    const input = document.getElementById('inputText').value
    const converted = input.toUpperCase();
    document.getElementById('outputText').textContent = converted
}