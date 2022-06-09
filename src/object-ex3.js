
const obj = {
    'a':1,
    'b-a':2,
    '1c':3,
    'd1':4,
}

console.log(obj.a); //1

console.log(obj.b-a); //NaN -> 숫자로 인식을 하지 못해서 / console.log(obj['b-a']) 이렇게 하면 2가 출력됨.
//console.log(obj.1c); -> 키값을 숫자로 시작할 수 없음.
console.log(obj.d1); //4



const obj2={
    a:1,
    b:2
}
const a= 'b'

console.log(obj2[a]) //2 -> 대괄호는 변수로 접근을 한 것. a에는 b가 들어있기 때문에 b 값인 2가 출력됨.
console.log(obj2.a) //1 -> 속성 이름인 a에 접근을 한 것이라 1이 출력됨.