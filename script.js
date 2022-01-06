let randomMovement = () => {
    return randomIntFromInterval(-30, 80)
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }

console.log(randomMovement())

function animate() {
    var t = anime.timeline({
            loop: false
    });

    t.add({
        targets: '#c1',
        translateX: [ { value: randomMovement()+"vw"  } ],
        translateY: [ { value: randomMovement()+"vh"  } ],
        easing: 'easeInOutQuad',
        duration: 3000
    },0)
    t.add({
        targets: '#c2',
        translateX: [ { value: randomMovement()+"vw"  } ],
        translateY: [ { value: randomMovement()+"vh"  } ],
        easing: 'easeInOutQuad',
        duration: 3000
    },0)
    t.add({
        targets: '#c3',
        translateX: [ { value: randomMovement()+"vw"  } ],
        translateY: [ { value: randomMovement()+"vh"  } ],
        easing: 'easeInOutQuad',
        duration: 3000
    },0)
    t.add({
        targets: '#c4',
        translateX: [ { value: randomMovement()+"vw"  } ],
        translateY: [ { value: randomMovement()+"vh"  } ],
        easing: 'easeInOutQuad',
        duration: 3000
    },0)

    t.complete = () => {animate()}
}


animate()