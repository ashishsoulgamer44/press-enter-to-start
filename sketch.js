var backgroundImg;

function preload()
{
	backgroundImg = loadImage("break out game.jpeg");
   redblock = loadImage("red block1.jpeg");
   blueblock = loadImage("blue block1.png");
   ballImg = loadImage("ball one.jpeg");
   paddleImg = loadImage("paddle.jpeg");
}

function setup() {
createCanvas(700, 700);




block1 = createSprite(25,25,40,40);
block1.addImage("block1",redblock);
block1.scale = 0.2

block2 = createSprite(70,25,40,40);
block2.addImage("block2",blueblock);
block2.scale = 0.055;

block3 = createSprite(115,25,40,40);
block3.addImage("block3",redblock);
block3.scale = 0.2


block4 = createSprite(160,25,40,40);
block4.addImage("block4",blueblock);
block4.scale = 0.055;

block5 = createSprite(205,25,40,40);
block5.addImage("block5",redblock);
block5.scale = 0.2

block6 = createSprite(250,25,40,40);
block6.addImage("block6",blueblock);
block6.scale = 0.055;

block7 = createSprite(295,25,40,40);
block7.addImage("block7",redblock);
block7.scale = 0.2

block8 = createSprite(340,25,40,40);
block8.addImage("block8",blueblock);
block8.scale = 0.055;

block9 = createSprite(385,25,40,40);
block9.addImage("block9",redblock);
block9.scale = 0.2

block10 = createSprite(430,25,40,40);
block10.addImage("block10",blueblock);
block10.scale = 0.055;

block11 = createSprite(475,25,40,40);
block11.addImage("block11",redblock);
block11.scale = 0.2

block12 = createSprite(520,25,40,40);
block12.addImage("block12",blueblock);
block12.scale = 0.055;

block13 = createSprite(565,25,40,40);
block13.addImage("block13",redblock);
block13.scale = 0.2


block14 = createSprite(610,25,40,40);
block14.addImage("block14",blueblock);
block14.scale = 0.055;

block15 = createSprite(655,25,40,40);
block15.addImage("block15",redblock);
block15.scale = 0.2

block16 = createSprite(25,70,40,40);
block16.addImage("block16",blueblock);
block16.scale = 0.055;

block17 = createSprite(70,70,40,40);
block17.addImage("block17",redblock);
block17.scale = 0.2

block18 = createSprite(115,70,40,40);
block18.addImage("block18",blueblock);
block18.scale = 0.055;

block19 = createSprite(160,70,40,40);
block19.addImage("block19",redblock);
block19.scale = 0.2

block20 = createSprite(205,70,40,40);
block20.addImage("block20",blueblock);
block20.scale = 0.055;

block21 = createSprite(250,70,40,40);
block21.addImage("block21",redblock);
block21.scale = 0.2

block22 = createSprite(295,70,40,40);
block22.addImage("block22",blueblock);
block22.scale = 0.055;

block23 = createSprite(340,70,40,40);
block23.addImage("block23",redblock);
block23.scale = 0.2

block24 = createSprite(385,70,40,40);
block24.addImage("block24",blueblock);
block24.scale = 0.055;

block25 = createSprite(430,70,40,40);
block25.addImage("block25",redblock);
block25.scale = 0.2

block26 = createSprite(475,70,40,40);
block26.addImage("block26",blueblock);
block26.scale = 0.055;

block27 = createSprite(520,70,40,40);
block27.addImage("block27",redblock);
block27.scale = 0.2

block28 = createSprite(565,70,40,40);
block28.addImage("block2",blueblock);
block28.scale = 0.055;

block29 = createSprite(610,70,40,40);
block29.addImage("block29",redblock);
block29.scale = 0.2

block30 = createSprite(655,70,40,40);
block30.addImage("block30",blueblock);
block30.scale = 0.055;


block31 = createSprite(25,115,40,40);
block31.addImage("block31",redblock);
block31.scale = 0.2

block32 = createSprite(70,115,40,40);
block32.addImage("block32",blueblock);
block32.scale = 0.055;

block33 = createSprite(115,115,40,40);
block33.addImage("block33",redblock);
block33.scale = 0.2

block34 = createSprite(160,115,40,40);
block34.addImage("block34",blueblock);
block34.scale = 0.055;

block35 = createSprite(205,115,40,40);
block35.addImage("block35",redblock);
block35.scale = 0.2

block36 = createSprite(250,115,40,40);
block36.addImage("block36",blueblock);
block36.scale = 0.055;

block37 = createSprite(295,115,40,40);
block37.addImage("block37",redblock);
block37.scale = 0.2

block38 = createSprite(340,115,40,40);
block38.addImage("block38",blueblock);
block38.scale = 0.055;

block39 = createSprite(385,115,40,40);
block39.addImage("block39",redblock);
block39.scale = 0.2

block40 = createSprite(430,115,40,40);
block40.addImage("block40",blueblock);
block40.scale = 0.055;

block41 = createSprite(475,115,40,40);
block41.addImage("block41",redblock);
block41.scale = 0.2

block42 = createSprite(520,115,40,40);
block42.addImage("block42",blueblock);
block42.scale = 0.055;

block43 = createSprite(565,115,40,40);
block43.addImage("block43",redblock);
block43.scale = 0.2

block44 = createSprite(610,115,40,40);
block44.addImage("block44",blueblock);
block44.scale = 0.055;

block45 = createSprite(655,115,40,40);
block45.addImage("block45",redblock);
block45.scale = 0.2


block46 = createSprite(25,160,40,40);
block46.addImage("block46",blueblock);
block46.scale = 0.055;


block47 = createSprite(70,160,40,40);
block47.addImage("block47",redblock);
block47.scale = 0.2

block48 = createSprite(115,160,40,40);
block48.addImage("block48",blueblock);
block48.scale = 0.055;

block49 = createSprite(160,160,40,40);
block49.addImage("block49",redblock);
block49.scale = 0.2

block50 = createSprite(205,160,40,40);
block50.addImage("block50",blueblock);
block50.scale = 0.055;

block51 = createSprite(250,160,40,40);
block51.addImage("block51",redblock);
block51.scale = 0.2

block52 = createSprite(295,160,40,40);
block52.addImage("block52",blueblock);
block52.scale = 0.055;


block53 = createSprite(340,160,40,40);
block53.addImage("block53",redblock);
block53.scale = 0.2

block54 = createSprite(385,160,40,40);
block54.addImage("block54",blueblock);
block54.scale = 0.055;

block55 = createSprite(430,160,40,40);
block55.addImage("block55",redblock);
block55.scale = 0.2

block56 = createSprite(475,160,40,40);
block56.addImage("block56",blueblock);
block56.scale = 0.055;

block57 = createSprite(520,160,40,40);
block57.addImage("block57",redblock);
block57.scale = 0.2

block58 = createSprite(565,160,40,40);
block58.addImage("block58",blueblock);
block58.scale = 0.055;


block59 = createSprite(610,160,40,40);
block59.addImage("block59",redblock);
block59.scale = 0.2

block60 = createSprite(655,160,40,40);
block60.addImage("block60",blueblock);
block60.scale = 0.055;


ball = createSprite(350,350,20,20);
ball.addImage("ball",ballImg);
ball.scale = 0.3

paddle = createSprite(350,600,80,20);
paddle.addImage("paddle",paddleImg);

rightEdge = createSprite(700,350,10,1000)
leftEdge = createSprite(0,350,10,1000);
topEdge = createSprite(350,0,1000,10);


}


function draw() {
background(backgroundImg);

if(keyDown("left")){
  paddle.x = paddle.x-5;
}

if(keyDown("right")){
  paddle.x = paddle.x+5;
}


if (keyDown("ENTER")) {
  //do this 
  ball.velocityX = 4;
  ball.velocityY = 5;
}

ball.bounceOff(paddle);
ball.bounceOff(rightEdge);
ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);


  
if(ball.isTouching(block1)){
  block1.destroy();
  }
  if(ball.isTouching(block2)){
  block2.destroy();
  }
  if(ball.isTouching(block3)){
  block3.destroy();
  }
  if(ball.isTouching(block4)){
  block4.destroy();
  }
  if(ball.isTouching(block5)){
  block5.destroy();
  }
  if(ball.isTouching(block6)){
  block6.destroy();
  }
  if(ball.isTouching(block7)){
  block7.destroy();
  }
  if(ball.isTouching(block8)){
  block8.destroy();  
  }
  if(ball.isTouching(block9)){
  block9.destroy();
    }
  if(ball.isTouching(block10)){
  block10.destroy();
  }
  if(ball.isTouching(block11)){
  block11.destroy();
  }
  if(ball.isTouching(block12)){
  block12.destroy();
    }
  if(ball.isTouching(block13)){
  block13.destroy();
  }
  if(ball.isTouching(block14)){
  block14.destroy();
    }
  if(ball.isTouching(block15)){  
  block15.destroy();
  }
  if(ball.isTouching(block16)){
  box16.destroy();
    }
  if(ball.isTouching(block17)){
    box17.destroy();
  }
  if(ball.isTouching(block18)){
    block18.destroy();
    }
  if(ball.isTouching(block19)){
    block19.destroy();
  }
  if(ball.isTouching(block20)){
    block20.destroy();
    }
  if(ball.isTouching(block21)){
      block21.destroy();
      }
  if(ball.isTouching(block22)){
        block22.destroy();
        }
if(ball.isTouching(block23)){
          block23.destroy();
          }

 if(ball.isTouching(block24)){
            block24.destroy();
            }
  if(ball.isTouching(block25)){
              block25.destroy();
              }
  if(ball.isTouching(block26)){
                block26.destroy();
                }
      if(ball.isTouching(block27)){
                  block27.destroy();
                  }
    if(ball.isTouching(block28)){
                    block28.destroy();
                    }
    if(ball.isTouching(block29)){
                      block29.destroy();
                      }
           if(ball.isTouching(block30)){
                        block30.destroy();
                        }
                        if(ball.isTouching(block31)){
                          block31.destroy();
                          }

                          if(ball.isTouching(block32)){
                            block32.destroy();
                            }
                            if(ball.isTouching(block33)){
                            block33.destroy();
                            }
                            if(ball.isTouching(block34)){
                            block34.destroy();
                            }
                            if(ball.isTouching(block35)){
                            block35.destroy();
                            }
                            if(ball.isTouching(block36)){
                            block36.destroy();
                            }
                            if(ball.isTouching(block37)){
                            block37.destroy();
                            }
                            if(ball.isTouching(block38)){
                            block38.destroy();
                            }
                            if(ball.isTouching(block39)){
                            block39.destroy();
                            }
                            if(ball.isTouching(block40)){
                              block40.destroy();
                              }
                              if(ball.isTouching(block41)){
                                block41.destroy();
                                }
                                if(ball.isTouching(block42)){
                                  block42.destroy();
                                  }
                                  if(ball.isTouching(block43)){
                                    block43.destroy();
                                    }
                                    if(ball.isTouching(block44)){
                                      block44.destroy();
                                      }
                                      if(ball.isTouching(block45)){
                                        block45.destroy();
                                        }
                                        if(ball.isTouching(block46)){
                                          block46.destroy();
                                          }
                                          if(ball.isTouching(block47)){
                                            block47.destroy();
                                            }
                                            if(ball.isTouching(block48)){
                                              block48.destroy();
                                              }

                                              if(ball.isTouching(block49)){
                                                block4.destroy();
                                                }
                                                if(ball.isTouching(block50)){
                                                  block50.destroy();
                                                  }
                                                  if(ball.isTouching(block51)){
                                                    block51.destroy();
                                                    }
                                                    if(ball.isTouching(block52)){
                                                      block52.destroy();
                                                      }
                                                      if(ball.isTouching(block53)){
                                                        block53.destroy();
                                                        }
                                                        if(ball.isTouching(block54)){
                                                          block54.destroy();
                                                          }
                                                          if(ball.isTouching(block55)){
                                                            block55.destroy();
                                                            }
                                                            if(ball.isTouching(block56)){
                                                              block56.destroy();
                                                              }
                                                              if(ball.isTouching(block57)){
                                                                block57.destroy();
                                                                }
                                                                if(ball.isTouching(block58)){
                                                                  block58.destroy();
                                                                  }
                                                                  if(ball.isTouching(block58)){
                                                                    block58.destroy();
                                                                    }
                                                                    if(ball.isTouching(block60)){
                                                                      block60.destroy();
                                                                      }










drawSprites();

 
}

function serve(){
  ball.velocityX = 4;
  ball.velocityY = 5;

}

