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
    footer: '<a href=https://github.com/AlexBuck328/wildfires#readme target=blank>About Patterns of Destruction</a><br><a href=https://www.sciencebase.gov/catalog/item/5ee13de982ce3bd58d7be7e7 target=blank>Wildfire Data</a>',
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
            }, {
                layer: 'max50and60',
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
            }, {
                layer: 'max50and60',
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
            description: 'Patterns of Destruction is an exploration into wildfire trends in the United States over the past century (1920-2020). What you see rendered in orange on the map to the right are all wildfires in their recorded shape and size. Throughout this exploration, fire polygons will be rendered and hidden to tell the story of the data set. This is not my personal narrative; this is what the data shows. These trends while startling, do not necessarily predict our future. In articulating the story the data tells, I hope to raise awareness with those sections of the country that are not as impacted by wildfires as those who live with the ever-present danger. It is often easy to get lost in the magnitude of our landscape. These fires may seem like a drop in the bucket when viewed in isolation, but when combined, they paint a destructive picture. Please remember that while they may be in a distant part of the country, these fires impact our friends and neighbors, as well as our public lands. These public lands are set aside for the enjoyment and recreation of all citizens. So, while your personal backyard may not be ravaged, the public lands that we collectively call our backyard are. I invite you to explore these Patterns of Destruction with those things in mind.',
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
            description: 'Since 1920, wildfires have become more frequent. As shown in the graph above, the yearly count of wildfires has increased over time, and almost exponentially over the past 50 years. Not only are wildfires increasing in count, but they are also increasing in size as well. The graph below shows the trend line for average acreage burned per year over the past century. As you would expect, with more fires, comes more destruction, and the trend line for average acreage burned is increasing year over year.',
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
            alignment: 'left',
            hidden: false,
            title: 'Wildfires Are Seasonal',
            image: './images/fireSeason.png',
            description: 'Although wildfires can take place anytime, the data shows a clear seasonality. The majority of wildfires occur between May and September. While this may be the case with this data set, climate change is not only impacting fire size and frequency (as we will see shortly), but it will also impact fire season. As winters become warmer with less snowfall, spring becomes shorter, and summer becomes longer. Warmer temperatures and drought create set a disastrous stage.',
            // image2: './images/avgAcres.png',
            location: {
                center: [-151.98499, 47.44124],
                zoom: 2.72,
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
            id: 'five',
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
            id: 'six',
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
            id: 'seven',
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
            id: 'eight',
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
            id: 'nine',
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
            id: 'ten',
            alignment: 'left',
            hidden: false,
            title: 'Enter The Megafire',
            image: './images/megafires.png',
            description: 'Not only are wildfires becoming more frequent and larger in size, but megafires are more frequent as well. What is a megafire? A megafire is defined by the U.S. Interagency Fire Center as a wildfire that burns more than 100,000 acres of land. Megafires have occurred at least once in each decade over the past century with only two exceptions, neither the 1950\’s and 1960\’s experienced a megafire',
            location: {
                center: [-148.66371, 52.95530],
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
            id: 'eleven',
            alignment: 'right',
            hidden: false,
            title: 'Megafires Of The 1920\'s (140,382 acres burned)',
            image: '',
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
            id: 'twelve',
            alignment: 'right',
            hidden: false,
            title: 'Megafires Of The 1930\'s (455,466 Acres burned)',
            image: '',
            description: 'The Matilija fire consumed an area of 219,999 acres, in 1932. Two years later the \'30s second megafire (which does not have a recorded name) devastated 235,467 acres of the Nez Perce - Clearwater National Forest north of Elk City, Idaho.',
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
            id: 'thirteen',
            alignment: 'left',
            hidden: false,
            title: 'Megafires Of The 1940\'s (174,730 acres burned)',
            image: '',
            description: 'In 1941, 174,730 acres of land burned northwest of Pocatello, Idaho. This was the only megafire recorded in the 1940\’s.',
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
            id: 'fourteen',
            alignment: 'right',
            hidden: false,
            title: 'The 1950\'s and 1960\'s',
            image: '',
            description: 'The 1950\’s and 1960\’s were quiet decades from a megafire perspective, with neither recording a megafire. The largest fire of the 1950\’s (Refugio fire) was 79,428 acres, while the largest fire of the 1960\’s (Wellman fire) totaled 99,958 acres.  The Wellman fire of 1966 fell a mere 42 acres shy of being classified a megafire.',
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
                layer: 'max50and60',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'max50and60',
                opacity: 0,
                duration: 2000
            }]
        },
        {
            id: 'fifteen',
            alignment: 'left',
            hidden: false,
            title: 'Megafires Of The 1970\'s (751,250 acres burned)',
            image: '',
            description: 'From 1920 to 1970, only 4 megafires were recorded. In the 1970\’s alone, the number of megafires exceeded that of the previous 50 years. Of the five megafires, the Laguna fire was the largest, measuring 174,201 acres. The In Between fire, northeast of Twin Falls, Idaho, was the smallest, engulfing 102,403 acres.',
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
            id: 'sixteen',
            alignment: 'left',
            hidden: false,
            title: 'Megafires Of The 1980\'s (4,075,088 acres burned)',
            image: '',
            description: 'The 1980\’s mark another grim milestone. While the number of megafires recorded in the 1970\’s doubled the total from the previous 50 years. The 1980\’s is the first decade where megafires consume over 1 million acres of land. Megafires between 1920 and 1979 engulfed a total of 1,521,828 acres. The 1980\’s more than doubled that total. Eight of the \’80s nineteen megafires occurred in 1988. Of those, four were the largest fires of the decade. Those four fires combined consumed 1,783,437 acres. To put that area into perspective, that is more than 2.5 times the size of Rhode Island.',
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
            id: 'seventeen',
            alignment: 'left',
            hidden: false,
            title: 'Megafires Of The 1990\'s (4,867,664 acres burned)',
            image: '',
            description: 'The 1990\’s continue the trend set in the previous decade, where megafires ravage more than a million acres. This decade recorded 29 megafires, destroying nearly 5 million acres. It also became the second decade in a row to lose more than 4 million acres to megafires. While the dramatic increase of megafires of the 1980\’s and 1990\’s is startling, they merely set the stage for the new millennium.',
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
            id: 'eighteen',
            alignment: 'right',
            hidden: false,
            title: 'Megafires Of The 2000\'s (26,524,183 acres burned)',
            image: '',
            description: 'The new millennium brought a lot of excitement. While fears of Y2K disaster controlled the media, a more destructive force was gaining momentum. One hundred and nine megafires were recorded for he first decade of the 2000\’s, the most megafires in a single decade of 1920-2020 time period. The total area consumed by megafires alone, is enough to burn the entire commonwealth of Kentucky, and then some.',
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
            id: 'nineteen',
            alignment: 'right',
            hidden: false,
            title: 'Megafires Of The 2010\'s (21,812,170 acres burned)',
            image: '',
            description: 'While the first decade of the new millennium was the most destructive, the second decade was nearly as devastating. The 2010\’s recorded 106, three short of the record set in the previous decade. The average megafire size for this decade is 205,775 acres. While that number is alarming, it is a slight improvement over the previous decade’s megafire average of 243,341 acres. Despite these seemingly improved numbers, the area consumed by megafires in this decade is nearly enough to burn the state of Maine. While any reprieve is welcome, this slight downturn is still destroyed an astonishing amount of land.',
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
        }, {
            id: 'twenty',
            alignment: 'left',
            hidden: false,
            title: 'Megafires Are Not All Fires',
            image: './images/megafires.png',
            description: 'Keep in mind that these explorations of the decades of the past century have only showcased megafires (those fires burning more than 100,000 acres). The total acreage burned is only the total for megafires. As frightening as these megafire totals are, the total of all wildfires would be much more horrific.',
            location: {
                center: [-148.66371, 52.95530],
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
                opacity: 0
            }]
        }, {
            id: 'twentyOne',
            alignment: 'right',
            hidden: false,
            title: 'Hope Springs Eternal',
            // image: './images/medianFire.png',
            description: 'While the trends outlined in the data are alarming, not all hope is lost. The first step to reversing any negative trend is identifying it. The beauty of humanity is self-reflection, and the ability to alter our behavior. Although the trends of the past century are horrifying, our future does not need to be as devastating. We have the ability to change the course of wildfire trends. Together we can form a cohesive front to address, mitigate, and reverse these patterns of destruction.',
            location: {
                center: [-82.87227, 48.12205],
                zoom: 2.77,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'firecentsimp',
                opacity: 1,
                duration: 2500
            }],
            onChapterExit: [{
                layer: 'firecentsimp',
                opacity: 0,
                duration: 2500
            }]
        }
    ]
};