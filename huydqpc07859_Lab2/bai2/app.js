let inputa = document.getElementById("numa")
let inputb = document.getElementById("numb")
const result = document.getElementById("result")
const input = document.getElementById("num");

const convertArea = (m2) => {
    const s = m2 / 360; 
    const mau = s / 10;
    const ha = m2 / 360 / 10; 
  
    return {
      s,
      mau,
      ha
    };
  };
  
  



document.querySelector("form").addEventListener("submit", (e) => {
    result.innerText = ""
    e.preventDefault();
    var numa = Number(inputa.value)

    if (isNaN(numa)) {
        document.querySelector(".a").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector(".a").classList.add("error-text")
        inputa.classList.add("error-input")
    }
    
    if (!isNaN(numa)) {
        let res = convertArea(numa)
        result.innerText = `Kết quả = ${res.s.toFixed(2)} sào  = ${res.mau.toFixed(2)} mẫu (Nam Bộ)  = ${res.ha}ha `
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