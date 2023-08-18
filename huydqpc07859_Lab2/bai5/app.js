let x = 10 + Math.round(5 * Math.random());



const input = document.getElementById("num");
const result = document.getElementById("result")

document.querySelector("form").addEventListener("submit", (e) => {
    result.innerText = ""
    e.preventDefault();
    var num = Number(input.value)

    if (isNaN(num)) {
        document.querySelector("span").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    } else if (num < 10) {
        document.querySelector("span").innerText = "Giá trị bạn vừa nhập nhỏ hơn 10"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    } else if (num > 15) {
        document.querySelector("span").innerText = "Giá trị bạn vừa nhập lớn hơn 15"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    }
    else {
        let res = num < x ? 'Giá trị của bạn nhỏ hơn số bí mật' : num > x ? "Giá trị của bạn lớn hơn số bí mật" : "Chúc mừng, bạn đã đoán đúng"
        result.innerText = `${res}`
        x = 10 + Math.round(5 * Math.random());
    }
})


document.getElementById("num").addEventListener("input", () => {
    document.querySelector("span").innerText = ""
    document.querySelector("span").classList.remove("error-text")
    input.classList.remove("error-input")

})

input.addEventListener("blur", () => {
    var num = Number(input.value)
    if (isNaN(num)) {
        result.innerText = ""
        document.querySelector("span").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    } else if (num > 15) {
        document.querySelector("span").innerText = "Giá trị bạn vừa nhập lớn hơn 15"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    }
})
