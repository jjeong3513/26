
const arr= ['사과','바나나','귤','배']
/*for in문 : 객체와 배열에 사용 가능. 객체와 배열을 순환하면서 인자를 하나하나 뽑아온다.*/ 
// i의 초기값은 0으로 자바스크립트 엔진에서 초기화 된 상태
for(let i in arr){  //i는 계속 증감할거니까 let 사용
    console.log(i)
    console.log(arr[i])
} 



const obj = {
    name : '사과',
    price:'1500',
    weight: '20g'
}

for(let key in obj){
    const value = obj[key];
    console.log(key);
    console.log(value);
}