// to define the fictional directories and files that players investigate

const files = [
    { name: "missing-file.txt", discovered: false},
    { name: "record.txt", discovered: false},
    { name: "data.txt", discovered: false},
    { name: "2032.txt", discovered: false},
]

function openFile (filename){
    const target = files.find(function(item){
        return item.name === filename;
    });
    if(target === undefined){
        return "File Not Found!!";
    }
    else
        return "Opening "+ target.name;
}
console.log(openFile("boombaam.txt"));