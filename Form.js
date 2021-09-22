class Form{

constructor(){
this.input= createInput("").attribute("placeholder", "Enter your name");
this.playButton= createButton('Play');
this.titleImg= createImg("title.png", "game title")
this.greeting= createElement("H2")
}

setElementsposition(){
    this.input.position(width/2 -100 ,height/2- 80);
    this.titleImg.position(120,50)
    this.playButton.position(width/2-90, height/2-20);
    this.greeting .position(width/2- 300, height/2-100);
}

setElementStyle(){
    this.input.class("custominput")
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.titleImg.class("gameTitle");
}

handleMousePressed(){
    this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
    var Msg= `Hello ${this.input.value()} 
    </br>wait for another player to join...`; 
    this.greeting.html(Msg);
    }

    );
}

display(){

    this.setElementStyle();
    this.setElementsposition();
    this.handleMousePressed();

}
}