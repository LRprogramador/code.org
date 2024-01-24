var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(20, 25, 18, 18);
  Sofia.shapeColor = "orange";
var Trofeu = createSprite(393, 375, 18, 70);
    Trofeu.shapeColor = "yellow";
var papelao1 = createSprite(10, 70, 100, 15);
    papelao1.shapeColor = "brown";
var papelao2 = createSprite(3, 250,150, 15);
    papelao2.shapeColor = "brown";
var papelao3 = createSprite(85, 250, 15, 100);
    papelao3.shapeColor = "brown";
var papelao4 = createSprite(90, 140, 110, 15);
    papelao4.shapeColor = "brown";
var papelao5 = createSprite(64, 351, 15, 100);
    papelao5.shapeColor = "brown";
var papelao6 = createSprite(150, 300, 15, 100);
    papelao6.shapeColor = "brown";
var papelao7 = createSprite(215, 351, 15, 100);
    papelao7.shapeColor = "brown";
var papelao8 = createSprite(285, 390, 85, 15);
    papelao8.shapeColor = "brown";
var papelao9 = createSprite(355, 351, 15, 100);
    papelao9.shapeColor = "brown";
var papelao10 = createSprite(236, 295,85, 15);
    papelao10.shapeColor = "brown";
var papelao11 = createSprite(271, 250, 15, 100);
    papelao11.shapeColor = "brown";
var papelao12 = createSprite(314, 295, 15, 100);
    papelao12.shapeColor = "brown";
var papelao13 = createSprite(354, 270, 95, 15);
    papelao13.shapeColor = "brown";
var papelao14 = createSprite(175, 210,120, 15);
    papelao14.shapeColor = "brown";
var papelao15 = createSprite(357, 210, 100, 15);
    papelao15.shapeColor = "brown";
var papelao16 = createSprite(370, 130, 15, 100);
    papelao16.shapeColor = "brown";
var papelao17 = createSprite(285, 155, 110, 15);
    papelao17.shapeColor = "brown";
var papelao18 = createSprite(345, 50, 110, 15);
    papelao18.shapeColor = "brown";
var papelao19 = createSprite(168, 25, 110, 15);
    papelao19.shapeColor = "brown";
var papelao20 = createSprite(105, 50, 15, 100);
    papelao20.shapeColor = "brown";
var papelao21 = createSprite(186, 120, 15, 100);
    papelao21.shapeColor = "brown";
var papelao22 = createSprite(256, 76, 15, 100);
    papelao22.shapeColor = "brown";

function draw() 
{
 
createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(papelao1);
Sofia.bounceOff(papelao2);
Sofia.bounceOff(papelao3);
Sofia.bounceOff(papelao4);
Sofia.bounceOff(papelao5);
Sofia.bounceOff(papelao6);
Sofia.bounceOff(papelao7);
Sofia.bounceOff(papelao8);
Sofia.bounceOff(papelao9);
Sofia.bounceOff(papelao10);
Sofia.bounceOff(papelao11);
Sofia.bounceOff(papelao12);
Sofia.bounceOff(papelao13);
Sofia.bounceOff(papelao14);
Sofia.bounceOff(papelao15);
Sofia.bounceOff(papelao16);
Sofia.bounceOff(papelao17);
Sofia.bounceOff(papelao18);
Sofia.bounceOff(papelao19);
Sofia.bounceOff(papelao20);
Sofia.bounceOff(papelao21);
Sofia.bounceOff(papelao22);

createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(bottomEdge);
Sofia.bounceOff(topEdge);
Sofia.bounceOff(leftEdge);
Sofia.bounceOff(rightEdge); 
 
 background("pink");

  Sofia.velocityX = 0;
  Sofia.velocityY = 0;  

if(keyDown("LEFT_ARROW")) 
{
  Sofia.velocityX = -4;
  Sofia.velocityY = 0;
}
  
  if (keyDown("RIGHT_ARROW"))
{
  Sofia.velocityX = 4;
  Sofia.velocityY = 0;
}
  if (keyDown("UP_ARROW")) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = -4;
}
  
  if (keyDown("DOWN_ARROW")) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = 4;
}


if (Sofia.isTouching(Trofeu))
{
  stroke("white"); 
  textSize("25");
  text("Você Venceu!" , 130,195);
}

if (Sofia.isTouching(Trofeu)) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = 0;
}

if (Sofia.isTouching(Sofia))
{
  stroke("white");
  textSize("20");
  text("Sofia");
   textAlign("Sofia");
  
}

if (Sofia.isTouching(Sofia)) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = 0;
}

drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
