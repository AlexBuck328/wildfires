var config = {
    style: 'mapbox://styles/alexbuck328/ckoq2ehj40siu17mpnuumimgs', //mapbox://styles/alexbuck328/ckoq2ehj40siu17mpnuumimgs
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
                opacity: 0
            }, {
                layer: 'heat',
                opacity: 0
            }, {
                layer: 'drought',
                opacity: 0
            }, {
                layer: 'maxfires',
                opacity: 0
            }, {
                layer: 'yellowstonefire',
                opacity: 0
            }, {
                layer: 'mega2k10',
                opacity: 0
            }, {
                layer: 'mega2k',
                opacity: 0
            }],
            onChapterExit: [],
        },
        {
            id: 'UNSEEN',
            alignment: 'right',
            hidden: false,
            title: 'Playing With Fire',
            image: '',
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
                layer: 'mega2k10',
                opacity: 0
            }, {
                layer: 'mega2k',
                opacity: 0
            }, {
                layer: 'mega90',
                opacity: 0
            }, {
                layer: 'mega80',
                opacity: 0
            }, {
                layer: 'mega70',
                opacity: 0
            }, {
                layer: 'mega40',
                opacity: 0
            }, {
                layer: 'mega30',
                opacity: 0
            }, {
                layer: 'mega20',
                opacity: 0
            }],
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
                duration: 3000,
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
            title: 'Wildfires Are Destructive... And Becoming More So',
            image: './images/fireCount.png',
            description: 'Since 1920, wildfires have become more frequent. As shown in the chart above, the yearly count of wildfires has increased over time, and almost exponentially over the past 50 years. Not only are wildfires increasing in count, but they are also increasing in size as well. The graph below shows the trend line for average acreage burned per year over the past century. As you would expect, with more fires, comes more destruction, and the trend line for average acreage burned is increasing year over year.',
            image2: './images/avgAcres.png',
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
            title: 'Temperatures Are Rising',
            image: './images/heat-waves.png',
            description: 'The increase in wildfire size and frequency has been driven by climate change. Temperatures are rising, and with them come heat waves. The graphs above show how heat waves are becoming more frequent, lasting longer and are more intense. As if more frequent, longer and hotter heat waves isn’t enough, heat wave season is becoming longer as well. These warmer temperatures provide an environment rife for wildfires. Yet, warm temperatures alone are not the only factor.',
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
            title: 'The Water Starved West',
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
            }, {
                layer: 'drought',
                opacity: 1,
                duration: 2000,
            }, {
                layer: 'heat',
                opacity: 0
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
            title: 'A Devastating Trend',
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
            onChapterExit: [],
        },
        {
            id: 'six',
            alignment: 'right',
            hidden: false,
            title: 'Wild West of Wildfire',
            //    image: './images/maxFireGraph.png',
            description: 'When states with worsening wildfire and worsening drought are overlay, the correlation becomes obvious. It also becomes apparent that wildfires are a regional issue. These trends converge on the western half of the United States. The importance of climatic changes and their effects on wildfires becomes more evident when you isolate the largest wildfire of each decade, for the past century. Considering these two climate factors, it’s no wonder the largest wildfires of the past century have occurred in the west.',
            location: {
                center: [-100.47512, 40.31207],
                zoom: 4.56,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'drought',
                opacity: 1,
                duration: 2000
            }, {
                layer: 'firecentsimp',
                opacity: 1
            }, {
                layer: 'heat',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'heat',
                opacity: 0
            }, {
                layer: 'drought',
                opacity: 0
            }, {
                layer: 'firecentsimp',
                opacity: 0
            }]
        },
        {
            id: 'seven',
            alignment: 'left',
            hidden: false,
            title: 'The Geography Of Large Fires',
            image: './images/maxFireGraph.png',
            description: 'Considering these two climate factors, it’s no wonder the largest wildfires of the past century have occurred in the west. When broken down into decades, with the largest fire of each decade selected, those fires all occurred in states with worsening drought, and increasing acreage burned by wildfire. As previous graphs have shown, in the graph above, you can see how wildfire trends are moving towards “megafires”.',
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
            onChapterExit: []
        },
        {
            id: 'eight',
            alignment: 'right',
            hidden: false,
            title: 'Statistics And Wildfires',
            image: './images/medianFire.png',
            description: 'Let’s take a moment for some statistics. As shown earlier, the average acreage burned per year has increased substantially over the past century. Statistics aficionados may be thinking to themselves that these megafires are skewing the average. Which is correct. High end outliers skew the mean higher. For that very reason, the median is a better metric to gauge trends. As seen in the graph above, the median fire size over the past century has also increased. Think back to the first graphs, remember that the number of wildfires has grown nearly exponentially in the last half century alone. Coupling an increase in wildfires, with an increase in both median and outlier wildfire size, and you can see just how frightening these trends are. Let’s return to these megafires.',
            location: {
                center: [-82.87227, 48.12205],
                zoom: 2.77,
                pitch: 0.00,
                bearing: 0.00
                //    center: [-143.80962, 52.87401],
                //    zoom: 3.01,
                //    pitch: 0.00,
                //    bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'maxfires',
                opacity: 0,
            }, {
                layer: 'firecentsimp',
                opacity: 1,
                duration: 2500
            }],
            onChapterExit: [{
                layer: 'firecentsimp',
                opacity: 0,
                duration: 2500
            }]
        },
        {
            id: 'nine',
            alignment: 'left',
            hidden: false,
            title: 'Enter The Megafire',
            image: './images/megafires.png',
            description: 'Not only are wildfires becoming more frequent and larger in size, but megafires are increasing more frequently as well. What is a megafire? A megafire is defined by the U.S. Interagency Fire Center as a wildfire that burns more than 100,000 acres of land. Megafires have occurred at least once in each decade over the past century with only two exceptions, neither the 1950\’s and 1960\’s experienced a megafire',
            location: {
                center: [-143.80962, 52.87401],
                zoom: 3.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega2k10',
                opacity: 1
            }, {
                layer: 'mega2k',
                opacity: 1
            }, {
                layer: 'mega90',
                opacity: 1
            }, {
                layer: 'mega80',
                opacity: 1
            }, {
                layer: 'mega70',
                opacity: 1
            }, {
                layer: 'mega40',
                opacity: 1
            }, {
                layer: 'mega30',
                opacity: 1
            }, {
                layer: 'mega20',
                opacity: 1
            }, {
                layer: 'maxfires',
                opacity: 0,
                duration: 2000
            }],
            onChapterExit: [{
                layer: 'mega2k10',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega2k',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega90',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega80',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega70',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega40',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega30',
                opacity: 0,
                duration: 2500
            }, {
                layer: 'mega20',
                opacity: 1
            }]
        },
        {
            id: 'ten',
            alignment: 'right',
            hidden: false,
            title: 'The Roaring 20\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-119.15911, 34.79356],
                zoom: 8.08,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega20',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega20',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'eleven',
            alignment: 'right',
            hidden: false,
            title: 'The 1930\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: '',
            location: {
                center: [-109.18490, 40.90556],
                zoom: 5.20,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega30',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega30',
                opacity: 0,
                duration: 2000
            }, {
                layer: 'mega20',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'twelve',
            alignment: 'left',
            hidden: false,
            title: 'The 1940\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'In 1941, 174,730 acres of land burned northeast of Twin Falls, Idaho. This was the largest wildfire recorded in the 1940\’s.',
            location: {
                center: [-114.52819, 43.23276],
                zoom: 7.41,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega40',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega40',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'thirteen',
            alignment: 'right',
            hidden: false,
            title: 'The 1950\'s and 1960\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-119.15911, 34.79356],
                zoom: 8.08,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega20',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega20',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'fourteen',
            alignment: 'left',
            hidden: false,
            title: 'The 1970\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-122.22472, 38.19896],
                zoom: 5.54,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega70',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega70',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'fifteen',
            alignment: 'left',
            hidden: false,
            title: 'The 1980\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-129.45335, 50.97672],
                zoom: 3.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega80',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega80',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'sixteen',
            alignment: 'left',
            hidden: false,
            title: 'The 1990\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-129.45335, 50.97672],
                zoom: 3.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega90',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega90',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'seventeen',
            alignment: 'right',
            hidden: false,
            title: 'The 2000\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-102.19758, 55.36633],
                zoom: 3.13,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega2k',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega2k',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'eighteen',
            alignment: 'right',
            hidden: false,
            title: 'The 2010\'s',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'Only one megafire was recorded in the 1920\’s. Though no name was provided, the fire engulfed 140,382 acres of Los Padres National Forest, north of Santa Barbara, California.',
            location: {
                center: [-102.19758, 55.36633],
                zoom: 3.13,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega2k10',
                opacity: 1,
            }],
            onChapterExit: [{
                layer: 'mega2k10',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'nineteen',
            alignment: 'right',
            hidden: false,
            title: 'Conclusion',
            //    image: './images/yellowstoneFire.jpeg',
            description: 'I have outlined how not only are wildfires increasing in frequency, but also in size. Accompanying larger and more frequent fires are megafires, which are also increasing in size and frequency. While the trends are alarming, not all hope is lost. The first step to reversing any negative trend is identifying it. The biggest hurdle we face in reversing these trends is raising awareness. While the data show wildfire trends from a size and frequency standpoint, they also show their stark regional influence. The majority of the U.S. population does not reside in areas prone to wildfires. This project seeks to raise awareness in hopes of reversing these startling trends. When we unite for the accomplishment of a common goal, anything is possible. ',
            location: {
                center: [-119.15911, 34.79356],
                zoom: 8.08,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'mega20',
                opacity: 1,
            }, {
                layer: 'megafires',
                opacity: 0,
                duration: 2000
            }],
            onChapterExit: []
        },
    ]
};