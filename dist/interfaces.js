"use strict";
var csgo = {
    id: 1,
    title: 'Counter-Strike: Global Offensive',
    description: 'The best game in the world',
    genre: 'FPS',
    platform: ['PC'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Valorant, Cross-Fire");
    }
};
var Source2 = {
    id: 2,
    title: 'Counter-Strike: Global Offensive Source2',
    description: 'You play in the bests graphics in the world',
    genre: 'FPS',
    platform: ['PC'],
    originalGame: csgo,
    newContent: ['New graphics engine v2']
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
