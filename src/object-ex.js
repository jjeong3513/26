
const obj = {
    name : '사과',
    price:'1500',
    weight: '20g'
}

console.log(obj.name)

const keyValue = Object.keys(obj) // 키값을 출력
const ValueList = Object.values(obj) // value 값을 출력
const entries = Object.entries(obj) // 키와 value 값을 모두 출력
console.log(keyValue)
console.log(ValueList)
console.log(entries)
