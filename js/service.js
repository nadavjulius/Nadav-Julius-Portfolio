'use strict'

var gProgects = craeteProjects();



function findProjbyId(projId) {
    var idx = gProgects.findIndex(function (proj) {
        return proj.id === projId
    })
    return gProgects[idx];
}


function getProjsForDisplay() {
    return gProgects;
}


function craeteProjects() {
    var projects = [
        {
            id: 'appsus',
            name: 'Appsus',
            title: 'The horsepower of these apps is off the charts!',
            desc: `Appsus is a multi application platform. It has a Keeper App which give users the ability 
            to save a large range of notes. Anything from todo-lists to videos and imgs. 
            Aswell as a emailing service.`,
            url: 'https://drznr.github.io/AppSus/#/',
            img: 'appsus.png',
            category: 'Office',
            client: 'unknown',
            labels: ['email', 'google apps', 'keeper', 'vueJs']
        },
        {
            id: 'minesweeper',
            name: 'Minesweeper',
            title: 'Click at our own risk',
            desc: `My take on the classic game Minesweeper. Minesweeper is a single-player puzzle video game. The objective of the game is to clear
            a rectangular board containing hidden "mines" or bombs without detonating any of them, 
            with help from clues about the number of neighboring mines in each field.`,
            url: 'https://nadavjulius.github.io/Minesweeper-ca/',
            img: `minesweeper.jpg`,
            category: 'Gaming',
            client: 'unknown',
            labels: ['Matrixes', 'keyboard events', 'Minesweeper', 'PC Games']
        },
        {
            id: 'waveon',
            name: 'waveOn',
            title: 'SMP | Social Music Platform',
            desc: `waveOn is a social music platform. It gives users the ability to listen to 
            created playlists, engage with other listeners & even create theyre own plalists to share with 
            the world!`,
            url: 'http://waveon.herokuapp.com/#/',
            img: 'waveon.jpg',
            category: 'Music',
            client: 'unknown',
            labels: ['BooMusicks', 'keyboard events', 'Social', 'Sockets', 'Chat']
        },
    ]
        .map(_cerateProj);
    return projects;
}



function _cerateProj(obj) {
    return {
        id: obj.id,
        name: obj.name,
        title: obj.title,
        desc: obj.desc,
        img: obj.img,
        url: obj.url,
        labels: obj.labels,
        category: obj.category,
        client: obj.client
    }
}
