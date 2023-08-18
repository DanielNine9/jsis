let result = ""
for(let i = 1; i < 10; i++){
    for(let j = 1; j < 11; j++){
        if(j === 1){
            result += `<h3>Bảng cửu chương  ${i}</h3> <br/> `
        }
        result +=`${i} * ${j} = ${i*j} <br/>` 
    }
    document.querySelector(`.item${i}`).innerHTML = 
    result
    result = ""
}