var config = {
    style: 'mapbox://styles/alexbuck328/ckoq2ehj40siu17mpnuumimgs', // 'mapbox://styles/mapbox/dark-v10', // 'mapbox://styles/mapbox/outdoors-v11', // 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiYWxleGJ1Y2szMjgiLCJhIjoiY2szcDZsdmFsMW9rbDNubjMydm9rNGJpMyJ9.05szss9EHEoVBbGYajbPZA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Patterns of Destruction',
    subtitle: 'Wildfires in the United States',
    byline: 'Alexander Buck',
    footer: 'Source: source citations, etc.',
    chapters: [{
            id: 'welcome-screen',
            alignment: 'left',
            hidden: false,
            title: 'Fire is destructive',
            image: './images/wildfireTrees.jpeg',
            description: '',
            location: {
                center: [-24.14893, 0.00000],
                zoom: 0.87,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'firecentsimp',
                     opacity: 0,
                     duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'firecentsimp',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'one',
            alignment: 'right',
            hidden: false,
            title: 'Fire is destructive... and becoming more so',
           // image: './images/wildfireTrees.jpeg',
            description: 'Wildfires are not a new phenomena. Evidence of wildfires dating back 420 million years ago has been found in the Welsh Marches along the border of England and Wales. Various civilizations throughout history and around the world have used fire for many reasons, ranging from land clearing, signaling, to encourage biodiversity, as well as hunting.',
            location: {
                center: [-76.81398, 39.12020],
                zoom: 3.46,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'firecentsimp',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'firecentsimp',
                    opacity: 1
                }
            ]
        },
        {
            id: 'two',
            alignment: 'right',
            hidden: false,
            title: 'Wild West of Wildfire',
          //  image: './path/to/image/source.png',
            description: 'The western part of the United States is especially prone to wildfires.',
            location: {
                center: [-101.97877, 41.02562],
                zoom: 4.68,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            speed: 0.2,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
           // image: './path/to/image/source.png',
            description: 'This state has seen the majority of its land burn in the past century',
            location: {
                center: [-112.27422, 40.52511],
                zoom: 8.58,
                pitch: 60.00,
                bearing: 30.40
            },
            mapAnimation: 'easeTo',
            speed: 0.2,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};