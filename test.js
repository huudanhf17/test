function checki(i) {
    if (i == 0) {
        setTimeout(function(){
            console.log(i)
        }, 1000)


    } else if (i <= 9) {
        setTimeout(function(){
            console.log(i)
            i--
            checki(i)
        }, 1000)

    }
}
checki(9)

