/* প্রাকটিস প্রব্লেম 

একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা। */

const inputField = document.getElementById('input-field')
const p = document.getElementById('p')

function multiply(firstNum, secondNum) {
    return Number(firstNum) * Number(secondNum)

}
function double() {
    if (inputField.value > 0) {
        const doubleNum = multiply(inputField.value, 2)
        p.innerText = doubleNum;

    }
    else {
        alert('please enter a number')
    }


}
function triple() {
    if (inputField.value > 0) {
        const tripleNum = multiply(inputField.value, 3)
        p.innerText = tripleNum;
    }
    else {
        alert('please enter a number')
    }

}
