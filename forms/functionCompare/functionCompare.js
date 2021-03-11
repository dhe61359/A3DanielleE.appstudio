let pass1 = prompt("Change your password.")
let pass2 = prompt("Confirm your password.")
function Compare(pass1, pass2){
    let same = pass1.localeCompare(pass2)
    return same
    }
let same = Compare(pass1, pass2)
    if (same == true)
        console.log(`The passwords are not the same.`)
    else (same == false)
        console.log(`The passwords are the same.`)