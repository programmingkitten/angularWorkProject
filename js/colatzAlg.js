
export function colatzAlg(number) {
    let cycles = 0;
    const numbers = [];
    while (number!=1) {
        
        if (number%2 === 0) {
            number = number/2
            numbers.push(Number(number))

        } else {
            number = 3*number + 1
            numbers.push(Number(number))
        }

        originalNumbersFunc.push(number)

        cycles += 1;

    }
    return numbers 
}