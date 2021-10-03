const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')

const calculate =(n1, operator, n2)=>{
    n1=parseFloat(n1)
    n2=parseFloat(n2)
    switch(operator){
        case 'add':
            result = n1+n1
            break;
        case 'subtract':
            result = n1-n1
            break;
        case 'multiply':
            result = n1*n1
            break;
        case 'divide':
            result = n1/n1
            break;
        default:
            result = 'undefine'
        }
    return result
}

keys.addEventListener('click', e =>{
    if (e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent=key.textContent
        const displayNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if (action!=='clear'){
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent='CE'
        }

        if (!action){
            if (displayNum==='0'||
                previousKeyType==='operator'||
                previousKeyType==='calculate'){
                display.textContent=keyContent
            }else {
                display.textContent= displayNum+keyContent
            }
            calculator.dataset.previousKeyType='number'
        }

        if (
            action==='add'||
            action==='subtract'||
            action==='multiply'||
            action==='divide'
            ){ 
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayNum

            if (firstValue&&operator&&previousKeyType!=='operator'&&previousKeyType!=='calculate'){
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent=calcValue
                calculator.dataset.firstValue=calcValue

            }else{
                calculator.dataset.firstValue=displayNum
            }       

                key.classList.add('is-depressed')
                calculator.dataset.previousKeyType='operator'
                calculator.dataset.operator = action


                console.log(previousKeyType)
            }

        if(action==='decimal'){
            if(!displayNum.includes('.')&&previousKeyType==='number'){
                display.textContent=displayNum+'.'
                calculator.dataset.previousKeyType='decimal'
            } else if (previousKeyType==='operator'||
                        previousKeyType==='calculate'){
                display.textContent='0.'
            }

            calculator.dataset.previousKeyType='decimal'
        }

        if(action==='clear'){
            if(key.textContent==='AC'){
                calculator.dataset.firstValue=''
                calculator.dataset.modValue=''
                calculator.dataset.operator=''
                calculator.dataset.previousKeyType=''
            } else {
                key.textContent='AC'
            }
            display.textContent=0
            calculator.dataset.previousKeyType='clear'
        }

        if(action==='calculate'){
            let secondValue = displayNum
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            

            if (firstValue){
                if (previousKeyType==='calculate'){
                    firstValue=displayNum
                    secondValue=calculator.dataset.modValue

                }
                display.textContent = calculate(firstValue,operator,secondValue)
            }
            calculator.dataset.modValue=secondValue
            calculator.dataset.previousKeyType='calculate'
         
        }
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))    
    }
})

