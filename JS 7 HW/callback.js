
function myDay(temperature, cb, ) {
    setTimeout(()=>{
        console.log('Розпочався новий день')
        if (temperature>=37){
            console.log('stay at home')
            cb('You are so sick, null')
        }else {
            console.log('go to work')

            cb(null, 'Збираюсь')
        }
    }, 1000)
}
function prepareToGo(cb) {
    setTimeout(()=>{
        console.log('Збираюсь на роботу')
        cd (null, 'Збираюсь на роботу')

    },3000)
}
function wakeUp(time, cb) {
    setTimeout(()=>{
        if (time>=7){
        console.log('Я прокинувся')}
        {
            console.log('Маю сніданок')

        }
        cd(null, 'Я прокинувся')
    },500)
}
function myWayToWork(cb) {
    setTimeout(()=>{
        console.log('Долаю шлях до роботи')
        cd(null,'Долаю шлях до роботи' )
    },5000)
}
function doMyWork(time, cb) {
    setTimeout(()=>{
        console.log('Роблю корисні речі')
        if (time>=18) {
            console.log('Повертаюсь додому')
        }
    },6000)
}
function supper(cb) {
    setTimeout(()=>{
        console.log('Вечеря')
    },1500)
}
function watchnews(cb) {
    setTimeout(()=>{
        console.log('Дивлюсь новини')
    },100)
}
function goToSleep(cb) {
    setTimeout(()=>{
        console.log('Лягаю спати')
    })
}

myDay(38,(err, myDay) =>{
    if (err){
        console.error(err)
    }else{
        prepareToGo()
        console.log(prepareToGo)
    }
    prepareToGo(err)
    if (prepareToGo){
        wakeUp(7)
    }else{(err)}
    if (wakeUp){
        myWayToWork(err)
    }else{err}
    if (myWayToWork){
        doMyWork(18)
    }else{
        err}
    if (doMyWork){
        supper(err)
    }else{err}
    if (supper){
        watchnews(err)
    }else{err}
    if (watchnews){
        goToSleep(err)
    }else{err}
})






