    var colors = ['#7f58af','#ffab00','#e00f8f','#aeb3a6'];
    
    var cards = document.querySelectorAll('.box');

    function rotateCard(){
        let angle =0;
        cards.forEach((card,index) => {
            if(card.classList.contains('away')){
                card.style.transform = `translateY(-120vh)`;
            }
            else{
            
                card.style.transform= `rotate(${angle}deg)`;
            card.style.zIndex=  cards.length - index;
            angle=angle-10;
            card.style.backgroundColor=colors[index]
            }
            card.style.boxShadow=`2px 2px 5px 2px rgba(0,0,0,.5)`;
        }
    )
    }
    

    window.addEventListener('scroll',()=>{
    let element = document.getElementById('container');

    let distance = window.innerHeight/2;
    let topVal = element.getBoundingClientRect().top;
    let indexes = -1*((topVal/distance) +1) ;
    console.log(indexes)
        indexes = Math.floor(indexes);
        for(let i=0;i<cards.length;i++){
            if(i<=indexes){
                cards[i].classList.add('away');
            }
            else{
                cards[i].classList.remove('away');
            }
        }
        rotateCard();
    });
    