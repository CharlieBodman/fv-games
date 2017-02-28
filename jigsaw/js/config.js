let defaultGameConfig = {

    libs:{
        bitmapJigsawScript:'assets/libs/BitmapDataJigsawCut.js'        
    },

    images:{
        preloaderLoading:'assets/images/loading.png',
        preloaderLogo:'assets/images/logo.png',
        backgroundImage:'assets/images/wood.jpg',
        youWin:'assets/images/well-done.png',
        cornerTopLeft:'assets/images/corner1a.png',
        cornerTopRight:'assets/images/corner1b.png',
        cornerBottomLeft:'assets/images/corner1c.png',
        cornerBottomRight:'assets/images/corner1d.png',
        arrow:'assets/images/blue_arrow.png'
    },

    words:[
        {
            picture:'assets/images/picture1.jpg',
            word:'Bear',
            translation:'translation',
            audio:'assets/sounds/sample.mp3'
        },
        {
            picture:'assets/images/picture2.jpg',
            word:'Bear',
            translation:'translation',
            audio:'assets/sounds/sample.mp3'
        },
        {
            picture:'assets/images/picture3.jpg',
            word:'Bear',
            translation:'translation',
            audio:'assets/sounds/sample.mp3'
        },
        {
            picture:'assets/images/picture4.jpg',
            word:'Bear',
            translation:'translation',
            audio:'assets/sounds/sample.mp3'
        },
        {
            picture:'assets/images/picture1.jpg',
            word:'Bear',
            translation:'translation',
            audio:'assets/sounds/sample.mp3'
        },
        {
            picture:'assets/images/picture2.jpg',
            word:'Bear',
            translation:'translation',
            audio:'assets/sounds/sample.mp3'
        }
    ],
   

};

let gameConfig = {};

export default {

    setConfig:(config) => {
        gameConfig = Object.assign({}, defaultGameConfig, config, gameConfig);
    },

    getConfig:() => {
        return gameConfig;
    }
}