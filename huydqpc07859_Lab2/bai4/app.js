const result = document.querySelector("main")
const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];

theList.shift();
theList.pop();

theList.unshift('FIRST');

theList.splice(3, 0, 'hello world');

theList.splice(2, 0, 'middle');

theList.push('LAST');

console.log(theList);

result.innerText = `Mảng ban đầu: ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']]; \n Kết quả: ${theList.map(e => e ===null ? "null" : e === undefined ? "undefined":  e.toString())} `


