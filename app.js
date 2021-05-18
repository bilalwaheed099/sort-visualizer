function setSleep(time){
    return new Promise(res => setTimeout(res, time))
}

var arr = [1,5,7,3,6,14,10,8,4,2,6,8,1];
// var arr = [4,3,2,1];
var q = 1;

var numberBars = document.querySelector('.number-bars');
for(var i=0; i< arr.length;i++){
    numberBars.insertAdjacentHTML('beforeend', `<div class='number-bar' style='height:${50*arr[i]}px'></div>`);//${arr[i]}
}

//----------BUBBLE SORT---------
async function bubbleSort(arr){
    for(var i = arr.length-1; i>0; i--){
        for(var j=1; j<=i;j++){
            arrange(arr, i, j);
            await setSleep(100);
        }
    }
    return arr;
}
function arrange(arr, i, j){
    if(arr[j-1]>arr[j]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                document.querySelector(`.number-bar:nth-child(${j+1})`).style = `background-color: red; height:${50*arr[j]}px`;
                document.querySelector(`.number-bar:nth-child(${j})`).style = `height:${50*arr[j-1]}px`;
                console.log("i: " + i + "-----" + "j: " + j)
            }
}

//----------MERGE SORT---------
/**
 * Algotirhtm:
 * 1. find the mid point of the array
 * 2. divide the array into 2 parts
 * 3. call merge sort on both array until we touch the BASE CASE
 * 4. At the base case, arrange the array
 * 5. combine the array by a merge function
*/

function merge_sort(arr){
    if(arr.length > 1){
        var midPoint = Math.floor(arr.length/2);
        var leftArray = arr.slice(0, midPoint);
        var rightArray = arr.slice(midPoint, arr.length);
        merge_sort(leftArray);
        merge_sort(rightArray);
        var i = j = k = 0;
        while(i < leftArray.length && j < rightArray.length){
            if(leftArray[i]<rightArray[j]){
                arr[k++] = leftArray[i++];
                //code alpha
            }else{
                arr[k++] = rightArray[j++];
                //code alpha
            }
        }
        while(i<leftArray.length){
                arr[k++] = leftArray[i++];
        }
        while(j < rightArray.length){
            arr[k++] = rightArray[j++];
        }
        console.log(arr);
    }
}

function merge(leftArray, rightArray){
    console.log(leftArray, rightArray)
    var combinedArray = [];
    var i = 0;
    var j = 0;
    var k = 0;
    console.log(i, j, k)
    while(i < leftArray.length && j < rightArray.length){
        if(leftArray[i]<rightArray[j]){
            console.log("i --------",leftArray[i]);
            console.log("j --------",rightArray[j]);
            combinedArray[k++] = leftArray[i++];
        }else{
            combinedArray[k++] = rightArray[j++];
        }
    }
    while(i<leftArray.length){
            combinedArray[k++] = leftArray[i++];
    }

    while(j < rightArray.length){
        combinedArray[k++] = rightArray[j++];
    }
    console.log("CA", combinedArray);
    return combinedArray;
}

//merge_sort(arr);
