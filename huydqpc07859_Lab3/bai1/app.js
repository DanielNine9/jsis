
let inputa = document.getElementById("numa")
let inputb = document.getElementById("numb")
let inputo = document.getElementById("o")
const result = document.getElementById("result")
const input = document.getElementById("num");



document.querySelector("form").addEventListener("submit", (e) => {

    let o = inputo.value
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
    } else {
        switch (o) {
            case '+':
                result.innerText = `${numa} + ${numb} = ${numa + numb}`
                return
            case '-':
                result.innerText = `${numa} - ${numb} = ${numa - numb}`
                return
            case '*':
                result.innerText = `${numa} * ${numb} = ${numa * numb}`
                return
            case '/':
                if(numb === 0){
                    document.querySelector(".b").innerText = "Không thể chia cho 0"
                    document.querySelector(".b").classList.add("error-text")
                    inputb.classList.add("error-input")
                    return
                }
                result.innerText = `${numa} / ${numb} = ${numa / numb}`
                return
            case '%':
                if(numb === 0){
                    document.querySelector(".b").innerText = "Không thể chia cho 0"
                    document.querySelector(".b").classList.add("error-text")
                    inputb.classList.add("error-input")
                    return
                }
                result.innerText = `${numa} % ${numb} = ${numa % numb}`
                return
            default:
                document.querySelector(".o").innerText = "Bạn vừa nhập không phải là toán tử"
                document.querySelector(".o").classList.add("error-text")
                inputo.classList.add("error-input")
                return
        }
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

inputo.addEventListener("input", () => {
    document.querySelector(".o").innerText = ""
    document.querySelector(".o").classList.remove("error-text")
    inputo.classList.remove("error-input")
})

inputo.addEventListener("blur", () => {

    let o = inputo.value
    switch (o) {
        case '+':
            return
        case '-':
            return
        case '*':
            return
        case '/':
            return
        case '%':
            return
        default:
            document.querySelector(".o").innerText = "Bạn vừa nhập không phải là toán tử"
            document.querySelector(".o").classList.add("error-text")
            inputo.classList.add("error-input")
            return
    }
})