function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}
const characters = ',jfghjkdrghlkjrhfgaeuirhaeuihfu3456787654567';
const key = generateKey(12, characters);
console.log(key);