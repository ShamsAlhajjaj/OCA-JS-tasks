//---------task 1-----------------

// let mjArr = [100, 92, 87, 12, 21];
function findSmallest(arr){
    let smallest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i];
        }
    }
    return smallest;
}
// console.log(findSmallest(mjArr));

//-------------------------task 2-----------------

/* We know that every ASCII character have a numeric value,
example 'A' = 65, so we can compare each other,
and find the smallest value, which will be ordered first and so on */

// let mytext = 'edbc'; // => bcde 
// function findIndexOfSmallest(arr){ //to find the index of the smallest letter
//     let smallest = arr[0];
//     let indexOfSmallest = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(smallest > arr[i]){
//             indexOfSmallest = i;
//         }
//     }
//     return indexOfSmallest;
// }
// function swap(text, index1, index2){ //to swap the letters
//     let x;
//     let arr = text.split('')
//     x = arr[index1]; //x = 0
//     arr[index1] = arr[index2]; // arr[0] = 3
//     arr[index2] = x; // arr[3] = 0
//     return arr.join('');
// }
// function alphaOrder(text){
//     let smallest;
//     let subText;
//     for(let i = 0; i<text.length; i++){
//         subText = text.slice(i , text.length);
//         console.log(subText);
//         smallestIndex = findIndexOfSmallest(text);
//         console.log(smallestIndex);
//         swap(text, smallestIndex, i)
//     }
//     return text
// }
// // console.log(alphaOrder(mytext));
// console.log(findIndexOfSmallest([10,0,3,2,5]));


//----------------task3------------
function factorial(num){
    let x = 1;
    for(let i = num; i > 0; i--){
        x*=i;
    }
    return x;
}
// console.log(factorial(8));

//----------------task 4-------------
function evenOrOdd(num){
    if(num%2==0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
// console.log(evenOrOdd(0));

//----------------task 5---------------
function evenNums(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// myArr = [1,2,3,4,5,6,7,8,9,10];
// console.log(evenNums(myArr));

// ----------------task 6----------------
function numsOnly(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) != "string"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// x = [1,'dfw', 2, 'wdfwqf', 'qwerqwr', 3, '4']
// console.log(numsOnly(x));

// ----------------task 7--------------
function addUp(num){
    let x = 0;
    for(let i = num; i > 0; i--){
        x+=i;
    }
    return x;
}
// console.log(addUp(8));

// ----------------task 8--------------
function minMaxLengthAverage(arr){
    let resultArr = [];
    // find min and max
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum/arr.length;
    resultArr.push(min);
    resultArr.push(max);
    resultArr.push(arr.length)
    resultArr.push(avg);
    return resultArr;
}
// console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 

// -----------------task 9--------------------------



// ----------------------task 10--------------------
function countWords(text = ''){
    let arr = text.split(' ');
    let wordsNumber = arr.length; 
    return wordsNumber;
}
// console.log(countWords('shams akram mohammad alhajjaj'));

//-------------------task 11----------------
function MultiplyByLength(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] *= arr.length;  
    }
    return arr;
}
// console.log(MultiplyByLength([4,2,5]));

// ---------------------task 12----------------
function checkEnding(text1 = '', text2 = ''){
    let compareIndex = text1.length - text2.length;
    let compareSlice = text1.slice(compareIndex, text1.length);
    return compareSlice == text2;
}
// console.log(checkEnding('shams', 'msa'));

// ---------------------- task 13 --------------
function doubleChar(text = ''){
    let newText = '';
    for(let i = 0; i < text.length; i++){
        newText += text[i] + text[i];
    }
    return newText;
}
// console.log(doubleChar('shams'));

//---------------------task 14-------------
function findIndex(arr = [], value = ''){
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(value == arr[i]){
            index = i + 1;
        }
    }
    return index;
}
// console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ayham')); 



//----------------------task15----------------
function getAbsSum(arr = []){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            sum += arr[i] * -1;
        }else{
            sum += arr[i]; 
        }
    }
    return sum;
}

// console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));