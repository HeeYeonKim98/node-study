//hw1
// 2번 피드백
const criminalUsers = users.filter((v, i, a) => !v.email && !v.phone);
console.log(criminalUsers);

// 6번 피드백
// -> 배열이 설정한대로 저장된다. 겹치지 않으려면 새로 배열을 만들어서 다른 배열을 사용해야한다.
const nextYearUsers = users.map((v, i, a) => {
    ++v.age;
    return v;
});

//hw2

//customMap 피드백
function customMap(func, arr) {
    const custom_map = [];
    for (const item of arr) custom_map.push(func(item));
    return custom_map;
}

//customFilter 피드백
function custom_filter(func, arr) {
    const custom_filter = [];
    for (const item of arr) if (func(item)) custom_filter.push(item);
    return custom_filter;
}
