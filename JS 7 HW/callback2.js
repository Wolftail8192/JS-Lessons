function myDay(temperature, cb, ) {
    setTimeout(()=>{
        console.log('Розпочався новий день')
        if (temperature>=37){
            console.log('stay at home')
            cb('You are so sick')
        }else {
            console.log('go to work')

            cb(null, 'Збираюсь')
        }
    }, 1000)
}
function prepareToGo(time, cb) {
    setTimeout(()=>{
        if (time<7){
            console.error(err)
        }else{
            console.log('Я прокинувся')
        }
    })
}
myDay(36,(err, myDay) => {
    if (err) {
        console.error(err)
    } else {
        prepareToGo()
        console.log(prepareToGo)
    }
})
prepareToGo(7)