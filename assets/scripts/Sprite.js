class Sprite{
    constructor(config){


        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //shadow
        this.shadow = new Image();
        this.useShadow = true;
        if(this.useShadow){

            this.shadow.src = "/img/characters/shadow.png"
        }
        this.shadow.onload = () =>{
            this.isShadowLoaded = true;
        }



        //configurer les animations et le stade de départ
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ],

        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0,
    
        this.gameObject = config.gameObject;

    }   

draw(ctx){ //paramètres d'affichage du Sprite
        const x = this.gameObject.x * 16 - 7;
        const y = this.gameObject.y *16 - 18;

    this.isShadowLoaded && ctx.drawImage(this.shadow,x,y)

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
            )
    }
}