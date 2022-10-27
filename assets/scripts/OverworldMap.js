class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.lowerImage.Src = config.lowerSrc;
        this.upperImage = new Image();
        this.upperImage.Src = config.upperSrc;
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage,0,0)
    }
    drawUpperImage(ctx){
        ctx.drawImage(this.UpperImage,0,0)
    }

}


window.OverworldMaps = {
    DemoRoom:{
        lowerSrc: "img/maps/DemoLower.png",
        upperSrc: "img/maps/DemoUpper.png",
        hero: new GameObject({
            x : 5,
            y: 6,
        }),
        npc1: new GameObject({
            x : 7,
            y: 9,
            src : "/img/characters/people/npc1.png"
        })
    },
    Kitchen:{
        lowerSrc: "img/maps/KitchenLower.png",
        upperSrc: "img/maps/KitchenUpper.png",
        hero: new GameObject({
            x : 3,
            y: 1,
        }),
        npc1: new GameObject({
            x : 9,
            y: 2,
            src : "/img/characters/people/npc1.png"
        }),
        npc1: new GameObject({
            x : 10,
            y: 4,
            src : "/img/characters/people/npc1.png"
        })
    },
}