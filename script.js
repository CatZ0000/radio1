console.log('Привет Мир!')

let obj = {
    name: 'Vic',
    lastname: 'Svet',
}

console.log(obj)

let button  = document.getElementById('main-button')

let buttonSwitch = false

const onClick = () => {
    if (buttonSwitch) {
        button.style.backgroundColor = 'white'
        buttonSwitch = false
    } else {
         button.style.backgroundColor = 'red'
         buttonSwitch = true
    }
}

button.addEventListener('click', onClick)




function test1() {
    return 'test1'
}

let text = test1()

console.log(text)

let test2 = function(){console.dir('test2')}

let test3 = () => {console.dir('test3')}



    

