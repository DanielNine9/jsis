


// document.write(BMI < 18.5? 'Thiếu cân':  (BMI >= 18.5 && BMI <= 24.99) ? "Bình thường" :  (BMI >= 25 && BMI <= 29.99)? 'Thừa cân' : BMI >= 30 ? 'Béo phì': 'Nhập sai' )

let inputa = document.getElementById("numa")
let inputb = document.getElementById("numb")
const result = document.getElementById("result")
const input = document.getElementById("num");



document.querySelector("form").addEventListener("submit", (e) => {
    result.innerText = ""
    e.preventDefault();
    var numa = Number(inputa.value)
    var numb = Number(inputb.value)

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
        let BMI = numa / Math.pow(numb, 2)
        let res = BMI < 18.5? 'Thiếu cân':  (BMI >= 18.5 && BMI <= 24.99) ? "Bình thường" :  (BMI >= 25 && BMI <= 29.99)? 'Thừa cân' : BMI >= 30 ? 'Béo phì': 'Nhập sai' 
        result.innerText = `Kết quả: ${res}`
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