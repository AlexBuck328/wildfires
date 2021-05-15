var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Chapter One: Fire is destructive',
            image: './images/wildfireTrees.jpeg',
            description: 'Wildfires are not a new phenomena. Evidence of wildfires dating back 420 million years ago has been found in the Welsh Marches along the border of England and Wales. Various civilizations throughout history and around the world have used fire for many reasons, ranging from land clearing, signaling, to encourage biodiversity, as well as hunting',
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
            id: 'one',
            alignment: 'right',
            hidden: false,
            title: 'Chapter One: Fire is destructive',
            image: './images/wildfireTrees.jpeg',
            description: 'Wildfires are not a new phenomena. Evidence of wildfires dating back 420 million years ago has been found in the Welsh Marches along the border of England and Wales. Various civilizations throughout history and around the world have used fire for many reasons, ranging from land clearing, signaling, to encourage biodiversity, as well as hunting',
            location: {
                center: [-76.81398, 39.12020],
                zoom: 3.46,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'two',
            alignment: 'right',
            hidden: false,
            title: 'second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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