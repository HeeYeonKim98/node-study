const delay = (sec) =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(`${sec}`);
        }, sec * 1000);
    });

const main = async () => {
    console.time("");

    const res = await delay(2);
    console.log(res);

    console.timeEnd("");

    console.log("1");
};

main();

//async-await 은 promise를 리턴하는 함수에 사용
//함수 바로 실행하려면 (()=>{})() 바로 언급해준다
