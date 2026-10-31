// to define the fictional directories and files that players investigate
// this page is currently being used as more of a coding exercise than a real game feature, but it will be used in the future to create a more immersive experience for players

const files = [
    { name: "missing-file.txt", discovered: false},
    { name: "record.txt", discovered: false},
    { name: "system.log", discovered: false },
    { name: "data.txt", discovered: false},
    { name: "2032.txt", discovered: false},
]

function checkFile(filename) {
    return files.find(function(item) {
        return item.name === filename;
    });
}

function openFile(filename) {
    const target = checkFile(filename);
    if(target === undefined) {
        console.log("File Not Found!!");
    }
    else {
        if(target.discovered===false){
            console.log("First time opening this file!")
            target.discovered= true;
        }
        else
            console.log("You've already opened this file!")
    }

}

openFile("data.txt");
openFile("data.txt");
openFile("system.txt");

// function openFile (filename){
//     const target = files.find(function(item){
//         return item.name === filename;
//     });
//     if(target === undefined){
//         return "File Not Found!!";
//     }
//     else
//         return "Opening "+ target.name;
// }
// console.log(openFile("boombaam.txt"));