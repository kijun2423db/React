const anony = function(){
    console.log('익명 함수');
}
function named(){
    console.log('선언적 함수');
}

anony(); named();

const arrow = () =>{
    console.log('화살표 함수, 람다 함수');
}

arrow();

//파라미터가 1개면 () 생략 ㄱㄴ
const param1 = x =>{
    console.log('x = ' + x );
}
param1(5)
// 함수 내부의 return이 1개뿐이밖에 없으면 {} 생략 ㄱㄴ
const add = (a,b) => a + b;
console.log(`add(3,4) =  ${add(3,4)}`);

const fn = (name,count) =>{
    count = count || 0;
    console.log(`${name} : ${count}`);
}
fn('apple',10)
fn('banana')

function call3Times(callback){
    for(let i=0; i<3; i++){
        callback();
    }
}
call3Times(function(){
    console.log('call back 익명함수 생성')
});

setTimeout(() => {
    console.log('1000ms 이후 실행');
},1000);

const si = setInterval(()=> {
    console.log('0.5초마다 실행');
},500);

setTimeout(()=> {
    clearInterval(si);
    console.log('3.1초후에 반복되는코드를 없애기')
},3100);