class background{
	constructor(game){
		this.game = game;
		
	};
	
	update(){
		
		
	};
	
	draw(ctx){
		ctx.drawImage(ASSET_MANAGER.getAsset("./background.png"), 0, 0, 1261, 305);
	};
};