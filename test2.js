// 구조분해 : 객체 프로퍼티 또는 배열의 요소를 개별 변수로 저장하고자할때 사용
{
  const f = x => {
    const arr = [];
    arr[0] = x;
    arr[1] = x => x;
    return arr;
  };
  const [count, setCount] = f(10); // [10,(x)=>x]
  console.log(count, setCount(20));
}
