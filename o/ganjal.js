// const angka = '5'
// if(typeof(angka) == 'number') {
//     console.log('angka kok');
// } else {
//     console.log('bukan angka');
// }
// const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// // TODO: Kode untuk menambahkan item Charlie pada index ke-2

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");