
// document.body.innerHTML = `${a}^${b} = ${Math.pow(a,b)}`
let inputa = document.getElementById("numa")
let inputb = document.getElementById("numb")
const result = document.getElementById("result")
const input = document.getElementById("num");



document.querySelector("form").addEventListener("submit", (e) => {
    result.innerText = ""
    e.preventDefault();
    var numa = Number(inputa.value)
    var numb = Number(inputb.value)
    console.log(numa);
    console.log(numb)

    if (isNaN(numa)) {
        document.querySelector(".a").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector(".a").classList.add("error-text")
        inputa.classList.add("error-input")
    }
    if (isNaN(numb)) {
        document.querySelector(".b").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector(".b").classList.add("error-text")
        inputb.classList.add("error-input")
    }
    if (!isNaN(numa) && !isNaN(numb)) {
        console.log("vao day")
        result.innerText = `${numa}^${numb} = ${Math.pow(numa, numb).toFixed(2)}`
    }
})


inputa.addEventListener("input", () => {
    document.querySelector(".a").innerText = ""
    document.querySelector(".a").classList.remove("error-text")
    inputa.classList.remove("error-input")
})

inputa.addEventListener("blur", () => {
    var numa = Number(inputa.value)
    if (isNaN(numa)) {
        result.innerText = ""
        document.querySelector(".a").innerText = "Bạn vừa nhập không phải là số"
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