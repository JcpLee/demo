// function anagram(str){
//     var result = [];
//     if(!str){
//         return result;
//     }else if(str.length==1){
//         result = str
//     }else if(str.length==2){
//         s = str[1]+str[0];
//         // s = str.reverse();
//         result.push(str);
//         result.push(s);
//     }
//     return result
// }




function swap(arr,i,j) {  
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }  
}  
var count=0; 
result = []
// function show(arr) {  
//     // document.write("P<sub>"+ ++count+"</sub>: "+arr+"<br />");  
    
//     console.log(arr)
// }  

function anagram(arr) {  
    (function fn(n) { //为第n个位置选择元素  
        for(var i=n;i<arr.length;i++) {  
            swap(arr,i,n);  
            if(n+1<arr.length-1) //判断数组中剩余的待全排列的元素是否大于1个  
                fn(n+1); //从第n+1个下标进行全排列  
            else 
                // show(arr); //显示一组结果  
                result.push(arr)
            swap(arr,i,n);  
        }  
    })(0);  
    return result;
}  
// perm("1234")

module.exports = anagram