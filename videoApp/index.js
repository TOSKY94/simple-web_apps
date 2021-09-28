
fetch('https://picsum.photos/800/600')
    .then(res => res.blob())
    .then(blob => {
        let img = document.createElement('img');
        console.log(img)
        img.src = URL.createObjectURL(blob);
        document.querySelector('body').appendChild(img)
    })


    function factorial(num) {
        if (num===0){
            return 1
        }  else {
            return num*factorial(num-1);
        }
    }

    let number = factorial(3);
    console.log(number)