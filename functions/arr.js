module.exports = {
    getPopulation: function (state, country) {
        let USPop = [
            [
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Pennsylvania',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming',
                'District of Columbia',
                'Diamond Princess',
                'Grand Princess',
                'Guam',
                'Puerto Rico',
                'Virgin Islands, U.S.'
            ],
            [
                4908621,
                734002,
                7378494,
                3038999,
                39937489,
                5845526,
                3563077,
                982895,
                21992985,
                10736059,
                1412687,
                1826156,
                12659682,
                6745354,
                3179849,
                2910357,
                4499692,
                4645184,
                1345790,
                6083116,
                6976597,
                10045029,
                5700671,
                2989260,
                6169270,
                1086759,
                1952570,
                3139658,
                1371246,
                8936574,
                2096640,
                19440469,
                10611862,
                761723,
                11747694,
                3954821,
                4301089,
                12820878,
                1056161,
                5210095,
                903027,
                6897576,
                29472295,
                3282115,
                628061,
                8626207,
                7797095,
                1778070,
                5851754,
                567025
            ]
        ];

        let ChinaPop = [
            [
                'Hubei',
                'Guangdong',
                'Henan',
                'Zhejiang',
                'Hunan',
                'Anhui',
                'Jiangxi',
                'Shandong',
                'Jiangsu',
                'Chongqing',
                'Sichuan',
                'Heilongjiang',
                'Beijing',
                'Shanghai',
                'Hebei',
                'Fujian',
                'Guangxi',
                'Shaanxi',
                'Yunnan',
                'Hainan',
                'Guizhou',
                'Hong Kong',
                'Tianjin',
                'Gansu',
                'Shanxi',
                'Liaoning',
                'Jilin',
                'Xinjiang',
                'Inner Mongolia',
                'Ningxia',
                'Qinghai',
                'Macau',
                'Tibet'
            ], [
                59020000,
                111690000,
                95590000,
                56570000,
                68600000,
                62550000,
                46220000,
                100060000,
                80290000,
                30750000,
                83020000,
                37890000,
                21710000,
                24180000,
                75200000,
                39110000,
                48850000,
                38350000,
                48010000,
                9170000,
                35550000,
                7335384,
                15570000,
                26260000,
                36820000,
                43690000,
                27170000,
                24450000,
                25290000,
                6820000,
                5980000,
                644900,
                3370000
            ]
        ];

        let FrancePop = [
            [
                'France',
                'French Guiana',
                'French Polynesia',
                'St Martin',
                'Mayotte',
                'Saint Barthelemy'
            ], [
                65273511,
                290691,
                283007,
                32300,
                270372,
                9877
            ]
        ];

        let UKPop = [
            [
                'United Kingdom',
                'Channel Islands',
                'Gibraltar',
                'Cayman Islands'
            ], [
                6788601,
                173863,
                33691,
                61559
            ]
        ];

        let AustraliaPop = [
            [
                'New South Wales',
                'Queensland',
                'Victoria',
                'South Australia',
                'Western Australia',
                'Tasmania',
                'Australian Capital Territory',
                'Northern Territory'
            ], [
                8092000,
                5110000,
                386000,
                1700000,
                2760000,
                524170,
                418440,
                1349129
            ]
        ];

        let DenmarkPop = [
            [
                'Denmark',
                'Faroe Islands',
            ], [
                5790000,
                48863
            ]
        ];

        let CanadaPop = [
            [
                'Ontario',
                'British Columbia',
                'Alberta',
                'Quebec',
                'Manitoba',
                'New Brunswick',
                'Saskatchewan',
                'Newfoundland and Labrador',
                'Prince Edward Island'
            ], [
                13600000,
                5100000,
                4371000,
                8485000,
                1369000,
                776827,
                1174000,
                521542,
                156947
            ]
        ];

        var pop = 0;
        if (country == "United States of America") {
            for (i = 0; i < USPop[0].length; i++) {
                if (String(state) == USPop[0][i]) {
                    pop = USPop[1][i];
                }
            }
        } else if (country == "China") {
            for (i = 0; i < ChinaPop[0].length; i++) {
                if (state == ChinaPop[0][i]) {
                    pop = ChinaPop[1][i];
                }
            }
        } else if (country == "France") {
            for (i = 0; i < FrancePop[0].length; i++) {
                if (state == FrancePop[0][i]) {
                    pop = FrancePop[1][i];
                }
            }
        } else if (country == "United Kingdom of Great Britain and Northern Ireland") {
            for (i = 0; i < UKPop[0].length; i++) {
                if (state == UKPop[0][i]) {
                    pop = UKPop[1][i];
                }
            }
        } else if (country == "Australia") {
            for (i = 0; i < AustraliaPop[0].length; i++) {
                if (state == AustraliaPop[0][i]) {
                    pop = AustraliaPop[1][i];

                }
            }
        } else if (country == "Denmark") {
            for (i = 0; i < DenmarkPop[0].length; i++) {
                if (state == DenmarkPop[0][i]) {
                    pop = DenmarkPop[1][i];
                }
            }
        } else if (country == "Canada") {
            for (i = 0; i < CanadaPop[0].length; i++) {
                if (state == CanadaPop[0][i]) {
                    pop = CanadaPop[1][i];
                }
            }
        }
        console.log(pop);
        return pop;
    }
}