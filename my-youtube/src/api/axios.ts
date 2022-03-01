import axios from "axios";
const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_API,
    maxResults: 10,
    part: 'snippet',
    regionCode: 'KR',
    order: 'viewCount',
  },
});

const getSearch = async (keyword = "", options = {}) => {
  const returnResult = await instance({
    method: "get",
    url: `search`,
    params: {
      q: keyword,
    },
    ...options,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  console.log(returnResult.items);
  return returnResult.items;
};

const DUMMY = [
    {
      "kind": "youtube#searchResult",
      "etag": "viEoivBDeezvh7A7Qa-aXVk_xC8",
      "id": {
        "kind": "youtube#video",
        "videoId": "ZsYwEV_ge4Y"
      },
      "snippet": {
        "publishedAt": "2017-09-13T09:00:03Z",
        "channelId": "UCweOkPb1wVVH0Q0Tlj4a5Pw",
        "title": "[MV] GFRIEND(여자친구) _ Summer Rain(여름비)",
        "description": "[MV] GFRIEND(여자친구) _ Summer Rain(여름비) *English subtitles are now available. (Please click on 'CC' button or activate ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ZsYwEV_ge4Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ZsYwEV_ge4Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ZsYwEV_ge4Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "1theK (원더케이)",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-13T09:00:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "mVJYpqnVHpo8JztnbezYKMEsjWQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "9eicUofyUyA"
      },
      "snippet": {
        "publishedAt": "2017-09-14T10:29:27Z",
        "channelId": "UCbD8EppRX3ZwJSou-TVo90A",
        "title": "[GFRIEND - SUMMER RAIN] Comeback Stage | M COUNTDOWN 170914 EP.541",
        "description": "KPOP Chart Show M COUNTDOWN | EP.541 - GFRIEND - SUMMER RAIN ▷Watch more video clips: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9eicUofyUyA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9eicUofyUyA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9eicUofyUyA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Mnet K-POP",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-14T10:29:27Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "XrChWZSInWlL9SFRsfM5vOGK4C8",
      "id": {
        "kind": "youtube#video",
        "videoId": "G_-SNiuZrJA"
      },
      "snippet": {
        "publishedAt": "2017-09-14T07:39:01Z",
        "channelId": "UCvCg3YaEvIv0MtnKbienA-w",
        "title": "170914 여자친구 (GFRIEND) - 여름비 (SUMMER RAIN) (은하) 직캠 by 수원촌놈 [엠카 미니팬미팅]",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/G_-SNiuZrJA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/G_-SNiuZrJA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/G_-SNiuZrJA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "[직캠/FANCAM]수원촌놈",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-14T07:39:01Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "MVSiJZxWoR2tct-PEPYWVqDygWY",
      "id": {
        "kind": "youtube#video",
        "videoId": "2dvjy452sRA"
      },
      "snippet": {
        "publishedAt": "2017-09-20T09:00:01Z",
        "channelId": "UCweOkPb1wVVH0Q0Tlj4a5Pw",
        "title": "[Mirrored] GFRIEND(여자친구) _ &#39;SUMMER RAIN&#39; Choreography(여름비 거울모드 안무영상)_1theK Dance Cover Contest",
        "description": "[Mirrored] GFRIEND(여자친구) _ 'SUMMER RAIN' Choreography(여름비 거울모드 안무영상)_1theK Dance Cover Contest ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2dvjy452sRA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2dvjy452sRA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2dvjy452sRA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "1theK (원더케이)",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-20T09:00:01Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Zmff08Ckkf2Hfz_6eMiH4BKY3Tc",
      "id": {
        "kind": "youtube#video",
        "videoId": "k7npTim4Xj4"
      },
      "snippet": {
        "publishedAt": "2017-09-13T09:00:03Z",
        "channelId": "UCRDd3x33kfF0IW6g2MRUkRw",
        "title": "여자친구 GFRIEND - 여름비 (SUMMER RAIN) M/V",
        "description": "GFRIEND 여자친구 facebook: http://www.facebook.com/gfrdofficial GFRIEND 여자친구 twitter: http://twitter.com/gfrdofficial ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/k7npTim4Xj4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/k7npTim4Xj4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/k7npTim4Xj4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "여자친구 GFRIEND OFFICIAL",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-13T09:00:03Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Ft1OX3ET-xMecVwZOucC7YSzuN4",
      "id": {
        "kind": "youtube#video",
        "videoId": "tqQ2wpWjYIw"
      },
      "snippet": {
        "publishedAt": "2017-11-18T22:48:18Z",
        "channelId": "UCKrKo2mifcYmM86K_suNz2Q",
        "title": "Summer Rain (여름비)",
        "description": "Provided to YouTube by Loen Entertainment Summer Rain (여름비) · GFRIEND(여자친구) GFRIEND (여자친구) The 5th Mini ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tqQ2wpWjYIw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tqQ2wpWjYIw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tqQ2wpWjYIw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "GFRIEND   - Topic",
        "liveBroadcastContent": "none",
        "publishTime": "2017-11-18T22:48:18Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SfKIXsbW4DYR-qOon3Ix0tu6Xzo",
      "id": {
        "kind": "youtube#video",
        "videoId": "vELDb7Kot5s"
      },
      "snippet": {
        "publishedAt": "2022-01-10T09:06:53Z",
        "channelId": "UCKj1qkACphzGhWGTmOXSt_w",
        "title": "여름비",
        "description": "Provided to YouTube by NHN BUGS 여름비 · Sam Kim 그 해 우리는 OST Part.8 ℗ 모스트콘텐츠 Released on: 2022-01-10 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vELDb7Kot5s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vELDb7Kot5s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vELDb7Kot5s/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SAM KIM - Topic",
        "liveBroadcastContent": "none",
        "publishTime": "2022-01-10T09:06:53Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "xhFloOpKsv5-wEe9hBhDzQjPoaE",
      "id": {
        "kind": "youtube#video",
        "videoId": "5I_JhlSj23A"
      },
      "snippet": {
        "publishedAt": "2017-09-20T15:00:00Z",
        "channelId": "UCRDd3x33kfF0IW6g2MRUkRw",
        "title": "여자친구 GFRIEND - 여름비 (SUMMER RAIN) M/V (Choreography ver.)",
        "description": "GFRIEND 여자친구 facebook: http://www.facebook.com/gfrdofficial GFRIEND 여자친구 twitter: http://twitter.com/gfrdofficial ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5I_JhlSj23A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5I_JhlSj23A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5I_JhlSj23A/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "여자친구 GFRIEND OFFICIAL",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-20T15:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "po8C2dcxs20u4Xn7_UoIWtoGVHE",
      "id": {
        "kind": "youtube#video",
        "videoId": "iT06MHG0s20"
      },
      "snippet": {
        "publishedAt": "2017-09-26T08:49:42Z",
        "channelId": "UCqXZ4FJJ3pVPArGxYnnjqNw",
        "title": "여자친구 GFRIEND - 여름비 교차편집 Summer Rain Stage Mix",
        "description": "여자친구 GFRIEND - 여름비 교차편집 Summer Rain Stage Mix 여자친구 여름비 교차편집.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/iT06MHG0s20/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/iT06MHG0s20/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/iT06MHG0s20/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "JenBX.91",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-26T08:49:42Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Vhd0mQd2mR-7iMtAgEwuCZmjk3k",
      "id": {
        "kind": "youtube#video",
        "videoId": "Xxm5dLO8LAc"
      },
      "snippet": {
        "publishedAt": "2017-09-13T11:00:13Z",
        "channelId": "UCtCiO5t2voB14CmZKTkIzPQ",
        "title": "여자친구 GFRIEND - 여름비 [세로라이브] Live",
        "description": "딩고 뮤직 구독하기 click https://www.youtube.com/channel/UCtCiO5t2voB14CmZKTkIzPQ?sub_confirmation=1 나만을 위해 불러 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Xxm5dLO8LAc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Xxm5dLO8LAc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Xxm5dLO8LAc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "딩고 뮤직 / dingo music",
        "liveBroadcastContent": "none",
        "publishTime": "2017-09-13T11:00:13Z"
      }
    }
  ];

export { getSearch, DUMMY };
