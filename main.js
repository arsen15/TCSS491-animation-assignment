const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Wolverine-running.png");
ASSET_MANAGER.queueDownload("./background.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
		
	gameEngine.addEntity(new wolverine(gameEngine));
	gameEngine.addEntity(new background(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});