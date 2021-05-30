var config = {
    style: 'mapbox://styles/alexbuck328/ckoq2ehj40siu17mpnuumimgs',
    accessToken: 'pk.eyJ1IjoiYWxleGJ1Y2szMjgiLCJhIjoiY2szcDZsdmFsMW9rbDNubjMydm9rNGJpMyJ9.05szss9EHEoVBbGYajbPZA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Patterns of Destruction',
    subtitle: 'A Century of Wildfires in the United States',
    byline: 'Alexander Buck',
    footer: '<a href=https://www.sciencebase.gov/catalog/item/5ee13de982ce3bd58d7be7e7 target=blank>Wildfire Data</a>',
    chapters: [{
            id: 'welcome-screen',
            alignment: 'left',
            hidden: false,
            title: 'fire is destructive',
            image: '',
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
            onChapterEnter: [{
                layer: 'firecentsimp',
                opacity: 0,
            }, {
                layer: 'heat',
                opacity: 0
            }, {
                layer: 'drought',
                opacity: 0
            }, {
                layer: 'maxfires',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'UNSEEN',
            alignment: 'right',
            hidden: false,
            title: 'Playing With Fire',
            // image: './images/wildfireTrees.jpeg',
            description: 'Wildfires are not a new phenomenon. Evidence of wildfires dating back 420 million years ago has been found in the Welsh Marches along the border of England and Wales. Wildfires are becoming more frequent and more severe. However, much like other issues we face here in the United States, not everyone is impacted equally. Patterns of Destruction explores the trends of wildfires in the U.S. over the past century.',
            location: {
                center: [-139.80962, 52.87401],
                zoom: 3.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'one',
            alignment: 'left',
            hidden: false,
            title: 'Playing With Fire',
            // image: './images/wildfireTrees.jpeg',
            description: 'Wildfires are not a new phenomenon. Evidence of wildfires dating back 420 million years ago has been found in the Welsh Marches along the border of England and Wales. Wildfires are becoming more frequent and more severe. However, much like other issues we face here in the United States, not everyone is impacted equally. Patterns of Destruction explores the trends of wildfires in the U.S. over the past century.',
            location: {
                center: [-139.80962, 52.87401],
                zoom: 3.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'firecentsimp',
                opacity: 1,
                duration: 3500,
            }],
            onChapterExit: [{
                layer: 'firecentsimp',
                opacity: 1
            }],
        },
        {
            id: 'two',
            alignment: 'right',
            hidden: false,
            title: 'Wildfires are Destructive',
            image: './images/fireCount.png',
            description: 'Since 1920, wildfires have become more frequent. As shown in the chart above, the yearly count of wildfires has increased over time, and almost exponentially over the past 40 years. Not only are wildfires increasing in count, but they are also increasing in size as well. The graph below shows the trend line for median fire size over the past century. The median fire size provides a more accurate picture of wildfire trends than the average fire size, as averages are skewed by outliers.',
            image2: './images/medianFire.png',
            location: {
                center: [-76.81398, 39.12020],
                zoom: 3.46,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'firecentsimp',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'firecentsimp',
                opacity: 1
            }],
        },
        {
            id: 'three',
            alignment: 'right',
            hidden: false,
            title: 'Temperatures are Rising',
            image: './images/heat-waves.png',
            description: 'This increase in wildfire size and frequency has been driven by climate change. Temperatures are rising, and with them come heat waves. The graphs above show how heat waves are becoming more frequent, lasting longer and are more intense. As if more frequent, longer and hotter heat waves isn’t enough, heat wave season is becoming longer as well. These warmer temperatures provide an environment rife for wildfires. Yet, warm temperatures alone are not the only factor.',
            location: {
                center: [-76.81398, 39.12020],
                zoom: 3.46,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'firecentsimp',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'firecentsimp',
                opacity: 1
            }],
        },
        {
            id: 'four',
            alignment: 'right',
            hidden: false,
            title: 'Fire in the Water Starved West',
            image: './images/SPEI.png',
            description: 'Wildfires are able to run rampant in the absence of moisture. This map shows changes in drought across the contiguous United States from 1900 to 2020.  The brown areas indicate worsening drought conditions, while the blue area indicates regions receiving more moisture. Interestingly, the areas on this graph that show worsening drought, also happen to be the regions that experience the worst wildfires.',
            location: {
                center: [-76.81398, 39.12020],
                zoom: 3.46,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'firecentsimp',
                opacity: 1,
            }],
            onChapterEnter: [{
                layer: 'drought',
                opacity: 1,
                duration: 2000,
            }],
            onChapterExit: [{
                layer: 'drought',
                opacity: 0
            }]
        },
        {
            id: 'five',
            alignment: 'right',
            hidden: false,
            title: 'Fire is destructive... and becoming more so',
            image: './images/change-avg-ac-burned.png',
            description: 'As a whole, wildfires are becoming more severe and more frequent. This graphic shows the increase in acreage burned by wildfires at the state level from 1984 to 2018. It shows how wildfires are consuming more and more land in 16 states. Now that might not sound like much, it’s only about one third of states. However, they account for 60% of United States land area.',
            location: {
                center: [-76.81398, 39.12020],
                zoom: 3.46,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'heat',
                opacity: 1,
                duration: 2000
            }, {
                layer: 'firecentsimp',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'heat',
                opacity: 0,
                duration: 750,
            }, {
                layer: 'firecentsimp',
                opacity: 0,
                duration: 1500,
            }],
        },
        {
            id: 'six',
            alignment: 'left',
            hidden: false,
            title: 'Wild West of Wildfire',
            image: './images/maxFireGraph.png',
            description: 'When viewed back-to-back in this fashion, drought and increasing fire sizes become a clearly regional issue. These trends converge on the western half of the United States. The importance of climatic changes and their effects on wildfires becomes more evident when you isolate the largest wildfire of each decade, for the past century. When considering climate change, it’s no wonder the largest wildfires of the past century have occurred in the west.',
            location: {
                center: [-138.21944, 53.84099],
                zoom: 3.38,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'maxfires',
                opacity: 1,
                duration: 2000
            }],
            onChapterExit: [{
                layer: 'maxfires',
                opacity: 0
            }]
        },
    ]
};