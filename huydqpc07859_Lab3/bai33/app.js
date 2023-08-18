const items = document.querySelectorAll(".item")
const display = document.querySelector(".screen")
document.querySelector(".toggle").setAttribute("toggle", "+")
let check = true
let sign = ''

const checkSign = () => {
    if (sign) {
        return
    }

}

items.forEach(item => {
    item.addEventListener('click', () => {
        if (display.innerHTML === "0") {
            if (item.innerHTML === "+/-") {
                return
            }
        }
        if (item.innerHTML !== 'AC' && check === true) {
            display.innerHTML = item.innerHTML
            check = false
        }
        else if (item.innerHTML === 'AC') {
            display.innerHTML = '0'
            check = true
        } else if (display.innerHTML.length === 20) {
            return
        }
        else if (item.innerHTML === "+/-" && display.innerHTML !== 0) {
            var regex = /[+*/%]/;
            if (!regex.test(display.innerHTML)) {
                if (item.getAttribute("toggle") === "+") {
                    item.setAttribute("toggle", "-")
                    display.innerHTML = "-" + display.innerHTML
                } else {
                    item.setAttribute("toggle", "+")
                    display.innerHTML = display.innerHTML.substring(1)
                }
            }
        }
        else if (item.innerHTML === "X") {
            if(sign !== ''){ 
                console.log(display.innerHTML.length - 1)
                return display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1) + "*"
            }
            display.innerHTML += "*"
            sign = "*";
        }
        else if (item.innerHTML === ',') display.innerHTML += "."
        else if (item.innerHTML === '=') {
            let result = eval(display.innerHTML).toFixed(2)
            let decimalPlaces = result.toString().split('.')
            if (decimalPlaces ?? decimalPlaces[1][0] !== "0") {
                result = Number(result)
            }
            display.innerHTML = result
        }
        else {
            if (item.innerHTML === 'AC') {
                display.innerHTML = '0'
            } else if (item.innerHTML === "+/-") {
                if (display.innerHTML === 0) {
                    return
                }
            } else {
                if (item.innerHTML === "+") {
                    if(sign !== ''){ 
                        console.log(display.innerHTML.length - 1)
                        return display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1) + "+"
                    }
                    sign = "+";
                    display.innerHTML += item.innerHTML
                }
                else if (item.innerHTML === "-") {
                    if(sign !== ''){ 
                        console.log(display.innerHTML.length - 1)
                        return display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1) + "-"
                    }
                    sign = "-";
                    display.innerHTML += item.innerHTML
                }
                else if (item.innerHTML === "/") {
                    if(sign !== ''){ 
                        console.log(display.innerHTML.length - 1)
                        return display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1) + "/"
                    }
                    sign = "/";
                    display.innerHTML += item.innerHTML
                }else if (item.innerHTML === "%") {
                    if(sign !== ''){ 
                        console.log(display.innerHTML.length - 1)
                        return display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1) + "%"
                    }
                    sign = "%";
                    display.innerHTML += item.innerHTML
                } else {
                    display.innerHTML += item.innerHTML
                    sign = ''
                }
            }
        }
    })
});