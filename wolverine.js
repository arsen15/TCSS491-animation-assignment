class wolverine{
	constructor(game){
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Wolverine-running.png"), 3, 0, 58, 52, 8, 0.3);
		
		this.x = 0;
		this.y = 160;
		this.speed = 160;
	};
	
	update(){
		
		this.x += this.speed * this.game.clockTick;
		if (this.x > 1261) {
			this.x = 0;
		}
		
	};
	
	draw(ctx){
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
};