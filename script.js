
const options = {
   0: 'yellow',
   1: 'green',
   2: 'red',
   3: 'blue',
};

const redBtn = document.getElementById('red-button');
const blueBtn = document.getElementById('blue-button');
const greenBtn = document.getElementById('green-button');
const yellowBtn = document.getElementById('yellow-button');

const cpu = [], player = [];

const inputNewColor = async () => {
    let newColor = Math.floor(Math.random() * 3);
    cpu.push(options[newColor]);

    try {
        await showFullColorSequence();
    } catch (err) {
        console.log(err.message)
    } 
};

const handleEnlightColor = async (color) => {
    let btn = document.getElementById(`${color}-button`);
    return new Promise(() => {
        btn.classList.add('selected-color-class');
        setTimeout(() => {
            btn.classList.remove('selected-color-class');
        }, 2000);
    })
};

const showFullColorSequence = async () => {
  
    for(let color of cpu){
        console.log(color)
        await handleEnlightColor(color);
    }   

};

const test = async () => {
    await inputNewColor();
};

const restartGame = () => {
    // TODO: restart game function
}