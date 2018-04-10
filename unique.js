export function unique(array) {
    let res =[];
    array.forEach(element => {
        if(res.indexOf(element)===-1){
            res.push(element);
        }
    });
    return res;
}