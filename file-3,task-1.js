// lecture 3 - task 1

let mark = Number(prompt('Enter your mark: '))

if (mark >= 80 && mark <= 100 ){
    document.write(' Your letter Grade: A+')
} else if (mark >= 70 && mark < 80) {
    document.write('Your letter Grade: A')
}else if (mark >= 60 && mark < 70) {
    document.write('Your letter Grade: B')
}else if (mark >= 50 && mark < 60) {
    document.write('Your letter Grade: C')
}else if (mark >= 40 && mark < 50) {
    document.write('Your letter Grade: D')
}else if (mark < 40 && mark >= 0) {
    document.write('Your letter Grade: F')
}else {
    document.write('Wrong Entry')
}