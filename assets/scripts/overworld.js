
//création du "monde"

class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
    }
//mise en place de l'image de fond, l'environnement
init(){
    const image = new Image();
    image.onload = () =>{
        this.ctx.drawImage(image,0,0)

    }

    image.src = "/img/maps/DemoLower.png";

    //créer des GameObjects
    const hero =  new GameObject({
        x : 5,
        y: 6,
    })
    const npc1 =  new GameObject({
        x : 7,
        y: 9,
        src : "/img/characters/people/npc1.png"
    })

setTimeout(()=>{

    hero.sprite.draw(this.ctx)
    npc1.sprite.draw(this.ctx)
},200)

}


}