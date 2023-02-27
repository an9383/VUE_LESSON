var arr = [];
arr[0] = 1;
arr[1] = 2;
console.log(arr);
console.log(arr[0]);

var arr = [];
arr['0'] = 1;
arr['1'] = 2;
console.log(arr);
console.log(arr['0']);


var arr = {};
arr['0'] = 1;
arr['1'] = 2;
console.log(arr);
console.log(arr['0']);

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}
