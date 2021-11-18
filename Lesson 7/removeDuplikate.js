function removeDuplicates (ar1, ar2){
    const res = [];
    ar1.concat(ar2).forEach(element => {
        if(!res.push(element)){
            res.push(element);
        }
    });
    return res;
}

function removeDuplicates(ar1, ar2) {
    const res = {};
    const len = Math.max(ar1.length, ar2.length);

    for (let i = 0 ; i < len; i++){
        if (ar1[i] && !res[ar1[i]]) {
            res[ar1[i]] = ar1[i];
        }
        if (ar2[i] && !res[ar2[i]]) {
            res[ar2[i]] = ar2[i];
        }
        
    }
    console.log(res);
}

const array1 = [1, 4, 5, 6, 7, 8];
const array2 = [9, 4, 3, 2, 7, 8, 0]; 

removeDuplicates(array1, array2);