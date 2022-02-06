namespace SpriteKind {
    export const block = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    clearLevel()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f 1 e e e e e 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . f . . f f f f f . . . . . . 
        . . f f f 5 5 5 5 5 f f . . . . 
        . . . f f 5 5 5 5 5 f f f . . . 
        . . . . f 5 5 5 5 5 f . f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f 1 e e e e e 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . . . . f f f f f . . f . . . 
        . . . f f 5 5 5 5 5 f f f . . . 
        . . f f f 5 5 5 5 5 f f . . . . 
        . . f . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `],
    200,
    true
    )
})
function mechanic () {
    if (currentlevel == 0) {
        tiles.setTilemap(tilemap`level1`)
        tiles.coverAllTiles(assets.tile`myTile15`, assets.tile`myTile3`)
        tiles.coverAllTiles(assets.tile`myTile4`, assets.tile`myTile3`)
        tiles.coverAllTiles(assets.tile`myTile34`, assets.tile`myTile3`)
    } else if (currentlevel == 1) {
        tiles.setTilemap(tilemap`level8`)
        KEY.setImage(img`
            d d d d d d d d f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            d 1 1 1 1 1 1 1 f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f d d d d d d d d 
            f f f f f f f f d 1 1 1 1 1 1 1 
            f f f f f f f f d 1 1 1 1 1 1 1 
            f f f f f f f f d 1 1 1 1 1 1 1 
            f f f f f f f f d 1 1 1 1 1 1 1 
            f f f f f f f f d 1 1 1 1 1 1 1 
            f f f f f f f f d 1 1 1 1 1 1 1 
            `)
        info.setScore(4)
        tiles.placeOnRandomTile(hero, assets.tile`myTile`)
        tiles.coverAllTiles(assets.tile`myTile15`, assets.tile`myTile17`)
        tiles.coverAllTiles(assets.tile`myTile4`, assets.tile`myTile17`)
        tiles.coverAllTiles(assets.tile`myTile51`, assets.tile`myTile3`)
    } else if (currentlevel == 2) {
        game.showLongText("Congratulacion your boss wants to promote you", DialogLayout.Full)
        game.over(true)
    }
    tiles.placeOnRandomTile(hero, assets.tile`myTile`)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
    KEY.setFlag(SpriteFlag.Invisible, true)
    for (let index = 0; index < 1; index++) {
        Parrot = sprites.create(img`
            . . . . . . f f f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 1 1 2 2 f . . . . . 
            . . . . f 2 1 f d d f . . . . . 
            . . . . f 2 1 1 d d f . . . . . 
            . . . f 2 2 2 1 f d f . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f 2 5 5 2 2 2 f . . . . . . 
            . . f 5 5 5 5 2 2 f . . . . . . 
            . f 5 5 5 5 8 2 2 f . . . . . . 
            . f 5 5 5 8 2 2 2 f . . . . . . 
            f 5 5 5 5 8 2 2 f . . . . . . . 
            f 5 5 8 8 2 2 f f f f . . . . . 
            f 5 8 8 f f f f e e e f . . . . 
            f 8 8 f . f f e e f f . . . . . 
            f 8 f . f e e e f . . . . . . . 
            . f . f e e e f . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Parrot, assets.tile`myTile1`)
        tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile2`)
        animation.runImageAnimation(
        Parrot,
        [img`
            . . . . . . f f f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 1 1 2 2 f . . . . . 
            . . . . f 2 1 f d d f . . . . . 
            . . . . f 2 1 1 d d f . . . . . 
            . . . f 2 2 2 1 f d f . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f 2 5 5 2 2 2 f . . . . . . 
            . . f 5 5 5 5 2 2 f . . . . . . 
            . f 5 5 5 5 8 2 2 f . . . . . . 
            . f 5 5 5 8 2 2 2 f . . . . . . 
            f 5 5 5 5 8 2 2 f . . . . . . . 
            f 5 5 8 8 2 2 f f f f . . . . . 
            f 5 8 8 f f f f e e e f . . . . 
            f 8 8 f . f f e e f f . . . . . 
            f 8 f . f e e e f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . f 2 1 1 2 2 f . . . . . 
            . . . . f 2 1 f d d f . . . . . 
            . . . . f 2 1 1 d d f . . . . . 
            . . . f 2 2 2 1 f d f . . . . . 
            . . f 2 5 5 2 2 2 f . . . . . . 
            . . f 5 5 5 5 2 2 f . . . . . . 
            . f 5 5 5 5 8 2 2 f . . . . . . 
            . f 5 5 5 8 2 2 2 f . . . . . . 
            f 5 5 5 5 8 2 2 f . . . . . . . 
            f 5 5 8 8 2 2 f f f f . . . . . 
            f 5 8 8 f f f f e e e f . . . . 
            f 8 8 f . f f e e f f . . . . . 
            f 8 f . f e e e f . . . . . . . 
            `],
        200,
        true
        )
    }
}
function makeHero () {
    hero = sprites.create(img`
        . . f f f f f f f . . 
        . f e e e e e e e f . 
        . f e 1 1 1 1 1 e f . 
        . f 1 f 1 1 1 f 1 f . 
        . f 1 1 1 1 1 1 1 f . 
        . f 1 d 1 1 1 d 1 f . 
        . f 1 1 d d d 1 1 f . 
        . f 1 1 1 1 1 1 1 f . 
        . . f f 1 1 1 f f . . 
        . . . f f f f f . . . 
        . f f 5 5 5 5 5 f f . 
        f f f 5 5 5 5 5 f f f 
        f . f 5 5 5 5 5 f . f 
        . . f f f f f f f . . 
        . . . f . . . f . . . 
        . . . f . . . f . . . 
        `, SpriteKind.Player)
    controller.moveSprite(hero, 100, 100)
    hero.setFlag(SpriteFlag.ShowPhysics, false)
    scene.cameraFollowSprite(hero)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.tileKindAt(TileDirection.Top, assets.tile`myTile11`) || (hero.tileKindAt(TileDirection.Left, assets.tile`myTile11`) || (hero.tileKindAt(TileDirection.Right, assets.tile`myTile11`) || hero.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`)))) {
        talkingWithParrot()
        tiles.placeOnRandomTile(KEY, assets.tile`myTile15`)
        KEY.setFlag(SpriteFlag.Invisible, false)
    }
    if (currentlevel == 1 && (hero.tileKindAt(TileDirection.Top, assets.tile`myTile11`) || (hero.tileKindAt(TileDirection.Left, assets.tile`myTile11`) || (hero.tileKindAt(TileDirection.Right, assets.tile`myTile11`) || hero.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`))))) {
        tiles.placeOnRandomTile(KEY, assets.tile`myTile15`)
        KEY.setFlag(SpriteFlag.Invisible, false)
        level_2_parrot()
    }
    if (hero.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
        controller.moveSprite(hero, 0, 0)
        story.startConveration(function () {
            story.printCharacterText("maybe is here?")
            story.showPlayerChoices("(search)", "(leave)")
        })
    }
    if (hero.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        controller.moveSprite(hero, 0, 0)
        story.startConveration(function () {
            story.printCharacterText("maybe is here?")
            story.showPlayerChoices("(search)", "(leave)")
        })
    }
    if (hero.tileKindAt(TileDirection.Center, assets.tile`myTile51`)) {
        controller.moveSprite(hero, 0, 0)
        story.startConveration(function () {
            story.printCharacterText("maybe is here?")
            story.showPlayerChoices("(search)", "(leave)")
        })
    }
    if (hero.tileKindAt(TileDirection.Center, assets.tile`myTile34`)) {
        story.startConveration(function () {
            controller.moveSprite(hero, 0, 0)
            story.printCharacterText("Hi Tim i want you to see in my office in 2min  -Boss", "BOSS")
            story.cancelCurrentConversation()
            controller.moveSprite(hero, 100, 100)
            info.startCountdown(120)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (story.checkLastAnswer("where is the key?") && currentlevel == 1) {
        info.changeScoreBy(-1)
        story.printCharacterText("Uff very cold in there", "parrot")
        story.showPlayerChoices("another please.", "thanks")
        controller.moveSprite(hero, 0, 0)
        if (story.checkLastAnswer("another please.") && currentlevel == 1) {
            info.changeScoreBy(-1)
            story.printCharacterText("Well in this room right?", "parrot")
            story.showPlayerChoices("last please.", "thanks")
            controller.moveSprite(hero, 0, 0)
        }
        if (story.checkLastAnswer("last please.") && currentlevel == 1) {
            story.printCharacterText("near another distraction.", "parrot")
            story.cancelCurrentConversation()
            info.changeScoreBy(-1)
            controller.moveSprite(hero, 100, 100)
        }
    }
    if (story.checkLastAnswer("nothing")) {
        story.cancelCurrentConversation()
    }
    if (story.checkLastAnswer("where is the key?")) {
        story.printCharacterText("I can help you but I know 1 truth and 2 lies about it.", "parrot")
        story.showPlayerChoices("OK? tell me.", "I will find it any way.")
        if (story.checkLastAnswer("OK? tell me.")) {
            info.changeScoreBy(-1)
            story.printCharacterText("It a good place to hide a thing.", "parrot")
            story.showPlayerChoices("another please.", "thanks")
            controller.moveSprite(hero, 0, 0)
        }
        if (story.checkLastAnswer("thanks")) {
            controller.moveSprite(hero, 100, 100)
            story.cancelCurrentConversation()
        }
        if (story.checkLastAnswer("another please.")) {
            info.changeScoreBy(-1)
            story.printCharacterText("centre is the path.", "parrot")
            story.showPlayerChoices("last please.", "thanks")
            controller.moveSprite(hero, 0, 0)
        }
        if (story.checkLastAnswer("last please.")) {
            info.changeScoreBy(-1)
            story.printCharacterText("It's in low place.", "parrot")
            controller.moveSprite(hero, 100, 100)
        }
        if (story.checkLastAnswer("I will find it any way.")) {
            story.cancelCurrentConversation()
            controller.moveSprite(hero, 100, 100)
        }
    } else if (story.checkLastAnswer("nothing")) {
        controller.moveSprite(hero, 100, 100)
    }
    if (story.checkLastAnswer("(search)") && hero.overlapsWith(KEY)) {
        music.jumpUp.play()
        story.printCharacterText("there you are")
        controller.moveSprite(hero, 100, 100)
        tiles.setWallAt(tiles.getTileLocation(0, 6), false)
    }
    if (story.checkLastAnswer("(leave)")) {
        story.cancelCurrentConversation()
    }
    if (story.checkLastAnswer("(search)") && !(hero.overlapsWith(KEY))) {
        music.jumpDown.play()
        info.changeScoreBy(-1)
        story.printCharacterText("not here")
        controller.moveSprite(hero, 100, 100)
    }
    if (story.checkLastAnswer("(leave)")) {
        controller.moveSprite(hero, 100, 100)
        story.cancelCurrentConversation()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f 1 1 1 1 1 e e f . . . . 
        . . . f 1 f 1 1 1 1 e f . . . . 
        . . . f 1 1 d 1 1 1 1 f . . . . 
        . . . f d d 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f 1 1 1 1 1 e e f . . . . 
        . . . f 1 f 1 1 1 1 e f . . . . 
        . . . f 1 1 d 1 1 1 1 f . . . . 
        . . . f d d 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . f 5 f 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f f . . . . f f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f 1 1 1 1 1 e e f . . . . 
        . . . f 1 f 1 1 1 1 e f . . . . 
        . . . f 1 1 d 1 1 1 1 f . . . . 
        . . . f d d 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f 1 1 1 1 1 e e f . . . . 
        . . . f 1 f 1 1 1 1 e f . . . . 
        . . . f 1 1 d 1 1 1 1 f . . . . 
        . . . f d d 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . f 5 5 5 f 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f f . . . . f f . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e 1 1 1 1 1 f . . . . . . 
        . f e 1 1 1 1 f 1 f . . . . . . 
        . f 1 1 1 1 d 1 1 f . . . . . . 
        . f 1 1 1 1 1 d d f . . . . . . 
        . f 1 1 1 1 1 1 1 f . . . . . . 
        . . f f 1 1 1 f f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f 5 5 f 5 5 f . . . . . . . 
        . . f 5 5 5 f 5 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f f . . . . f f . . . . . . 
        `,img`
        . . f f f f f f f . . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e 1 1 1 1 1 f . . . . . . 
        . f e 1 1 1 1 f 1 f . . . . . . 
        . f 1 1 1 1 d 1 1 f . . . . . . 
        . f 1 1 1 1 1 d d f . . . . . . 
        . f 1 1 1 1 1 1 1 f . . . . . . 
        . . f f 1 1 1 f f . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . f 5 5 f 5 5 f . . . . . . . 
        . . f 5 5 f 5 5 f . . . . . . . 
        . . f 5 5 5 5 5 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f f . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e 1 1 1 1 1 f . . . . . . 
        . f e 1 1 1 1 f 1 f . . . . . . 
        . f 1 1 1 1 d 1 1 f . . . . . . 
        . f 1 1 1 1 1 d d f . . . . . . 
        . f 1 1 1 1 1 1 1 f . . . . . . 
        . . f f 1 1 1 f f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f 5 5 f 5 5 f . . . . . . . 
        . . f 5 f 5 5 5 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        . . f f . . . . f f . . . . . . 
        `,img`
        . . f f f f f f f . . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e e e e e e f . . . . . . 
        . f e e 1 1 1 1 1 f . . . . . . 
        . f e 1 1 1 1 f 1 f . . . . . . 
        . f 1 1 1 1 d 1 1 f . . . . . . 
        . f 1 1 1 1 1 d d f . . . . . . 
        . f 1 1 1 1 1 1 1 f . . . . . . 
        . . f f 1 1 1 f f . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . f 5 5 f 5 5 f . . . . . . . 
        . . f 5 5 f 5 5 f . . . . . . . 
        . . f 5 5 5 5 5 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f f . . f f . . . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e 1 1 1 1 1 e f . . . . 
        . . . f 1 f 1 1 1 f 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 d 1 1 1 d 1 f . . . . 
        . . . f 1 1 d d d 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . f . . f f f f f . . . . . . 
        . . f f f 5 5 5 5 5 f f . . . . 
        . . . f f 5 5 5 5 5 f f f . . . 
        . . . . f 5 5 5 5 5 f . f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e 1 1 1 1 1 e f . . . . 
        . . . f 1 f 1 1 1 f 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 d 1 1 1 d 1 f . . . . 
        . . . f 1 1 d d d 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f 1 1 1 f f . . . . . 
        . . . . . f f f f f . . f . . . 
        . . . f f 5 5 5 5 5 f f f . . . 
        . . f f f 5 5 5 5 5 f f . . . . 
        . . f . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
})
function clearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    currentlevel += 1
    mechanic()
}
function talkingWithParrot () {
    controller.moveSprite(hero, 0, 0)
    story.startConveration(function () {
        story.printCharacterText("Hi I am parrot what do you want?", "parrot")
        story.showPlayerChoices("nothing", "where is the key?")
    })
}
function level_2_parrot () {
    controller.moveSprite(hero, 0, 0)
    story.startConveration(function () {
        story.printCharacterText("Hi I am parrot what do you want?", "parrot")
        story.showPlayerChoices("nothing", "where is the key?")
    })
}
let moving = false
let Parrot: Sprite = null
let hero: Sprite = null
let KEY: Sprite = null
let currentlevel = 0
scene.setBackgroundColor(7)
game.showLongText("welcome to the game TRUSTLY PARROT", DialogLayout.Center)
game.showLongText("when you want to ask parrot or search click B", DialogLayout.Center)
game.showLongText("when you ask parrot about the key or you search and didn't find it you lose 1 live", DialogLayout.Center)
game.showLongText("good luck", DialogLayout.Center)
currentlevel = 0
info.setScore(4)
scene.setBackgroundColor(9)
KEY = sprites.create(img`
    1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    b b b b b b b b b b b b b b b b 
    1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.block)
makeHero()
mechanic()
hero.sayText("what on that wall?", 2000, true)
game.onUpdate(function () {
    if (info.score() == 0) {
        game.over(false)
    }
})
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, hero)
    }
    if (moving) {
        music.footstep.play()
    }
})
