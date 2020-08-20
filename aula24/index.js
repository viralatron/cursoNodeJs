const num = Number(prompt(`Digite seu num`));

document.getElementById("num").innerHTML = `${num}`;
document.getElementById("num-sqrt").innerHTML = `${Math.sqrt(num)}`;
document.getElementById("num-isint").innerHTML = `${Number.isInteger(num)}`;
document.getElementById("num-isnan").innerHTML = `${Number.isNaN(num)}`;
document.getElementById("num-floor").innerHTML = `${Math.floor(num)}`;
document.getElementById("num-ceil").innerHTML = `${Math.ceil(num)}`;
document.getElementById("num-tofixed").innerHTML = `${num.toFixed(2)}`;