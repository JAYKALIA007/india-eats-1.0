export const totalCartPrice = (cartItemsArr) => {
    let totalPrice = 0 
    cartItemsArr.map(item=>{
        totalPrice+= item?.price * item?.count
    })
    return totalPrice
}

export const RESTAURANT_DATA = {
  "statusCode": 0,
  "data": {
    "cacheExpiryTime": 320,
    "pages": 1,
    "pageIndex": 0,
    "scrubber": 0,
    "filters": [
      {
        "type": "FilterWidget",
        "title": "Cuisines",
        "key": "CUISINES",
        "configType": "checkbox",
        "visible": 1,
        "options": [
          {
            "option": "Afghani",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Andhra",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Arabian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Asian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Awadhi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bakery",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Barbecue",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bengali",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Beverages",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bihari",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Biryani",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Burgers",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Burmese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Cafe",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chaat",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chettinad",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chinese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Coastal",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Combo",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Continental",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Desserts",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "European",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Fast Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "French",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Grill",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Gujarati",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Healthy Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Home Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Hyderabadi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Ice Cream",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Ice Cream Cakes",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Italian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Italian-American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Jain",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Japanese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Juices",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Kebabs",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Kerala",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Keto",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Korean",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Lebanese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Lucknowi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Maharashtrian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Malaysian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mangalorean",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Meat",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mediterranean",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mexican",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Middle Eastern",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mughlai",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Nepalese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "North Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Oriental",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Oriya",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Paan",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pan-Asian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pastas",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pizzas",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Portuguese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Punjabi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Raja",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Rajasthani",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Salads",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Seafood",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Snacks",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "South American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "South Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Street Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Sushi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Sweets",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tandoor",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tandoor ",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tex-Mex",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Thai",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Thalis",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tibetan",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Turkish",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Vietnamese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Waffle",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "indian",
            "selected": 0,
            "visible": 1
          }
        ],
        "detail": "",
        "heading": "Cuisines",
        "applicable": 1,
        "searchable": 1
      },
      {
        "type": "FilterWidget",
        "title": "Show Restaurants With",
        "key": "SHOW_RESTAURANTS_WITH",
        "configType": "checkbox",
        "visible": 1,
        "options": [
          {
            "option": "Pure Veg",
            "selected": 0,
            "visible": 1
          }
        ],
        "detail": "",
        "heading": "Offers & More",
        "applicable": 1,
        "searchable": 0
      }
    ],
    "sorts": [
      {
        "type": "SortWidget",
        "key": "RELEVANCE",
        "title": "Relevance",
        "selected": 1,
        "visible": 1,
        "defaultSelection": true
      },
      {
        "type": "SortWidget",
        "key": "DELIVERY_TIME",
        "title": "Delivery Time",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "RATING",
        "title": "Rating",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "COST_FOR_TWO",
        "title": "Cost: Low to High",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "COST_FOR_TWO_H2L",
        "title": "Cost: High to Low",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      }
    ],
    "configs": {
      "ribbons": {
        "PREORDER": {
          "type": "PREORDER",
          "text": "Preorder",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#af2330",
          "priority": 3
        },
        "EXCLUSIVE": {
          "type": "EXCLUSIVE",
          "text": "Exclusive",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#fa4a5b",
          "bottomBackgroundColor": "#d12a3b",
          "priority": 2
        },
        "NEW": {
          "type": "NEW",
          "text": "Newly Added",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#af2330",
          "priority": 4
        },
        "REPEAT": {
          "type": "REPEAT",
          "text": "Repeat",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#D53D4C",
          "bottomBackgroundColor": "#B02331",
          "priority": 6
        },
        "CLOUD": {
          "type": "CLOUD",
          "text": "Daily Menus",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#fa4a5b",
          "bottomBackgroundColor": "#d12a3b",
          "priority": 5
        },
        "PREMIUM": {
          "type": "PREMIUM",
          "text": "Premium",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#8a584b",
          "bottomBackgroundColor": "#583229",
          "priority": 7
        },
        "PROMOTED": {
          "type": "PROMOTED",
          "text": "Promoted",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#3a3c41",
          "bottomBackgroundColor": "#1e2023",
          "priority": 1
        }
      },
      "croutons": {
        "RAIN": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "${amount} extra levied on some restaurants"
        },
        "RAIN_DEFAULT": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Your orders may be delayed by 5-10 mins"
        },
        "SERVICEABLE_WITH_BANNER_RAIN": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "rain_crouton_4x",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Few restaurants unserviceable due to rains"
        },
        "RAIN_LOW": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Your orders may be delayed by 5-10 mins"
        },
        "RAIN_HIGH": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Your orders may be delayed by 5-10 mins"
        },
        "SPECIAL": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "High Demand",
          "message": "Surge fee of Rs ${amount} may be applicable"
        }
      }
    },
    "cards": [
      {
        "cardType": "carousel",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "carousel",
          "subtype": "topCarousel",
          "data": {
            "cards": [
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 635529,
                  "creativeId": "rng/md/carousel/production/pneknawbadtvceqzwiep",
                  "type": "restaurantCollectionV2",
                  "link": "49301",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 619141,
                  "creativeId": "rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
                  "type": "restaurantCollectionV2",
                  "link": "56413",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 619143,
                  "creativeId": "rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt",
                  "type": "restaurantCollectionV2",
                  "link": "56422",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 619142,
                  "creativeId": "rng/md/carousel/production/tgnvusbs3fnzz7xupeno",
                  "type": "restaurantCollectionV2",
                  "link": "56417",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 619145,
                  "creativeId": "rng/md/carousel/production/nhubtkw7dukg3ukcmpam",
                  "type": "restaurantCollectionV2",
                  "link": "56414",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 607188,
                  "creativeId": "rng/md/carousel/production/oxe97jexxbnxqtbhg2zo",
                  "type": "restaurantCollectionV2",
                  "link": "11740",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 607195,
                  "creativeId": "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
                  "type": "restaurantCollectionV2",
                  "link": "56421",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              }
            ]
          }
        },
        "parentWidget": false
      },
      {
        "cardType": "carousel",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "carousel",
          "subtype": "openFilter",
          "data": {
            "cards": [
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181684,
                  "creativeId": "bkhjfipzydkoqncrxpyi",
                  "type": "restaurantCollectionV2",
                  "link": "11718",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Offers Near You",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Offers Near You",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "eyperwsfhaoa5vktjtu4",
                  "dwebOpenFilterDeselectIcon": "urw8usdf4mk9aywd59gq"
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 273242,
                  "creativeId": "rng/md/carousel/production/vquntqrzvkb08pe59cec",
                  "type": "restaurantCollectionV2",
                  "link": "46147",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Top Picks",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Top Picks",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "rng/md/carousel/production/vt13uzhjrg5r49kh9oru",
                  "dwebOpenFilterDeselectIcon": "rng/md/carousel/production/ser2sttildk9yt7t2s91"
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181680,
                  "creativeId": "a3jqjjod5taken7dh1bs",
                  "type": "restaurantCollectionV2",
                  "link": "11721",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Veg Only",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Vegetarian Options",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "qtjc8dzfexg72lug37a0",
                  "dwebOpenFilterDeselectIcon": "bm8bziikwyvwqsml1clm"
                }
              }
            ]
          }
        },
        "parentWidget": false
      },
      {
        "cardType": "seeAllRestaurants",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "seeAllRestaurants",
          "data": {
            "title": "SEE ALL",
            "totalOpenRestaurants": 920,
            "cards": [
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "170470",
                  "name": "Beijing Bites",
                  "uuid": "72b3d8b8-933f-4dfc-b1b2-0fadd24e4dea",
                  "city": "1",
                  "area": "Brookefields",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "ngpyefyb13iwc61yfdml",
                  "cuisines": [
                    "Chinese",
                    "Thai",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 45000,
                  "costForTwoString": "₹450 FOR TWO",
                  "deliveryTime": 50,
                  "minDeliveryTime": 50,
                  "maxDeliveryTime": 50,
                  "slaString": "50 MINS",
                  "lastMileTravel": 5.900000095367432,
                  "slugs": {
                    "restaurant": "beijing-bites-marathahalli",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "1, Akhitaan, 1st Floor, Kundalahalli, ITPL Main Rd, EPIP Zone, Brookefield, Bengaluru, Karnataka 560037",
                  "locality": "Brookefields",
                  "parentId": 103,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5500,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5500,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5500",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7043311~p=1~eid=00000188-8c3d-ec63-0103-f1e8004c0112",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5.9 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "170470",
                    "deliveryTime": 50,
                    "minDeliveryTime": 50,
                    "maxDeliveryTime": 50,
                    "lastMileTravel": 5.900000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "221738",
                  "name": "Meghana Foods",
                  "uuid": "106f4556-6804-4554-8c68-ee875d6acf65",
                  "city": "1",
                  "area": "Brookefield",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "aqsnrylokzpn45qhg1pb",
                  "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian",
                    "Chinese",
                    "Seafood"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 45,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 45,
                  "slaString": "45 MINS",
                  "lastMileTravel": 6,
                  "slugs": {
                    "restaurant": "meghana-foods-mahadevpura-mahadevpura",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India",
                  "locality": "Mahadevpura",
                  "parentId": 635,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 6300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 6300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "221738",
                    "deliveryTime": 45,
                    "minDeliveryTime": 45,
                    "maxDeliveryTime": 45,
                    "lastMileTravel": 6,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "28608",
                  "name": "Imperio Restaurant",
                  "uuid": "df4913fc-75ea-4aea-85d2-3d925b4c811d",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
                  "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Biryani",
                    "South Indian",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 42,
                  "minDeliveryTime": 42,
                  "maxDeliveryTime": 42,
                  "slaString": "42 MINS",
                  "lastMileTravel": 3,
                  "slugs": {
                    "restaurant": "imperio-restaurant-whitefield-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Hagadur main road,near value forum mall, brookbond whitefiled-560066",
                  "locality": "Value forum mall",
                  "parentId": 5610,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "28608",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.7",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "655926",
                  "name": "Biryani Baby",
                  "uuid": "b8714a0d-d41d-4770-893e-e0deb49446fd",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "50+ ratings",
                  "cloudinaryImageId": "e275c99c1ad42c793cd9e916f8a89cc1",
                  "cuisines": [
                    "North Indian",
                    "Biryani",
                    "Indian",
                    "Desserts",
                    "Mughlai",
                    "Lucknowi",
                    "Snacks",
                    "Hyderabadi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 44800,
                  "costForTwoString": "₹448 FOR TWO",
                  "deliveryTime": 38,
                  "minDeliveryTime": 38,
                  "maxDeliveryTime": 38,
                  "slaString": "38 MINS",
                  "lastMileTravel": 3.799999952316284,
                  "slugs": {
                    "restaurant": "biryani-baby-whitefield-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Hagadur Main Rd, Hagadur, Immadihalli, Whitefield, Bengaluru, Karnataka ,,Mahadevapura ,B.B.M.P East,Karnataka-560066",
                  "locality": "Hagadur",
                  "parentId": 367195,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6893475~p=4~eid=00000188-8c3d-ec63-0103-f1e9004c0463",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.7 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "ABOVE ₹700",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "655926",
                    "deliveryTime": 38,
                    "minDeliveryTime": 38,
                    "maxDeliveryTime": 38,
                    "lastMileTravel": 3.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.8",
                  "totalRatings": 50,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "66108",
                  "name": "Pizza Hut",
                  "uuid": "d2c1038e-c231-4128-a693-88eaa7d74e7d",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 35000,
                  "costForTwoString": "₹350 FOR TWO",
                  "deliveryTime": 37,
                  "minDeliveryTime": 37,
                  "maxDeliveryTime": 37,
                  "slaString": "37 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "pizza-hut-ascendas-park-square-mall-whitefield-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "# Lower Basement, Ascendas Park Square Mall, Whitefield Road, Bangalore 560066",
                  "locality": "Whitefield",
                  "parentId": 721,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "66108",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.5",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "108067",
                  "name": "Third Wave Coffee",
                  "uuid": "8166577d-3ac8-4215-ab49-e65e238da80f",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
                  "cuisines": [
                    "Beverages",
                    "Bakery",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "slaString": "36 MINS",
                  "lastMileTravel": 2.5,
                  "slugs": {
                    "restaurant": "third-wave-coffee-roasters-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Ground Floor, Forum mall, Whitefileld main road, hoodi sarda mangala industrial area thigalarapalya krishnarajapura bangalore-560067",
                  "locality": "Forum Shantiniketan Mall",
                  "parentId": 274773,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6948784~p=7~eid=00000188-8c3d-ec63-0103-f1ea004c0741",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "108067",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 2.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "246128",
                  "name": "Hotel Empire",
                  "uuid": "e2f6602d-6105-47ed-8de5-cf28d0495851",
                  "city": "1",
                  "area": "Mahadevpura",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "visisdwdnhzflxgsjpvl",
                  "cuisines": [
                    "North Indian",
                    "Kebabs",
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 53,
                  "minDeliveryTime": 53,
                  "maxDeliveryTime": 53,
                  "slaString": "53 MINS",
                  "lastMileTravel": 6.400000095367432,
                  "slugs": {
                    "restaurant": "empire-mahadevpura-mahadevpura",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Trifecta Adatto, 21, ITPL Main Rd, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048, India",
                  "locality": "Garudachar Palya",
                  "parentId": 475,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 6300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 6300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "FREE ITEM",
                    "subHeader": "",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "246128",
                    "deliveryTime": 53,
                    "minDeliveryTime": 53,
                    "maxDeliveryTime": 53,
                    "lastMileTravel": 6.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.9",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "690129",
                  "name": "Kritunga Restaurant",
                  "uuid": "5bc1017a-12af-44d0-946f-3a0d9a6d6137",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "a58675e8e5968e4ec50cfbfdc6648728",
                  "cuisines": [
                    "North Indian",
                    "Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 60000,
                  "costForTwoString": "₹600 FOR TWO",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "slaString": "26 MINS",
                  "lastMileTravel": 2.700000047683716,
                  "slugs": {
                    "restaurant": "kritunga-restaurant-whitefield-whitefield-2",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "5, Whitefield, Vijayanagar, EPIP Zone, Bengaluru, Karnataka 560066, India",
                  "locality": "Vijayanagar",
                  "parentId": 20088,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.7 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "690129",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 2.700000047683716,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.0",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "510361",
                  "name": "The Pizza Bakery",
                  "uuid": "aad70bdb-254d-4910-9cdf-c95d7b863f49",
                  "city": "1",
                  "area": "Mahadevapura ",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "hjsbkui3buvtqm8rrai2",
                  "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 70000,
                  "costForTwoString": "₹700 FOR TWO",
                  "deliveryTime": 48,
                  "minDeliveryTime": 48,
                  "maxDeliveryTime": 48,
                  "slaString": "48 MINS",
                  "lastMileTravel": 5.5,
                  "slugs": {
                    "restaurant": "the-pizza-bakery-mahadevpura-mahadevpura",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "MUNICIPAL NO.66/2, 67/1, GARUDACHARPALYA, WHITEFIELD MAIN ROAD, BANGALORE., Mahadevapura , B.B.M.P East, Karnataka-560048",
                  "locality": "HVP Aster",
                  "parentId": 11108,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5500,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5500,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5500",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6928685~p=10~eid=00000188-8c3d-ec63-0103-f1eb004c0a6a",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "510361",
                    "deliveryTime": 48,
                    "minDeliveryTime": 48,
                    "maxDeliveryTime": 48,
                    "lastMileTravel": 5.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "65769",
                  "name": "Burger King",
                  "uuid": "c2d3afba-d787-4526-8fd6-8f72b35a5051",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                  "cuisines": [
                    "Burgers",
                    "American"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 35000,
                  "costForTwoString": "₹350 FOR TWO",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "slaString": "31 MINS",
                  "lastMileTravel": 1.7000000476837158,
                  "slugs": {
                    "restaurant": "burger-king-ascends-park-square-itpl-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Unit.no. G-9 &G-10,Ground Floor, Ascends Park Square, ITPL, Whitefield Road, Bangalore,-560066",
                  "locality": "ITPL Main Road",
                  "parentId": 166,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.7 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "65769",
                    "deliveryTime": 31,
                    "minDeliveryTime": 31,
                    "maxDeliveryTime": 31,
                    "lastMileTravel": 1.7000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "510302",
                  "name": "Paris Panini - Gourmet Sandwiches",
                  "uuid": "c9f91c02-f13a-4d05-a8b1-66ed0a173f60",
                  "city": "1",
                  "area": "Mahadevapura ",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "sxojptrg3abbuducgddk",
                  "cuisines": [
                    "French",
                    "Continental",
                    "European",
                    "Salads",
                    "Pastas",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 52,
                  "minDeliveryTime": 52,
                  "maxDeliveryTime": 52,
                  "slaString": "52 MINS",
                  "lastMileTravel": 5.5,
                  "slugs": {
                    "restaurant": "paris-panini---french-street-food-panini-mahadevpura-mahadevpura",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "MUNICIPAL NO.66/2, 67/1, GARUDACHARPALYA, WHITEFIELD MAIN ROAD, BANGALORE., Mahadevapura , B.B.M.P East, Karnataka-560048",
                  "locality": "Hoodi Village",
                  "parentId": 21019,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5500,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5500,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5500",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6928795~p=13~eid=00000188-8c3d-ec63-0103-f1ec004c0d7b",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "510302",
                    "deliveryTime": 52,
                    "minDeliveryTime": 52,
                    "maxDeliveryTime": 52,
                    "lastMileTravel": 5.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "31518",
                  "name": "KFC",
                  "uuid": "0c7b30d2-55de-4ecd-bae8-cfd68bf66703",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                  "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "slaString": "26 MINS",
                  "lastMileTravel": 1.7000000476837158,
                  "slugs": {
                    "restaurant": "kfc-white-field-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "4th Floor, Food Court,Ascendas Park Square, ITPL Bangalore ,Karnataka) -560066",
                  "locality": "Ascendas Park Square",
                  "parentId": 547,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "31518",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 1.7000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.6",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "27335",
                  "name": "Mani's Dum Biryani",
                  "uuid": "7f421995-d008-49c0-9a36-56eff47836c1",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "b9scy8n9nmorxigtf8i1",
                  "cuisines": [
                    "Biryani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 49900,
                  "costForTwoString": "₹499 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 2.299999952316284,
                  "slugs": {
                    "restaurant": "manis-dum-biryani-whitefield-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Plot No. 7, Prashanth Layout, ITPL main road, near Hope farm ,Whitefield Post, Bangalore-560066",
                  "locality": "Whitefield",
                  "parentId": 623,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "27335",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 2.299999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "335957",
                  "name": "The Betel Leaf Co.",
                  "uuid": "697641d8-ff55-4246-bc12-ecb3b1476944",
                  "city": "1",
                  "area": "Whitefield",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "rpifkvj20fojyniwfr6a",
                  "cuisines": [
                    "Paan",
                    "Desserts",
                    "Indian",
                    "Ice Cream"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 2.5,
                  "slugs": {
                    "restaurant": "leaf-and-nuts-pvt-ltd-whitefield-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "101 & 45, Whitefield Main Rd, Narayanappa Garden, Whitefield, Bengaluru, Karnataka 560066, Mahadevapura",
                  "locality": "Narayanappa Garden",
                  "parentId": 8330,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7031912~p=16~eid=00000188-8c3d-ec63-0103-f1ed004c1004",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "335957",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 2.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.6",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "256960",
                  "name": "Shanmukha Restaurant",
                  "uuid": "f31cc794-8f6b-4a10-92c5-72d2c6e87c51",
                  "city": "1",
                  "area": "Brookefield",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "abcktugmzdvmc8cvaxre",
                  "cuisines": [
                    "Biryani",
                    "Andhra",
                    "South Indian",
                    "North Indian",
                    "Tandoor",
                    "Chinese",
                    "Beverages",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 44,
                  "minDeliveryTime": 44,
                  "maxDeliveryTime": 44,
                  "slaString": "44 MINS",
                  "lastMileTravel": 6.400000095367432,
                  "slugs": {
                    "restaurant": "shanmukha-restaurant-whitefield-whitefield",
                    "city": "bangalore"
                  },
                  "cityState": "1",
                  "address": "Kundalahalli, Brookefield, Bengaluru, Karnataka 560037, India",
                  "locality": "Kundalahalli",
                  "parentId": 9954,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 6300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 6300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7026263~p=19~eid=00000188-8c3d-ec63-0103-f1ee004c132f",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "256960",
                    "deliveryTime": 44,
                    "minDeliveryTime": 44,
                    "maxDeliveryTime": 44,
                    "lastMileTravel": 6.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              }
            ],
            "totalRestaurants": 920
          },
          "subtype": "personalized"
        },
        "parentWidget": false
      }
    ],
    "nextPageFetch": 0
  },
  "tid": "68d9e049-098f-49d3-b9bb-d54824316fe0",
  "sid": "7gle1dda-3f91-4e22-ae39-51b1ca30ece0",
  "deviceId": "80105bae-6a50-44e2-f683-ebf1ec3a15bc",
  "csrfToken": "W2pCRv7ElJ03-PI_CZxdS5UgSt1odPUGjCyKDEWA"
}

export const POPULAR_CUISINES_DATA ={
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RecentSearches",
            "id": "recentSearchesWidget",
            "title": "Recent Searches",
            "minItemsToDisplay": 3,
            "maxItemsToDisplay": 5
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "header": {
              "title": "Popular Cuisines",
              "headerStyling": {
                "padding": {
                  "left": 16,
                  "top": 28
                }
              }
            },
            "layout": {
              "rows": 1,
              "columns": 12,
              "horizontalScrollEnabled": true,
              "itemSpacing": 10,
              "widgetPadding": {
                "top": 8,
                "bottom": 8
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 16,
                  "top": 12,
                  "right": 16,
                  "bottom": 24
                }
              },
              "scrollBar": {
                
              }
            },
            "imageGridCards": {
              "info": [
                {
                  "id": "600608",
                  "imageId": "rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65",
                  "action": {
                    "link": "swiggy://explore?query=Biryani",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600813",
                  "imageId": "rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f",
                  "action": {
                    "link": "swiggy://explore?query=Pizza",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600995",
                  "imageId": "rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966",
                  "action": {
                    "link": "swiggy://explore?query=Rolls",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600833",
                  "imageId": "rng/md/carousel/production/e76b511935016406e6ebc11dd7593387",
                  "action": {
                    "link": "swiggy://explore?query=Burgers",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "601016",
                  "imageId": "rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27",
                  "action": {
                    "link": "swiggy://explore?query=Tea",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600854",
                  "imageId": "rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7",
                  "action": {
                    "link": "swiggy://explore?query=Chinese",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600868",
                  "imageId": "rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f",
                  "action": {
                    "link": "swiggy://explore?query=Cake",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600884",
                  "imageId": "rng/md/carousel/production/31f03222ea978aef3b10d386729eb076",
                  "action": {
                    "link": "swiggy://explore?query=Desserts",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600828",
                  "imageId": "rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce",
                  "action": {
                    "link": "swiggy://explore?query=North%20Indian",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600901",
                  "imageId": "rng/md/carousel/production/0b5ffa32a04d99c1f212d2aacefd5f6f",
                  "action": {
                    "link": "swiggy://explore?query=South%20Indian",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600916",
                  "imageId": "rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403",
                  "action": {
                    "link": "swiggy://explore?query=Sandwich",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                },
                {
                  "id": "600932",
                  "imageId": "rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5",
                  "action": {
                    "link": "swiggy://explore?query=Ice%20cream",
                    "text": "Popular Cuisines",
                    "type": "DEEPLINK"
                  },
                  "entityType": "BANNER",
                  "accessibility": {
                    
                  },
                  "frequencyCapping": {
                    
                  }
                }
              ],
              "style": {
                "width": {
                  "type": "TYPE_RELATIVE",
                  "value": 0.23529412,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                },
                "height": {
                  "type": "TYPE_RELATIVE",
                  "value": 1.4210526,
                  "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                }
              }
            },
            "id": "PopularCuisinessearchpage",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                "info": [
                  {
                    "id": "600608",
                    "imageId": "rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65",
                    "action": {
                      "link": "swiggy://explore?query=Biryani",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600813",
                    "imageId": "rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f",
                    "action": {
                      "link": "swiggy://explore?query=Pizza",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600995",
                    "imageId": "rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966",
                    "action": {
                      "link": "swiggy://explore?query=Rolls",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600833",
                    "imageId": "rng/md/carousel/production/e76b511935016406e6ebc11dd7593387",
                    "action": {
                      "link": "swiggy://explore?query=Burgers",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "601016",
                    "imageId": "rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27",
                    "action": {
                      "link": "swiggy://explore?query=Tea",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600854",
                    "imageId": "rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7",
                    "action": {
                      "link": "swiggy://explore?query=Chinese",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600868",
                    "imageId": "rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f",
                    "action": {
                      "link": "swiggy://explore?query=Cake",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600884",
                    "imageId": "rng/md/carousel/production/31f03222ea978aef3b10d386729eb076",
                    "action": {
                      "link": "swiggy://explore?query=Desserts",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600828",
                    "imageId": "rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce",
                    "action": {
                      "link": "swiggy://explore?query=North%20Indian",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600901",
                    "imageId": "rng/md/carousel/production/0b5ffa32a04d99c1f212d2aacefd5f6f",
                    "action": {
                      "link": "swiggy://explore?query=South%20Indian",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600916",
                    "imageId": "rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403",
                    "action": {
                      "link": "swiggy://explore?query=Sandwich",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  },
                  {
                    "id": "600932",
                    "imageId": "rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5",
                    "action": {
                      "link": "swiggy://explore?query=Ice%20cream",
                      "text": "Popular Cuisines",
                      "type": "DEEPLINK"
                    },
                    "entityType": "BANNER",
                    "accessibility": {
                      
                    },
                    "frequencyCapping": {
                      
                    }
                  }
                ],
                "style": {
                  "width": {
                    "type": "TYPE_RELATIVE",
                    "value": 0.23529412,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                  },
                  "height": {
                    "type": "TYPE_RELATIVE",
                    "value": 1.4210526,
                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                  }
                }
              }
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 2
  },
  "tid": "7d48053d-92db-492d-95ee-530fb7d0e19c",
  "sid": "7gmf1a35-0a8a-462b-b180-56030c15dfb4",
  "deviceId": "d1c9a9b3-6245-8c9c-5dc9-16de859503af",
  "csrfToken": null
}

export const SEARCH_RESULTS_DATA ={
  "statusCode": 0,
  "data": {
    "query": "noodles",
    "highlightPreText": "{{",
    "highlightPostText": "}}",
    "suggestions": [
      {
        "text": "Noodles",
        "highlightedText": "{{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "l609dltjyaqhgw3jd2js",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"NA\",\"cloudinaryId\":\"l609dltjyaqhgw3jd2js\",\"dishFamilyId\":\"846630\",\"dishFamilyIds\":[\"846630\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22l609dltjyaqhgw3jd2js%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "NOODLES",
        "highlightedText": "{{NOODLES}}",
        "type": "RESTAURANT",
        "tagToDisplay": "Restaurant",
        "tagToDisplayColor": "#686B78",
        "cloudinaryId": "bspfo1xbh7fxdfytpaxy",
        "metadata": "{\"type\":\"RESTAURANT\",\"data\":{\"parentId\":149934,\"primaryRestaurantId\":382564,\"cloudinaryId\":\"bspfo1xbh7fxdfytpaxy\",\"brandId\":149934,\"dishFamilyId\":\"846630\",\"enabled_flag\":1},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Restaurant\"}",
        "cta": {
          "text": "NOODLES",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=NOODLES&metadata=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A149934%2C%22primaryRestaurantId%22%3A382564%2C%22cloudinaryId%22%3A%22bspfo1xbh7fxdfytpaxy%22%2C%22brandId%22%3A149934%2C%22dishFamilyId%22%3A%22846630%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Restaurant",
        "subCategoryColor": "#686B78",
        "disabled": false
      },
      {
        "text": "Chicken Noodles",
        "highlightedText": "Chicken {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "c6rrernoygcn7eatsttu",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"NONVEG\",\"cloudinaryId\":\"c6rrernoygcn7eatsttu\",\"dishFamilyId\":\"846630\",\"dishTypeId\":\"847471\",\"dishFamilyIds\":[\"846630\"],\"dishTypeIds\":[\"847471\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Chicken Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Chicken%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NONVEG%22%2C%22cloudinaryId%22%3A%22c6rrernoygcn7eatsttu%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishTypeId%22%3A%22847471%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishTypeIds%22%3A%5B%22847471%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Veg Noodles",
        "highlightedText": "Veg {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "oysdmwcqlagzmufbzfct",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"VEG\",\"cloudinaryId\":\"oysdmwcqlagzmufbzfct\",\"dishFamilyId\":\"846630\",\"dishTypeId\":\"847464\",\"dishFamilyIds\":[\"846630\"],\"dishTypeIds\":[\"847464\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Veg Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Veg%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22oysdmwcqlagzmufbzfct%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishTypeId%22%3A%22847464%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishTypeIds%22%3A%5B%22847464%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Veg Hakka Noodles",
        "highlightedText": "Veg Hakka {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "rw6blhpctwfcgavp5w4k",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"VEG\",\"cloudinaryId\":\"rw6blhpctwfcgavp5w4k\",\"dishFamilyId\":\"846630\",\"dishFamilyIds\":[\"846630\"],\"dishPreparationStyleIds\":[\"849246\"],\"dishTypeIds\":[\"847464\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Veg Hakka Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Veg%20Hakka%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22rw6blhpctwfcgavp5w4k%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishPreparationStyleIds%22%3A%5B%22849246%22%5D%2C%22dishTypeIds%22%3A%5B%22847464%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Chicken Hakka Noodles",
        "highlightedText": "Chicken Hakka {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "jpt0pbvodu016jizlzx9",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"NONVEG\",\"cloudinaryId\":\"jpt0pbvodu016jizlzx9\",\"dishFamilyId\":\"846630\",\"dishFamilyIds\":[\"846630\"],\"dishPreparationStyleIds\":[\"849246\"],\"dishTypeIds\":[\"847471\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Chicken Hakka Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Chicken%20Hakka%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NONVEG%22%2C%22cloudinaryId%22%3A%22jpt0pbvodu016jizlzx9%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishPreparationStyleIds%22%3A%5B%22849246%22%5D%2C%22dishTypeIds%22%3A%5B%22847471%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Egg Noodles",
        "highlightedText": "Egg {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "sl3cv7sg6iispbnrelts",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"EGG\",\"cloudinaryId\":\"sl3cv7sg6iispbnrelts\",\"dishFamilyId\":\"846630\",\"dishTypeId\":\"847478\",\"dishFamilyIds\":[\"846630\"],\"dishTypeIds\":[\"847478\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Egg Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Egg%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22EGG%22%2C%22cloudinaryId%22%3A%22sl3cv7sg6iispbnrelts%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishTypeId%22%3A%22847478%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishTypeIds%22%3A%5B%22847478%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Chicken Schezwan Noodles",
        "highlightedText": "Chicken Schezwan {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "6f7444206fa089ced5aa0896ba517b2e",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"NONVEG\",\"cloudinaryId\":\"6f7444206fa089ced5aa0896ba517b2e\",\"dishFamilyId\":\"846630\",\"dishFamilyIds\":[\"846630\"],\"dishPreparationStyleIds\":[\"849227\"],\"dishTypeIds\":[\"847471\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Chicken Schezwan Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Chicken%20Schezwan%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NONVEG%22%2C%22cloudinaryId%22%3A%226f7444206fa089ced5aa0896ba517b2e%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishPreparationStyleIds%22%3A%5B%22849227%22%5D%2C%22dishTypeIds%22%3A%5B%22847471%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Chowman's Special Noodles",
        "highlightedText": "Chowman's Special {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "wkihxjxhzz14022uab3t",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"NONVEG\",\"cloudinaryId\":\"wkihxjxhzz14022uab3t\",\"dishFamilyId\":\"846630\",\"dishFamilyIds\":[\"846630\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Chowman's Special Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Chowman%27s%20Special%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NONVEG%22%2C%22cloudinaryId%22%3A%22wkihxjxhzz14022uab3t%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      },
      {
        "text": "Chilli Garlic Noodles",
        "highlightedText": "Chilli Garlic {{Noodles}}",
        "type": "DISH",
        "tagToDisplay": "Dish",
        "cloudinaryId": "hfxhyz4pgy4blpjgynq9",
        "tagToDisplayColor": "#686B78",
        "metadata": "{\"type\":\"DISH\",\"data\":{\"vegIdentifier\":\"VEG\",\"cloudinaryId\":\"hfxhyz4pgy4blpjgynq9\",\"dishFamilyId\":\"846630\",\"dishPreparationStyleId\":\"849242\",\"dishFamilyIds\":[\"846630\"],\"dishPreparationStyleIds\":[\"849242\"]},\"businessCategory\":\"SWIGGY_FOOD\",\"displayLabel\":\"Dish\"}",
        "cta": {
          "text": "Chilli Garlic Noodles",
          "type": "DEEPLINK",
          "link": "swiggy://explore?query=Chilli%20Garlic%20Noodles&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22hfxhyz4pgy4blpjgynq9%22%2C%22dishFamilyId%22%3A%22846630%22%2C%22dishPreparationStyleId%22%3A%22849242%22%2C%22dishFamilyIds%22%3A%5B%22846630%22%5D%2C%22dishPreparationStyleIds%22%3A%5B%22849242%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D"
        },
        "category": "Food",
        "categoryColor": "#686B78",
        "subCategory": "Dish",
        "subCategoryColor": "#686B78"
      }
    ]
  },
  "tid": "",
  "sid": "",
  "deviceId": "56b2484f-c301-0972-38c4-70a647000c1d",
  "csrfToken": null
}