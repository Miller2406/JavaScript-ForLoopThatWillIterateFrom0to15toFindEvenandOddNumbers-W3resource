// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

const arr = []
for (let i = 0; i <= 15; i++) {
    arr.push(i)
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i] + ' is even');
    } else {
        console.log(arr[i] + ' is odd');
    }
}