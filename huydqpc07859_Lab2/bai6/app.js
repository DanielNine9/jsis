let inputa = document.getElementById("name")
let inputb = document.getElementById("gpa")
const result = document.getElementById("result")
const input = document.getElementById("num");

function isString(name) {
    const nameRegex = /^[\p{L}\s']+$/u;
    return nameRegex.test(name);
  }



document.querySelector("form").addEventListener("submit", (e) => {
    result.innerText = ""
    e.preventDefault()
    var numa = inputa.value
    var numb = Number(inputb.value)

    if (!isString(numa)) {
        document.querySelector(".a").innerText = "Tên không được chứa số"
        document.querySelector(".a").classList.add("error-text")
        inputa.classList.add("error-input")
    }
    if (isNaN(numb)) {
        document.querySelector(".b").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector(".b").classList.add("error-text")
        inputb.classList.add("error-input")
    }
    if (numb < 0) {
        document.querySelector(".b").innerText = "Điểm không được dưới 0"
        document.querySelector(".b").classList.add("error-text")
        input.classList.add("error-input")
    } else if (numb > 10) {
        document.querySelector(".b").innerText = "Điểm không được lớn hơn 10"
        document.querySelector(".b").classList.add("error-text")
        input.classList.add("error-input")
    }
    else if (isString(numa) && !isNaN(numb)) {
        result.innerText = `Họ và tên: ${String(numa).toUpperCase()} \n Điểm: ${numb} \n Kết quả: ${numb > 5 ? "đậu" : "rớt"}`
    }
})


inputa.addEventListener("input", () => {
    document.querySelector(".a").innerText = ""
    document.querySelector(".a").classList.remove("error-text")
    inputa.classList.remove("error-input")
})

inputa.addEventListener("blur", () => {
    var numa = Number(inputa.value)
    if (!isString(numa)) {
        document.querySelector(".a").innerText = "Tên không được chứa số"
        document.querySelector(".a").classList.add("error-text")
        inputa.classList.add("error-input")
    }
})
inputb.addEventListener("input", () => {
    document.querySelector(".b").innerText = ""
    document.querySelector(".b").classList.remove("error-text")
    inputb.classList.remove("error-input")
})
inputb.addEventListener("blur", () => {
    var numb = Number(inputb.value)
    if (isNaN(numb)) {
        result.innerText = ""
        document.querySelector(".b").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector(".b").classList.add("error-text")
        inputb.classList.add("error-input")
    }
})