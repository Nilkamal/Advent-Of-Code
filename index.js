//1. Find checksum by multiplying two numbers
    //1.1 Add 1 if char comes exactly twise
    //1.2 Add 1 if char comes exatly thrise
    //1.2 Finally multiply those two numbers

const input = [
    'lnfqdscwjyteorambzuchzrgpx',
    'lnfqdscwjyteorambzuchirgpx'
];

const findTwise = (input) => {
    console.time('checksum');
    let total = 0;
    input.map((boxId)=> {
        let twise = 0;
         boxId.split('').some((box)=> {
            let totalChars = boxId.split('').filter(i=> {
                return i === box;
            })
            twise = totalChars.length;
            // thrise = totalChars.length;

            total+= twise === 2 ? 1 : 0
            return twise === 2;
        })
    })
    return total
}

//2
const findThrise = (input) => {
    let total = 0;
    input.map((boxId)=> {
        let thrice = 0;
         boxId.split('').some((box)=> {
            let totalChars = boxId.split('').filter(i=> {
                return i === box;
            })
            thrice = totalChars.length;
            total+= thrice === 3 ? 1 : 0
            return thrice === 3;
        })
    })
    return total
}

const checkSum = (first, second) => {
    console.timeEnd('checksum')
    return first * second;
}

const first = findTwise(input);
const second = findThrise(input);

checkSum(first,second);


// Find common letters between two boxes
//By comparing letters on the same position have only one difference

function countCommonCharacters(input) {
    let result = {};
    let stack = [...input];
    while(stack.length !== 0) {
        let current = stack.pop();
        for(let element of stack) {
            let counter = 0;
            let positions = [];
            let difference = 0;
            for(let i = 0;i < element.length; i++) {
                if(difference > 1) {
                    break;
                }
                if(element[counter] !== current[counter]) {
                    difference++;
                } else {
                    positions[counter] = counter;
                }
                counter++;
            }
            if(difference === 1) {
                result = {element: current, elementPosition: positions};
            }            
        }
        
    }

    return (result.element.split('').filter((e, index)=>{
        return index === result.elementPosition[index];
    })).join('');
}