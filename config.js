var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiYWxleGJ1Y2szMjgiLCJhIjoiY2szcDZsdmFsMW9rbDNubjMydm9rNGJpMyJ9.05szss9EHEoVBbGYajbPZA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Patterns of Destruction',
    subtitle: 'Wildfires in the United States',
    byline: 'Alexander Buck',
    image: './images/elkBath.jpeg',
    footer: 'Source: source citations, etc.',
    chapters: [{
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Chapter One: Fire is destructive',
            image: './images/wildfireTrees.jpeg',
            description: 'Wildfires are not a new phenomena. Evidence of wildfires dating back 420 million years ago has been found in the Welsh Marshes along the border of England and Wales. Various civilizations throughout history and around the world have used fire for many reasons, ranging from land clearing, signaling, to encourage biodiversity, as well as hunting',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};