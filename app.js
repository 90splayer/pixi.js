const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();
// rectangle.beginFill(0xAA33BB)
// .lineStyle(4, 0xFFEA00, 1)
// .drawRect(200, 200, 100, 120)
// .endFill();

// app.stage.addChild(rectangle);

// const poly = new Graphics();
// poly.beginFill(0xFF66FF)
// .drawPolygon([
//     600, 50,
//     800, 150,
//     900, 300,
//     400, 400
// ])
// .endFill();

// app.stage.addChild(poly);

// const circle = new Graphics();
// circle.beginFill(0x22AACC)
// .drawCircle(440, 200, 80)
// .endFill();

// app.stage.addChild(circle);

// const line = new Graphics();
// line.lineStyle(5, 0xFFEA00, 1)
// .moveTo(1200, 100)
// .lineTo(1200, 800);

// app.stage.addChild(line);

// const torus = new Graphics();
// torus.beginFill(0xFFFDDD)
// .drawTorus(100, 400, 80, 100)
// .endFill();

// app.stage.addChild(torus);

// const star = new Graphics();
// star.beginFill(0xADADAD)
// .drawStar(500, 400, 300, 80)
// .endFill();

// app.stage.addChild(star);

// const style = new PIXI.TextStyle({
//     fontFamily: 'Montserrat',
//     fontSize: 48,
//     fill: 'deepskyblue',
//     stroke: '#ffffff',
//     strokeThickness: 4,
//     dropShadow: true,
//     dropShadowDistance: 10,
//     dropShadowAngle: Math.PI / 2,
//     dropShadowBlur: 4,
//     dropShadowColor: '#000000'
// })

// const myText = new PIXI.Text('Hello World!', style);

// app.stage.addChild(myText)

// myText.text = 'Text Changed!';

// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;
// myText.style.align = 'center';

// app.ticker.add(delta => loop(delta));

// function loop(delta){
//     const rect = new Graphics();
//     rect.beginFill(0xFFFFFF)
//     .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
//     .endFill();
//     app.stage.addChild(rect);
// }

// const logoTexture = PIXI.Texture.from('./images/showdown-off.png');
// const logoSprite = new PIXI.Sprite(logoTexture);

const char1Sprite = PIXI.Sprite.from('./images/showdown-off.png');

// app.stage.addChild(char1Sprite);