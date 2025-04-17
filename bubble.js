let bubble = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7]

function bubbleSort() {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble [i+1]) {
            let number1 = bubble[i]
            let number2 = bubble[i + 1]

            bubble[i] = number2
            bubble[i+1] = number1
        }
        
    }
}

for (let n = 0; n < bubble.length; n++) {
    bubbleSort();
    
}

console.log(bubble);


