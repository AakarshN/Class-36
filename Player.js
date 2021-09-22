class Player{

    constructor(){

    }

    getCount(){
        var PlayerRef= database.ref('PlayerCount'); 
        PlayerRef.on("value", function(data){
            PlayerCount= data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            PlayerCount : count 
         })
    }

    update(name){

        var playerIndex= "Player"+ PlayerCount 
        database.ref(playerIndex).set({
            Name :  name
         })

    }


}