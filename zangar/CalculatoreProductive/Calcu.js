function calc() {
    const work = Number(document.getElementById('work').value);
    const fun= Number(document.getElementById('fun').value);
    const rest = Number(document.getElementById('rest').value);
    const study = Number(document.getElementById('study').value);
    const productivity = work + study
    const unproductivity = fun + rest
    const total = productivity + unproductivity
    
    const productivePercent = (productivity / total * 100)
    const unproductivePercent = 100 - productivePercent

    document.getElementById('result').textContent = "Продуктивное время: " + productivePercent + "%, Непродуктивное время: " + unproductivePercent + "%";
}

