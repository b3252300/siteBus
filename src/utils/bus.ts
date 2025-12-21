function fetchTainanBusNetwork() {
  const network = {
    data: {
      VersionID: 8527,
      UpdateTime: "2025-12-18T00:00:00+08:00",
      UpdateInterval: 14400,
      SrcUpdateTime: "2025-12-18T01:05:00+08:00",
      SrcUpdateInterval: 86400,
      AuthorityCode: "TNN",
      Networks: [
        {
          NetworkID: "TNN-Network",
          NetworkName: {
            Zh_tw: "臺南市公車營運路網",
            En: "Tainan Bus Operation Network",
          },
          NetworkMapURL: {
            MapName: "臺南市公車路網圖",
            MapNameURL: {
              Zh_tw:
                "http://traffic.tainan.gov.tw/Uploads/Tainan_Bus_Route_Map_4_Urban_6MB.jpg",
              En: "http://traffic.tainan.gov.tw/Uploads/Tainan_Bus_Route_Map_4_Urban_6MB.jpg",
            },
          },
          LBSMapURLs: [],
        },
      ],
    },
    status: 200,
    statusText: "",
    headers: {
      "content-length": "371",
      "content-type": "application/json; charset=utf-8",
      "last-modified": "Wed, 17 Dec 2025 16:00:00 GMT",
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
      },
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {},
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          'hmac username="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF", algorithm="hmac-sha1", headers="x-date", signature="tEd6g64S8HDA0IXI/qWaaNs8Zo4="',
        "X-Date": "Thu, 18 Dec 2025 06:51:36 GMT",
      },
      method: "get",
      url: "https://tdx.transportdata.tw/api/basic/v3/Bus/Network/City/Tainan?%24top=30&%24format=JSON",
      allowAbsoluteUrls: true,
    },
    request: "[object XMLHttpRequest]",
  };

  const realTimeNearStop = [
    {
      PlateNumb: "648-FS",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1201",
      RouteID: "1201",
      RouteName: {
        Zh_tw: "藍1",
        En: "B1",
      },
      SubRouteUID: "TNN120102",
      SubRouteID: "120102",
      SubRouteName: {
        Zh_tw: "藍1 南鯤鯓→西埔內→苓子寮→佳里",
        En: "B1 Nankunshen Temple→Jiali Bus Station",
      },
      Direction: 1,
      StopUID: "TNN5843",
      StopID: "5843",
      StopName: {
        Zh_tw: "苓子寮",
        En: "Lingzihliao",
      },
      StopSequence: 16,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:29+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:50:05+08:00",
      TransTime: "2025-12-18T16:13:29+08:00",
      SrcRecTime: "2025-12-18T16:13:29+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "661-FS",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1211",
      RouteID: "1211",
      RouteName: {
        Zh_tw: "藍11",
        En: "B11",
      },
      SubRouteUID: "TNN121102",
      SubRouteID: "121102",
      SubRouteName: {
        Zh_tw: "藍11 青鯤鯓→城子內→佳里",
        En: "B11 Kunsheng Harbor→Jiali Bus Station",
      },
      Direction: 1,
      StopUID: "TNN6035",
      StopID: "6035",
      StopName: {
        Zh_tw: "佳里站",
        En: "Jiali Bus Station",
      },
      StopSequence: 17,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:00:40+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:39:42+08:00",
      TransTime: "2025-12-18T16:00:40+08:00",
      SrcRecTime: "2025-12-18T16:00:40+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "663-FS",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1220",
      RouteID: "1220",
      RouteName: {
        Zh_tw: "藍20",
        En: "B20",
      },
      SubRouteUID: "TNN122002",
      SubRouteID: "122002",
      SubRouteName: {
        Zh_tw: "藍20 馬沙溝遊憩區→青鯤鯓→台區→佳里",
        En: "B20 Mashagou Recreation Area→Jiali Bus Station",
      },
      Direction: 1,
      StopUID: "TNN6146",
      StopID: "6146",
      StopName: {
        Zh_tw: "三合",
        En: "Sanhe",
      },
      StopSequence: 24,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:51+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:40:32+08:00",
      TransTime: "2025-12-18T16:13:51+08:00",
      SrcRecTime: "2025-12-18T16:13:51+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "683-FS",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1202",
      RouteID: "1202",
      RouteName: {
        Zh_tw: "藍2",
        En: "B2",
      },
      SubRouteUID: "TNN120211",
      SubRouteID: "120211",
      SubRouteName: {
        Zh_tw: "藍2 佳里→溪底寮→南鯤鯓(不經井仔腳)",
        En: "B2 Jiali Bus Station→Nankunshen Temple[Non-Via Jingzihjiao]",
      },
      Direction: 0,
      StopUID: "TNN5864",
      StopID: "5864",
      StopName: {
        Zh_tw: "學甲市場",
        En: "Syuejia Market",
      },
      StopSequence: 17,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:26+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:51:44+08:00",
      TransTime: "2025-12-18T16:13:28+08:00",
      SrcRecTime: "2025-12-18T16:13:28+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAA-797",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120002",
      SubRouteID: "120002",
      SubRouteName: {
        Zh_tw: "藍幹線 佳里→安平工業區",
        En: "Blue Jiali Bus Station→Anping Industrial Park",
      },
      Direction: 1,
      StopUID: "TNN5785",
      StopID: "5785",
      StopName: {
        Zh_tw: "六甲頂",
        En: "Lioujiading",
      },
      StopSequence: 29,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:03+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:30:06+08:00",
      TransTime: "2025-12-18T16:13:03+08:00",
      SrcRecTime: "2025-12-18T16:13:03+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAA-798",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120001",
      SubRouteID: "120001",
      SubRouteName: {
        Zh_tw: "藍幹線 安平工業區→佳里",
        En: "Blue Anping Industrial Park→Jiali Bus Station",
      },
      Direction: 0,
      StopUID: "TNN5746",
      StopID: "5746",
      StopName: {
        Zh_tw: "北和順",
        En: "North Heshun",
      },
      StopSequence: 35,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:12+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:14:58+08:00",
      TransTime: "2025-12-18T16:13:13+08:00",
      SrcRecTime: "2025-12-18T16:13:13+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2301",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120002",
      SubRouteID: "120002",
      SubRouteName: {
        Zh_tw: "藍幹線 佳里→安平工業區",
        En: "Blue Jiali Bus Station→Anping Industrial Park",
      },
      Direction: 1,
      StopUID: "TNN5796",
      StopID: "5796",
      StopName: {
        Zh_tw: "小西門(府前路)",
        En: "Siaosimen(FuCian Rd.)",
      },
      StopSequence: 41,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:37+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:00:31+08:00",
      TransTime: "2025-12-18T16:13:36+08:00",
      SrcRecTime: "2025-12-18T16:13:36+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2303",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120001",
      SubRouteID: "120001",
      SubRouteName: {
        Zh_tw: "藍幹線 安平工業區→佳里",
        En: "Blue Anping Industrial Park→Jiali Bus Station",
      },
      Direction: 0,
      StopUID: "TNN5722",
      StopID: "5722",
      StopName: {
        Zh_tw: "水萍塭公園",
        En: "Shueipingwun Park",
      },
      StopSequence: 7,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:14:03+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T16:01:22+08:00",
      TransTime: "2025-12-18T16:14:03+08:00",
      SrcRecTime: "2025-12-18T16:14:03+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2305",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120002",
      SubRouteID: "120002",
      SubRouteName: {
        Zh_tw: "藍幹線 佳里→安平工業區",
        En: "Blue Jiali Bus Station→Anping Industrial Park",
      },
      Direction: 1,
      StopUID: "TNN5790",
      StopID: "5790",
      StopName: {
        Zh_tw: "臺南轉運站",
        En: "Tainan Bus Station",
      },
      StopSequence: 34,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:01+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:16:25+08:00",
      TransTime: "2025-12-18T16:13:01+08:00",
      SrcRecTime: "2025-12-18T16:13:01+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2306",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120001",
      SubRouteID: "120001",
      SubRouteName: {
        Zh_tw: "藍幹線 安平工業區→佳里",
        En: "Blue Anping Industrial Park→Jiali Bus Station",
      },
      Direction: 0,
      StopUID: "TNN5716",
      StopID: "5716",
      StopName: {
        Zh_tw: "安平工業區",
        En: "Anping Industrial Park",
      },
      StopSequence: 1,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:14:00+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T16:14:00+08:00",
      TransTime: "2025-12-18T16:13:59+08:00",
      SrcRecTime: "2025-12-18T16:13:59+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2309",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120001",
      SubRouteID: "120001",
      SubRouteName: {
        Zh_tw: "藍幹線 安平工業區→佳里",
        En: "Blue Anping Industrial Park→Jiali Bus Station",
      },
      Direction: 0,
      StopUID: "TNN5738",
      StopID: "5738",
      StopName: {
        Zh_tw: "安順",
        En: "Anshun",
      },
      StopSequence: 24,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:27+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:29:44+08:00",
      TransTime: "2025-12-18T16:13:28+08:00",
      SrcRecTime: "2025-12-18T16:13:28+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2315",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120001",
      SubRouteID: "120001",
      SubRouteName: {
        Zh_tw: "藍幹線 安平工業區→佳里",
        En: "Blue Anping Industrial Park→Jiali Bus Station",
      },
      Direction: 0,
      StopUID: "TNN5754",
      StopID: "5754",
      StopName: {
        Zh_tw: "北西港",
        En: "North Sigang",
      },
      StopSequence: 43,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:14:03+08:00",
      TripStartTimeType: 1,
      TripStartTime: "2025-12-18T14:58:42+08:00",
      TransTime: "2025-12-18T16:14:03+08:00",
      SrcRecTime: "2025-12-18T16:14:03+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2317",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1200",
      RouteID: "1200",
      RouteName: {
        Zh_tw: "藍幹線",
        En: "Blue",
      },
      SubRouteUID: "TNN120002",
      SubRouteID: "120002",
      SubRouteName: {
        Zh_tw: "藍幹線 佳里→安平工業區",
        En: "Blue Jiali Bus Station→Anping Industrial Park",
      },
      Direction: 1,
      StopUID: "TNN5766",
      StopID: "5766",
      StopName: {
        Zh_tw: "北西港",
        En: "North Sigang",
      },
      StopSequence: 7,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:57+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T16:00:30+08:00",
      TransTime: "2025-12-18T16:13:58+08:00",
      SrcRecTime: "2025-12-18T16:13:58+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2318",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1210",
      RouteID: "1210",
      RouteName: {
        Zh_tw: "藍10",
        En: "B10",
      },
      SubRouteUID: "TNN121001",
      SubRouteID: "121001",
      SubRouteName: {
        Zh_tw: "藍10 佳里→馬沙溝→將軍漁港",
        En: "B10 Jiali Bus Station→Jiangjyun Fish Port",
      },
      Direction: 0,
      StopUID: "TNN5960",
      StopID: "5960",
      StopName: {
        Zh_tw: "潭墘",
        En: "Tancian",
      },
      StopSequence: 3,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:07+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T16:10:52+08:00",
      TransTime: "2025-12-18T16:13:07+08:00",
      SrcRecTime: "2025-12-18T16:13:07+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2320",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1210",
      RouteID: "1210",
      RouteName: {
        Zh_tw: "藍10",
        En: "B10",
      },
      SubRouteUID: "TNN121002",
      SubRouteID: "121002",
      SubRouteName: {
        Zh_tw: "藍10 將軍漁港→馬沙溝→佳里",
        En: "B10 Jiangjyun Fish Port→Jiali Bus Station",
      },
      Direction: 1,
      StopUID: "TNN5997",
      StopID: "5997",
      StopName: {
        Zh_tw: "竹子腳",
        En: "Jhuzihjiao",
      },
      StopSequence: 21,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:00+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:51:02+08:00",
      TransTime: "2025-12-18T16:13:00+08:00",
      SrcRecTime: "2025-12-18T16:13:00+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2321",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1220",
      RouteID: "1220",
      RouteName: {
        Zh_tw: "藍20",
        En: "B20",
      },
      SubRouteUID: "TNN122001",
      SubRouteID: "122001",
      SubRouteName: {
        Zh_tw: "藍20 佳里→台區→青鯤鯓→馬沙溝遊憩區",
        En: "B20 Jiali Bus Station→Mashagou Recreation Area",
      },
      Direction: 0,
      StopUID: "TNN6123",
      StopID: "6123",
      StopName: {
        Zh_tw: "青山漁港",
        En: "Cingshan  Fish Port",
      },
      StopSequence: 26,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 1,
      GPSTime: "2025-12-18T16:13:57+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:40:25+08:00",
      TransTime: "2025-12-18T16:13:58+08:00",
      SrcRecTime: "2025-12-18T16:13:58+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "EAL-2322",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1213",
      RouteID: "1213",
      RouteName: {
        Zh_tw: "藍13",
        En: "B13",
      },
      SubRouteUID: "TNN121301",
      SubRouteID: "121301",
      SubRouteName: {
        Zh_tw: "藍13 佳里→西寮",
        En: "B13 Jiali Bus Station→Siliao",
      },
      Direction: 0,
      StopUID: "TNN6082",
      StopID: "6082",
      StopName: {
        Zh_tw: "五棟寮",
        En: "Wudongliao",
      },
      StopSequence: 13,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:05+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T16:00:39+08:00",
      TransTime: "2025-12-18T16:13:05+08:00",
      SrcRecTime: "2025-12-18T16:13:05+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "KKA-7305",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1224",
      RouteID: "1224",
      RouteName: {
        Zh_tw: "藍24",
        En: "B24",
      },
      SubRouteUID: "TNN122402",
      SubRouteID: "122402",
      SubRouteName: {
        Zh_tw: "藍24 青草里→土城子→安平工業區",
        En: "B24 Cingcao Vil.→Anping Industrial Park",
      },
      Direction: 1,
      StopUID: "TNN6419",
      StopID: "6419",
      StopName: {
        Zh_tw: "中華社區",
        En: "Jhonghua Community",
      },
      StopSequence: 32,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:57+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:40:15+08:00",
      TransTime: "2025-12-18T16:13:58+08:00",
      SrcRecTime: "2025-12-18T16:13:58+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "KKA-7306",
      OperatorID: "10160",
      OperatorNo: "1601",
      RouteUID: "TNN1223",
      RouteID: "1223",
      RouteName: {
        Zh_tw: "藍23",
        En: "B23",
      },
      SubRouteUID: "TNN122301",
      SubRouteID: "122301",
      SubRouteName: {
        Zh_tw: "藍23 安平工業區→九塊厝",
        En: "B23 Anping Industrial Park→Jioukuaicuo",
      },
      Direction: 0,
      StopUID: "TNN6293",
      StopID: "6293",
      StopName: {
        Zh_tw: "三股",
        En: "Sangu",
      },
      StopSequence: 44,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:06:30+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:01:26+08:00",
      TransTime: "2025-12-18T16:06:31+08:00",
      SrcRecTime: "2025-12-18T16:06:31+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "TDQ-9756",
      OperatorID: "16202",
      OperatorNo: "",
      RouteUID: "TNN1214",
      RouteID: "1214",
      RouteName: {
        Zh_tw: "藍14",
        En: "B14",
      },
      SubRouteUID: "TNN121402",
      SubRouteID: "121402",
      SubRouteName: {
        Zh_tw: "藍14 奇美佳里分院→學甲區公所",
        En: "B14 Chi Mei Jiali Hospital→Syuejia District Office",
      },
      Direction: 1,
      StopUID: "TNN24767",
      StopID: "24767",
      StopName: {
        Zh_tw: "巷埔里(北埔)",
        En: "Siangpu Vil.(Beipu)",
      },
      StopSequence: 12,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 99,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:06:15+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:42:51+08:00",
      TransTime: "2025-12-18T16:06:17+08:00",
      SrcRecTime: "2025-12-18T16:06:17+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "TDT-6130",
      OperatorID: "16202",
      OperatorNo: "",
      RouteUID: "TNN1215",
      RouteID: "1215",
      RouteName: {
        Zh_tw: "藍15",
        En: "B15",
      },
      SubRouteUID: "TNN121511",
      SubRouteID: "121511",
      SubRouteName: {
        Zh_tw: "藍15 漚汪→佳里站[僅供預約]",
        En: "B15 Ouwang→Jiali Bus Station[Reservation only]",
      },
      Direction: 0,
      StopUID: "TNN24781",
      StopID: "24781",
      StopName: {
        Zh_tw: "本善寺",
        En: "Benshan Temple",
      },
      StopSequence: 14,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 99,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:11:39+08:00",
      TripStartTimeType: 2,
      TransTime: "2025-12-18T16:11:39+08:00",
      SrcRecTime: "2025-12-18T16:11:39+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "TDT-6872",
      OperatorID: "16202",
      OperatorNo: "",
      RouteUID: "TNN1229",
      RouteID: "1229",
      RouteName: {
        Zh_tw: "藍29",
        En: "B29",
      },
      SubRouteUID: "TNN122902",
      SubRouteID: "122902",
      SubRouteName: {
        Zh_tw: "藍29 奇美佳里分院→西港",
        En: "B29 Chi Mei Jiali Hospital→Sigang",
      },
      Direction: 1,
      StopUID: "TNN25642",
      StopID: "25642",
      StopName: {
        Zh_tw: "金砂下宅子",
        En: "Jinsha Xiazhaizi",
      },
      StopSequence: 6,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 99,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:13:52+08:00",
      TripStartTimeType: 1,
      TripStartTime: "2025-12-18T15:55:50+08:00",
      TransTime: "2025-12-18T16:13:53+08:00",
      SrcRecTime: "2025-12-18T16:13:53+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "TDY-8126",
      OperatorID: "16202",
      OperatorNo: "",
      RouteUID: "TNN1214",
      RouteID: "1214",
      RouteName: {
        Zh_tw: "藍14",
        En: "B14",
      },
      SubRouteUID: "TNN121402",
      SubRouteID: "121402",
      SubRouteName: {
        Zh_tw: "藍14 奇美佳里分院→學甲區公所",
        En: "B14 Chi Mei Jiali Hospital→Syuejia District Office",
      },
      Direction: 1,
      StopUID: "TNN24765",
      StopID: "24765",
      StopName: {
        Zh_tw: "將軍里(三吉)",
        En: "Jiangjyun Vil.(Sanji)",
      },
      StopSequence: 8,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:12:41+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T16:00:32+08:00",
      TransTime: "2025-12-18T16:12:43+08:00",
      SrcRecTime: "2025-12-18T16:12:43+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "TDY-8158",
      OperatorID: "16202",
      OperatorNo: "",
      RouteUID: "TNN1215",
      RouteID: "1215",
      RouteName: {
        Zh_tw: "藍15",
        En: "B15",
      },
      SubRouteUID: "TNN121512",
      SubRouteID: "121512",
      SubRouteName: {
        Zh_tw: "藍15 佳里站→漚汪[僅供預約]",
        En: "B15 Jiali Bus Station→Ouwang[Reservation only]",
      },
      Direction: 1,
      StopUID: "TNN24797",
      StopID: "24797",
      StopName: {
        Zh_tw: "謝子寮",
        En: "Siezihliao",
      },
      StopSequence: 13,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 99,
      A2EventType: 0,
      GPSTime: "2025-12-18T15:59:53+08:00",
      TripStartTimeType: 0,
      TripStartTime: "2025-12-18T15:40:02+08:00",
      TransTime: "2025-12-18T15:59:55+08:00",
      SrcRecTime: "2025-12-18T15:59:55+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
    {
      PlateNumb: "TEA-8579",
      OperatorID: "16253",
      OperatorNo: "",
      RouteUID: "TNN1230",
      RouteID: "1230",
      RouteName: {
        Zh_tw: "藍30",
        En: "B30",
      },
      SubRouteUID: "TNN123001",
      SubRouteID: "123001",
      SubRouteName: {
        Zh_tw: "藍30 西港→佳里",
        En: "B30 Sigang→Jiali Bus Station",
      },
      Direction: 0,
      StopUID: "TNN31020",
      StopID: "31020",
      StopName: {
        Zh_tw: "南勢",
        En: "Nanshih",
      },
      StopSequence: 14,
      MessageType: 2,
      DutyStatus: 1,
      BusStatus: 0,
      A2EventType: 0,
      GPSTime: "2025-12-18T16:06:21+08:00",
      TripStartTimeType: 1,
      TripStartTime: "2025-12-18T15:38:52+08:00",
      TransTime: "2025-12-18T16:06:22+08:00",
      SrcRecTime: "2025-12-18T16:06:22+08:00",
      SrcUpdateTime: "2025-12-18T16:14:06+08:00",
      UpdateTime: "2025-12-18T16:14:06+08:00",
    },
  ];

  const subRouteCity = {
    VersionID: 8528,
    UpdateTime: "2025-12-18T00:00:00+08:00",
    UpdateInterval: 14400,
    SrcUpdateTime: "2025-12-18T01:05:06+08:00",
    SrcUpdateInterval: 86400,
    AuthorityCode: "TNN",
    SubRoutes: [
      {
        RouteUID: "TNN10019",
        RouteID: "10019",
        RouteName: {
          Zh_tw: "19",
          En: "19",
        },
        SubRouteUID: "TNN100190",
        SubRouteID: "100190",
        SubRouteName: {
          Zh_tw: "19路 安平→大灣",
          En: "19 AnPing→Dawan",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16303",
            OperatorName: {
              Zh_tw: "巨業交通(台南)",
              En: "Geya Bus Transport Co., Ltd.",
            },
            OperatorCode: "GeyaBus",
            OperatorNo: "0504",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "原住民文化會館",
          En: "The Indigenous Culture Museum",
        },
        DestinationStopName: {
          Zh_tw: "大灣高中",
          En: "Dawan Senior High School",
        },
        StartStop: {
          StopID: "16064",
          StopName: {
            Zh_tw: "原住民文化會館",
            En: "The Indigenous Culture Museum",
          },
        },
        EndStop: {
          StopID: "16107",
          StopName: {
            Zh_tw: "大灣高中",
            En: "Dawan Senior High School",
          },
        },
      },
      {
        RouteUID: "TNN10019",
        RouteID: "10019",
        RouteName: {
          Zh_tw: "19",
          En: "19",
        },
        SubRouteUID: "TNN100197",
        SubRouteID: "100197",
        SubRouteName: {
          Zh_tw: "19路 大灣→臺南海事 [延駛]",
          En: "19 Dawan→National Tainan Senior Marine Fishery Vocational School",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16303",
            OperatorName: {
              Zh_tw: "巨業交通(台南)",
              En: "Geya Bus Transport Co., Ltd.",
            },
            OperatorCode: "GeyaBus",
            OperatorNo: "0504",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "大灣高中",
          En: "Dawan Senior High School",
        },
        DestinationStopName: {
          Zh_tw: "臺南海事",
          En: "National Tainan Senior Marine Fishery Vocational S",
        },
        StartStop: {
          StopID: "16108",
          StopName: {
            Zh_tw: "大灣高中",
            En: "Dawan Senior High School",
          },
        },
        EndStop: {
          StopID: "16940",
          StopName: {
            Zh_tw: "臺南海事",
            En: "National Tainan Senior Marine Fishery Vocational School",
          },
        },
      },
      {
        RouteUID: "TNN10019",
        RouteID: "10019",
        RouteName: {
          Zh_tw: "19",
          En: "19",
        },
        SubRouteUID: "TNN100196",
        SubRouteID: "100196",
        SubRouteName: {
          Zh_tw: "19路 臺南海事→大灣 [延駛]",
          En: "19 National Tainan Senior Marine Fishery Vocational School→Dawan",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16303",
            OperatorName: {
              Zh_tw: "巨業交通(台南)",
              En: "Geya Bus Transport Co., Ltd.",
            },
            OperatorCode: "GeyaBus",
            OperatorNo: "0504",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南海事",
          En: "National Tainan Senior Marine Fishery Vocational S",
        },
        DestinationStopName: {
          Zh_tw: "大灣高中",
          En: "Dawan Senior High School",
        },
        StartStop: {
          StopID: "16928",
          StopName: {
            Zh_tw: "臺南海事",
            En: "National Tainan Senior Marine Fishery Vocational School",
          },
        },
        EndStop: {
          StopID: "16107",
          StopName: {
            Zh_tw: "大灣高中",
            En: "Dawan Senior High School",
          },
        },
      },
      {
        RouteUID: "TNN10019",
        RouteID: "10019",
        RouteName: {
          Zh_tw: "19",
          En: "19",
        },
        SubRouteUID: "TNN100191",
        SubRouteID: "100191",
        SubRouteName: {
          Zh_tw: "19路 大灣→安平",
          En: "19 Dawan→AnPing",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16303",
            OperatorName: {
              Zh_tw: "巨業交通(台南)",
              En: "Geya Bus Transport Co., Ltd.",
            },
            OperatorCode: "GeyaBus",
            OperatorNo: "0504",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "大灣高中",
          En: "Dawan Senior High School",
        },
        DestinationStopName: {
          Zh_tw: "原住民文化會館",
          En: "The Indigenous Culture Museum",
        },
        StartStop: {
          StopID: "16108",
          StopName: {
            Zh_tw: "大灣高中",
            En: "Dawan Senior High School",
          },
        },
        EndStop: {
          StopID: "16151",
          StopName: {
            Zh_tw: "原住民文化會館",
            En: "The Indigenous Culture Museum",
          },
        },
      },
      {
        RouteUID: "TNN10021",
        RouteID: "10021",
        RouteName: {
          Zh_tw: "21",
          En: "21",
        },
        SubRouteUID: "TNN100210",
        SubRouteID: "100210",
        SubRouteName: {
          Zh_tw: "21路 臺南火車站→永康工業區",
          En: "21 Tainan Train Station→Yongkang Industrial Park",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南火車站(南站)",
          En: "Tainan Train Station(South)",
        },
        DestinationStopName: {
          Zh_tw: "永康休閒育樂中心",
          En: "Yongkang Recreation Center",
        },
        StartStop: {
          StopID: "8755",
          StopName: {
            Zh_tw: "臺南火車站(南站)",
            En: "Tainan Train Station(South Station)",
          },
        },
        EndStop: {
          StopID: "16233",
          StopName: {
            Zh_tw: "永康休閒育樂中心",
            En: "Yongkang Recreation Center",
          },
        },
      },
      {
        RouteUID: "TNN10021",
        RouteID: "10021",
        RouteName: {
          Zh_tw: "21",
          En: "21",
        },
        SubRouteUID: "TNN100211",
        SubRouteID: "100211",
        SubRouteName: {
          Zh_tw: "21路 永康工業區→臺南火車站",
          En: "21 Yongkang Industrial Park→Tainan Train Station",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "永康休閒育樂中心",
          En: "Yongkang Recreation Center",
        },
        DestinationStopName: {
          Zh_tw: "臺南火車站(南站)",
          En: "Tainan Train Station(South)",
        },
        StartStop: {
          StopID: "16234",
          StopName: {
            Zh_tw: "永康休閒育樂中心",
            En: "Yongkang Recreation Center",
          },
        },
        EndStop: {
          StopID: "8810",
          StopName: {
            Zh_tw: "臺南火車站(南站)",
            En: "Tainan Train Station(South Station)",
          },
        },
      },
      {
        RouteUID: "TNN10021",
        RouteID: "10021",
        RouteName: {
          Zh_tw: "21",
          En: "21",
        },
        SubRouteUID: "TNN100212",
        SubRouteID: "100212",
        SubRouteName: {
          Zh_tw: "21路 9人小巴 臺南火車站→永康工業區(繞奇美醫院)",
          En: "21 Shuttle Taxi Tainan Train Station→Yongkang Industrial Park(Via Chi Mei Medical Center)",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16273",
            OperatorName: {
              Zh_tw: "府城小黃",
              En: "Tainan City Bus(Shuttle)",
            },
            OperatorCode: "TainanCityBus(Shuttl",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南火車站(南站)",
          En: "Tainan Train Station(South)",
        },
        DestinationStopName: {
          Zh_tw: "永康休閒育樂中心",
          En: "Yongkang Recreation Center",
        },
        StartStop: {
          StopID: "8755",
          StopName: {
            Zh_tw: "臺南火車站(南站)",
            En: "Tainan Train Station(South Station)",
          },
        },
        EndStop: {
          StopID: "16233",
          StopName: {
            Zh_tw: "永康休閒育樂中心",
            En: "Yongkang Recreation Center",
          },
        },
      },
      {
        RouteUID: "TNN10021",
        RouteID: "10021",
        RouteName: {
          Zh_tw: "21",
          En: "21",
        },
        SubRouteUID: "TNN100213",
        SubRouteID: "100213",
        SubRouteName: {
          Zh_tw: "21路 9人小巴  永康工業區→臺南火車站(繞奇美醫院)",
          En: "21 Shuttle Taxi Yongkang Industrial Park→Tainan Train Station(Via Chi Mei Medical Center)",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16273",
            OperatorName: {
              Zh_tw: "府城小黃",
              En: "Tainan City Bus(Shuttle)",
            },
            OperatorCode: "TainanCityBus(Shuttl",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "永康休閒育樂中心",
          En: "Yongkang Recreation Center",
        },
        DestinationStopName: {
          Zh_tw: "臺南火車站(南站)",
          En: "Tainan Train Station(South)",
        },
        StartStop: {
          StopID: "16234",
          StopName: {
            Zh_tw: "永康休閒育樂中心",
            En: "Yongkang Recreation Center",
          },
        },
        EndStop: {
          StopID: "8810",
          StopName: {
            Zh_tw: "臺南火車站(南站)",
            En: "Tainan Train Station(South Station)",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100914",
        SubRouteID: "100914",
        SubRouteName: {
          Zh_tw: "9路 9人小巴 東溪埔寮福安宮→臺南轉運站(繞公親里)",
          En: "9 Shuttle Taxi Dongsipuliao Fuan Temple→Tainan Bus Station(Via Gongcin Village)",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16323",
            OperatorName: {
              Zh_tw: "統聯客運(小巴)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        DestinationStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        StartStop: {
          StopID: "31164",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
        EndStop: {
          StopID: "31111",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100912",
        SubRouteID: "100912",
        SubRouteName: {
          Zh_tw: "9路 9人小巴 東溪埔寮福安宮→臺南轉運站",
          En: "9 Shuttle Taxi Dongsipuliao Fuan Temple→Tainan Bus Station",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16323",
            OperatorName: {
              Zh_tw: "統聯客運(小巴)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        DestinationStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        StartStop: {
          StopID: "31164",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
        EndStop: {
          StopID: "31111",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100902",
        SubRouteID: "100902",
        SubRouteName: {
          Zh_tw: "9路 東溪埔寮福安宮→臺南轉運站",
          En: "9 Dongsipuliao Fuan Temple→Tainan Bus Station",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16201",
            OperatorName: {
              Zh_tw: "統聯客運(台南)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        DestinationStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        StartStop: {
          StopID: "31164",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
        EndStop: {
          StopID: "31111",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100913",
        SubRouteID: "100913",
        SubRouteName: {
          Zh_tw: "9路 9人小巴 臺南轉運站→東溪埔寮福安宮(繞公親里)",
          En: "9 Shuttle Taxi Tainan Bus Station→Dongsipuliao Fuan Temple(Via Gongcin Village)",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16323",
            OperatorName: {
              Zh_tw: "統聯客運(小巴)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        StartStop: {
          StopID: "31046",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
        EndStop: {
          StopID: "31163",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100911",
        SubRouteID: "100911",
        SubRouteName: {
          Zh_tw: "9路 9人小巴 臺南轉運站→東溪埔寮福安宮",
          En: "9 Shuttle Taxi Tainan Bus Station→Dongsipuliao Fuan Temple",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16323",
            OperatorName: {
              Zh_tw: "統聯客運(小巴)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        StartStop: {
          StopID: "31046",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
        EndStop: {
          StopID: "31163",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100916",
        SubRouteID: "100916",
        SubRouteName: {
          Zh_tw: "9路 東溪埔寮福安宮→臺南轉運站(繞公親里)",
          En: "9 Dongsipuliao Fuan Temple→Tainan Bus Station(Via Gongcin Village)",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16201",
            OperatorName: {
              Zh_tw: "統聯客運(台南)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        DestinationStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        StartStop: {
          StopID: "31164",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
        EndStop: {
          StopID: "31111",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100915",
        SubRouteID: "100915",
        SubRouteName: {
          Zh_tw: "9路 臺南轉運站→東溪埔寮福安宮(繞公親里)",
          En: "9 Tainan Bus Station→Dongsipuliao Fuan Temple(Via Gongcin Village)",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16201",
            OperatorName: {
              Zh_tw: "統聯客運(台南)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        StartStop: {
          StopID: "31046",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
        EndStop: {
          StopID: "31163",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
      },
      {
        RouteUID: "TNN1009",
        RouteID: "1009",
        RouteName: {
          Zh_tw: "9",
          En: "9",
        },
        SubRouteUID: "TNN100901",
        SubRouteID: "100901",
        SubRouteName: {
          Zh_tw: "9路 臺南轉運站→東溪埔寮福安宮",
          En: "9 Tainan Bus Station→Dongsipuliao Fuan Temple",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16201",
            OperatorName: {
              Zh_tw: "統聯客運(台南)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "東溪埔寮福安宮",
          En: "Dongsipuliao Fuan Temple",
        },
        StartStop: {
          StopID: "31046",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
        EndStop: {
          StopID: "31163",
          StopName: {
            Zh_tw: "東溪埔寮福安宮",
            En: "Dongsipuliao Fuan Temple",
          },
        },
      },
      {
        RouteUID: "TNN1010",
        RouteID: "1010",
        RouteName: {
          Zh_tw: "10",
          En: "10",
        },
        SubRouteUID: "TNN101001",
        SubRouteID: "101001",
        SubRouteName: {
          Zh_tw: "10路 臺南轉運站→鹿耳門天后宮",
          En: "10 Tainan Bus Station→Luermen-Ma Temple",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16201",
            OperatorName: {
              Zh_tw: "統聯客運(台南)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "鹿耳門天后宮",
          En: "Luermen-Ma Temple",
        },
        StartStop: {
          StopID: "32359",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
        EndStop: {
          StopID: "32294",
          StopName: {
            Zh_tw: "鹿耳門天后宮",
            En: "Luermen Matsu Temple",
          },
        },
      },
      {
        RouteUID: "TNN1010",
        RouteID: "1010",
        RouteName: {
          Zh_tw: "10",
          En: "10",
        },
        SubRouteUID: "TNN101002",
        SubRouteID: "101002",
        SubRouteName: {
          Zh_tw: "10路 鹿耳門天后宮→臺南轉運站",
          En: "10 Luermen-Ma Temple→Tainan Bus Station",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "16201",
            OperatorName: {
              Zh_tw: "統聯客運(台南)",
              En: "Ubus",
            },
            OperatorCode: "UnitedHighwayBus",
            OperatorNo: "1201",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "鹿耳門天后宮",
          En: "Luermen-Ma Temple",
        },
        DestinationStopName: {
          Zh_tw: "臺南轉運站",
          En: "Tainan Train Station(North)",
        },
        StartStop: {
          StopID: "32295",
          StopName: {
            Zh_tw: "鹿耳門天后宮",
            En: "Luermen Matsu Temple",
          },
        },
        EndStop: {
          StopID: "32360",
          StopName: {
            Zh_tw: "臺南轉運站",
            En: "Tainan Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN10161",
        RouteID: "10161",
        RouteName: {
          Zh_tw: "18",
          En: "18",
        },
        SubRouteUID: "TNN101612",
        SubRouteID: "101612",
        SubRouteName: {
          Zh_tw: "18路 大成國中→和順轉運站",
          En: "18 Da-Cheng Junior High School→Heshun Bus Station",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "大成國中",
          En: "Da-Cheng Junior High School",
        },
        DestinationStopName: {
          Zh_tw: "和順轉運站",
          En: "Heshun Bus Station",
        },
        StartStop: {
          StopID: "22425",
          StopName: {
            Zh_tw: "大成國中",
            En: "Da-Cheng Junior High School",
          },
        },
        EndStop: {
          StopID: "31369",
          StopName: {
            Zh_tw: "和順轉運站",
            En: "Heshun Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN10161",
        RouteID: "10161",
        RouteName: {
          Zh_tw: "18",
          En: "18",
        },
        SubRouteUID: "TNN101761",
        SubRouteID: "101761",
        SubRouteName: {
          Zh_tw: "18路 和順轉運站→大成國中 [繞北安路]",
          En: "18 Heshun Bus Station→Da-Cheng Junior High School[Via Beian Rd.]",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "和順轉運站",
          En: "Heshun Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "大成國中",
          En: "Da-Cheng Junior High School",
        },
        StartStop: {
          StopID: "31370",
          StopName: {
            Zh_tw: "和順轉運站",
            En: "Heshun Bus Station",
          },
        },
        EndStop: {
          StopID: "22426",
          StopName: {
            Zh_tw: "大成國中",
            En: "Da-Cheng Junior High School",
          },
        },
      },
      {
        RouteUID: "TNN10161",
        RouteID: "10161",
        RouteName: {
          Zh_tw: "18",
          En: "18",
        },
        SubRouteUID: "TNN101618",
        SubRouteID: "101618",
        SubRouteName: {
          Zh_tw: "18路 大成國中→和順轉運站 [延國民路]",
          En: "18 Da-Cheng Junior High School→Heshun Bus Station[Via Guomin Rd.]",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "國民路",
          En: "Guomin Rd.",
        },
        DestinationStopName: {
          Zh_tw: "和順轉運站",
          En: "Heshun Bus Station",
        },
        StartStop: {
          StopID: "8914",
          StopName: {
            Zh_tw: "國民路",
            En: "Guomin Rd.",
          },
        },
        EndStop: {
          StopID: "31369",
          StopName: {
            Zh_tw: "和順轉運站",
            En: "Heshun Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN10161",
        RouteID: "10161",
        RouteName: {
          Zh_tw: "18",
          En: "18",
        },
        SubRouteUID: "TNN101619",
        SubRouteID: "101619",
        SubRouteName: {
          Zh_tw: "18路 和順轉運站→大成國中 [延國民路]",
          En: "18 Heshun Bus Station→Simen Rd. ＆ Da-Cheng Junior High School[Via Guomin Rd.]",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "和順轉運站",
          En: "Heshun Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "國民路",
          En: "Guomin Rd.",
        },
        StartStop: {
          StopID: "31370",
          StopName: {
            Zh_tw: "和順轉運站",
            En: "Heshun Bus Station",
          },
        },
        EndStop: {
          StopID: "8919",
          StopName: {
            Zh_tw: "國民路",
            En: "Guomin Rd.",
          },
        },
      },
      {
        RouteUID: "TNN10161",
        RouteID: "10161",
        RouteName: {
          Zh_tw: "18",
          En: "18",
        },
        SubRouteUID: "TNN101613",
        SubRouteID: "101613",
        SubRouteName: {
          Zh_tw: "18路 和順轉運站→大成國中",
          En: "18 Heshun Bus Station→Da-Cheng Junior High School",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "和順轉運站",
          En: "Heshun Bus Station",
        },
        DestinationStopName: {
          Zh_tw: "大成國中",
          En: "Da-Cheng Junior High School",
        },
        StartStop: {
          StopID: "31370",
          StopName: {
            Zh_tw: "和順轉運站",
            En: "Heshun Bus Station",
          },
        },
        EndStop: {
          StopID: "22426",
          StopName: {
            Zh_tw: "大成國中",
            En: "Da-Cheng Junior High School",
          },
        },
      },
      {
        RouteUID: "TNN10161",
        RouteID: "10161",
        RouteName: {
          Zh_tw: "18",
          En: "18",
        },
        SubRouteUID: "TNN101760",
        SubRouteID: "101760",
        SubRouteName: {
          Zh_tw: "18路 大成國中→和順轉運站 [繞北安路]",
          En: "18 Da-Cheng Junior High School→Heshun Bus Station[Via Beian Rd.]",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "大成國中",
          En: "Da-Cheng Junior High School",
        },
        DestinationStopName: {
          Zh_tw: "和順轉運站",
          En: "Heshun Bus Station",
        },
        StartStop: {
          StopID: "22425",
          StopName: {
            Zh_tw: "大成國中",
            En: "Da-Cheng Junior High School",
          },
        },
        EndStop: {
          StopID: "31369",
          StopName: {
            Zh_tw: "和順轉運站",
            En: "Heshun Bus Station",
          },
        },
      },
      {
        RouteUID: "TNN10162",
        RouteID: "10162",
        RouteName: {
          Zh_tw: "2",
          En: "2",
        },
        SubRouteUID: "TNN101624",
        SubRouteID: "101624",
        SubRouteName: {
          Zh_tw: "2路 白鷺灣社區→崑山科大",
          En: "2 Bailuwan Community→Kun Shan University",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "白鷺灣社區",
          En: "Bailuwan Community",
        },
        DestinationStopName: {
          Zh_tw: "崑山科大",
          En: "Kun Shan University",
        },
        StartStop: {
          StopID: "14382",
          StopName: {
            Zh_tw: "白鷺灣社區",
            En: "Bailuwan Community",
          },
        },
        EndStop: {
          StopID: "9057",
          StopName: {
            Zh_tw: "崑山科大",
            En: "Kun Shan University of Technology",
          },
        },
      },
      {
        RouteUID: "TNN10162",
        RouteID: "10162",
        RouteName: {
          Zh_tw: "2",
          En: "2",
        },
        SubRouteUID: "TNN101723",
        SubRouteID: "101723",
        SubRouteName: {
          Zh_tw: "2路 三鯤鯓→崑山科大",
          En: "2 Sankunshen→Kun Shan University",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "三鯤鯓",
          En: "SanKunShen",
        },
        DestinationStopName: {
          Zh_tw: "崑山科大",
          En: "Kun Shan University",
        },
        StartStop: {
          StopID: "10823",
          StopName: {
            Zh_tw: "三鯤鯓",
            En: "SanKunShen",
          },
        },
        EndStop: {
          StopID: "9057",
          StopName: {
            Zh_tw: "崑山科大",
            En: "Kun Shan University of Technology",
          },
        },
      },
      {
        RouteUID: "TNN10162",
        RouteID: "10162",
        RouteName: {
          Zh_tw: "2",
          En: "2",
        },
        SubRouteUID: "TNN101626",
        SubRouteID: "101626",
        SubRouteName: {
          Zh_tw: "2路 崑山科大→四草",
          En: "2 Kun Shan University→Sihcao",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "崑山科大",
          En: "Kun Shan University",
        },
        DestinationStopName: {
          Zh_tw: "四草",
          En: "Sih-Cao",
        },
        StartStop: {
          StopID: "9001",
          StopName: {
            Zh_tw: "崑山科大",
            En: "Kun Shan University",
          },
        },
        EndStop: {
          StopID: "13979",
          StopName: {
            Zh_tw: "四草",
            En: "Sih-Cao",
          },
        },
      },
      {
        RouteUID: "TNN10162",
        RouteID: "10162",
        RouteName: {
          Zh_tw: "2",
          En: "2",
        },
        SubRouteUID: "TNN101726",
        SubRouteID: "101726",
        SubRouteName: {
          Zh_tw: "2路 崑山科大→白鷺灣社區(經復華里)",
          En: "2 Kun Shan University→Bailuwan Community[Via Fuhua Vil.]",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "崑山科大",
          En: "Kun Shan University",
        },
        DestinationStopName: {
          Zh_tw: "白鷺灣社區",
          En: "Bailuwan Community",
        },
        StartStop: {
          StopID: "9001",
          StopName: {
            Zh_tw: "崑山科大",
            En: "Kun Shan University",
          },
        },
        EndStop: {
          StopID: "14381",
          StopName: {
            Zh_tw: "白鷺灣社區",
            En: "Bailuwan Community",
          },
        },
      },
      {
        RouteUID: "TNN10162",
        RouteID: "10162",
        RouteName: {
          Zh_tw: "2",
          En: "2",
        },
        SubRouteUID: "TNN101627",
        SubRouteID: "101627",
        SubRouteName: {
          Zh_tw: "2路 四草→崑山科大",
          En: "2 Sihcao→Kun Shan University",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 1,
        DepartureStopName: {
          Zh_tw: "四草",
          En: "Sih-Cao",
        },
        DestinationStopName: {
          Zh_tw: "崑山科大",
          En: "Kun Shan University",
        },
        StartStop: {
          StopID: "13990",
          StopName: {
            Zh_tw: "四草",
            En: "Sih-Cao",
          },
        },
        EndStop: {
          StopID: "9057",
          StopName: {
            Zh_tw: "崑山科大",
            En: "Kun Shan University of Technology",
          },
        },
      },
      {
        RouteUID: "TNN10162",
        RouteID: "10162",
        RouteName: {
          Zh_tw: "2",
          En: "2",
        },
        SubRouteUID: "TNN101623",
        SubRouteID: "101623",
        SubRouteName: {
          Zh_tw: "2路 崑山科大→白鷺灣社區",
          En: "2 Kun Shan University→Bailuwan Community",
        },
        SubRouteLongName: {},
        Operators: [
          {
            OperatorID: "10001",
            OperatorName: {
              Zh_tw: "府城客運",
              En: "Tainan City Bus",
            },
            OperatorCode: "TainanCityBus",
            OperatorNo: "0803",
          },
        ],
        Direction: 0,
        DepartureStopName: {
          Zh_tw: "崑山科大",
          En: "Kun Shan University",
        },
        DestinationStopName: {
          Zh_tw: "白鷺灣社區",
          En: "Bailuwan Community",
        },
        StartStop: {
          StopID: "9001",
          StopName: {
            Zh_tw: "崑山科大",
            En: "Kun Shan University",
          },
        },
        EndStop: {
          StopID: "14381",
          StopName: {
            Zh_tw: "白鷺灣社區",
            En: "Bailuwan Community",
          },
        },
      },
    ],
  };
  const maxBodyLengthapNameURL = {
  "VersionID": 8528,
  "UpdateTime": "2025-12-18T00:00:00+08:00",
  "UpdateInterval": 14400,
  "SrcUpdateTime": "2025-12-18T01:05:08+08:00",
  "SrcUpdateInterval": 86400,
  "AuthorityCode": "TNN",
  "StopOfRoutes": [
    {
      "RouteUID": "TNN10019",
      "RouteID": "10019",
      "RouteName": {
        "Zh_tw": "19",
        "En": "19"
      },
      "Operators": [
        {
          "OperatorID": "16303",
          "OperatorName": {
            "Zh_tw": "巨業交通(台南)",
            "En": "Geya Bus Transport Co., Ltd."
          },
          "OperatorCode": "GeyaBus",
          "OperatorNo": "0504"
        }
      ],
      "SubRouteUID": "TNN100190",
      "SubRouteID": "100190",
      "SubRouteName": {
        "Zh_tw": "19路 安平→大灣",
        "En": "19 AnPing→Dawan"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN16064",
          "StopID": "16064",
          "StopName": {
            "Zh_tw": "原住民文化會館",
            "En": "The Indigenous Culture Museum"
          },
          "BoardingType": 1,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.16366,
            "PositionLat": 22.99585
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16065",
          "StopID": "16065",
          "StopName": {
            "Zh_tw": "安平港濱歷史公園",
            "En": "Anping Harborside Historic Park"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.16216,
            "PositionLat": 22.99462
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16066",
          "StopID": "16066",
          "StopName": {
            "Zh_tw": "林默娘公園",
            "En": "LinMoNiang Park"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.15746,
            "PositionLat": 22.99338
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16462",
          "StopID": "16462",
          "StopName": {
            "Zh_tw": "德陽艦",
            "En": "TEYANG Destroyer"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.15687,
            "PositionLat": 22.98873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16067",
          "StopID": "16067",
          "StopName": {
            "Zh_tw": "億載金城",
            "En": "Eternal Golden Castle"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.16026,
            "PositionLat": 22.98909
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN28378",
          "StopID": "28378",
          "StopName": {
            "Zh_tw": "安平雅樂軒酒店",
            "En": "Aloft Tainan Anping"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.16008,
            "PositionLat": 22.99021
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16068",
          "StopID": "16068",
          "StopName": {
            "Zh_tw": "貢噶寺",
            "En": "Gongge Temple"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.16061,
            "PositionLat": 22.99155
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16069",
          "StopID": "16069",
          "StopName": {
            "Zh_tw": "平豐路口",
            "En": "Pingfeng Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.16471,
            "PositionLat": 22.99169
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16070",
          "StopID": "16070",
          "StopName": {
            "Zh_tw": "國平路口",
            "En": "Guoping Rd. Intersection"
          },
          "BoardingType": 1,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.17061,
            "PositionLat": 22.99109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16071",
          "StopID": "16071",
          "StopName": {
            "Zh_tw": "健康二街口",
            "En": "Jiankang 2nd St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.17396,
            "PositionLat": 22.99069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16072",
          "StopID": "16072",
          "StopName": {
            "Zh_tw": "華平路口",
            "En": "Huaping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.17533,
            "PositionLat": 22.99052
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16073",
          "StopID": "16073",
          "StopName": {
            "Zh_tw": "文平路口",
            "En": "Wunping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.17783,
            "PositionLat": 22.99014
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16074",
          "StopID": "16074",
          "StopName": {
            "Zh_tw": "南台別院",
            "En": "Nan Tai Temple"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.18294,
            "PositionLat": 22.98949
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16075",
          "StopID": "16075",
          "StopName": {
            "Zh_tw": "市政中心(永華路)",
            "En": "Tainan City Hall(Yonghua Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.18503,
            "PositionLat": 22.98921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16076",
          "StopID": "16076",
          "StopName": {
            "Zh_tw": "家樂福",
            "En": "Carrefour"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.18761,
            "PositionLat": 22.98886
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16077",
          "StopID": "16077",
          "StopName": {
            "Zh_tw": "文南路口",
            "En": "Wunnan Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.18962,
            "PositionLat": 22.98862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16078",
          "StopID": "16078",
          "StopName": {
            "Zh_tw": "水萍塭公園",
            "En": "Shueipingwun Park"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.19262,
            "PositionLat": 22.98794
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16079",
          "StopID": "16079",
          "StopName": {
            "Zh_tw": "永華站",
            "En": "Yonghua Bus Station"
          },
          "BoardingType": 1,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.19662,
            "PositionLat": 22.98737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16080",
          "StopID": "16080",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16081",
          "StopID": "16081",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16082",
          "StopID": "16082",
          "StopName": {
            "Zh_tw": "中正、西門路口",
            "En": "Jhongjheng Rd.＆Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.19983,
            "PositionLat": 22.99244
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16083",
          "StopID": "16083",
          "StopName": {
            "Zh_tw": "林百貨(中正路)",
            "En": "Hayashi Department Store (Jhongjheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20172,
            "PositionLat": 22.99202
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16084",
          "StopID": "16084",
          "StopName": {
            "Zh_tw": "大遠百",
            "En": "FE21’ Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20567,
            "PositionLat": 22.99535
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16085",
          "StopID": "16085",
          "StopName": {
            "Zh_tw": "南區健保局",
            "En": "NHI Southern Region Branch"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20677,
            "PositionLat": 22.99744
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16086",
          "StopID": "16086",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16087",
          "StopID": "16087",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16088",
          "StopID": "16088",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16089",
          "StopID": "16089",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siaodong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21568,
            "PositionLat": 23.00115
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16090",
          "StopID": "16090",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.00092
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16091",
          "StopID": "16091",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.22137,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16092",
          "StopID": "16092",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.22527,
            "PositionLat": 23.00038
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16093",
          "StopID": "16093",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.22892,
            "PositionLat": 22.99946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16094",
          "StopID": "16094",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.23221,
            "PositionLat": 22.99858
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16095",
          "StopID": "16095",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.23596,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16096",
          "StopID": "16096",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.23813,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16097",
          "StopID": "16097",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Ying-Jyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.24312,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16098",
          "StopID": "16098",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.24592,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16099",
          "StopID": "16099",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.24932,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16100",
          "StopID": "16100",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University of Technology"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.25291,
            "PositionLat": 22.99896
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16101",
          "StopID": "16101",
          "StopName": {
            "Zh_tw": "崑山社區",
            "En": "Kunshan Community"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.25514,
            "PositionLat": 22.99945
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16102",
          "StopID": "16102",
          "StopName": {
            "Zh_tw": "天公廟",
            "En": "Tiangong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.25758,
            "PositionLat": 22.99991
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16103",
          "StopID": "16103",
          "StopName": {
            "Zh_tw": "埔子尾",
            "En": "Puzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.26196,
            "PositionLat": 23.00076
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16104",
          "StopID": "16104",
          "StopName": {
            "Zh_tw": "南灣",
            "En": "Nanwan"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.26534,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16105",
          "StopID": "16105",
          "StopName": {
            "Zh_tw": "大灣三街",
            "En": "Dawan 3rd St."
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.26616,
            "PositionLat": 23.00439
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16411",
          "StopID": "16411",
          "StopName": {
            "Zh_tw": "廣護宮",
            "En": "Guanghu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.26705,
            "PositionLat": 23.00587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16106",
          "StopID": "16106",
          "StopName": {
            "Zh_tw": "大灣",
            "En": "Dawan"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.26833,
            "PositionLat": 23.00811
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16316",
          "StopID": "16316",
          "StopName": {
            "Zh_tw": "姓鄭仔",
            "En": "Singchengzai"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.27016,
            "PositionLat": 23.01074
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16317",
          "StopID": "16317",
          "StopName": {
            "Zh_tw": "文賢街",
            "En": "Wunsian St."
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.27195,
            "PositionLat": 23.00946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16107",
          "StopID": "16107",
          "StopName": {
            "Zh_tw": "大灣高中",
            "En": "Dawan Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.27161,
            "PositionLat": 23.00679
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10019",
      "RouteID": "10019",
      "RouteName": {
        "Zh_tw": "19",
        "En": "19"
      },
      "Operators": [
        {
          "OperatorID": "16303",
          "OperatorName": {
            "Zh_tw": "巨業交通(台南)",
            "En": "Geya Bus Transport Co., Ltd."
          },
          "OperatorCode": "GeyaBus",
          "OperatorNo": "0504"
        }
      ],
      "SubRouteUID": "TNN100197",
      "SubRouteID": "100197",
      "SubRouteName": {
        "Zh_tw": "19路 大灣→臺南海事 [延駛]",
        "En": "19 Dawan→National Tainan Senior Marine Fishery Vocational School"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN16108",
          "StopID": "16108",
          "StopName": {
            "Zh_tw": "大灣高中",
            "En": "Dawan Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.27168,
            "PositionLat": 23.00693
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16318",
          "StopID": "16318",
          "StopName": {
            "Zh_tw": "文賢街",
            "En": "Wunsian St."
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.27204,
            "PositionLat": 23.00921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16319",
          "StopID": "16319",
          "StopName": {
            "Zh_tw": "姓鄭仔",
            "En": "Singchengzai"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.27029,
            "PositionLat": 23.01106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16109",
          "StopID": "16109",
          "StopName": {
            "Zh_tw": "大灣",
            "En": "Dawan"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.26951,
            "PositionLat": 23.00989
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16412",
          "StopID": "16412",
          "StopName": {
            "Zh_tw": "廣護宮",
            "En": "Guanghu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.26759,
            "PositionLat": 23.00704
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16110",
          "StopID": "16110",
          "StopName": {
            "Zh_tw": "大灣三街",
            "En": "Dawan 3rd St."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.26597,
            "PositionLat": 23.00418
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16111",
          "StopID": "16111",
          "StopName": {
            "Zh_tw": "南灣",
            "En": "Nanwan"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.26521,
            "PositionLat": 23.00276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16112",
          "StopID": "16112",
          "StopName": {
            "Zh_tw": "埔子尾",
            "En": "Puzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.26201,
            "PositionLat": 23.00083
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16113",
          "StopID": "16113",
          "StopName": {
            "Zh_tw": "天公廟",
            "En": "Tiangong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.25727,
            "PositionLat": 22.99995
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16114",
          "StopID": "16114",
          "StopName": {
            "Zh_tw": "崑山社區",
            "En": "Kunshan Community"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.25521,
            "PositionLat": 22.99949
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16115",
          "StopID": "16115",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.25281,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16116",
          "StopID": "16116",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.24933,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16117",
          "StopID": "16117",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.24621,
            "PositionLat": 22.99872
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16118",
          "StopID": "16118",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Yingjyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.24336,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16119",
          "StopID": "16119",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.23969,
            "PositionLat": 22.99857
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16120",
          "StopID": "16120",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.23598,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16121",
          "StopID": "16121",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.23257,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16122",
          "StopID": "16122",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.22912,
            "PositionLat": 22.99963
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16123",
          "StopID": "16123",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.22531,
            "PositionLat": 23.00055
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16124",
          "StopID": "16124",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.22142,
            "PositionLat": 23.00089
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16125",
          "StopID": "16125",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21812,
            "PositionLat": 23.00109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16126",
          "StopID": "16126",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siao-Dong Road"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21601,
            "PositionLat": 23.00131
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16127",
          "StopID": "16127",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16128",
          "StopID": "16128",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16130",
          "StopID": "16130",
          "StopName": {
            "Zh_tw": "南區健保局",
            "En": "NHI Southern Region Branch"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20641,
            "PositionLat": 22.99708
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16131",
          "StopID": "16131",
          "StopName": {
            "Zh_tw": "大遠百",
            "En": "FE21’ Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.20566,
            "PositionLat": 22.99546
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16132",
          "StopID": "16132",
          "StopName": {
            "Zh_tw": "林百貨(中正路)",
            "En": "Hayashi Department Store (Jhongjheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.20224,
            "PositionLat": 22.99206
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16133",
          "StopID": "16133",
          "StopName": {
            "Zh_tw": "中正、西門路口",
            "En": "Jhongjheng Rd.＆Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19994,
            "PositionLat": 22.99257
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16134",
          "StopID": "16134",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16135",
          "StopID": "16135",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16136",
          "StopID": "16136",
          "StopName": {
            "Zh_tw": "永華站",
            "En": "Yonghua Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19661,
            "PositionLat": 22.98746
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16137",
          "StopID": "16137",
          "StopName": {
            "Zh_tw": "水萍塭公園",
            "En": "Shueipingwun Park"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19282,
            "PositionLat": 22.98802
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16138",
          "StopID": "16138",
          "StopName": {
            "Zh_tw": "文南路口",
            "En": "Wunnan Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18973,
            "PositionLat": 22.98862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16139",
          "StopID": "16139",
          "StopName": {
            "Zh_tw": "家樂福",
            "En": "Carrefour"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18789,
            "PositionLat": 22.98897
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16140",
          "StopID": "16140",
          "StopName": {
            "Zh_tw": "市政中心(永華路)",
            "En": "Tainan City Hall(Yonghua Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18489,
            "PositionLat": 22.98942
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16141",
          "StopID": "16141",
          "StopName": {
            "Zh_tw": "南台別院",
            "En": "Nan Tai Temple"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18311,
            "PositionLat": 22.98967
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16142",
          "StopID": "16142",
          "StopName": {
            "Zh_tw": "文平路口",
            "En": "Wunping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.17783,
            "PositionLat": 22.99031
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16143",
          "StopID": "16143",
          "StopName": {
            "Zh_tw": "華平路口",
            "En": "Huaping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.17557,
            "PositionLat": 22.99065
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16144",
          "StopID": "16144",
          "StopName": {
            "Zh_tw": "健康二街口",
            "En": "Jiankang 2nd St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.17398,
            "PositionLat": 22.99084
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16145",
          "StopID": "16145",
          "StopName": {
            "Zh_tw": "國平路口",
            "En": "Guoping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.17054,
            "PositionLat": 22.99125
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16146",
          "StopID": "16146",
          "StopName": {
            "Zh_tw": "平豐路口",
            "En": "Pingfeng Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.16441,
            "PositionLat": 22.99195
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16147",
          "StopID": "16147",
          "StopName": {
            "Zh_tw": "貢噶寺",
            "En": "Gongge Temple"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.16058,
            "PositionLat": 22.99174
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN28379",
          "StopID": "28379",
          "StopName": {
            "Zh_tw": "安平雅樂軒酒店",
            "En": "Aloft Tainan Anping"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.15981,
            "PositionLat": 22.99094
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16148",
          "StopID": "16148",
          "StopName": {
            "Zh_tw": "億載金城",
            "En": "Eternal Golden Castle"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.16013,
            "PositionLat": 22.98907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16463",
          "StopID": "16463",
          "StopName": {
            "Zh_tw": "德陽艦",
            "En": "TEYANG Destroyer"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.15711,
            "PositionLat": 22.98875
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16149",
          "StopID": "16149",
          "StopName": {
            "Zh_tw": "林默娘公園",
            "En": "Lin-Mo-Niang Park"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.15757,
            "PositionLat": 22.99336
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16150",
          "StopID": "16150",
          "StopName": {
            "Zh_tw": "安平港濱歷史公園",
            "En": "Anping Harborside Historic Park"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.16216,
            "PositionLat": 22.99455
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16151",
          "StopID": "16151",
          "StopName": {
            "Zh_tw": "原住民文化會館",
            "En": "The Indigenous Culture Museum"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.16391,
            "PositionLat": 22.99573
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16934",
          "StopID": "16934",
          "StopName": {
            "Zh_tw": "運河博物館",
            "En": "Canal Museum"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.16376,
            "PositionLat": 22.99886
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16935",
          "StopID": "16935",
          "StopName": {
            "Zh_tw": "延平街",
            "En": "Yanping St."
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.16434,
            "PositionLat": 23.00058
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16936",
          "StopID": "16936",
          "StopName": {
            "Zh_tw": "安平蚵灰窯文化館",
            "En": "Anping Oyster Shell Cement Kiln Museum"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.16428,
            "PositionLat": 23.00243
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16937",
          "StopID": "16937",
          "StopName": {
            "Zh_tw": "安平古堡(安北路)",
            "En": "Fort Zeelandia(An-Bei Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.16052,
            "PositionLat": 23.00278
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16938",
          "StopID": "16938",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.15828,
            "PositionLat": 23.00221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16939",
          "StopID": "16939",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.15426,
            "PositionLat": 23.00044
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16940",
          "StopID": "16940",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.15237,
            "PositionLat": 22.99343
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10019",
      "RouteID": "10019",
      "RouteName": {
        "Zh_tw": "19",
        "En": "19"
      },
      "Operators": [
        {
          "OperatorID": "16303",
          "OperatorName": {
            "Zh_tw": "巨業交通(台南)",
            "En": "Geya Bus Transport Co., Ltd."
          },
          "OperatorCode": "GeyaBus",
          "OperatorNo": "0504"
        }
      ],
      "SubRouteUID": "TNN100196",
      "SubRouteID": "100196",
      "SubRouteName": {
        "Zh_tw": "19路 臺南海事→大灣 [延駛]",
        "En": "19 National Tainan Senior Marine Fishery Vocational School→Dawan"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN16928",
          "StopID": "16928",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.15231,
            "PositionLat": 22.99334
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16929",
          "StopID": "16929",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.15414,
            "PositionLat": 23.00035
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16930",
          "StopID": "16930",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋",
            "En": "Old Tait＆Co. Merchant House、Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.15836,
            "PositionLat": 23.00221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16931",
          "StopID": "16931",
          "StopName": {
            "Zh_tw": "安平古堡(安北路)",
            "En": "Anping Fort(Anbei Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.16138,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16932",
          "StopID": "16932",
          "StopName": {
            "Zh_tw": "延平街",
            "En": "Yen-Ping Street"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.16417,
            "PositionLat": 23.00045
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16933",
          "StopID": "16933",
          "StopName": {
            "Zh_tw": "運河博物館",
            "En": "Canal Museum"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.16372,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16064",
          "StopID": "16064",
          "StopName": {
            "Zh_tw": "原住民文化會館",
            "En": "The Indigenous Culture Museum"
          },
          "BoardingType": 1,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.16366,
            "PositionLat": 22.99585
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16065",
          "StopID": "16065",
          "StopName": {
            "Zh_tw": "安平港濱歷史公園",
            "En": "Anping Harborside Historic Park"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.16216,
            "PositionLat": 22.99462
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16066",
          "StopID": "16066",
          "StopName": {
            "Zh_tw": "林默娘公園",
            "En": "LinMoNiang Park"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.15746,
            "PositionLat": 22.99338
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16462",
          "StopID": "16462",
          "StopName": {
            "Zh_tw": "德陽艦",
            "En": "TEYANG Destroyer"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.15687,
            "PositionLat": 22.98873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16067",
          "StopID": "16067",
          "StopName": {
            "Zh_tw": "億載金城",
            "En": "Eternal Golden Castle"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.16026,
            "PositionLat": 22.98909
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN28378",
          "StopID": "28378",
          "StopName": {
            "Zh_tw": "安平雅樂軒酒店",
            "En": "Aloft Tainan Anping"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.16008,
            "PositionLat": 22.99021
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16068",
          "StopID": "16068",
          "StopName": {
            "Zh_tw": "貢噶寺",
            "En": "Gongge Temple"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.16061,
            "PositionLat": 22.99155
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16069",
          "StopID": "16069",
          "StopName": {
            "Zh_tw": "平豐路口",
            "En": "Pingfeng Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.16471,
            "PositionLat": 22.99169
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16070",
          "StopID": "16070",
          "StopName": {
            "Zh_tw": "國平路口",
            "En": "Guoping Rd. Intersection"
          },
          "BoardingType": 1,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.17061,
            "PositionLat": 22.99109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16071",
          "StopID": "16071",
          "StopName": {
            "Zh_tw": "健康二街口",
            "En": "Jiankang 2nd St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.17396,
            "PositionLat": 22.99069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16072",
          "StopID": "16072",
          "StopName": {
            "Zh_tw": "華平路口",
            "En": "Huaping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.17533,
            "PositionLat": 22.99052
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16073",
          "StopID": "16073",
          "StopName": {
            "Zh_tw": "文平路口",
            "En": "Wunping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.17783,
            "PositionLat": 22.99014
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16074",
          "StopID": "16074",
          "StopName": {
            "Zh_tw": "南台別院",
            "En": "Nan Tai Temple"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.18294,
            "PositionLat": 22.98949
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16075",
          "StopID": "16075",
          "StopName": {
            "Zh_tw": "市政中心(永華路)",
            "En": "Tainan City Hall(Yonghua Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.18503,
            "PositionLat": 22.98921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16076",
          "StopID": "16076",
          "StopName": {
            "Zh_tw": "家樂福",
            "En": "Carrefour"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.18761,
            "PositionLat": 22.98886
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16077",
          "StopID": "16077",
          "StopName": {
            "Zh_tw": "文南路口",
            "En": "Wunnan Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.18962,
            "PositionLat": 22.98862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16078",
          "StopID": "16078",
          "StopName": {
            "Zh_tw": "水萍塭公園",
            "En": "Shueipingwun Park"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.19262,
            "PositionLat": 22.98794
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16079",
          "StopID": "16079",
          "StopName": {
            "Zh_tw": "永華站",
            "En": "Yonghua Bus Station"
          },
          "BoardingType": 1,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.19662,
            "PositionLat": 22.98737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16080",
          "StopID": "16080",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16081",
          "StopID": "16081",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16082",
          "StopID": "16082",
          "StopName": {
            "Zh_tw": "中正、西門路口",
            "En": "Jhongjheng Rd.＆Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19983,
            "PositionLat": 22.99244
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16083",
          "StopID": "16083",
          "StopName": {
            "Zh_tw": "林百貨(中正路)",
            "En": "Hayashi Department Store (Jhongjheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.20172,
            "PositionLat": 22.99202
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16084",
          "StopID": "16084",
          "StopName": {
            "Zh_tw": "大遠百",
            "En": "FE21’ Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.20567,
            "PositionLat": 22.99535
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16085",
          "StopID": "16085",
          "StopName": {
            "Zh_tw": "南區健保局",
            "En": "NHI Southern Region Branch"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.20677,
            "PositionLat": 22.99744
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16086",
          "StopID": "16086",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16087",
          "StopID": "16087",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16088",
          "StopID": "16088",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16089",
          "StopID": "16089",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siaodong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21568,
            "PositionLat": 23.00115
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16090",
          "StopID": "16090",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.00092
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16091",
          "StopID": "16091",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.22137,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16092",
          "StopID": "16092",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.22527,
            "PositionLat": 23.00038
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16093",
          "StopID": "16093",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.22892,
            "PositionLat": 22.99946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16094",
          "StopID": "16094",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.23221,
            "PositionLat": 22.99858
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16095",
          "StopID": "16095",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.23596,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16096",
          "StopID": "16096",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.23813,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16097",
          "StopID": "16097",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Ying-Jyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.24312,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16098",
          "StopID": "16098",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.24592,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16099",
          "StopID": "16099",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.24932,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16100",
          "StopID": "16100",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University of Technology"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.25291,
            "PositionLat": 22.99896
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16101",
          "StopID": "16101",
          "StopName": {
            "Zh_tw": "崑山社區",
            "En": "Kunshan Community"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.25514,
            "PositionLat": 22.99945
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16102",
          "StopID": "16102",
          "StopName": {
            "Zh_tw": "天公廟",
            "En": "Tiangong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.25758,
            "PositionLat": 22.99991
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16103",
          "StopID": "16103",
          "StopName": {
            "Zh_tw": "埔子尾",
            "En": "Puzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.26196,
            "PositionLat": 23.00076
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16104",
          "StopID": "16104",
          "StopName": {
            "Zh_tw": "南灣",
            "En": "Nanwan"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.26534,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16105",
          "StopID": "16105",
          "StopName": {
            "Zh_tw": "大灣三街",
            "En": "Dawan 3rd St."
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.26616,
            "PositionLat": 23.00439
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16411",
          "StopID": "16411",
          "StopName": {
            "Zh_tw": "廣護宮",
            "En": "Guanghu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.26705,
            "PositionLat": 23.00587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16106",
          "StopID": "16106",
          "StopName": {
            "Zh_tw": "大灣",
            "En": "Dawan"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.26833,
            "PositionLat": 23.00811
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16316",
          "StopID": "16316",
          "StopName": {
            "Zh_tw": "姓鄭仔",
            "En": "Singchengzai"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.27016,
            "PositionLat": 23.01074
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16317",
          "StopID": "16317",
          "StopName": {
            "Zh_tw": "文賢街",
            "En": "Wunsian St."
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.27195,
            "PositionLat": 23.00946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16107",
          "StopID": "16107",
          "StopName": {
            "Zh_tw": "大灣高中",
            "En": "Dawan Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.27161,
            "PositionLat": 23.00679
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10019",
      "RouteID": "10019",
      "RouteName": {
        "Zh_tw": "19",
        "En": "19"
      },
      "Operators": [
        {
          "OperatorID": "16303",
          "OperatorName": {
            "Zh_tw": "巨業交通(台南)",
            "En": "Geya Bus Transport Co., Ltd."
          },
          "OperatorCode": "GeyaBus",
          "OperatorNo": "0504"
        }
      ],
      "SubRouteUID": "TNN100191",
      "SubRouteID": "100191",
      "SubRouteName": {
        "Zh_tw": "19路 大灣→安平",
        "En": "19 Dawan→AnPing"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN16108",
          "StopID": "16108",
          "StopName": {
            "Zh_tw": "大灣高中",
            "En": "Dawan Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.27168,
            "PositionLat": 23.00693
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16318",
          "StopID": "16318",
          "StopName": {
            "Zh_tw": "文賢街",
            "En": "Wunsian St."
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.27204,
            "PositionLat": 23.00921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16319",
          "StopID": "16319",
          "StopName": {
            "Zh_tw": "姓鄭仔",
            "En": "Singchengzai"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.27029,
            "PositionLat": 23.01106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16109",
          "StopID": "16109",
          "StopName": {
            "Zh_tw": "大灣",
            "En": "Dawan"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.26951,
            "PositionLat": 23.00989
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16412",
          "StopID": "16412",
          "StopName": {
            "Zh_tw": "廣護宮",
            "En": "Guanghu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.26759,
            "PositionLat": 23.00704
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16110",
          "StopID": "16110",
          "StopName": {
            "Zh_tw": "大灣三街",
            "En": "Dawan 3rd St."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.26597,
            "PositionLat": 23.00418
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16111",
          "StopID": "16111",
          "StopName": {
            "Zh_tw": "南灣",
            "En": "Nanwan"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.26521,
            "PositionLat": 23.00276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16112",
          "StopID": "16112",
          "StopName": {
            "Zh_tw": "埔子尾",
            "En": "Puzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.26201,
            "PositionLat": 23.00083
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16113",
          "StopID": "16113",
          "StopName": {
            "Zh_tw": "天公廟",
            "En": "Tiangong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.25727,
            "PositionLat": 22.99995
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16114",
          "StopID": "16114",
          "StopName": {
            "Zh_tw": "崑山社區",
            "En": "Kunshan Community"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.25521,
            "PositionLat": 22.99949
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16115",
          "StopID": "16115",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.25281,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16116",
          "StopID": "16116",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.24933,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16117",
          "StopID": "16117",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.24621,
            "PositionLat": 22.99872
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16118",
          "StopID": "16118",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Yingjyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.24336,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16119",
          "StopID": "16119",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.23969,
            "PositionLat": 22.99857
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16120",
          "StopID": "16120",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.23598,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16121",
          "StopID": "16121",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.23257,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16122",
          "StopID": "16122",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.22912,
            "PositionLat": 22.99963
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16123",
          "StopID": "16123",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.22531,
            "PositionLat": 23.00055
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16124",
          "StopID": "16124",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.22142,
            "PositionLat": 23.00089
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16125",
          "StopID": "16125",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21812,
            "PositionLat": 23.00109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16126",
          "StopID": "16126",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siao-Dong Road"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21601,
            "PositionLat": 23.00131
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16127",
          "StopID": "16127",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16128",
          "StopID": "16128",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16130",
          "StopID": "16130",
          "StopName": {
            "Zh_tw": "南區健保局",
            "En": "NHI Southern Region Branch"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20641,
            "PositionLat": 22.99708
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16131",
          "StopID": "16131",
          "StopName": {
            "Zh_tw": "大遠百",
            "En": "FE21’ Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.20566,
            "PositionLat": 22.99546
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16132",
          "StopID": "16132",
          "StopName": {
            "Zh_tw": "林百貨(中正路)",
            "En": "Hayashi Department Store (Jhongjheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.20224,
            "PositionLat": 22.99206
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16133",
          "StopID": "16133",
          "StopName": {
            "Zh_tw": "中正、西門路口",
            "En": "Jhongjheng Rd.＆Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19994,
            "PositionLat": 22.99257
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16134",
          "StopID": "16134",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16135",
          "StopID": "16135",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16136",
          "StopID": "16136",
          "StopName": {
            "Zh_tw": "永華站",
            "En": "Yonghua Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19661,
            "PositionLat": 22.98746
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16137",
          "StopID": "16137",
          "StopName": {
            "Zh_tw": "水萍塭公園",
            "En": "Shueipingwun Park"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19282,
            "PositionLat": 22.98802
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16138",
          "StopID": "16138",
          "StopName": {
            "Zh_tw": "文南路口",
            "En": "Wunnan Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18973,
            "PositionLat": 22.98862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16139",
          "StopID": "16139",
          "StopName": {
            "Zh_tw": "家樂福",
            "En": "Carrefour"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18789,
            "PositionLat": 22.98897
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16140",
          "StopID": "16140",
          "StopName": {
            "Zh_tw": "市政中心(永華路)",
            "En": "Tainan City Hall(Yonghua Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18489,
            "PositionLat": 22.98942
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16141",
          "StopID": "16141",
          "StopName": {
            "Zh_tw": "南台別院",
            "En": "Nan Tai Temple"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18311,
            "PositionLat": 22.98967
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16142",
          "StopID": "16142",
          "StopName": {
            "Zh_tw": "文平路口",
            "En": "Wunping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.17783,
            "PositionLat": 22.99031
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16143",
          "StopID": "16143",
          "StopName": {
            "Zh_tw": "華平路口",
            "En": "Huaping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.17557,
            "PositionLat": 22.99065
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16144",
          "StopID": "16144",
          "StopName": {
            "Zh_tw": "健康二街口",
            "En": "Jiankang 2nd St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.17398,
            "PositionLat": 22.99084
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16145",
          "StopID": "16145",
          "StopName": {
            "Zh_tw": "國平路口",
            "En": "Guoping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.17054,
            "PositionLat": 22.99125
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16146",
          "StopID": "16146",
          "StopName": {
            "Zh_tw": "平豐路口",
            "En": "Pingfeng Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.16441,
            "PositionLat": 22.99195
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16147",
          "StopID": "16147",
          "StopName": {
            "Zh_tw": "貢噶寺",
            "En": "Gongge Temple"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.16058,
            "PositionLat": 22.99174
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN28379",
          "StopID": "28379",
          "StopName": {
            "Zh_tw": "安平雅樂軒酒店",
            "En": "Aloft Tainan Anping"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.15981,
            "PositionLat": 22.99094
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16148",
          "StopID": "16148",
          "StopName": {
            "Zh_tw": "億載金城",
            "En": "Eternal Golden Castle"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.16013,
            "PositionLat": 22.98907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16463",
          "StopID": "16463",
          "StopName": {
            "Zh_tw": "德陽艦",
            "En": "TEYANG Destroyer"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.15711,
            "PositionLat": 22.98875
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16149",
          "StopID": "16149",
          "StopName": {
            "Zh_tw": "林默娘公園",
            "En": "Lin-Mo-Niang Park"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.15757,
            "PositionLat": 22.99336
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16150",
          "StopID": "16150",
          "StopName": {
            "Zh_tw": "安平港濱歷史公園",
            "En": "Anping Harborside Historic Park"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.16216,
            "PositionLat": 22.99455
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16151",
          "StopID": "16151",
          "StopName": {
            "Zh_tw": "原住民文化會館",
            "En": "The Indigenous Culture Museum"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.16391,
            "PositionLat": 22.99573
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10021",
      "RouteID": "10021",
      "RouteName": {
        "Zh_tw": "21",
        "En": "21"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN100210",
      "SubRouteID": "100210",
      "SubRouteName": {
        "Zh_tw": "21路 臺南火車站→永康工業區",
        "En": "21 Tainan Train Station→Yongkang Industrial Park"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN8755",
          "StopID": "8755",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8756",
          "StopID": "8756",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.20761,
            "PositionLat": 22.99806
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8757",
          "StopID": "8757",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20834,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8758",
          "StopID": "8758",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8759",
          "StopID": "8759",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00354
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8760",
          "StopID": "8760",
          "StopName": {
            "Zh_tw": "公園北路",
            "En": "Gongyuan N. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.20787,
            "PositionLat": 23.00522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8761",
          "StopID": "8761",
          "StopName": {
            "Zh_tw": "小北商場",
            "En": "Siaobei Market"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.20698,
            "PositionLat": 23.00794
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8762",
          "StopID": "8762",
          "StopName": {
            "Zh_tw": "新光三越台南小北門",
            "En": "Shinkong Mitsukoshi Tainan Xiaobeimen"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.20795,
            "PositionLat": 23.00954
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8763",
          "StopID": "8763",
          "StopName": {
            "Zh_tw": "六甲里西",
            "En": "West of Lioujia Vil."
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.20898,
            "PositionLat": 23.01208
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8764",
          "StopID": "8764",
          "StopName": {
            "Zh_tw": "國際城",
            "En": "Guojicheng"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.20966,
            "PositionLat": 23.01392
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8765",
          "StopID": "8765",
          "StopName": {
            "Zh_tw": "西門路四段北",
            "En": "North of Sec. 4 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21149,
            "PositionLat": 23.01705
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8766",
          "StopID": "8766",
          "StopName": {
            "Zh_tw": "小北路",
            "En": "Siaobei Rd."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21566,
            "PositionLat": 23.02145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8767",
          "StopID": "8767",
          "StopName": {
            "Zh_tw": "六甲頂郵局",
            "En": "Lioujiading Post Office"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21675,
            "PositionLat": 23.02235
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8768",
          "StopID": "8768",
          "StopName": {
            "Zh_tw": "台電配電中心",
            "En": "Taipower Distribution Center"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21957,
            "PositionLat": 23.02474
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8769",
          "StopID": "8769",
          "StopName": {
            "Zh_tw": "中正南路",
            "En": "Jhongjheng S. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.22147,
            "PositionLat": 23.02648
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8770",
          "StopID": "8770",
          "StopName": {
            "Zh_tw": "尚頂里",
            "En": "Shangding Vil."
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.22265,
            "PositionLat": 23.02756
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8771",
          "StopID": "8771",
          "StopName": {
            "Zh_tw": "南大崎",
            "En": "South of Daci"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.22491,
            "PositionLat": 23.02966
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16982",
          "StopID": "16982",
          "StopName": {
            "Zh_tw": "尚頂路",
            "En": "Shangding Rd."
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.22881,
            "PositionLat": 23.02905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27278",
          "StopID": "27278",
          "StopName": {
            "Zh_tw": "府城汽車客運公司",
            "En": "Fucheng Bus Company"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.23211,
            "PositionLat": 23.02631
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16926",
          "StopID": "16926",
          "StopName": {
            "Zh_tw": "南臺科大",
            "En": "Southern Taiwan University of Science and Technology"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.22551,
            "PositionLat": 23.02501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8772",
          "StopID": "8772",
          "StopName": {
            "Zh_tw": "大崎(家樂福中正店)",
            "En": "Daci(Carrefour Jhongjheng Store)"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.22826,
            "PositionLat": 23.03291
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8773",
          "StopID": "8773",
          "StopName": {
            "Zh_tw": "愛買量販",
            "En": "Amart Supermarket"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.23026,
            "PositionLat": 23.03508
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8774",
          "StopID": "8774",
          "StopName": {
            "Zh_tw": "洲仔尾",
            "En": "Jhouzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.23107,
            "PositionLat": 23.03587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8775",
          "StopID": "8775",
          "StopName": {
            "Zh_tw": "南鹽行",
            "En": "South Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.23379,
            "PositionLat": 23.03828
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8776",
          "StopID": "8776",
          "StopName": {
            "Zh_tw": "鹽行",
            "En": "Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.23662,
            "PositionLat": 23.04071
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8777",
          "StopID": "8777",
          "StopName": {
            "Zh_tw": "仁愛街",
            "En": "Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.23891,
            "PositionLat": 23.04376
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25126",
          "StopID": "25126",
          "StopName": {
            "Zh_tw": "仁愛橋",
            "En": "Ren-ai Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.24019,
            "PositionLat": 23.04657
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8910",
          "StopID": "8910",
          "StopName": {
            "Zh_tw": "永安路仁愛街口",
            "En": "Yong-an Rd. ＆ Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.24252,
            "PositionLat": 23.05133
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8778",
          "StopID": "8778",
          "StopName": {
            "Zh_tw": "三民街",
            "En": "Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.24703,
            "PositionLat": 23.05268
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8911",
          "StopID": "8911",
          "StopName": {
            "Zh_tw": "三民街18巷",
            "En": "Lane 18 Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.25052,
            "PositionLat": 23.05111
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN24240",
          "StopID": "24240",
          "StopName": {
            "Zh_tw": "鹽行國中(民松街)",
            "En": "Yanhang Junior High School(Minsong St.)"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.24742,
            "PositionLat": 23.04805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8779",
          "StopID": "8779",
          "StopName": {
            "Zh_tw": "蔦松",
            "En": "Niaosong"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.25761,
            "PositionLat": 23.04472
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8988",
          "StopID": "8988",
          "StopName": {
            "Zh_tw": "三新紡織",
            "En": "Sansin Textile Corp."
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.26199,
            "PositionLat": 23.04587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8780",
          "StopID": "8780",
          "StopName": {
            "Zh_tw": "正北三路",
            "En": "Jhengbei 3rd Rd."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.26272,
            "PositionLat": 23.04965
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8781",
          "StopID": "8781",
          "StopName": {
            "Zh_tw": "順靈殿",
            "En": "Shunling Temple"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.26633,
            "PositionLat": 23.05559
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15674",
          "StopID": "15674",
          "StopName": {
            "Zh_tw": "永康工業區北",
            "En": "North of Yongkang Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.27451,
            "PositionLat": 23.05179
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8782",
          "StopID": "8782",
          "StopName": {
            "Zh_tw": "永康工業區服務中心",
            "En": "Yongkang Industrial Park Service Center"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.27454,
            "PositionLat": 23.04913
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16232",
          "StopID": "16232",
          "StopName": {
            "Zh_tw": "台灣金屬創意館",
            "En": "Taiwan metal Creation Museum"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.27622,
            "PositionLat": 23.04377
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16233",
          "StopID": "16233",
          "StopName": {
            "Zh_tw": "永康休閒育樂中心",
            "En": "Yongkang Recreation Center"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.27884,
            "PositionLat": 23.03806
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10021",
      "RouteID": "10021",
      "RouteName": {
        "Zh_tw": "21",
        "En": "21"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN100211",
      "SubRouteID": "100211",
      "SubRouteName": {
        "Zh_tw": "21路 永康工業區→臺南火車站",
        "En": "21 Yongkang Industrial Park→Tainan Train Station"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN16234",
          "StopID": "16234",
          "StopName": {
            "Zh_tw": "永康休閒育樂中心",
            "En": "Yongkang Recreation Center"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.27903,
            "PositionLat": 23.03811
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16235",
          "StopID": "16235",
          "StopName": {
            "Zh_tw": "台灣金屬創意館",
            "En": "Taiwan Metal Creation Museum"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.27632,
            "PositionLat": 23.04402
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8783",
          "StopID": "8783",
          "StopName": {
            "Zh_tw": "永康工業區服務中心",
            "En": "Yongkang Industrial Park Service Center"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.27446,
            "PositionLat": 23.04871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15675",
          "StopID": "15675",
          "StopName": {
            "Zh_tw": "永康工業區北",
            "En": "North of Yongkang Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.27442,
            "PositionLat": 23.05195
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8784",
          "StopID": "8784",
          "StopName": {
            "Zh_tw": "順靈殿",
            "En": "Shunling Temple"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.26664,
            "PositionLat": 23.05576
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8785",
          "StopID": "8785",
          "StopName": {
            "Zh_tw": "正北三路",
            "En": "Jhengbei 3rd Rd."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.26225,
            "PositionLat": 23.05008
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8989",
          "StopID": "8989",
          "StopName": {
            "Zh_tw": "三新紡織",
            "En": "Sansin Textile Corp."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.26145,
            "PositionLat": 23.04568
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8786",
          "StopID": "8786",
          "StopName": {
            "Zh_tw": "蔦松",
            "En": "Niaosong"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.25788,
            "PositionLat": 23.04464
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN24241",
          "StopID": "24241",
          "StopName": {
            "Zh_tw": "鹽行國中(民松街)",
            "En": "Yanhang Junior High School(Minsong St.)"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.24742,
            "PositionLat": 23.04805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8912",
          "StopID": "8912",
          "StopName": {
            "Zh_tw": "三民街18巷",
            "En": "Lane 18 Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.25126,
            "PositionLat": 23.05042
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8787",
          "StopID": "8787",
          "StopName": {
            "Zh_tw": "三民街",
            "En": "Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.24715,
            "PositionLat": 23.05269
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8913",
          "StopID": "8913",
          "StopName": {
            "Zh_tw": "永安路仁愛街口",
            "En": "Yong-an Rd. ＆ Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.24304,
            "PositionLat": 23.05265
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25127",
          "StopID": "25127",
          "StopName": {
            "Zh_tw": "仁愛橋",
            "En": "Ren-ai Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.24007,
            "PositionLat": 23.04645
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8788",
          "StopID": "8788",
          "StopName": {
            "Zh_tw": "仁愛街",
            "En": "Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.23891,
            "PositionLat": 23.04386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8789",
          "StopID": "8789",
          "StopName": {
            "Zh_tw": "鹽行",
            "En": "Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.23669,
            "PositionLat": 23.04099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8790",
          "StopID": "8790",
          "StopName": {
            "Zh_tw": "南鹽行",
            "En": "South Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.23301,
            "PositionLat": 23.03785
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8791",
          "StopID": "8791",
          "StopName": {
            "Zh_tw": "洲仔尾",
            "En": "Jhouzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.23111,
            "PositionLat": 23.03611
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8792",
          "StopID": "8792",
          "StopName": {
            "Zh_tw": "愛買量販",
            "En": "Amart Supermarket"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.22917,
            "PositionLat": 23.03418
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16983",
          "StopID": "16983",
          "StopName": {
            "Zh_tw": "尚頂路",
            "En": "Shangding Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.22881,
            "PositionLat": 23.02905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27279",
          "StopID": "27279",
          "StopName": {
            "Zh_tw": "府城汽車客運公司",
            "En": "Fucheng Bus Company"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.23211,
            "PositionLat": 23.02631
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16927",
          "StopID": "16927",
          "StopName": {
            "Zh_tw": "南臺科大",
            "En": "Southern Taiwan University of Science and Technology"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.22551,
            "PositionLat": 23.02501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8794",
          "StopID": "8794",
          "StopName": {
            "Zh_tw": "南大崎",
            "En": "South of Daci"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.22395,
            "PositionLat": 23.02908
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8795",
          "StopID": "8795",
          "StopName": {
            "Zh_tw": "尚頂里",
            "En": "Shangding Vil."
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.22237,
            "PositionLat": 23.02762
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8796",
          "StopID": "8796",
          "StopName": {
            "Zh_tw": "中正南路",
            "En": "Jhongjheng S. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.22077,
            "PositionLat": 23.02613
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8797",
          "StopID": "8797",
          "StopName": {
            "Zh_tw": "台電配電中心",
            "En": "Taipower Distribution Center"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21891,
            "PositionLat": 23.02442
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8798",
          "StopID": "8798",
          "StopName": {
            "Zh_tw": "六甲頂郵局",
            "En": "Lioujiading Post Office"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21718,
            "PositionLat": 23.02284
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8799",
          "StopID": "8799",
          "StopName": {
            "Zh_tw": "小北路",
            "En": "Siaobei Rd."
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21508,
            "PositionLat": 23.02114
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8800",
          "StopID": "8800",
          "StopName": {
            "Zh_tw": "西門路四段北",
            "En": "North of Sec. 4 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21181,
            "PositionLat": 23.01781
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8801",
          "StopID": "8801",
          "StopName": {
            "Zh_tw": "國際城",
            "En": "Guojicheng"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.20988,
            "PositionLat": 23.01501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8802",
          "StopID": "8802",
          "StopName": {
            "Zh_tw": "六甲里西",
            "En": "West of Lioujia Vil."
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.20889,
            "PositionLat": 23.01231
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8803",
          "StopID": "8803",
          "StopName": {
            "Zh_tw": "新光三越台南小北門",
            "En": "Shinkong Mitsukoshi Tainan Xiaobeimen"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.20809,
            "PositionLat": 23.01011
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8804",
          "StopID": "8804",
          "StopName": {
            "Zh_tw": "小北商場",
            "En": "Siaobei Market"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.20691,
            "PositionLat": 23.00809
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8805",
          "StopID": "8805",
          "StopName": {
            "Zh_tw": "公園北路",
            "En": "Gongyuan N. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20804,
            "PositionLat": 23.00501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8806",
          "StopID": "8806",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21031,
            "PositionLat": 23.00386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8807",
          "StopID": "8807",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8808",
          "StopID": "8808",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20812,
            "PositionLat": 23.00007
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8809",
          "StopID": "8809",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8810",
          "StopID": "8810",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10021",
      "RouteID": "10021",
      "RouteName": {
        "Zh_tw": "21",
        "En": "21"
      },
      "Operators": [
        {
          "OperatorID": "16273",
          "OperatorName": {
            "Zh_tw": "府城小黃",
            "En": "Tainan City Bus(Shuttle)"
          },
          "OperatorCode": "TainanCityBus(Shuttl"
        }
      ],
      "SubRouteUID": "TNN100212",
      "SubRouteID": "100212",
      "SubRouteName": {
        "Zh_tw": "21路 9人小巴 臺南火車站→永康工業區(繞奇美醫院)",
        "En": "21 Shuttle Taxi Tainan Train Station→Yongkang Industrial Park(Via Chi Mei Medical Center)"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN8755",
          "StopID": "8755",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8756",
          "StopID": "8756",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.20761,
            "PositionLat": 22.99806
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8757",
          "StopID": "8757",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20834,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8758",
          "StopID": "8758",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8759",
          "StopID": "8759",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00354
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8760",
          "StopID": "8760",
          "StopName": {
            "Zh_tw": "公園北路",
            "En": "Gongyuan N. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.20787,
            "PositionLat": 23.00522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8761",
          "StopID": "8761",
          "StopName": {
            "Zh_tw": "小北商場",
            "En": "Siaobei Market"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.20698,
            "PositionLat": 23.00794
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8762",
          "StopID": "8762",
          "StopName": {
            "Zh_tw": "新光三越台南小北門",
            "En": "Shinkong Mitsukoshi Tainan Xiaobeimen"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.20795,
            "PositionLat": 23.00954
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8763",
          "StopID": "8763",
          "StopName": {
            "Zh_tw": "六甲里西",
            "En": "West of Lioujia Vil."
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.20898,
            "PositionLat": 23.01208
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8764",
          "StopID": "8764",
          "StopName": {
            "Zh_tw": "國際城",
            "En": "Guojicheng"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.20966,
            "PositionLat": 23.01392
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8765",
          "StopID": "8765",
          "StopName": {
            "Zh_tw": "西門路四段北",
            "En": "North of Sec. 4 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21149,
            "PositionLat": 23.01705
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8766",
          "StopID": "8766",
          "StopName": {
            "Zh_tw": "小北路",
            "En": "Siaobei Rd."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21566,
            "PositionLat": 23.02145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8767",
          "StopID": "8767",
          "StopName": {
            "Zh_tw": "六甲頂郵局",
            "En": "Lioujiading Post Office"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21675,
            "PositionLat": 23.02235
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31668",
          "StopID": "31668",
          "StopName": {
            "Zh_tw": "奇美醫院",
            "En": "Chi Mei Medical Center"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.22181,
            "PositionLat": 23.02121
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8768",
          "StopID": "8768",
          "StopName": {
            "Zh_tw": "台電配電中心",
            "En": "Taipower Distribution Center"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21957,
            "PositionLat": 23.02474
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8769",
          "StopID": "8769",
          "StopName": {
            "Zh_tw": "中正南路",
            "En": "Jhongjheng S. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.22147,
            "PositionLat": 23.02648
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8770",
          "StopID": "8770",
          "StopName": {
            "Zh_tw": "尚頂里",
            "En": "Shangding Vil."
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.22265,
            "PositionLat": 23.02756
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8771",
          "StopID": "8771",
          "StopName": {
            "Zh_tw": "南大崎",
            "En": "South of Daci"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.22491,
            "PositionLat": 23.02966
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16982",
          "StopID": "16982",
          "StopName": {
            "Zh_tw": "尚頂路",
            "En": "Shangding Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.22881,
            "PositionLat": 23.02905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27278",
          "StopID": "27278",
          "StopName": {
            "Zh_tw": "府城汽車客運公司",
            "En": "Fucheng Bus Company"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.23211,
            "PositionLat": 23.02631
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16926",
          "StopID": "16926",
          "StopName": {
            "Zh_tw": "南臺科大",
            "En": "Southern Taiwan University of Science and Technology"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.22551,
            "PositionLat": 23.02501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8772",
          "StopID": "8772",
          "StopName": {
            "Zh_tw": "大崎(家樂福中正店)",
            "En": "Daci(Carrefour Jhongjheng Store)"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.22826,
            "PositionLat": 23.03291
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8773",
          "StopID": "8773",
          "StopName": {
            "Zh_tw": "愛買量販",
            "En": "Amart Supermarket"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.23026,
            "PositionLat": 23.03508
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8774",
          "StopID": "8774",
          "StopName": {
            "Zh_tw": "洲仔尾",
            "En": "Jhouzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.23107,
            "PositionLat": 23.03587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8775",
          "StopID": "8775",
          "StopName": {
            "Zh_tw": "南鹽行",
            "En": "South Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.23379,
            "PositionLat": 23.03828
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8776",
          "StopID": "8776",
          "StopName": {
            "Zh_tw": "鹽行",
            "En": "Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.23662,
            "PositionLat": 23.04071
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8777",
          "StopID": "8777",
          "StopName": {
            "Zh_tw": "仁愛街",
            "En": "Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.23891,
            "PositionLat": 23.04376
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25126",
          "StopID": "25126",
          "StopName": {
            "Zh_tw": "仁愛橋",
            "En": "Ren-ai Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.24019,
            "PositionLat": 23.04657
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8910",
          "StopID": "8910",
          "StopName": {
            "Zh_tw": "永安路仁愛街口",
            "En": "Yong-an Rd. ＆ Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.24252,
            "PositionLat": 23.05133
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8778",
          "StopID": "8778",
          "StopName": {
            "Zh_tw": "三民街",
            "En": "Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.24703,
            "PositionLat": 23.05268
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8911",
          "StopID": "8911",
          "StopName": {
            "Zh_tw": "三民街18巷",
            "En": "Lane 18 Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.25052,
            "PositionLat": 23.05111
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN24240",
          "StopID": "24240",
          "StopName": {
            "Zh_tw": "鹽行國中(民松街)",
            "En": "Yanhang Junior High School(Minsong St.)"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.24742,
            "PositionLat": 23.04805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8779",
          "StopID": "8779",
          "StopName": {
            "Zh_tw": "蔦松",
            "En": "Niaosong"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.25761,
            "PositionLat": 23.04472
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8988",
          "StopID": "8988",
          "StopName": {
            "Zh_tw": "三新紡織",
            "En": "Sansin Textile Corp."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.26199,
            "PositionLat": 23.04587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8780",
          "StopID": "8780",
          "StopName": {
            "Zh_tw": "正北三路",
            "En": "Jhengbei 3rd Rd."
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.26272,
            "PositionLat": 23.04965
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8781",
          "StopID": "8781",
          "StopName": {
            "Zh_tw": "順靈殿",
            "En": "Shunling Temple"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.26633,
            "PositionLat": 23.05559
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15674",
          "StopID": "15674",
          "StopName": {
            "Zh_tw": "永康工業區北",
            "En": "North of Yongkang Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.27451,
            "PositionLat": 23.05179
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8782",
          "StopID": "8782",
          "StopName": {
            "Zh_tw": "永康工業區服務中心",
            "En": "Yongkang Industrial Park Service Center"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.27454,
            "PositionLat": 23.04913
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16232",
          "StopID": "16232",
          "StopName": {
            "Zh_tw": "台灣金屬創意館",
            "En": "Taiwan metal Creation Museum"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.27622,
            "PositionLat": 23.04377
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16233",
          "StopID": "16233",
          "StopName": {
            "Zh_tw": "永康休閒育樂中心",
            "En": "Yongkang Recreation Center"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.27884,
            "PositionLat": 23.03806
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10021",
      "RouteID": "10021",
      "RouteName": {
        "Zh_tw": "21",
        "En": "21"
      },
      "Operators": [
        {
          "OperatorID": "16273",
          "OperatorName": {
            "Zh_tw": "府城小黃",
            "En": "Tainan City Bus(Shuttle)"
          },
          "OperatorCode": "TainanCityBus(Shuttl"
        }
      ],
      "SubRouteUID": "TNN100213",
      "SubRouteID": "100213",
      "SubRouteName": {
        "Zh_tw": "21路 9人小巴  永康工業區→臺南火車站(繞奇美醫院)",
        "En": "21 Shuttle Taxi Yongkang Industrial Park→Tainan Train Station(Via Chi Mei Medical Center)"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN16234",
          "StopID": "16234",
          "StopName": {
            "Zh_tw": "永康休閒育樂中心",
            "En": "Yongkang Recreation Center"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.27903,
            "PositionLat": 23.03811
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16235",
          "StopID": "16235",
          "StopName": {
            "Zh_tw": "台灣金屬創意館",
            "En": "Taiwan Metal Creation Museum"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.27632,
            "PositionLat": 23.04402
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8783",
          "StopID": "8783",
          "StopName": {
            "Zh_tw": "永康工業區服務中心",
            "En": "Yongkang Industrial Park Service Center"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.27446,
            "PositionLat": 23.04871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15675",
          "StopID": "15675",
          "StopName": {
            "Zh_tw": "永康工業區北",
            "En": "North of Yongkang Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.27442,
            "PositionLat": 23.05195
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8784",
          "StopID": "8784",
          "StopName": {
            "Zh_tw": "順靈殿",
            "En": "Shunling Temple"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.26664,
            "PositionLat": 23.05576
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8785",
          "StopID": "8785",
          "StopName": {
            "Zh_tw": "正北三路",
            "En": "Jhengbei 3rd Rd."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.26225,
            "PositionLat": 23.05008
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8989",
          "StopID": "8989",
          "StopName": {
            "Zh_tw": "三新紡織",
            "En": "Sansin Textile Corp."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.26145,
            "PositionLat": 23.04568
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8786",
          "StopID": "8786",
          "StopName": {
            "Zh_tw": "蔦松",
            "En": "Niaosong"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.25788,
            "PositionLat": 23.04464
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN24241",
          "StopID": "24241",
          "StopName": {
            "Zh_tw": "鹽行國中(民松街)",
            "En": "Yanhang Junior High School(Minsong St.)"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.24742,
            "PositionLat": 23.04805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8912",
          "StopID": "8912",
          "StopName": {
            "Zh_tw": "三民街18巷",
            "En": "Lane 18 Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.25126,
            "PositionLat": 23.05042
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8787",
          "StopID": "8787",
          "StopName": {
            "Zh_tw": "三民街",
            "En": "Sanmin St."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.24715,
            "PositionLat": 23.05269
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8913",
          "StopID": "8913",
          "StopName": {
            "Zh_tw": "永安路仁愛街口",
            "En": "Yong-an Rd. ＆ Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.24304,
            "PositionLat": 23.05265
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25127",
          "StopID": "25127",
          "StopName": {
            "Zh_tw": "仁愛橋",
            "En": "Ren-ai Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.24007,
            "PositionLat": 23.04645
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8788",
          "StopID": "8788",
          "StopName": {
            "Zh_tw": "仁愛街",
            "En": "Ren-ai St."
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.23891,
            "PositionLat": 23.04386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8789",
          "StopID": "8789",
          "StopName": {
            "Zh_tw": "鹽行",
            "En": "Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.23669,
            "PositionLat": 23.04099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8790",
          "StopID": "8790",
          "StopName": {
            "Zh_tw": "南鹽行",
            "En": "South Yanhang"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.23301,
            "PositionLat": 23.03785
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8791",
          "StopID": "8791",
          "StopName": {
            "Zh_tw": "洲仔尾",
            "En": "Jhouzihwei"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.23111,
            "PositionLat": 23.03611
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8792",
          "StopID": "8792",
          "StopName": {
            "Zh_tw": "愛買量販",
            "En": "Amart Supermarket"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.22917,
            "PositionLat": 23.03418
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16983",
          "StopID": "16983",
          "StopName": {
            "Zh_tw": "尚頂路",
            "En": "Shangding Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.22881,
            "PositionLat": 23.02905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27279",
          "StopID": "27279",
          "StopName": {
            "Zh_tw": "府城汽車客運公司",
            "En": "Fucheng Bus Company"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.23211,
            "PositionLat": 23.02631
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16927",
          "StopID": "16927",
          "StopName": {
            "Zh_tw": "南臺科大",
            "En": "Southern Taiwan University of Science and Technology"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.22551,
            "PositionLat": 23.02501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8794",
          "StopID": "8794",
          "StopName": {
            "Zh_tw": "南大崎",
            "En": "South of Daci"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.22395,
            "PositionLat": 23.02908
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8795",
          "StopID": "8795",
          "StopName": {
            "Zh_tw": "尚頂里",
            "En": "Shangding Vil."
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.22237,
            "PositionLat": 23.02762
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8796",
          "StopID": "8796",
          "StopName": {
            "Zh_tw": "中正南路",
            "En": "Jhongjheng S. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.22077,
            "PositionLat": 23.02613
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8797",
          "StopID": "8797",
          "StopName": {
            "Zh_tw": "台電配電中心",
            "En": "Taipower Distribution Center"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21891,
            "PositionLat": 23.02442
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31669",
          "StopID": "31669",
          "StopName": {
            "Zh_tw": "奇美醫院",
            "En": "Chi Mei Medical Center"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.22181,
            "PositionLat": 23.02121
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8798",
          "StopID": "8798",
          "StopName": {
            "Zh_tw": "六甲頂郵局",
            "En": "Lioujiading Post Office"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21718,
            "PositionLat": 23.02284
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8799",
          "StopID": "8799",
          "StopName": {
            "Zh_tw": "小北路",
            "En": "Siaobei Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21508,
            "PositionLat": 23.02114
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8800",
          "StopID": "8800",
          "StopName": {
            "Zh_tw": "西門路四段北",
            "En": "North of Sec. 4 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21181,
            "PositionLat": 23.01781
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8801",
          "StopID": "8801",
          "StopName": {
            "Zh_tw": "國際城",
            "En": "Guojicheng"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.20988,
            "PositionLat": 23.01501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8802",
          "StopID": "8802",
          "StopName": {
            "Zh_tw": "六甲里西",
            "En": "West of Lioujia Vil."
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.20889,
            "PositionLat": 23.01231
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8803",
          "StopID": "8803",
          "StopName": {
            "Zh_tw": "新光三越台南小北門",
            "En": "Shinkong Mitsukoshi Tainan Xiaobeimen"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.20809,
            "PositionLat": 23.01011
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8804",
          "StopID": "8804",
          "StopName": {
            "Zh_tw": "小北商場",
            "En": "Siaobei Market"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20691,
            "PositionLat": 23.00809
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8805",
          "StopID": "8805",
          "StopName": {
            "Zh_tw": "公園北路",
            "En": "Gongyuan N. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20804,
            "PositionLat": 23.00501
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8806",
          "StopID": "8806",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21031,
            "PositionLat": 23.00386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8807",
          "StopID": "8807",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8808",
          "StopID": "8808",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20812,
            "PositionLat": 23.00007
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8809",
          "StopID": "8809",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8810",
          "StopID": "8810",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16323",
          "OperatorName": {
            "Zh_tw": "統聯客運(小巴)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100914",
      "SubRouteID": "100914",
      "SubRouteName": {
        "Zh_tw": "9路 9人小巴 東溪埔寮福安宮→臺南轉運站(繞公親里)",
        "En": "9 Shuttle Taxi Dongsipuliao Fuan Temple→Tainan Bus Station(Via Gongcin Village)"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31164",
          "StopID": "31164",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31165",
          "StopID": "31165",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.18585,
            "PositionLat": 23.08799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31166",
          "StopID": "31166",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.18608,
            "PositionLat": 23.08587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31167",
          "StopID": "31167",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.18628,
            "PositionLat": 23.08403
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31168",
          "StopID": "31168",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.18683,
            "PositionLat": 23.07518
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31699",
          "StopID": "31699",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.20327,
            "PositionLat": 23.07703
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31695",
          "StopID": "31695",
          "StopName": {
            "Zh_tw": "公親里",
            "En": "Gongcin Village"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.20663,
            "PositionLat": 23.07768
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31696",
          "StopID": "31696",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.20332,
            "PositionLat": 23.07706
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31169",
          "StopID": "31169",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.07716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31170",
          "StopID": "31170",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.19871,
            "PositionLat": 23.07516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31171",
          "StopID": "31171",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.19714,
            "PositionLat": 23.07151
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31172",
          "StopID": "31172",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.19587,
            "PositionLat": 23.06841
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31173",
          "StopID": "31173",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.19781,
            "PositionLat": 23.06541
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31174",
          "StopID": "31174",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.19931,
            "PositionLat": 23.06198
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31175",
          "StopID": "31175",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20152,
            "PositionLat": 23.05716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31176",
          "StopID": "31176",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20207,
            "PositionLat": 23.05556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31177",
          "StopID": "31177",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20272,
            "PositionLat": 23.05078
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31178",
          "StopID": "31178",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20323,
            "PositionLat": 23.04813
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31179",
          "StopID": "31179",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20378,
            "PositionLat": 23.04421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31180",
          "StopID": "31180",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20415,
            "PositionLat": 23.04186
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31181",
          "StopID": "31181",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20677,
            "PositionLat": 23.03906
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31182",
          "StopID": "31182",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20941,
            "PositionLat": 23.03681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31183",
          "StopID": "31183",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21095,
            "PositionLat": 23.03516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31184",
          "StopID": "31184",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31185",
          "StopID": "31185",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31186",
          "StopID": "31186",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31187",
          "StopID": "31187",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31188",
          "StopID": "31188",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31189",
          "StopID": "31189",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31190",
          "StopID": "31190",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31191",
          "StopID": "31191",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31192",
          "StopID": "31192",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31193",
          "StopID": "31193",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31194",
          "StopID": "31194",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31195",
          "StopID": "31195",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21342,
            "PositionLat": 23.00352
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31131",
          "StopID": "31131",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31113",
          "StopID": "31113",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31129",
          "StopID": "31129",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20761,
            "PositionLat": 22.99806
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31127",
          "StopID": "31127",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.20834,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31111",
          "StopID": "31111",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16323",
          "OperatorName": {
            "Zh_tw": "統聯客運(小巴)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100912",
      "SubRouteID": "100912",
      "SubRouteName": {
        "Zh_tw": "9路 9人小巴 東溪埔寮福安宮→臺南轉運站",
        "En": "9 Shuttle Taxi Dongsipuliao Fuan Temple→Tainan Bus Station"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31164",
          "StopID": "31164",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31165",
          "StopID": "31165",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.18585,
            "PositionLat": 23.08799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31166",
          "StopID": "31166",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.18608,
            "PositionLat": 23.08587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31167",
          "StopID": "31167",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.18628,
            "PositionLat": 23.08403
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31168",
          "StopID": "31168",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.18683,
            "PositionLat": 23.07518
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31169",
          "StopID": "31169",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.07716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31170",
          "StopID": "31170",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.19871,
            "PositionLat": 23.07516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31171",
          "StopID": "31171",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.19714,
            "PositionLat": 23.07151
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31172",
          "StopID": "31172",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.19587,
            "PositionLat": 23.06841
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31173",
          "StopID": "31173",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.19781,
            "PositionLat": 23.06541
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31174",
          "StopID": "31174",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.19931,
            "PositionLat": 23.06198
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31175",
          "StopID": "31175",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.20152,
            "PositionLat": 23.05716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31176",
          "StopID": "31176",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.20207,
            "PositionLat": 23.05556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31177",
          "StopID": "31177",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.20272,
            "PositionLat": 23.05078
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31178",
          "StopID": "31178",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20323,
            "PositionLat": 23.04813
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31179",
          "StopID": "31179",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20378,
            "PositionLat": 23.04421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31180",
          "StopID": "31180",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20415,
            "PositionLat": 23.04186
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31181",
          "StopID": "31181",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20677,
            "PositionLat": 23.03906
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31182",
          "StopID": "31182",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20941,
            "PositionLat": 23.03681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31183",
          "StopID": "31183",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21095,
            "PositionLat": 23.03516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31184",
          "StopID": "31184",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31185",
          "StopID": "31185",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31186",
          "StopID": "31186",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31187",
          "StopID": "31187",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31188",
          "StopID": "31188",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31189",
          "StopID": "31189",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31190",
          "StopID": "31190",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31191",
          "StopID": "31191",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31192",
          "StopID": "31192",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31193",
          "StopID": "31193",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31194",
          "StopID": "31194",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31195",
          "StopID": "31195",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21342,
            "PositionLat": 23.00352
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31131",
          "StopID": "31131",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31113",
          "StopID": "31113",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31129",
          "StopID": "31129",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20761,
            "PositionLat": 22.99806
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31127",
          "StopID": "31127",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20834,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31111",
          "StopID": "31111",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16201",
          "OperatorName": {
            "Zh_tw": "統聯客運(台南)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100902",
      "SubRouteID": "100902",
      "SubRouteName": {
        "Zh_tw": "9路 東溪埔寮福安宮→臺南轉運站",
        "En": "9 Dongsipuliao Fuan Temple→Tainan Bus Station"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31164",
          "StopID": "31164",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31165",
          "StopID": "31165",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.18585,
            "PositionLat": 23.08799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31166",
          "StopID": "31166",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.18608,
            "PositionLat": 23.08587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31167",
          "StopID": "31167",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.18628,
            "PositionLat": 23.08403
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31168",
          "StopID": "31168",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.18683,
            "PositionLat": 23.07518
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31169",
          "StopID": "31169",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.07716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31170",
          "StopID": "31170",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.19871,
            "PositionLat": 23.07516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31171",
          "StopID": "31171",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.19714,
            "PositionLat": 23.07151
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31172",
          "StopID": "31172",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.19587,
            "PositionLat": 23.06841
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31173",
          "StopID": "31173",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.19781,
            "PositionLat": 23.06541
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31174",
          "StopID": "31174",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.19931,
            "PositionLat": 23.06198
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31175",
          "StopID": "31175",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.20152,
            "PositionLat": 23.05716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31176",
          "StopID": "31176",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.20207,
            "PositionLat": 23.05556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31177",
          "StopID": "31177",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.20272,
            "PositionLat": 23.05078
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31178",
          "StopID": "31178",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20323,
            "PositionLat": 23.04813
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31179",
          "StopID": "31179",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20378,
            "PositionLat": 23.04421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31180",
          "StopID": "31180",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20415,
            "PositionLat": 23.04186
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31181",
          "StopID": "31181",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20677,
            "PositionLat": 23.03906
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31182",
          "StopID": "31182",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20941,
            "PositionLat": 23.03681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31183",
          "StopID": "31183",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21095,
            "PositionLat": 23.03516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31184",
          "StopID": "31184",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31185",
          "StopID": "31185",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31186",
          "StopID": "31186",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31187",
          "StopID": "31187",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31188",
          "StopID": "31188",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31189",
          "StopID": "31189",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31190",
          "StopID": "31190",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31191",
          "StopID": "31191",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31192",
          "StopID": "31192",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31193",
          "StopID": "31193",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31194",
          "StopID": "31194",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31195",
          "StopID": "31195",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21342,
            "PositionLat": 23.00352
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31131",
          "StopID": "31131",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31113",
          "StopID": "31113",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31129",
          "StopID": "31129",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20761,
            "PositionLat": 22.99806
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31127",
          "StopID": "31127",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20834,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31111",
          "StopID": "31111",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16323",
          "OperatorName": {
            "Zh_tw": "統聯客運(小巴)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100913",
      "SubRouteID": "100913",
      "SubRouteName": {
        "Zh_tw": "9路 9人小巴 臺南轉運站→東溪埔寮福安宮(繞公親里)",
        "En": "9 Shuttle Taxi Tainan Bus Station→Dongsipuliao Fuan Temple(Via Gongcin Village)"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN31046",
          "StopID": "31046",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31125",
          "StopID": "31125",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.20812,
            "PositionLat": 23.00007
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31128",
          "StopID": "31128",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31044",
          "StopID": "31044",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31130",
          "StopID": "31130",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31132",
          "StopID": "31132",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.21341,
            "PositionLat": 23.00303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31133",
          "StopID": "31133",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31134",
          "StopID": "31134",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31135",
          "StopID": "31135",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31136",
          "StopID": "31136",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31137",
          "StopID": "31137",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31138",
          "StopID": "31138",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31139",
          "StopID": "31139",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31140",
          "StopID": "31140",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31141",
          "StopID": "31141",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31142",
          "StopID": "31142",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31143",
          "StopID": "31143",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31144",
          "StopID": "31144",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21076,
            "PositionLat": 23.03556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31145",
          "StopID": "31145",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20966,
            "PositionLat": 23.03675
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31146",
          "StopID": "31146",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20691,
            "PositionLat": 23.03921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31147",
          "StopID": "31147",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20427,
            "PositionLat": 23.04176
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31148",
          "StopID": "31148",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20381,
            "PositionLat": 23.04465
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31149",
          "StopID": "31149",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20329,
            "PositionLat": 23.04824
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31150",
          "StopID": "31150",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20284,
            "PositionLat": 23.05085
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31151",
          "StopID": "31151",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20221,
            "PositionLat": 23.05547
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31152",
          "StopID": "31152",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.20161,
            "PositionLat": 23.05737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31153",
          "StopID": "31153",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.06187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31154",
          "StopID": "31154",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19783,
            "PositionLat": 23.06565
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31155",
          "StopID": "31155",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19566,
            "PositionLat": 23.06884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31156",
          "StopID": "31156",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19751,
            "PositionLat": 23.07188
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31157",
          "StopID": "31157",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19885,
            "PositionLat": 23.07534
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31158",
          "StopID": "31158",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19968,
            "PositionLat": 23.07719
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31693",
          "StopID": "31693",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20327,
            "PositionLat": 23.07703
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31694",
          "StopID": "31694",
          "StopName": {
            "Zh_tw": "公親里",
            "En": "Gongcin Village"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20671,
            "PositionLat": 23.07772
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31698",
          "StopID": "31698",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20332,
            "PositionLat": 23.07706
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31159",
          "StopID": "31159",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18684,
            "PositionLat": 23.07544
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31160",
          "StopID": "31160",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.18642,
            "PositionLat": 23.08405
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31161",
          "StopID": "31161",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.18619,
            "PositionLat": 23.08564
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31162",
          "StopID": "31162",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.18598,
            "PositionLat": 23.08784
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31163",
          "StopID": "31163",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16323",
          "OperatorName": {
            "Zh_tw": "統聯客運(小巴)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100911",
      "SubRouteID": "100911",
      "SubRouteName": {
        "Zh_tw": "9路 9人小巴 臺南轉運站→東溪埔寮福安宮",
        "En": "9 Shuttle Taxi Tainan Bus Station→Dongsipuliao Fuan Temple"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN31046",
          "StopID": "31046",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31125",
          "StopID": "31125",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.20812,
            "PositionLat": 23.00007
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31128",
          "StopID": "31128",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31044",
          "StopID": "31044",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31130",
          "StopID": "31130",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31132",
          "StopID": "31132",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.21341,
            "PositionLat": 23.00303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31133",
          "StopID": "31133",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31134",
          "StopID": "31134",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31135",
          "StopID": "31135",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31136",
          "StopID": "31136",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31137",
          "StopID": "31137",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31138",
          "StopID": "31138",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31139",
          "StopID": "31139",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31140",
          "StopID": "31140",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31141",
          "StopID": "31141",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31142",
          "StopID": "31142",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31143",
          "StopID": "31143",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31144",
          "StopID": "31144",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21076,
            "PositionLat": 23.03556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31145",
          "StopID": "31145",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20966,
            "PositionLat": 23.03675
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31146",
          "StopID": "31146",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20691,
            "PositionLat": 23.03921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31147",
          "StopID": "31147",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20427,
            "PositionLat": 23.04176
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31148",
          "StopID": "31148",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20381,
            "PositionLat": 23.04465
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31149",
          "StopID": "31149",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20329,
            "PositionLat": 23.04824
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31150",
          "StopID": "31150",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20284,
            "PositionLat": 23.05085
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31151",
          "StopID": "31151",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20221,
            "PositionLat": 23.05547
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31152",
          "StopID": "31152",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.20161,
            "PositionLat": 23.05737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31153",
          "StopID": "31153",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.06187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31154",
          "StopID": "31154",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19783,
            "PositionLat": 23.06565
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31155",
          "StopID": "31155",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19566,
            "PositionLat": 23.06884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31156",
          "StopID": "31156",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19751,
            "PositionLat": 23.07188
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31157",
          "StopID": "31157",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19885,
            "PositionLat": 23.07534
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31158",
          "StopID": "31158",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19968,
            "PositionLat": 23.07719
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31159",
          "StopID": "31159",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18684,
            "PositionLat": 23.07544
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31160",
          "StopID": "31160",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18642,
            "PositionLat": 23.08405
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31161",
          "StopID": "31161",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18619,
            "PositionLat": 23.08564
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31162",
          "StopID": "31162",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18598,
            "PositionLat": 23.08784
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31163",
          "StopID": "31163",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16201",
          "OperatorName": {
            "Zh_tw": "統聯客運(台南)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100916",
      "SubRouteID": "100916",
      "SubRouteName": {
        "Zh_tw": "9路 東溪埔寮福安宮→臺南轉運站(繞公親里)",
        "En": "9 Dongsipuliao Fuan Temple→Tainan Bus Station(Via Gongcin Village)"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31164",
          "StopID": "31164",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31165",
          "StopID": "31165",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.18585,
            "PositionLat": 23.08799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31166",
          "StopID": "31166",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.18608,
            "PositionLat": 23.08587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31167",
          "StopID": "31167",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.18628,
            "PositionLat": 23.08403
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31168",
          "StopID": "31168",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.18683,
            "PositionLat": 23.07518
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31699",
          "StopID": "31699",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.20327,
            "PositionLat": 23.07703
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31695",
          "StopID": "31695",
          "StopName": {
            "Zh_tw": "公親里",
            "En": "Gongcin Village"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.20663,
            "PositionLat": 23.07768
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31696",
          "StopID": "31696",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.20332,
            "PositionLat": 23.07706
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31169",
          "StopID": "31169",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.07716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31170",
          "StopID": "31170",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.19871,
            "PositionLat": 23.07516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31171",
          "StopID": "31171",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.19714,
            "PositionLat": 23.07151
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31172",
          "StopID": "31172",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.19587,
            "PositionLat": 23.06841
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31173",
          "StopID": "31173",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.19781,
            "PositionLat": 23.06541
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31174",
          "StopID": "31174",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.19931,
            "PositionLat": 23.06198
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31175",
          "StopID": "31175",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20152,
            "PositionLat": 23.05716
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31176",
          "StopID": "31176",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20207,
            "PositionLat": 23.05556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31177",
          "StopID": "31177",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20272,
            "PositionLat": 23.05078
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31178",
          "StopID": "31178",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20323,
            "PositionLat": 23.04813
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31179",
          "StopID": "31179",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20378,
            "PositionLat": 23.04421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31180",
          "StopID": "31180",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20415,
            "PositionLat": 23.04186
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31181",
          "StopID": "31181",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20677,
            "PositionLat": 23.03906
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31182",
          "StopID": "31182",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20941,
            "PositionLat": 23.03681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31183",
          "StopID": "31183",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21095,
            "PositionLat": 23.03516
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31184",
          "StopID": "31184",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31185",
          "StopID": "31185",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31186",
          "StopID": "31186",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31187",
          "StopID": "31187",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31188",
          "StopID": "31188",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31189",
          "StopID": "31189",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31190",
          "StopID": "31190",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31191",
          "StopID": "31191",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31192",
          "StopID": "31192",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31193",
          "StopID": "31193",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31194",
          "StopID": "31194",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31195",
          "StopID": "31195",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21342,
            "PositionLat": 23.00352
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31131",
          "StopID": "31131",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31113",
          "StopID": "31113",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31129",
          "StopID": "31129",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20761,
            "PositionLat": 22.99806
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31127",
          "StopID": "31127",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.20834,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31111",
          "StopID": "31111",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16201",
          "OperatorName": {
            "Zh_tw": "統聯客運(台南)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100915",
      "SubRouteID": "100915",
      "SubRouteName": {
        "Zh_tw": "9路 臺南轉運站→東溪埔寮福安宮(繞公親里)",
        "En": "9 Tainan Bus Station→Dongsipuliao Fuan Temple(Via Gongcin Village)"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN31046",
          "StopID": "31046",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31125",
          "StopID": "31125",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.20812,
            "PositionLat": 23.00007
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31128",
          "StopID": "31128",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31044",
          "StopID": "31044",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31130",
          "StopID": "31130",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31132",
          "StopID": "31132",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.21341,
            "PositionLat": 23.00303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31133",
          "StopID": "31133",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31134",
          "StopID": "31134",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31135",
          "StopID": "31135",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31136",
          "StopID": "31136",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31137",
          "StopID": "31137",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31138",
          "StopID": "31138",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31139",
          "StopID": "31139",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31140",
          "StopID": "31140",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31141",
          "StopID": "31141",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31142",
          "StopID": "31142",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31143",
          "StopID": "31143",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31144",
          "StopID": "31144",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21076,
            "PositionLat": 23.03556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31145",
          "StopID": "31145",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20966,
            "PositionLat": 23.03675
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31146",
          "StopID": "31146",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20691,
            "PositionLat": 23.03921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31147",
          "StopID": "31147",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20427,
            "PositionLat": 23.04176
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31148",
          "StopID": "31148",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20381,
            "PositionLat": 23.04465
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31149",
          "StopID": "31149",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20329,
            "PositionLat": 23.04824
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31150",
          "StopID": "31150",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20284,
            "PositionLat": 23.05085
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31151",
          "StopID": "31151",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20221,
            "PositionLat": 23.05547
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31152",
          "StopID": "31152",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.20161,
            "PositionLat": 23.05737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31153",
          "StopID": "31153",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.06187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31154",
          "StopID": "31154",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19783,
            "PositionLat": 23.06565
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31155",
          "StopID": "31155",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19566,
            "PositionLat": 23.06884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31156",
          "StopID": "31156",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19751,
            "PositionLat": 23.07188
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31157",
          "StopID": "31157",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19885,
            "PositionLat": 23.07534
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31158",
          "StopID": "31158",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19968,
            "PositionLat": 23.07719
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31693",
          "StopID": "31693",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20327,
            "PositionLat": 23.07703
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31694",
          "StopID": "31694",
          "StopName": {
            "Zh_tw": "公親里",
            "En": "Gongcin Village"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20671,
            "PositionLat": 23.07772
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31698",
          "StopID": "31698",
          "StopName": {
            "Zh_tw": "公學路一段",
            "En": "Sec. 1 Gong-Syue Road"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20332,
            "PositionLat": 23.07706
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31159",
          "StopID": "31159",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18684,
            "PositionLat": 23.07544
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31160",
          "StopID": "31160",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.18642,
            "PositionLat": 23.08405
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31161",
          "StopID": "31161",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.18619,
            "PositionLat": 23.08564
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31162",
          "StopID": "31162",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.18598,
            "PositionLat": 23.08784
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31163",
          "StopID": "31163",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1009",
      "RouteID": "1009",
      "RouteName": {
        "Zh_tw": "9",
        "En": "9"
      },
      "Operators": [
        {
          "OperatorID": "16201",
          "OperatorName": {
            "Zh_tw": "統聯客運(台南)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN100901",
      "SubRouteID": "100901",
      "SubRouteName": {
        "Zh_tw": "9路 臺南轉運站→東溪埔寮福安宮",
        "En": "9 Tainan Bus Station→Dongsipuliao Fuan Temple"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN31046",
          "StopID": "31046",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31125",
          "StopID": "31125",
          "StopName": {
            "Zh_tw": "公園國小",
            "En": "Gongyuan Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.20812,
            "PositionLat": 23.00007
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31128",
          "StopID": "31128",
          "StopName": {
            "Zh_tw": "成功路",
            "En": "Chenggong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20788,
            "PositionLat": 22.99786
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31044",
          "StopID": "31044",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31130",
          "StopID": "31130",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31132",
          "StopID": "31132",
          "StopName": {
            "Zh_tw": "台南二中",
            "En": "National Tainan Second Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.21341,
            "PositionLat": 23.00303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31133",
          "StopID": "31133",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31134",
          "StopID": "31134",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31135",
          "StopID": "31135",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31136",
          "StopID": "31136",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31137",
          "StopID": "31137",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31138",
          "StopID": "31138",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31139",
          "StopID": "31139",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31140",
          "StopID": "31140",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31141",
          "StopID": "31141",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31142",
          "StopID": "31142",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31143",
          "StopID": "31143",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31144",
          "StopID": "31144",
          "StopName": {
            "Zh_tw": "瀛海中學",
            "En": "Ying-Hai Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21076,
            "PositionLat": 23.03556
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31145",
          "StopID": "31145",
          "StopName": {
            "Zh_tw": "長溪路一段",
            "En": "Sec. 1 Changsi Rd."
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20966,
            "PositionLat": 23.03675
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31146",
          "StopID": "31146",
          "StopName": {
            "Zh_tw": "安慶里",
            "En": "Ancing Village"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20691,
            "PositionLat": 23.03921
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31147",
          "StopID": "31147",
          "StopName": {
            "Zh_tw": "北頂安",
            "En": "North of Ding-An"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20427,
            "PositionLat": 23.04176
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31148",
          "StopID": "31148",
          "StopName": {
            "Zh_tw": "怡安路口",
            "En": "Yi-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20381,
            "PositionLat": 23.04465
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31149",
          "StopID": "31149",
          "StopName": {
            "Zh_tw": "南總頭寮",
            "En": "Nan-Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20329,
            "PositionLat": 23.04824
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31150",
          "StopID": "31150",
          "StopName": {
            "Zh_tw": "本原街口",
            "En": "Benyuan St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20284,
            "PositionLat": 23.05085
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31151",
          "StopID": "31151",
          "StopName": {
            "Zh_tw": "總頭寮",
            "En": "Zong-Tou-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.20221,
            "PositionLat": 23.05547
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31152",
          "StopID": "31152",
          "StopName": {
            "Zh_tw": "社尾",
            "En": "Shewei"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.20161,
            "PositionLat": 23.05737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31153",
          "StopID": "31153",
          "StopName": {
            "Zh_tw": "長安里",
            "En": "Chang-An Village"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19955,
            "PositionLat": 23.06187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31154",
          "StopID": "31154",
          "StopName": {
            "Zh_tw": "長安國小",
            "En": "Chang-An Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19783,
            "PositionLat": 23.06565
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31155",
          "StopID": "31155",
          "StopName": {
            "Zh_tw": "新寮",
            "En": "Sin-Liao"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19566,
            "PositionLat": 23.06884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31156",
          "StopID": "31156",
          "StopName": {
            "Zh_tw": "北長安",
            "En": "North of Chang-An"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19751,
            "PositionLat": 23.07188
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31157",
          "StopID": "31157",
          "StopName": {
            "Zh_tw": "南公親",
            "En": "Nan Gongcin"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19885,
            "PositionLat": 23.07534
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31158",
          "StopID": "31158",
          "StopName": {
            "Zh_tw": "公親里活動中心",
            "En": "Gongcin Village Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19968,
            "PositionLat": 23.07719
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31159",
          "StopID": "31159",
          "StopName": {
            "Zh_tw": "新吉工業區",
            "En": "Sinji Industrial Park"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18684,
            "PositionLat": 23.07544
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31160",
          "StopID": "31160",
          "StopName": {
            "Zh_tw": "新復里",
            "En": "Sinfu Vil."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18642,
            "PositionLat": 23.08405
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31161",
          "StopID": "31161",
          "StopName": {
            "Zh_tw": "溪埔寮",
            "En": "Sipuliao"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18619,
            "PositionLat": 23.08564
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31162",
          "StopID": "31162",
          "StopName": {
            "Zh_tw": "北極殿",
            "En": "Beiji Temple"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18598,
            "PositionLat": 23.08784
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31163",
          "StopID": "31163",
          "StopName": {
            "Zh_tw": "東溪埔寮福安宮",
            "En": "Dongsipuliao Fuan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.19166,
            "PositionLat": 23.09356
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1010",
      "RouteID": "1010",
      "RouteName": {
        "Zh_tw": "10",
        "En": "10"
      },
      "Operators": [
        {
          "OperatorID": "16201",
          "OperatorName": {
            "Zh_tw": "統聯客運(台南)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN101001",
      "SubRouteID": "101001",
      "SubRouteName": {
        "Zh_tw": "10路 臺南轉運站→鹿耳門天后宮",
        "En": "10 Tainan Bus Station→Luermen-Ma Temple"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN32359",
          "StopID": "32359",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32232",
          "StopID": "32232",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32233",
          "StopID": "32233",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.20914,
            "PositionLat": 22.99531
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32234",
          "StopID": "32234",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.20709,
            "PositionLat": 22.99393
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32235",
          "StopID": "32235",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.20626,
            "PositionLat": 22.99338
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32236",
          "StopID": "32236",
          "StopName": {
            "Zh_tw": "中華電信",
            "En": "Chunghwa Telecom"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.20266,
            "PositionLat": 22.99347
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32237",
          "StopID": "32237",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32238",
          "StopID": "32238",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32239",
          "StopID": "32239",
          "StopName": {
            "Zh_tw": "永華站",
            "En": "Yonghua Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.19661,
            "PositionLat": 22.98746
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32240",
          "StopID": "32240",
          "StopName": {
            "Zh_tw": "水萍塭公園",
            "En": "Shueipingwun Park"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.19282,
            "PositionLat": 22.98802
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32241",
          "StopID": "32241",
          "StopName": {
            "Zh_tw": "文南路口",
            "En": "Wunnan Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.18973,
            "PositionLat": 22.98862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32242",
          "StopID": "32242",
          "StopName": {
            "Zh_tw": "家樂福",
            "En": "Carrefour"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.18789,
            "PositionLat": 22.98897
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32243",
          "StopID": "32243",
          "StopName": {
            "Zh_tw": "南台別院",
            "En": "Nan Tai Temple"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.18311,
            "PositionLat": 22.98967
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32244",
          "StopID": "32244",
          "StopName": {
            "Zh_tw": "二二八公園",
            "En": "228 Park"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.18281,
            "PositionLat": 22.99066
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32245",
          "StopID": "32245",
          "StopName": {
            "Zh_tw": "永華市政中心(府前路)",
            "En": "Tainan City Hall(Fu-Cian Rd.)"
          },
          "BoardingType": 1,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.18443,
            "PositionLat": 22.99308
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32369",
          "StopID": "32369",
          "StopName": {
            "Zh_tw": "生活美學館",
            "En": "National Tainan Living Art Center"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.18742,
            "PositionLat": 22.99259
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32246",
          "StopID": "32246",
          "StopName": {
            "Zh_tw": "大涼里",
            "En": "Daliang Vil."
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.18869,
            "PositionLat": 22.99472
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32247",
          "StopID": "32247",
          "StopName": {
            "Zh_tw": "西湖公園",
            "En": "Sihu Park"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.18502,
            "PositionLat": 22.99918
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32248",
          "StopID": "32248",
          "StopName": {
            "Zh_tw": "平安里活動中心",
            "En": "Ping-An Vil. Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.17759,
            "PositionLat": 22.99926
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32249",
          "StopID": "32249",
          "StopName": {
            "Zh_tw": "西賢里",
            "En": "Sisian Vil."
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.17562,
            "PositionLat": 23.00404
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32250",
          "StopID": "32250",
          "StopName": {
            "Zh_tw": "賢北國小",
            "En": "Sianbei Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.17851,
            "PositionLat": 23.00509
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32251",
          "StopID": "32251",
          "StopName": {
            "Zh_tw": "和緯路五段",
            "En": "Sec.5 Hewei Rd."
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.18292,
            "PositionLat": 23.00528
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32252",
          "StopID": "32252",
          "StopName": {
            "Zh_tw": "武聖路口",
            "En": "Wusheng Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.18846,
            "PositionLat": 23.00771
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32253",
          "StopID": "32253",
          "StopName": {
            "Zh_tw": "和緯路四段",
            "En": "Sec.4 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.19178,
            "PositionLat": 23.00914
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32254",
          "StopID": "32254",
          "StopName": {
            "Zh_tw": "特力屋、好市多",
            "En": "B＆Q Warehouse、Costco"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.19393,
            "PositionLat": 23.01071
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32255",
          "StopID": "32255",
          "StopName": {
            "Zh_tw": "大興街口",
            "En": "Dasing St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.19385,
            "PositionLat": 23.01251
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32256",
          "StopID": "32256",
          "StopName": {
            "Zh_tw": "文元寮",
            "En": "Wunyuanliao"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19363,
            "PositionLat": 23.01535
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32257",
          "StopID": "32257",
          "StopName": {
            "Zh_tw": "溪仔墘社區",
            "En": "Sizihcian Community"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19238,
            "PositionLat": 23.02086
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32258",
          "StopID": "32258",
          "StopName": {
            "Zh_tw": "協成社區",
            "En": "Siecheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19168,
            "PositionLat": 23.02451
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32259",
          "StopID": "32259",
          "StopName": {
            "Zh_tw": "中華社區",
            "En": "Jhonghua Community"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19105,
            "PositionLat": 23.02722
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32260",
          "StopID": "32260",
          "StopName": {
            "Zh_tw": "海東橋",
            "En": "Haidong Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19038,
            "PositionLat": 23.03084
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32261",
          "StopID": "32261",
          "StopName": {
            "Zh_tw": "理想社區",
            "En": "Lisiang Community"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19001,
            "PositionLat": 23.03294
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32262",
          "StopID": "32262",
          "StopName": {
            "Zh_tw": "海尾前",
            "En": "HaiweiCian"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18894,
            "PositionLat": 23.03633
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32263",
          "StopID": "32263",
          "StopName": {
            "Zh_tw": "同安路口",
            "En": "Tong-An Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18824,
            "PositionLat": 23.03842
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32264",
          "StopID": "32264",
          "StopName": {
            "Zh_tw": "海東里",
            "En": "Haidong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18773,
            "PositionLat": 23.04042
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32265",
          "StopID": "32265",
          "StopName": {
            "Zh_tw": "南海尾",
            "En": "South Haiwei"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.18708,
            "PositionLat": 23.04264
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32266",
          "StopID": "32266",
          "StopName": {
            "Zh_tw": "溪心里",
            "En": "Sisin Village"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.18558,
            "PositionLat": 23.04511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32267",
          "StopID": "32267",
          "StopName": {
            "Zh_tw": "海佃路三段",
            "En": "Sec. 3 Haidian Rd."
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.18248,
            "PositionLat": 23.04893
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32268",
          "StopID": "32268",
          "StopName": {
            "Zh_tw": "仁安四街口",
            "En": "Renan 4th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.18087,
            "PositionLat": 23.05079
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32269",
          "StopID": "32269",
          "StopName": {
            "Zh_tw": "仁安路",
            "En": "Renan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.17861,
            "PositionLat": 23.05136
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32270",
          "StopID": "32270",
          "StopName": {
            "Zh_tw": "安南衛生所",
            "En": "An-Nan District Public Health Center"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.17577,
            "PositionLat": 23.05004
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32271",
          "StopID": "32271",
          "StopName": {
            "Zh_tw": "海東國小",
            "En": "Haidong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.17548,
            "PositionLat": 23.04902
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32272",
          "StopID": "32272",
          "StopName": {
            "Zh_tw": "本淵市場",
            "En": "Ben-Yuan Market"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.17373,
            "PositionLat": 23.05021
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32273",
          "StopID": "32273",
          "StopName": {
            "Zh_tw": "本淵寮",
            "En": "Benyuanliao"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.17153,
            "PositionLat": 23.04931
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32274",
          "StopID": "32274",
          "StopName": {
            "Zh_tw": "中央電台",
            "En": "Central Radio Station"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.16906,
            "PositionLat": 23.04759
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32275",
          "StopID": "32275",
          "StopName": {
            "Zh_tw": "台南鹽場",
            "En": "Tainan Saltern"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.16224,
            "PositionLat": 23.04297
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32278",
          "StopID": "32278",
          "StopName": {
            "Zh_tw": "臺南科工區服務中心",
            "En": "Tainan Technology Industrial Park Service Center"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.14679,
            "PositionLat": 23.04532
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32361",
          "StopID": "32361",
          "StopName": {
            "Zh_tw": "工業二路、科技一路口",
            "En": "Gong-Ye 2nd Rd. ＆ Keji 1st Rd."
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.15204,
            "PositionLat": 23.04028
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32276",
          "StopID": "32276",
          "StopName": {
            "Zh_tw": "工業二路口",
            "En": "Gong-Ye 2nd Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.15438,
            "PositionLat": 23.03858
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32279",
          "StopID": "32279",
          "StopName": {
            "Zh_tw": "工業三路口",
            "En": "Gong-Ye 3rd Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.15323,
            "PositionLat": 23.03711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32280",
          "StopID": "32280",
          "StopName": {
            "Zh_tw": "工業五路口",
            "En": "Gong-Ye 5th Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.14995,
            "PositionLat": 23.03487
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32281",
          "StopID": "32281",
          "StopName": {
            "Zh_tw": "鹽田路",
            "En": "Yantian Road"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.14761,
            "PositionLat": 23.03451
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32282",
          "StopID": "32282",
          "StopName": {
            "Zh_tw": "鹽田社區",
            "En": "Yan-Tian Community"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.14611,
            "PositionLat": 23.03361
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32283",
          "StopID": "32283",
          "StopName": {
            "Zh_tw": "鹽田路323巷口",
            "En": "Lane 323 Yantian Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.14173,
            "PositionLat": 23.03257
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32849",
          "StopID": "32849",
          "StopName": {
            "Zh_tw": "紅樹林社區",
            "En": "Mangrove Community"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.13815,
            "PositionLat": 23.03246
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32850",
          "StopID": "32850",
          "StopName": {
            "Zh_tw": "四草野生動物保護區",
            "En": "Sihcao Wildlife Conservation Area"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.13742,
            "PositionLat": 23.02668
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32851",
          "StopID": "32851",
          "StopName": {
            "Zh_tw": "四草生態文化園區(大眾廟)",
            "En": "Sihcao Ecological ＆ Cultural Area(Dajhong Temple)"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.13471,
            "PositionLat": 23.01928
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32852",
          "StopID": "32852",
          "StopName": {
            "Zh_tw": "大社角",
            "En": "Da-She-Jiao"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.13101,
            "PositionLat": 23.01817
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32853",
          "StopID": "32853",
          "StopName": {
            "Zh_tw": "四草",
            "En": "Sih-Cao"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.12908,
            "PositionLat": 23.01758
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32854",
          "StopID": "32854",
          "StopName": {
            "Zh_tw": "崙仔角",
            "En": "Lun-Zih-Jiao"
          },
          "BoardingType": 0,
          "StopSequence": 60,
          "StopPosition": {
            "PositionLon": 120.12661,
            "PositionLat": 23.01831
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32855",
          "StopID": "32855",
          "StopName": {
            "Zh_tw": "四草路口",
            "En": "Sih-Cao Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 61,
          "StopPosition": {
            "PositionLon": 120.12487,
            "PositionLat": 23.02001
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32291",
          "StopID": "32291",
          "StopName": {
            "Zh_tw": "鹿耳門天后宮(鹿耳門橋)",
            "En": "Luermen Matsu Temple(Lu-Er Bridge)"
          },
          "BoardingType": 0,
          "StopSequence": 62,
          "StopPosition": {
            "PositionLon": 120.12825,
            "PositionLat": 23.03657
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32292",
          "StopID": "32292",
          "StopName": {
            "Zh_tw": "顯宮派出所",
            "En": "Siangong Police Substation"
          },
          "BoardingType": 0,
          "StopSequence": 63,
          "StopPosition": {
            "PositionLon": 120.12972,
            "PositionLat": 23.03984
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32293",
          "StopID": "32293",
          "StopName": {
            "Zh_tw": "媽祖宮",
            "En": "Ma-Zu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 64,
          "StopPosition": {
            "PositionLon": 120.12693,
            "PositionLat": 23.03846
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32294",
          "StopID": "32294",
          "StopName": {
            "Zh_tw": "鹿耳門天后宮",
            "En": "Luermen Matsu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 65,
          "StopPosition": {
            "PositionLon": 120.12491,
            "PositionLat": 23.03644
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN1010",
      "RouteID": "1010",
      "RouteName": {
        "Zh_tw": "10",
        "En": "10"
      },
      "Operators": [
        {
          "OperatorID": "16201",
          "OperatorName": {
            "Zh_tw": "統聯客運(台南)",
            "En": "Ubus"
          },
          "OperatorCode": "UnitedHighwayBus",
          "OperatorNo": "1201"
        }
      ],
      "SubRouteUID": "TNN101002",
      "SubRouteID": "101002",
      "SubRouteName": {
        "Zh_tw": "10路 鹿耳門天后宮→臺南轉運站",
        "En": "10 Luermen-Ma Temple→Tainan Bus Station"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN32295",
          "StopID": "32295",
          "StopName": {
            "Zh_tw": "鹿耳門天后宮",
            "En": "Luermen Matsu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.12499,
            "PositionLat": 23.03699
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32296",
          "StopID": "32296",
          "StopName": {
            "Zh_tw": "媽祖宮",
            "En": "Ma-Zu Temple"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.12676,
            "PositionLat": 23.03831
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32297",
          "StopID": "32297",
          "StopName": {
            "Zh_tw": "顯宮派出所",
            "En": "Siangong Police Substation"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.12959,
            "PositionLat": 23.03972
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32298",
          "StopID": "32298",
          "StopName": {
            "Zh_tw": "鹿耳門天后宮(鹿耳門橋)",
            "En": "Luermen Matsu Temple(Lu-Er Bridge)"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.12794,
            "PositionLat": 23.03661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32856",
          "StopID": "32856",
          "StopName": {
            "Zh_tw": "四草路口",
            "En": "Sih-Cao Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.12487,
            "PositionLat": 23.02008
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32857",
          "StopID": "32857",
          "StopName": {
            "Zh_tw": "崙仔角",
            "En": "Lun-Zih-Jiao"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.12676,
            "PositionLat": 23.01822
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32858",
          "StopID": "32858",
          "StopName": {
            "Zh_tw": "四草",
            "En": "Sih-Cao"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.12872,
            "PositionLat": 23.01712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32859",
          "StopID": "32859",
          "StopName": {
            "Zh_tw": "大社角",
            "En": "Da-She-Jiao"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.13091,
            "PositionLat": 23.01796
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32860",
          "StopID": "32860",
          "StopName": {
            "Zh_tw": "四草生態文化園區(大眾廟)",
            "En": "Sihcao Ecological ＆ Cultural Area(Dajhong Temple)"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.13473,
            "PositionLat": 23.01924
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32861",
          "StopID": "32861",
          "StopName": {
            "Zh_tw": "四草野生動物保護區",
            "En": "Sihcao Wildlife Conservation Area"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.13744,
            "PositionLat": 23.02644
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32862",
          "StopID": "32862",
          "StopName": {
            "Zh_tw": "紅樹林社區",
            "En": "Mangrove Community"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.13958,
            "PositionLat": 23.03242
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32306",
          "StopID": "32306",
          "StopName": {
            "Zh_tw": "鹽田路323巷口",
            "En": "Lane 323 Yantian Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.14162,
            "PositionLat": 23.03251
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32307",
          "StopID": "32307",
          "StopName": {
            "Zh_tw": "鹽田社區",
            "En": "Yan-Tian Community"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.14547,
            "PositionLat": 23.03328
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32308",
          "StopID": "32308",
          "StopName": {
            "Zh_tw": "鹽田路",
            "En": "Yantian Road"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.14761,
            "PositionLat": 23.03444
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32309",
          "StopID": "32309",
          "StopName": {
            "Zh_tw": "工業五路口",
            "En": "Gong-Ye 5th Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.14999,
            "PositionLat": 23.03469
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32310",
          "StopID": "32310",
          "StopName": {
            "Zh_tw": "工業三路口",
            "En": "Gong-Ye 3rd Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.15386,
            "PositionLat": 23.03715
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32313",
          "StopID": "32313",
          "StopName": {
            "Zh_tw": "工業二路口",
            "En": "Gong-Ye 2nd Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.15481,
            "PositionLat": 23.03854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32362",
          "StopID": "32362",
          "StopName": {
            "Zh_tw": "工業二路、科技一路口",
            "En": "Gong-Ye 2nd Rd. ＆ Keji 1st Rd."
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.15049,
            "PositionLat": 23.04161
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32311",
          "StopID": "32311",
          "StopName": {
            "Zh_tw": "臺南科工區服務中心",
            "En": "Tainan Technology Industrial Park Service Center"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.14783,
            "PositionLat": 23.04474
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32314",
          "StopID": "32314",
          "StopName": {
            "Zh_tw": "台南鹽場",
            "En": "Tainan Saltern"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.16231,
            "PositionLat": 23.04291
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32315",
          "StopID": "32315",
          "StopName": {
            "Zh_tw": "中央電台",
            "En": "Central Radio Station"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.16893,
            "PositionLat": 23.04741
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32316",
          "StopID": "32316",
          "StopName": {
            "Zh_tw": "本淵寮",
            "En": "Benyuanliao"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.17182,
            "PositionLat": 23.04939
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32317",
          "StopID": "32317",
          "StopName": {
            "Zh_tw": "本淵市場",
            "En": "Ben-Yuan Market"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.17371,
            "PositionLat": 23.05028
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32318",
          "StopID": "32318",
          "StopName": {
            "Zh_tw": "海東國小",
            "En": "Haidong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.17543,
            "PositionLat": 23.04892
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32319",
          "StopID": "32319",
          "StopName": {
            "Zh_tw": "安南衛生所",
            "En": "An-Nan District Public Health Center"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.17594,
            "PositionLat": 23.05005
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32320",
          "StopID": "32320",
          "StopName": {
            "Zh_tw": "仁安路",
            "En": "Renan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.17857,
            "PositionLat": 23.05131
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32321",
          "StopID": "32321",
          "StopName": {
            "Zh_tw": "仁安四街口",
            "En": "Renan 4th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.18101,
            "PositionLat": 23.05053
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32322",
          "StopID": "32322",
          "StopName": {
            "Zh_tw": "海佃路三段",
            "En": "Sec. 3 Haidian Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.18336,
            "PositionLat": 23.04777
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32323",
          "StopID": "32323",
          "StopName": {
            "Zh_tw": "溪心里",
            "En": "Sisin Village"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.18541,
            "PositionLat": 23.04507
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32324",
          "StopID": "32324",
          "StopName": {
            "Zh_tw": "南海尾",
            "En": "South Haiwei"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.18709,
            "PositionLat": 23.04241
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32325",
          "StopID": "32325",
          "StopName": {
            "Zh_tw": "海東里",
            "En": "Haidong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.18778,
            "PositionLat": 23.03953
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32326",
          "StopID": "32326",
          "StopName": {
            "Zh_tw": "同安路口",
            "En": "Tong-An Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.18813,
            "PositionLat": 23.03813
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32327",
          "StopID": "32327",
          "StopName": {
            "Zh_tw": "海尾前",
            "En": "HaiweiCian"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18881,
            "PositionLat": 23.03587
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32328",
          "StopID": "32328",
          "StopName": {
            "Zh_tw": "理想社區",
            "En": "Lisiang Community"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18979,
            "PositionLat": 23.03302
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32329",
          "StopID": "32329",
          "StopName": {
            "Zh_tw": "海東橋",
            "En": "Haidong Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.19021,
            "PositionLat": 23.03055
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32330",
          "StopID": "32330",
          "StopName": {
            "Zh_tw": "中華社區",
            "En": "Jhonghua Community"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.19081,
            "PositionLat": 23.02754
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32331",
          "StopID": "32331",
          "StopName": {
            "Zh_tw": "海佃路一段",
            "En": "Sec.1 Hai-Dian Road"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.19123,
            "PositionLat": 23.02561
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32332",
          "StopID": "32332",
          "StopName": {
            "Zh_tw": "協成社區",
            "En": "Siecheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.19169,
            "PositionLat": 23.02341
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32333",
          "StopID": "32333",
          "StopName": {
            "Zh_tw": "溪仔墘社區",
            "En": "Sizihcian Community"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.19222,
            "PositionLat": 23.02077
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32334",
          "StopID": "32334",
          "StopName": {
            "Zh_tw": "文元寮",
            "En": "Wunyuanliao"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.19358,
            "PositionLat": 23.01534
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32335",
          "StopID": "32335",
          "StopName": {
            "Zh_tw": "大興街口",
            "En": "Dasing St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.19377,
            "PositionLat": 23.01361
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32336",
          "StopID": "32336",
          "StopName": {
            "Zh_tw": "特力屋、好市多",
            "En": "B＆Q Warehouse、Costco"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.19386,
            "PositionLat": 23.01031
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32337",
          "StopID": "32337",
          "StopName": {
            "Zh_tw": "和緯路四段",
            "En": "Sec.4 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.19181,
            "PositionLat": 23.00936
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32338",
          "StopID": "32338",
          "StopName": {
            "Zh_tw": "武聖路口",
            "En": "Wusheng Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.18759,
            "PositionLat": 23.00748
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32339",
          "StopID": "32339",
          "StopName": {
            "Zh_tw": "和緯路五段",
            "En": "Sec.5 Hewei Rd."
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.18339,
            "PositionLat": 23.00567
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32340",
          "StopID": "32340",
          "StopName": {
            "Zh_tw": "賢北國小",
            "En": "Sianbei Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.17854,
            "PositionLat": 23.00526
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32341",
          "StopID": "32341",
          "StopName": {
            "Zh_tw": "西賢里",
            "En": "Sisian Vil."
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.17549,
            "PositionLat": 23.00383
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32342",
          "StopID": "32342",
          "StopName": {
            "Zh_tw": "平安里活動中心",
            "En": "Ping-An Vil. Community Center"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.17704,
            "PositionLat": 22.99912
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32343",
          "StopID": "32343",
          "StopName": {
            "Zh_tw": "西湖公園",
            "En": "Sihu Park"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.18512,
            "PositionLat": 22.99904
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32344",
          "StopID": "32344",
          "StopName": {
            "Zh_tw": "大涼里",
            "En": "Daliang Vil."
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.18853,
            "PositionLat": 22.99507
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32370",
          "StopID": "32370",
          "StopName": {
            "Zh_tw": "生活美學館",
            "En": "National Tainan Living Art Center"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.18771,
            "PositionLat": 22.99257
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32345",
          "StopID": "32345",
          "StopName": {
            "Zh_tw": "永華市政中心(府前路)",
            "En": "Tainan City Hall(Fu-Cian Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.18449,
            "PositionLat": 22.99322
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32346",
          "StopID": "32346",
          "StopName": {
            "Zh_tw": "二二八公園",
            "En": "228 Park"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.18259,
            "PositionLat": 22.99073
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32347",
          "StopID": "32347",
          "StopName": {
            "Zh_tw": "南台別院",
            "En": "Nan Tai Temple"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.18294,
            "PositionLat": 22.98949
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32348",
          "StopID": "32348",
          "StopName": {
            "Zh_tw": "家樂福",
            "En": "Carrefour"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.18761,
            "PositionLat": 22.98886
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32349",
          "StopID": "32349",
          "StopName": {
            "Zh_tw": "文南路口",
            "En": "Wunnan Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.18962,
            "PositionLat": 22.98862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32350",
          "StopID": "32350",
          "StopName": {
            "Zh_tw": "水萍塭公園",
            "En": "Shueipingwun Park"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.19262,
            "PositionLat": 22.98794
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32351",
          "StopID": "32351",
          "StopName": {
            "Zh_tw": "永華站",
            "En": "Yonghua Bus Station"
          },
          "BoardingType": 1,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.19662,
            "PositionLat": 22.98737
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32352",
          "StopID": "32352",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32353",
          "StopID": "32353",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 60,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32354",
          "StopID": "32354",
          "StopName": {
            "Zh_tw": "中華電信",
            "En": "Chunghwa Telecom"
          },
          "BoardingType": 0,
          "StopSequence": 61,
          "StopPosition": {
            "PositionLon": 120.20245,
            "PositionLat": 22.99334
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32355",
          "StopID": "32355",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 62,
          "StopPosition": {
            "PositionLon": 120.20605,
            "PositionLat": 22.99308
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32356",
          "StopID": "32356",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 63,
          "StopPosition": {
            "PositionLon": 120.20723,
            "PositionLat": 22.99388
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32357",
          "StopID": "32357",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 64,
          "StopPosition": {
            "PositionLon": 120.20937,
            "PositionLat": 22.99528
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32358",
          "StopID": "32358",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 65,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN32360",
          "StopID": "32360",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 66,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10161",
      "RouteID": "10161",
      "RouteName": {
        "Zh_tw": "18",
        "En": "18"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101612",
      "SubRouteID": "101612",
      "SubRouteName": {
        "Zh_tw": "18路 大成國中→和順轉運站",
        "En": "18 Da-Cheng Junior High School→Heshun Bus Station"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN22425",
          "StopID": "22425",
          "StopName": {
            "Zh_tw": "大成國中",
            "En": "Da-Cheng Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.19778,
            "PositionLat": 22.97799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10015",
          "StopID": "10015",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.19769,
            "PositionLat": 22.98216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10134",
          "StopID": "10134",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.19766,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10135",
          "StopID": "10135",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.19764,
            "PositionLat": 22.98711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10136",
          "StopID": "10136",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10137",
          "StopID": "10137",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10138",
          "StopID": "10138",
          "StopName": {
            "Zh_tw": "西門、民權路口",
            "En": "Simen Rd.＆ Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.19942,
            "PositionLat": 22.99511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10139",
          "StopID": "10139",
          "StopName": {
            "Zh_tw": "西門路三段口",
            "En": "Sec. 3 Si-Men Road Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.20101,
            "PositionLat": 22.99912
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10140",
          "StopID": "10140",
          "StopName": {
            "Zh_tw": "成功國小",
            "En": "Cheng-Gong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.20275,
            "PositionLat": 22.99908
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10141",
          "StopID": "10141",
          "StopName": {
            "Zh_tw": "鴨母寮市場",
            "En": "Yamuliao Traditional Market"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.20453,
            "PositionLat": 22.99849
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10142",
          "StopID": "10142",
          "StopName": {
            "Zh_tw": "大道公廟",
            "En": "Dadaogong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.20619,
            "PositionLat": 22.99816
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10143",
          "StopID": "10143",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10144",
          "StopID": "10144",
          "StopName": {
            "Zh_tw": "公園南路",
            "En": "Gong-Yuan South Road"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21017,
            "PositionLat": 23.00074
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10145",
          "StopID": "10145",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10762",
          "StopID": "10762",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00354
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10146",
          "StopID": "10146",
          "StopName": {
            "Zh_tw": "寮內",
            "En": "Liaonei"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00588
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10810",
          "StopID": "10810",
          "StopName": {
            "Zh_tw": "建成市場",
            "En": "Jiancheng Market"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21023,
            "PositionLat": 23.00884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10147",
          "StopID": "10147",
          "StopName": {
            "Zh_tw": "延平國中",
            "En": "Yenping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21077,
            "PositionLat": 23.01028
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11104",
          "StopID": "11104",
          "StopName": {
            "Zh_tw": "和緯路一段",
            "En": "Sec.1 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.21189,
            "PositionLat": 23.01033
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11105",
          "StopID": "11105",
          "StopName": {
            "Zh_tw": "成功國中",
            "En": "Cheng-gong Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21448,
            "PositionLat": 23.00952
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11106",
          "StopID": "11106",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11107",
          "StopID": "11107",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11108",
          "StopID": "11108",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10148",
          "StopID": "10148",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10149",
          "StopID": "10149",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10150",
          "StopID": "10150",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10151",
          "StopID": "10151",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10152",
          "StopID": "10152",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10153",
          "StopID": "10153",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10154",
          "StopID": "10154",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10155",
          "StopID": "10155",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10156",
          "StopID": "10156",
          "StopName": {
            "Zh_tw": "安順",
            "En": "Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21274,
            "PositionLat": 23.03394
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10860",
          "StopID": "10860",
          "StopName": {
            "Zh_tw": "北安橋",
            "En": "Beian Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21371,
            "PositionLat": 23.03594
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10157",
          "StopID": "10157",
          "StopName": {
            "Zh_tw": "北安順",
            "En": "North Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21466,
            "PositionLat": 23.03851
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10158",
          "StopID": "10158",
          "StopName": {
            "Zh_tw": "七號橋",
            "En": "No.7 Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21561,
            "PositionLat": 23.04066
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10160",
          "StopID": "10160",
          "StopName": {
            "Zh_tw": "政安路口",
            "En": "Jheng-An Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21643,
            "PositionLat": 23.04273
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10159",
          "StopID": "10159",
          "StopName": {
            "Zh_tw": "新和順",
            "En": "Sinheshun"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21719,
            "PositionLat": 23.04438
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10161",
          "StopID": "10161",
          "StopName": {
            "Zh_tw": "安順國小",
            "En": "An-Shun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.21838,
            "PositionLat": 23.04793
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10162",
          "StopID": "10162",
          "StopName": {
            "Zh_tw": "安順國中",
            "En": "An-Shun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21862,
            "PositionLat": 23.04882
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10163",
          "StopID": "10163",
          "StopName": {
            "Zh_tw": "舊和順北",
            "En": "North Jiouheshun"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21872,
            "PositionLat": 23.05326
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10164",
          "StopID": "10164",
          "StopName": {
            "Zh_tw": "大聖廟",
            "En": "Dasheng Temple"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21862,
            "PositionLat": 23.05661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10165",
          "StopID": "10165",
          "StopName": {
            "Zh_tw": "中洲寮",
            "En": "Jhongjhouliao"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21873,
            "PositionLat": 23.05837
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10166",
          "StopID": "10166",
          "StopName": {
            "Zh_tw": "福國寺",
            "En": "Fuguo Temple"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.21879,
            "PositionLat": 23.06101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10167",
          "StopID": "10167",
          "StopName": {
            "Zh_tw": "和順",
            "En": "Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21875,
            "PositionLat": 23.06247
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10168",
          "StopID": "10168",
          "StopName": {
            "Zh_tw": "和順教會",
            "En": "Heshun Church"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.21851,
            "PositionLat": 23.06504
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10169",
          "StopID": "10169",
          "StopName": {
            "Zh_tw": "和順國小",
            "En": "Heshun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.21779,
            "PositionLat": 23.06656
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10170",
          "StopID": "10170",
          "StopName": {
            "Zh_tw": "北和順",
            "En": "North Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.21656,
            "PositionLat": 23.06867
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10171",
          "StopID": "10171",
          "StopName": {
            "Zh_tw": "嘉綠寶社區",
            "En": "Jia-Lyu-Bao Community"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.06968
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10172",
          "StopID": "10172",
          "StopName": {
            "Zh_tw": "安昌街口",
            "En": "An-Chang St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.21932,
            "PositionLat": 23.06971
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11093",
          "StopID": "11093",
          "StopName": {
            "Zh_tw": "塭南里",
            "En": "Wunnan Village"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.22118,
            "PositionLat": 23.06975
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14360",
          "StopID": "14360",
          "StopName": {
            "Zh_tw": "和順國中",
            "En": "HoShun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.22309,
            "PositionLat": 23.06766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14361",
          "StopID": "14361",
          "StopName": {
            "Zh_tw": "安南醫院",
            "En": "An-nan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.22366,
            "PositionLat": 23.06449
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14362",
          "StopID": "14362",
          "StopName": {
            "Zh_tw": "東和里",
            "En": "Donghe Vil."
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.22739,
            "PositionLat": 23.06279
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25128",
          "StopID": "25128",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.22945,
            "PositionLat": 23.06353
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27400",
          "StopID": "27400",
          "StopName": {
            "Zh_tw": "亞太少棒主球場",
            "En": "Tainan Asia-Pacific Little League Baseball Stadium"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.23616,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25129",
          "StopID": "25129",
          "StopName": {
            "Zh_tw": "環館三路",
            "En": "Huanguan 3rd. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.23465,
            "PositionLat": 23.06415
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27402",
          "StopID": "27402",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.22955,
            "PositionLat": 23.06366
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14363",
          "StopID": "14363",
          "StopName": {
            "Zh_tw": "亞太成棒主球場",
            "En": "Tainan Asia-Pacific Baseball Stadiums"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.23031,
            "PositionLat": 23.06022
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31369",
          "StopID": "31369",
          "StopName": {
            "Zh_tw": "和順轉運站",
            "En": "Heshun Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.23239,
            "PositionLat": 23.05771
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10161",
      "RouteID": "10161",
      "RouteName": {
        "Zh_tw": "18",
        "En": "18"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101761",
      "SubRouteID": "101761",
      "SubRouteName": {
        "Zh_tw": "18路 和順轉運站→大成國中 [繞北安路]",
        "En": "18 Heshun Bus Station→Da-Cheng Junior High School[Via Beian Rd.]"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31370",
          "StopID": "31370",
          "StopName": {
            "Zh_tw": "和順轉運站",
            "En": "Heshun Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.23239,
            "PositionLat": 23.05771
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14368",
          "StopID": "14368",
          "StopName": {
            "Zh_tw": "亞太成棒主球場",
            "En": "Tainan Asia-Pacific Baseball Stadiums"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.23056,
            "PositionLat": 23.06051
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27403",
          "StopID": "27403",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.22945,
            "PositionLat": 23.06353
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27401",
          "StopID": "27401",
          "StopName": {
            "Zh_tw": "亞太少棒主球場",
            "En": "Tainan Asia-Pacific Little League Baseball Stadium"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.23616,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25130",
          "StopID": "25130",
          "StopName": {
            "Zh_tw": "環館三路",
            "En": "Huanguan 3rd. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.23465,
            "PositionLat": 23.06415
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25131",
          "StopID": "25131",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.22955,
            "PositionLat": 23.06366
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14369",
          "StopID": "14369",
          "StopName": {
            "Zh_tw": "東和里",
            "En": "Donghe Vil."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.22747,
            "PositionLat": 23.06311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14370",
          "StopID": "14370",
          "StopName": {
            "Zh_tw": "安南醫院",
            "En": "An-nan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.22366,
            "PositionLat": 23.06449
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14371",
          "StopID": "14371",
          "StopName": {
            "Zh_tw": "和順國中",
            "En": "HoShun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.22307,
            "PositionLat": 23.06905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10014",
          "StopID": "10014",
          "StopName": {
            "Zh_tw": "塭南里",
            "En": "Wunnan Village"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.22081,
            "PositionLat": 23.06983
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10882",
          "StopID": "10882",
          "StopName": {
            "Zh_tw": "安昌街口",
            "En": "An-Chang St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21923,
            "PositionLat": 23.06979
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10177",
          "StopID": "10177",
          "StopName": {
            "Zh_tw": "嘉綠寶社區",
            "En": "Jia-Lyu-Bao Community"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21746,
            "PositionLat": 23.06981
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10178",
          "StopID": "10178",
          "StopName": {
            "Zh_tw": "北和順",
            "En": "North Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21646,
            "PositionLat": 23.06853
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10179",
          "StopID": "10179",
          "StopName": {
            "Zh_tw": "和順國小",
            "En": "Heshun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21751,
            "PositionLat": 23.06671
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10180",
          "StopID": "10180",
          "StopName": {
            "Zh_tw": "和順教會",
            "En": "Heshun Church"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21847,
            "PositionLat": 23.06505
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20169",
          "StopID": "20169",
          "StopName": {
            "Zh_tw": "中洲寮保安宮",
            "En": "Jhongjhouliao Baoan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21596,
            "PositionLat": 23.06347
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16230",
          "StopID": "16230",
          "StopName": {
            "Zh_tw": "布袋嘴寮",
            "En": "Budaizueiliao"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20911,
            "PositionLat": 23.06444
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16231",
          "StopID": "16231",
          "StopName": {
            "Zh_tw": "代天府",
            "En": "Daitian Temple"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20785,
            "PositionLat": 23.06239
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20170",
          "StopID": "20170",
          "StopName": {
            "Zh_tw": "州南十街口",
            "En": "Jhounan 10th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.21371,
            "PositionLat": 23.05906
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20171",
          "StopID": "20171",
          "StopName": {
            "Zh_tw": "總安街口",
            "En": "Zong-An St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21334,
            "PositionLat": 23.05382
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20172",
          "StopID": "20172",
          "StopName": {
            "Zh_tw": "培安路口",
            "En": "Pei-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21135,
            "PositionLat": 23.04879
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20173",
          "StopID": "20173",
          "StopName": {
            "Zh_tw": "長溪路口",
            "En": "Changsi Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20436,
            "PositionLat": 23.04374
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20174",
          "StopID": "20174",
          "StopName": {
            "Zh_tw": "北安路三段",
            "En": "Sec. 3 Bei-an Rd."
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20247,
            "PositionLat": 23.03959
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20175",
          "StopID": "20175",
          "StopName": {
            "Zh_tw": "慈雲公園",
            "En": "Tzu-Yun Park"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20625,
            "PositionLat": 23.03673
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20176",
          "StopID": "20176",
          "StopName": {
            "Zh_tw": "安中安和路口",
            "En": "An-Jhong Rd. ＆ An-Ho Rd."
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21129,
            "PositionLat": 23.03379
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10193",
          "StopID": "10193",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10194",
          "StopID": "10194",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10195",
          "StopID": "10195",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10196",
          "StopID": "10196",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10197",
          "StopID": "10197",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10198",
          "StopID": "10198",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10199",
          "StopID": "10199",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10200",
          "StopID": "10200",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11109",
          "StopID": "11109",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11110",
          "StopID": "11110",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11111",
          "StopID": "11111",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11112",
          "StopID": "11112",
          "StopName": {
            "Zh_tw": "成功國中",
            "En": "Cheng-gong Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21532,
            "PositionLat": 23.00934
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11099",
          "StopID": "11099",
          "StopName": {
            "Zh_tw": "和緯路一段",
            "En": "Sec.1 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.21259,
            "PositionLat": 23.01025
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10201",
          "StopID": "10201",
          "StopName": {
            "Zh_tw": "延平國中",
            "En": "Yenping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21062,
            "PositionLat": 23.01048
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10811",
          "StopID": "10811",
          "StopName": {
            "Zh_tw": "建成市場",
            "En": "Jiancheng Market"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21021,
            "PositionLat": 23.00897
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10202",
          "StopID": "10202",
          "StopName": {
            "Zh_tw": "寮內",
            "En": "Liaonei"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21034,
            "PositionLat": 23.00577
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10763",
          "StopID": "10763",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21031,
            "PositionLat": 23.00386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10203",
          "StopID": "10203",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10204",
          "StopID": "10204",
          "StopName": {
            "Zh_tw": "公園南路",
            "En": "Gong-Yuan South Road"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21003,
            "PositionLat": 23.00071
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10205",
          "StopID": "10205",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10206",
          "StopID": "10206",
          "StopName": {
            "Zh_tw": "大道公廟",
            "En": "Dadaogong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.20628,
            "PositionLat": 22.99821
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10207",
          "StopID": "10207",
          "StopName": {
            "Zh_tw": "鴨母寮市場",
            "En": "Yamuliao Traditional Market"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.20457,
            "PositionLat": 22.99862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10208",
          "StopID": "10208",
          "StopName": {
            "Zh_tw": "成功國小",
            "En": "Cheng-Gong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.20291,
            "PositionLat": 22.99937
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10209",
          "StopID": "10209",
          "StopName": {
            "Zh_tw": "西門路三段口",
            "En": "Sec. 3 Si-Men Road Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.20082,
            "PositionLat": 22.99902
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10210",
          "StopID": "10210",
          "StopName": {
            "Zh_tw": "西門、民權路口",
            "En": "Simen Rd.＆ Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.19945,
            "PositionLat": 22.99581
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10211",
          "StopID": "10211",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10212",
          "StopID": "10212",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10213",
          "StopID": "10213",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.19748,
            "PositionLat": 22.98661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10214",
          "StopID": "10214",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.19752,
            "PositionLat": 22.98445
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10010",
          "StopID": "10010",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.19756,
            "PositionLat": 22.98237
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN22426",
          "StopID": "22426",
          "StopName": {
            "Zh_tw": "大成國中",
            "En": "Da-Cheng Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.19759,
            "PositionLat": 22.97825
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10161",
      "RouteID": "10161",
      "RouteName": {
        "Zh_tw": "18",
        "En": "18"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101618",
      "SubRouteID": "101618",
      "SubRouteName": {
        "Zh_tw": "18路 大成國中→和順轉運站 [延國民路]",
        "En": "18 Da-Cheng Junior High School→Heshun Bus Station[Via Guomin Rd.]"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN8914",
          "StopID": "8914",
          "StopName": {
            "Zh_tw": "國民路",
            "En": "Guomin Rd."
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.21147,
            "PositionLat": 22.96749
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8915",
          "StopID": "8915",
          "StopName": {
            "Zh_tw": "亞伯大飯店",
            "En": "Abba Hotel"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.21587,
            "PositionLat": 22.96824
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8916",
          "StopID": "8916",
          "StopName": {
            "Zh_tw": "大忠里",
            "En": "Dajhong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.21231,
            "PositionLat": 22.97135
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8917",
          "StopID": "8917",
          "StopName": {
            "Zh_tw": "南區殯儀館",
            "En": "South District Funeral Parlor"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.20845,
            "PositionLat": 22.97058
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8984",
          "StopID": "8984",
          "StopName": {
            "Zh_tw": "亞洲餐旅(六信高中)",
            "En": "Asia hospitality vocational H.S.(Liuhsin S.H.S.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.20281,
            "PositionLat": 22.97509
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8985",
          "StopID": "8985",
          "StopName": {
            "Zh_tw": "水交社文化園區(大成路)",
            "En": "Shueijiaoshe Cultural Park(Dacheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.20001,
            "PositionLat": 22.97503
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN22425",
          "StopID": "22425",
          "StopName": {
            "Zh_tw": "大成國中",
            "En": "Da-Cheng Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.19778,
            "PositionLat": 22.97799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10015",
          "StopID": "10015",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.19769,
            "PositionLat": 22.98216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10134",
          "StopID": "10134",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.19766,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10135",
          "StopID": "10135",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.19764,
            "PositionLat": 22.98711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10136",
          "StopID": "10136",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10137",
          "StopID": "10137",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10138",
          "StopID": "10138",
          "StopName": {
            "Zh_tw": "西門、民權路口",
            "En": "Simen Rd.＆ Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.19942,
            "PositionLat": 22.99511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10139",
          "StopID": "10139",
          "StopName": {
            "Zh_tw": "西門路三段口",
            "En": "Sec. 3 Si-Men Road Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.20101,
            "PositionLat": 22.99912
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10140",
          "StopID": "10140",
          "StopName": {
            "Zh_tw": "成功國小",
            "En": "Cheng-Gong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20275,
            "PositionLat": 22.99908
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10141",
          "StopID": "10141",
          "StopName": {
            "Zh_tw": "鴨母寮市場",
            "En": "Yamuliao Traditional Market"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20453,
            "PositionLat": 22.99849
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10142",
          "StopID": "10142",
          "StopName": {
            "Zh_tw": "大道公廟",
            "En": "Dadaogong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20619,
            "PositionLat": 22.99816
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10143",
          "StopID": "10143",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10144",
          "StopID": "10144",
          "StopName": {
            "Zh_tw": "公園南路",
            "En": "Gong-Yuan South Road"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.21017,
            "PositionLat": 23.00074
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10145",
          "StopID": "10145",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10762",
          "StopID": "10762",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00354
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10146",
          "StopID": "10146",
          "StopName": {
            "Zh_tw": "寮內",
            "En": "Liaonei"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00588
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10810",
          "StopID": "10810",
          "StopName": {
            "Zh_tw": "建成市場",
            "En": "Jiancheng Market"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21023,
            "PositionLat": 23.00884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10147",
          "StopID": "10147",
          "StopName": {
            "Zh_tw": "延平國中",
            "En": "Yenping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21077,
            "PositionLat": 23.01028
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11104",
          "StopID": "11104",
          "StopName": {
            "Zh_tw": "和緯路一段",
            "En": "Sec.1 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21189,
            "PositionLat": 23.01033
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11105",
          "StopID": "11105",
          "StopName": {
            "Zh_tw": "成功國中",
            "En": "Cheng-gong Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21448,
            "PositionLat": 23.00952
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11106",
          "StopID": "11106",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11107",
          "StopID": "11107",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11108",
          "StopID": "11108",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10148",
          "StopID": "10148",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10149",
          "StopID": "10149",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10150",
          "StopID": "10150",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10151",
          "StopID": "10151",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10152",
          "StopID": "10152",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10153",
          "StopID": "10153",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10154",
          "StopID": "10154",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10155",
          "StopID": "10155",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10156",
          "StopID": "10156",
          "StopName": {
            "Zh_tw": "安順",
            "En": "Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.21274,
            "PositionLat": 23.03394
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10860",
          "StopID": "10860",
          "StopName": {
            "Zh_tw": "北安橋",
            "En": "Beian Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21371,
            "PositionLat": 23.03594
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10157",
          "StopID": "10157",
          "StopName": {
            "Zh_tw": "北安順",
            "En": "North Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21466,
            "PositionLat": 23.03851
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10158",
          "StopID": "10158",
          "StopName": {
            "Zh_tw": "七號橋",
            "En": "No.7 Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21561,
            "PositionLat": 23.04066
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10160",
          "StopID": "10160",
          "StopName": {
            "Zh_tw": "政安路口",
            "En": "Jheng-An Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21643,
            "PositionLat": 23.04273
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10159",
          "StopID": "10159",
          "StopName": {
            "Zh_tw": "新和順",
            "En": "Sinheshun"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.21719,
            "PositionLat": 23.04438
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10161",
          "StopID": "10161",
          "StopName": {
            "Zh_tw": "安順國小",
            "En": "An-Shun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21838,
            "PositionLat": 23.04793
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10162",
          "StopID": "10162",
          "StopName": {
            "Zh_tw": "安順國中",
            "En": "An-Shun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.21862,
            "PositionLat": 23.04882
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10163",
          "StopID": "10163",
          "StopName": {
            "Zh_tw": "舊和順北",
            "En": "North Jiouheshun"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.21872,
            "PositionLat": 23.05326
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10164",
          "StopID": "10164",
          "StopName": {
            "Zh_tw": "大聖廟",
            "En": "Dasheng Temple"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.21862,
            "PositionLat": 23.05661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10165",
          "StopID": "10165",
          "StopName": {
            "Zh_tw": "中洲寮",
            "En": "Jhongjhouliao"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.21873,
            "PositionLat": 23.05837
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10166",
          "StopID": "10166",
          "StopName": {
            "Zh_tw": "福國寺",
            "En": "Fuguo Temple"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.21879,
            "PositionLat": 23.06101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10167",
          "StopID": "10167",
          "StopName": {
            "Zh_tw": "和順",
            "En": "Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.21875,
            "PositionLat": 23.06247
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10168",
          "StopID": "10168",
          "StopName": {
            "Zh_tw": "和順教會",
            "En": "Heshun Church"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.21851,
            "PositionLat": 23.06504
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10169",
          "StopID": "10169",
          "StopName": {
            "Zh_tw": "和順國小",
            "En": "Heshun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.21779,
            "PositionLat": 23.06656
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10170",
          "StopID": "10170",
          "StopName": {
            "Zh_tw": "北和順",
            "En": "North Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.21656,
            "PositionLat": 23.06867
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10171",
          "StopID": "10171",
          "StopName": {
            "Zh_tw": "嘉綠寶社區",
            "En": "Jia-Lyu-Bao Community"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.06968
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10172",
          "StopID": "10172",
          "StopName": {
            "Zh_tw": "安昌街口",
            "En": "An-Chang St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.21932,
            "PositionLat": 23.06971
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11093",
          "StopID": "11093",
          "StopName": {
            "Zh_tw": "塭南里",
            "En": "Wunnan Village"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.22118,
            "PositionLat": 23.06975
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14360",
          "StopID": "14360",
          "StopName": {
            "Zh_tw": "和順國中",
            "En": "HoShun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.22309,
            "PositionLat": 23.06766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14361",
          "StopID": "14361",
          "StopName": {
            "Zh_tw": "安南醫院",
            "En": "An-nan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.22366,
            "PositionLat": 23.06449
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14362",
          "StopID": "14362",
          "StopName": {
            "Zh_tw": "東和里",
            "En": "Donghe Vil."
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.22739,
            "PositionLat": 23.06279
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25128",
          "StopID": "25128",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 60,
          "StopPosition": {
            "PositionLon": 120.22945,
            "PositionLat": 23.06353
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27400",
          "StopID": "27400",
          "StopName": {
            "Zh_tw": "亞太少棒主球場",
            "En": "Tainan Asia-Pacific Little League Baseball Stadium"
          },
          "BoardingType": 0,
          "StopSequence": 61,
          "StopPosition": {
            "PositionLon": 120.23616,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25129",
          "StopID": "25129",
          "StopName": {
            "Zh_tw": "環館三路",
            "En": "Huanguan 3rd. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 62,
          "StopPosition": {
            "PositionLon": 120.23465,
            "PositionLat": 23.06415
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27402",
          "StopID": "27402",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 63,
          "StopPosition": {
            "PositionLon": 120.22955,
            "PositionLat": 23.06366
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14363",
          "StopID": "14363",
          "StopName": {
            "Zh_tw": "亞太成棒主球場",
            "En": "Tainan Asia-Pacific Baseball Stadiums"
          },
          "BoardingType": 0,
          "StopSequence": 64,
          "StopPosition": {
            "PositionLon": 120.23031,
            "PositionLat": 23.06022
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31369",
          "StopID": "31369",
          "StopName": {
            "Zh_tw": "和順轉運站",
            "En": "Heshun Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 65,
          "StopPosition": {
            "PositionLon": 120.23239,
            "PositionLat": 23.05771
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10161",
      "RouteID": "10161",
      "RouteName": {
        "Zh_tw": "18",
        "En": "18"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101619",
      "SubRouteID": "101619",
      "SubRouteName": {
        "Zh_tw": "18路 和順轉運站→大成國中 [延國民路]",
        "En": "18 Heshun Bus Station→Simen Rd. ＆ Da-Cheng Junior High School[Via Guomin Rd.]"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31370",
          "StopID": "31370",
          "StopName": {
            "Zh_tw": "和順轉運站",
            "En": "Heshun Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.23239,
            "PositionLat": 23.05771
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14368",
          "StopID": "14368",
          "StopName": {
            "Zh_tw": "亞太成棒主球場",
            "En": "Tainan Asia-Pacific Baseball Stadiums"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.23056,
            "PositionLat": 23.06051
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27403",
          "StopID": "27403",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.22945,
            "PositionLat": 23.06353
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27401",
          "StopID": "27401",
          "StopName": {
            "Zh_tw": "亞太少棒主球場",
            "En": "Tainan Asia-Pacific Little League Baseball Stadium"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.23616,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25130",
          "StopID": "25130",
          "StopName": {
            "Zh_tw": "環館三路",
            "En": "Huanguan 3rd. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.23465,
            "PositionLat": 23.06415
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25131",
          "StopID": "25131",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.22955,
            "PositionLat": 23.06366
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14369",
          "StopID": "14369",
          "StopName": {
            "Zh_tw": "東和里",
            "En": "Donghe Vil."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.22747,
            "PositionLat": 23.06311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14370",
          "StopID": "14370",
          "StopName": {
            "Zh_tw": "安南醫院",
            "En": "An-nan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.22366,
            "PositionLat": 23.06449
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14371",
          "StopID": "14371",
          "StopName": {
            "Zh_tw": "和順國中",
            "En": "HoShun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.22307,
            "PositionLat": 23.06905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10014",
          "StopID": "10014",
          "StopName": {
            "Zh_tw": "塭南里",
            "En": "Wunnan Village"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.22081,
            "PositionLat": 23.06983
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10882",
          "StopID": "10882",
          "StopName": {
            "Zh_tw": "安昌街口",
            "En": "An-Chang St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21923,
            "PositionLat": 23.06979
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10177",
          "StopID": "10177",
          "StopName": {
            "Zh_tw": "嘉綠寶社區",
            "En": "Jia-Lyu-Bao Community"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21746,
            "PositionLat": 23.06981
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10178",
          "StopID": "10178",
          "StopName": {
            "Zh_tw": "北和順",
            "En": "North Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21646,
            "PositionLat": 23.06853
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10179",
          "StopID": "10179",
          "StopName": {
            "Zh_tw": "和順國小",
            "En": "Heshun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21751,
            "PositionLat": 23.06671
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10180",
          "StopID": "10180",
          "StopName": {
            "Zh_tw": "和順教會",
            "En": "Heshun Church"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21847,
            "PositionLat": 23.06505
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10181",
          "StopID": "10181",
          "StopName": {
            "Zh_tw": "和順",
            "En": "Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21865,
            "PositionLat": 23.06371
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10182",
          "StopID": "10182",
          "StopName": {
            "Zh_tw": "福國寺",
            "En": "Fuguo Temple"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21866,
            "PositionLat": 23.06125
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10183",
          "StopID": "10183",
          "StopName": {
            "Zh_tw": "中洲寮",
            "En": "Jhongjhouliao"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21861,
            "PositionLat": 23.05825
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10184",
          "StopID": "10184",
          "StopName": {
            "Zh_tw": "大聖廟",
            "En": "Dasheng Temple"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.21855,
            "PositionLat": 23.05665
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10185",
          "StopID": "10185",
          "StopName": {
            "Zh_tw": "舊和順北",
            "En": "North Jiouheshun"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21866,
            "PositionLat": 23.05309
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10186",
          "StopID": "10186",
          "StopName": {
            "Zh_tw": "安順國中",
            "En": "An-Shun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21879,
            "PositionLat": 23.04977
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10187",
          "StopID": "10187",
          "StopName": {
            "Zh_tw": "安順國小",
            "En": "An-Shun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21836,
            "PositionLat": 23.04808
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10189",
          "StopID": "10189",
          "StopName": {
            "Zh_tw": "新和順",
            "En": "Sinheshun"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21689,
            "PositionLat": 23.04402
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10188",
          "StopID": "10188",
          "StopName": {
            "Zh_tw": "政安路口",
            "En": "Jheng-An Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.04252
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10190",
          "StopID": "10190",
          "StopName": {
            "Zh_tw": "七號橋",
            "En": "No.7 Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21541,
            "PositionLat": 23.04063
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10191",
          "StopID": "10191",
          "StopName": {
            "Zh_tw": "北安順",
            "En": "North Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21473,
            "PositionLat": 23.03885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10861",
          "StopID": "10861",
          "StopName": {
            "Zh_tw": "北安橋",
            "En": "Beian Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21336,
            "PositionLat": 23.03558
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10192",
          "StopID": "10192",
          "StopName": {
            "Zh_tw": "安順",
            "En": "Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21255,
            "PositionLat": 23.03381
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10193",
          "StopID": "10193",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10194",
          "StopID": "10194",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10195",
          "StopID": "10195",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10196",
          "StopID": "10196",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10197",
          "StopID": "10197",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10198",
          "StopID": "10198",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10199",
          "StopID": "10199",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10200",
          "StopID": "10200",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11109",
          "StopID": "11109",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11110",
          "StopID": "11110",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11111",
          "StopID": "11111",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11112",
          "StopID": "11112",
          "StopName": {
            "Zh_tw": "成功國中",
            "En": "Cheng-gong Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21532,
            "PositionLat": 23.00934
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11099",
          "StopID": "11099",
          "StopName": {
            "Zh_tw": "和緯路一段",
            "En": "Sec.1 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21259,
            "PositionLat": 23.01025
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10201",
          "StopID": "10201",
          "StopName": {
            "Zh_tw": "延平國中",
            "En": "Yenping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21062,
            "PositionLat": 23.01048
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10811",
          "StopID": "10811",
          "StopName": {
            "Zh_tw": "建成市場",
            "En": "Jiancheng Market"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.21021,
            "PositionLat": 23.00897
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10202",
          "StopID": "10202",
          "StopName": {
            "Zh_tw": "寮內",
            "En": "Liaonei"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21034,
            "PositionLat": 23.00577
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10763",
          "StopID": "10763",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.21031,
            "PositionLat": 23.00386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10203",
          "StopID": "10203",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10204",
          "StopID": "10204",
          "StopName": {
            "Zh_tw": "公園南路",
            "En": "Gong-Yuan South Road"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.21003,
            "PositionLat": 23.00071
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10205",
          "StopID": "10205",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10206",
          "StopID": "10206",
          "StopName": {
            "Zh_tw": "大道公廟",
            "En": "Dadaogong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.20628,
            "PositionLat": 22.99821
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10207",
          "StopID": "10207",
          "StopName": {
            "Zh_tw": "鴨母寮市場",
            "En": "Yamuliao Traditional Market"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.20457,
            "PositionLat": 22.99862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10208",
          "StopID": "10208",
          "StopName": {
            "Zh_tw": "成功國小",
            "En": "Cheng-Gong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.20291,
            "PositionLat": 22.99937
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10209",
          "StopID": "10209",
          "StopName": {
            "Zh_tw": "西門路三段口",
            "En": "Sec. 3 Si-Men Road Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.20082,
            "PositionLat": 22.99902
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10210",
          "StopID": "10210",
          "StopName": {
            "Zh_tw": "西門、民權路口",
            "En": "Simen Rd.＆ Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.19945,
            "PositionLat": 22.99581
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10211",
          "StopID": "10211",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10212",
          "StopID": "10212",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10213",
          "StopID": "10213",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.19748,
            "PositionLat": 22.98661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10214",
          "StopID": "10214",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.19752,
            "PositionLat": 22.98445
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10010",
          "StopID": "10010",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.19756,
            "PositionLat": 22.98237
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN22426",
          "StopID": "22426",
          "StopName": {
            "Zh_tw": "大成國中",
            "En": "Da-Cheng Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.19759,
            "PositionLat": 22.97825
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8986",
          "StopID": "8986",
          "StopName": {
            "Zh_tw": "水交社文化園區(大成路)",
            "En": "Shueijiaoshe Cultural Park(Dacheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 60,
          "StopPosition": {
            "PositionLon": 120.19988,
            "PositionLat": 22.97492
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8987",
          "StopID": "8987",
          "StopName": {
            "Zh_tw": "亞洲餐旅(六信高中)",
            "En": "Asia hospitality vocational H.S.(Liuhsin S.H.S.)"
          },
          "BoardingType": 0,
          "StopSequence": 61,
          "StopPosition": {
            "PositionLon": 120.20273,
            "PositionLat": 22.97498
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8918",
          "StopID": "8918",
          "StopName": {
            "Zh_tw": "南區殯儀館",
            "En": "South District Funeral Parlor"
          },
          "BoardingType": 0,
          "StopSequence": 62,
          "StopPosition": {
            "PositionLon": 120.20807,
            "PositionLat": 22.97093
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN8919",
          "StopID": "8919",
          "StopName": {
            "Zh_tw": "國民路",
            "En": "Guomin Rd."
          },
          "BoardingType": 0,
          "StopSequence": 63,
          "StopPosition": {
            "PositionLon": 120.21147,
            "PositionLat": 22.96749
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10161",
      "RouteID": "10161",
      "RouteName": {
        "Zh_tw": "18",
        "En": "18"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101613",
      "SubRouteID": "101613",
      "SubRouteName": {
        "Zh_tw": "18路 和順轉運站→大成國中",
        "En": "18 Heshun Bus Station→Da-Cheng Junior High School"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN31370",
          "StopID": "31370",
          "StopName": {
            "Zh_tw": "和順轉運站",
            "En": "Heshun Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.23239,
            "PositionLat": 23.05771
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14368",
          "StopID": "14368",
          "StopName": {
            "Zh_tw": "亞太成棒主球場",
            "En": "Tainan Asia-Pacific Baseball Stadiums"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.23056,
            "PositionLat": 23.06051
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27403",
          "StopID": "27403",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.22945,
            "PositionLat": 23.06353
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27401",
          "StopID": "27401",
          "StopName": {
            "Zh_tw": "亞太少棒主球場",
            "En": "Tainan Asia-Pacific Little League Baseball Stadium"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.23616,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25130",
          "StopID": "25130",
          "StopName": {
            "Zh_tw": "環館三路",
            "En": "Huanguan 3rd. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.23465,
            "PositionLat": 23.06415
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25131",
          "StopID": "25131",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.22955,
            "PositionLat": 23.06366
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14369",
          "StopID": "14369",
          "StopName": {
            "Zh_tw": "東和里",
            "En": "Donghe Vil."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.22747,
            "PositionLat": 23.06311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14370",
          "StopID": "14370",
          "StopName": {
            "Zh_tw": "安南醫院",
            "En": "An-nan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.22366,
            "PositionLat": 23.06449
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14371",
          "StopID": "14371",
          "StopName": {
            "Zh_tw": "和順國中",
            "En": "HoShun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.22307,
            "PositionLat": 23.06905
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10014",
          "StopID": "10014",
          "StopName": {
            "Zh_tw": "塭南里",
            "En": "Wunnan Village"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.22081,
            "PositionLat": 23.06983
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10882",
          "StopID": "10882",
          "StopName": {
            "Zh_tw": "安昌街口",
            "En": "An-Chang St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21923,
            "PositionLat": 23.06979
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10177",
          "StopID": "10177",
          "StopName": {
            "Zh_tw": "嘉綠寶社區",
            "En": "Jia-Lyu-Bao Community"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21746,
            "PositionLat": 23.06981
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10178",
          "StopID": "10178",
          "StopName": {
            "Zh_tw": "北和順",
            "En": "North Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21646,
            "PositionLat": 23.06853
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10179",
          "StopID": "10179",
          "StopName": {
            "Zh_tw": "和順國小",
            "En": "Heshun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21751,
            "PositionLat": 23.06671
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10180",
          "StopID": "10180",
          "StopName": {
            "Zh_tw": "和順教會",
            "En": "Heshun Church"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21847,
            "PositionLat": 23.06505
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10181",
          "StopID": "10181",
          "StopName": {
            "Zh_tw": "和順",
            "En": "Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21865,
            "PositionLat": 23.06371
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10182",
          "StopID": "10182",
          "StopName": {
            "Zh_tw": "福國寺",
            "En": "Fuguo Temple"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21866,
            "PositionLat": 23.06125
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10183",
          "StopID": "10183",
          "StopName": {
            "Zh_tw": "中洲寮",
            "En": "Jhongjhouliao"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21861,
            "PositionLat": 23.05825
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10184",
          "StopID": "10184",
          "StopName": {
            "Zh_tw": "大聖廟",
            "En": "Dasheng Temple"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.21855,
            "PositionLat": 23.05665
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10185",
          "StopID": "10185",
          "StopName": {
            "Zh_tw": "舊和順北",
            "En": "North Jiouheshun"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21866,
            "PositionLat": 23.05309
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10186",
          "StopID": "10186",
          "StopName": {
            "Zh_tw": "安順國中",
            "En": "An-Shun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21879,
            "PositionLat": 23.04977
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10187",
          "StopID": "10187",
          "StopName": {
            "Zh_tw": "安順國小",
            "En": "An-Shun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21836,
            "PositionLat": 23.04808
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10189",
          "StopID": "10189",
          "StopName": {
            "Zh_tw": "新和順",
            "En": "Sinheshun"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21689,
            "PositionLat": 23.04402
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10188",
          "StopID": "10188",
          "StopName": {
            "Zh_tw": "政安路口",
            "En": "Jheng-An Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.04252
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10190",
          "StopID": "10190",
          "StopName": {
            "Zh_tw": "七號橋",
            "En": "No.7 Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21541,
            "PositionLat": 23.04063
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10191",
          "StopID": "10191",
          "StopName": {
            "Zh_tw": "北安順",
            "En": "North Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21473,
            "PositionLat": 23.03885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10861",
          "StopID": "10861",
          "StopName": {
            "Zh_tw": "北安橋",
            "En": "Beian Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21336,
            "PositionLat": 23.03558
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10192",
          "StopID": "10192",
          "StopName": {
            "Zh_tw": "安順",
            "En": "Anshun"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21255,
            "PositionLat": 23.03381
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10193",
          "StopID": "10193",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21239,
            "PositionLat": 23.03275
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10194",
          "StopID": "10194",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21281,
            "PositionLat": 23.03101
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10195",
          "StopID": "10195",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21429,
            "PositionLat": 23.02852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10196",
          "StopID": "10196",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.21495,
            "PositionLat": 23.02701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10197",
          "StopID": "10197",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.21612,
            "PositionLat": 23.02128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10198",
          "StopID": "10198",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.21511,
            "PositionLat": 23.01731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10199",
          "StopID": "10199",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21331,
            "PositionLat": 23.01511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10200",
          "StopID": "10200",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21345,
            "PositionLat": 23.01313
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11109",
          "StopID": "11109",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21463,
            "PositionLat": 23.01311
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11110",
          "StopID": "11110",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.21659,
            "PositionLat": 23.01194
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11111",
          "StopID": "11111",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21615,
            "PositionLat": 23.01041
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11112",
          "StopID": "11112",
          "StopName": {
            "Zh_tw": "成功國中",
            "En": "Cheng-gong Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21532,
            "PositionLat": 23.00934
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11099",
          "StopID": "11099",
          "StopName": {
            "Zh_tw": "和緯路一段",
            "En": "Sec.1 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21259,
            "PositionLat": 23.01025
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10201",
          "StopID": "10201",
          "StopName": {
            "Zh_tw": "延平國中",
            "En": "Yenping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21062,
            "PositionLat": 23.01048
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10811",
          "StopID": "10811",
          "StopName": {
            "Zh_tw": "建成市場",
            "En": "Jiancheng Market"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.21021,
            "PositionLat": 23.00897
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10202",
          "StopID": "10202",
          "StopName": {
            "Zh_tw": "寮內",
            "En": "Liaonei"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21034,
            "PositionLat": 23.00577
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10763",
          "StopID": "10763",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.21031,
            "PositionLat": 23.00386
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10203",
          "StopID": "10203",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.20929,
            "PositionLat": 23.00216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10204",
          "StopID": "10204",
          "StopName": {
            "Zh_tw": "公園南路",
            "En": "Gong-Yuan South Road"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.21003,
            "PositionLat": 23.00071
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10205",
          "StopID": "10205",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10206",
          "StopID": "10206",
          "StopName": {
            "Zh_tw": "大道公廟",
            "En": "Dadaogong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.20628,
            "PositionLat": 22.99821
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10207",
          "StopID": "10207",
          "StopName": {
            "Zh_tw": "鴨母寮市場",
            "En": "Yamuliao Traditional Market"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.20457,
            "PositionLat": 22.99862
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10208",
          "StopID": "10208",
          "StopName": {
            "Zh_tw": "成功國小",
            "En": "Cheng-Gong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.20291,
            "PositionLat": 22.99937
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10209",
          "StopID": "10209",
          "StopName": {
            "Zh_tw": "西門路三段口",
            "En": "Sec. 3 Si-Men Road Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.20082,
            "PositionLat": 22.99902
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10210",
          "StopID": "10210",
          "StopName": {
            "Zh_tw": "西門、民權路口",
            "En": "Simen Rd.＆ Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.19945,
            "PositionLat": 22.99581
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10211",
          "StopID": "10211",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10212",
          "StopID": "10212",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10213",
          "StopID": "10213",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.19748,
            "PositionLat": 22.98661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10214",
          "StopID": "10214",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.19752,
            "PositionLat": 22.98445
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10010",
          "StopID": "10010",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.19756,
            "PositionLat": 22.98237
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN22426",
          "StopID": "22426",
          "StopName": {
            "Zh_tw": "大成國中",
            "En": "Da-Cheng Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.19759,
            "PositionLat": 22.97825
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10161",
      "RouteID": "10161",
      "RouteName": {
        "Zh_tw": "18",
        "En": "18"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101760",
      "SubRouteID": "101760",
      "SubRouteName": {
        "Zh_tw": "18路 大成國中→和順轉運站 [繞北安路]",
        "En": "18 Da-Cheng Junior High School→Heshun Bus Station[Via Beian Rd.]"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN22425",
          "StopID": "22425",
          "StopName": {
            "Zh_tw": "大成國中",
            "En": "Da-Cheng Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.19778,
            "PositionLat": 22.97799
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10015",
          "StopID": "10015",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.19769,
            "PositionLat": 22.98216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10134",
          "StopID": "10134",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.19766,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10135",
          "StopID": "10135",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.19764,
            "PositionLat": 22.98711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10136",
          "StopID": "10136",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10137",
          "StopID": "10137",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10138",
          "StopID": "10138",
          "StopName": {
            "Zh_tw": "西門、民權路口",
            "En": "Simen Rd.＆ Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.19942,
            "PositionLat": 22.99511
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10139",
          "StopID": "10139",
          "StopName": {
            "Zh_tw": "西門路三段口",
            "En": "Sec. 3 Si-Men Road Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.20101,
            "PositionLat": 22.99912
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10140",
          "StopID": "10140",
          "StopName": {
            "Zh_tw": "成功國小",
            "En": "Cheng-Gong Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.20275,
            "PositionLat": 22.99908
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10141",
          "StopID": "10141",
          "StopName": {
            "Zh_tw": "鴨母寮市場",
            "En": "Yamuliao Traditional Market"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.20453,
            "PositionLat": 22.99849
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10142",
          "StopID": "10142",
          "StopName": {
            "Zh_tw": "大道公廟",
            "En": "Dadaogong Temple"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.20619,
            "PositionLat": 22.99816
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10143",
          "StopID": "10143",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10144",
          "StopID": "10144",
          "StopName": {
            "Zh_tw": "公園南路",
            "En": "Gong-Yuan South Road"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21017,
            "PositionLat": 23.00074
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10145",
          "StopID": "10145",
          "StopName": {
            "Zh_tw": "臺南轉運站",
            "En": "Tainan Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.20928,
            "PositionLat": 23.00187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10762",
          "StopID": "10762",
          "StopName": {
            "Zh_tw": "公園北路口",
            "En": "Gongyuan N. Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00354
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10146",
          "StopID": "10146",
          "StopName": {
            "Zh_tw": "寮內",
            "En": "Liaonei"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.21036,
            "PositionLat": 23.00588
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10810",
          "StopID": "10810",
          "StopName": {
            "Zh_tw": "建成市場",
            "En": "Jiancheng Market"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.21023,
            "PositionLat": 23.00884
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10147",
          "StopID": "10147",
          "StopName": {
            "Zh_tw": "延平國中",
            "En": "Yenping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.21077,
            "PositionLat": 23.01028
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11104",
          "StopID": "11104",
          "StopName": {
            "Zh_tw": "和緯路一段",
            "En": "Sec.1 Hewei Road"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.21189,
            "PositionLat": 23.01033
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11105",
          "StopID": "11105",
          "StopName": {
            "Zh_tw": "成功國中",
            "En": "Cheng-gong Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.21448,
            "PositionLat": 23.00952
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11106",
          "StopID": "11106",
          "StopName": {
            "Zh_tw": "大道新城",
            "En": "Da Dao Housing Complex"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.21626,
            "PositionLat": 23.01039
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11107",
          "StopID": "11107",
          "StopName": {
            "Zh_tw": "大光國小",
            "En": "Da-Guang Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.21674,
            "PositionLat": 23.01201
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11108",
          "StopID": "11108",
          "StopName": {
            "Zh_tw": "長榮路五段",
            "En": "Sec.5 Jhangrong Road"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.21545,
            "PositionLat": 23.01303
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10148",
          "StopID": "10148",
          "StopName": {
            "Zh_tw": "延平市場(長榮路)",
            "En": "Yanping Market(Changrong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.21327,
            "PositionLat": 23.01321
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10149",
          "StopID": "10149",
          "StopName": {
            "Zh_tw": "正風里",
            "En": "Jhengfong Vil."
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.21358,
            "PositionLat": 23.01522
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10150",
          "StopID": "10150",
          "StopName": {
            "Zh_tw": "正覺里",
            "En": "Jhengjyue Vil."
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21565,
            "PositionLat": 23.01789
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10151",
          "StopID": "10151",
          "StopName": {
            "Zh_tw": "六甲頂",
            "En": "Lioujiading"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21628,
            "PositionLat": 23.02106
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10152",
          "StopID": "10152",
          "StopName": {
            "Zh_tw": "溪頂寮橋",
            "En": "Sidingliao Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21514,
            "PositionLat": 23.02669
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10153",
          "StopID": "10153",
          "StopName": {
            "Zh_tw": "南安順",
            "En": "South of An-Shun"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21428,
            "PositionLat": 23.02864
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10154",
          "StopID": "10154",
          "StopName": {
            "Zh_tw": "安順派出所",
            "En": "Anshun Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.21318,
            "PositionLat": 23.03047
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10155",
          "StopID": "10155",
          "StopName": {
            "Zh_tw": "安順市場",
            "En": "An-Shun Market"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.21249,
            "PositionLat": 23.03276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20162",
          "StopID": "20162",
          "StopName": {
            "Zh_tw": "慈雲公園",
            "En": "Tzu-Yun Park"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.20628,
            "PositionLat": 23.03684
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20163",
          "StopID": "20163",
          "StopName": {
            "Zh_tw": "北安路三段",
            "En": "Sec. 3 Bei-an Rd."
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20271,
            "PositionLat": 23.03956
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20164",
          "StopID": "20164",
          "StopName": {
            "Zh_tw": "長溪路口",
            "En": "Changsi Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20439,
            "PositionLat": 23.04349
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20165",
          "StopID": "20165",
          "StopName": {
            "Zh_tw": "培安路口",
            "En": "Pei-an Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.21163,
            "PositionLat": 23.04859
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20166",
          "StopID": "20166",
          "StopName": {
            "Zh_tw": "總安街口",
            "En": "Zong-An St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.21357,
            "PositionLat": 23.05369
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20167",
          "StopID": "20167",
          "StopName": {
            "Zh_tw": "州南十街口",
            "En": "Jhounan 10th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.21393,
            "PositionLat": 23.05882
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16228",
          "StopID": "16228",
          "StopName": {
            "Zh_tw": "代天府",
            "En": "Daitian Temple"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20794,
            "PositionLat": 23.06221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16229",
          "StopID": "16229",
          "StopName": {
            "Zh_tw": "布袋嘴寮",
            "En": "Budaizueiliao"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.20745,
            "PositionLat": 23.06486
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN20168",
          "StopID": "20168",
          "StopName": {
            "Zh_tw": "中洲寮保安宮",
            "En": "Jhongjhouliao Baoan Temple"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21596,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10168",
          "StopID": "10168",
          "StopName": {
            "Zh_tw": "和順教會",
            "En": "Heshun Church"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21851,
            "PositionLat": 23.06504
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10169",
          "StopID": "10169",
          "StopName": {
            "Zh_tw": "和順國小",
            "En": "Heshun Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21779,
            "PositionLat": 23.06656
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10170",
          "StopID": "10170",
          "StopName": {
            "Zh_tw": "北和順",
            "En": "North Heshun"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.21656,
            "PositionLat": 23.06867
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10171",
          "StopID": "10171",
          "StopName": {
            "Zh_tw": "嘉綠寶社區",
            "En": "Jia-Lyu-Bao Community"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.06968
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10172",
          "StopID": "10172",
          "StopName": {
            "Zh_tw": "安昌街口",
            "En": "An-Chang St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.21932,
            "PositionLat": 23.06971
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN11093",
          "StopID": "11093",
          "StopName": {
            "Zh_tw": "塭南里",
            "En": "Wunnan Village"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.22118,
            "PositionLat": 23.06975
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14360",
          "StopID": "14360",
          "StopName": {
            "Zh_tw": "和順國中",
            "En": "HoShun Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.22309,
            "PositionLat": 23.06766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14361",
          "StopID": "14361",
          "StopName": {
            "Zh_tw": "安南醫院",
            "En": "An-nan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.22366,
            "PositionLat": 23.06449
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14362",
          "StopID": "14362",
          "StopName": {
            "Zh_tw": "東和里",
            "En": "Donghe Vil."
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.22739,
            "PositionLat": 23.06279
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25128",
          "StopID": "25128",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.22945,
            "PositionLat": 23.06353
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27400",
          "StopID": "27400",
          "StopName": {
            "Zh_tw": "亞太少棒主球場",
            "En": "Tainan Asia-Pacific Little League Baseball Stadium"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.23616,
            "PositionLat": 23.06339
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN25129",
          "StopID": "25129",
          "StopName": {
            "Zh_tw": "環館三路",
            "En": "Huanguan 3rd. Rd."
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.23465,
            "PositionLat": 23.06415
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN27402",
          "StopID": "27402",
          "StopName": {
            "Zh_tw": "環館北路(史博館特區)",
            "En": "Huanguan North Rd.(National Museum of History Center)"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.22955,
            "PositionLat": 23.06366
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14363",
          "StopID": "14363",
          "StopName": {
            "Zh_tw": "亞太成棒主球場",
            "En": "Tainan Asia-Pacific Baseball Stadiums"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.23031,
            "PositionLat": 23.06022
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN31369",
          "StopID": "31369",
          "StopName": {
            "Zh_tw": "和順轉運站",
            "En": "Heshun Bus Station"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.23239,
            "PositionLat": 23.05771
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10162",
      "RouteID": "10162",
      "RouteName": {
        "Zh_tw": "2",
        "En": "2"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101624",
      "SubRouteID": "101624",
      "SubRouteName": {
        "Zh_tw": "2路 白鷺灣社區→崑山科大",
        "En": "2 Bailuwan Community→Kun Shan University"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN14382",
          "StopID": "14382",
          "StopName": {
            "Zh_tw": "白鷺灣社區",
            "En": "Bailuwan Community"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.14794,
            "PositionLat": 22.99762
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14383",
          "StopID": "14383",
          "StopName": {
            "Zh_tw": "沙灘忠誠社區",
            "En": "Shatan & Jhongcheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.14884,
            "PositionLat": 22.99712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN21013",
          "StopID": "21013",
          "StopName": {
            "Zh_tw": "世平路世平一街口",
            "En": "Shihping Rd. & Shihping first St."
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.15085,
            "PositionLat": 22.99491
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16259",
          "StopID": "16259",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.15231,
            "PositionLat": 22.99334
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14451",
          "StopID": "14451",
          "StopName": {
            "Zh_tw": "同平路",
            "En": "Tongping Rd."
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.15395,
            "PositionLat": 22.99623
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14405",
          "StopID": "14405",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.15317,
            "PositionLat": 22.99922
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15975",
          "StopID": "15975",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.15414,
            "PositionLat": 23.00035
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14411",
          "StopID": "14411",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋(850巷)",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.15838,
            "PositionLat": 23.00181
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10272",
          "StopID": "10272",
          "StopName": {
            "Zh_tw": "安平古堡(安平路)",
            "En": "Anping Fort(AnPing Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.16068,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10258",
          "StopID": "10258",
          "StopName": {
            "Zh_tw": "天妃里",
            "En": "Tianfei Vil."
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.16202,
            "PositionLat": 23.00015
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10259",
          "StopID": "10259",
          "StopName": {
            "Zh_tw": "安平",
            "En": "An-Ping"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.16427,
            "PositionLat": 22.99959
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10820",
          "StopID": "10820",
          "StopName": {
            "Zh_tw": "石門國小",
            "En": "Shih-Men Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.16574,
            "PositionLat": 22.99947
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10260",
          "StopID": "10260",
          "StopName": {
            "Zh_tw": "安北路口",
            "En": "An-Bei Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.16761,
            "PositionLat": 22.99916
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10261",
          "StopID": "10261",
          "StopName": {
            "Zh_tw": "安平國中",
            "En": "AnPing Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.16951,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10262",
          "StopID": "10262",
          "StopName": {
            "Zh_tw": "承天橋口",
            "En": "Chengtian Bridge Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.17125,
            "PositionLat": 22.99833
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10263",
          "StopID": "10263",
          "StopName": {
            "Zh_tw": "南興",
            "En": "Nan-Sing"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.17287,
            "PositionLat": 22.99805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10816",
          "StopID": "10816",
          "StopName": {
            "Zh_tw": "望月橋",
            "En": "Full Moon Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.17509,
            "PositionLat": 22.99807
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10266",
          "StopID": "10266",
          "StopName": {
            "Zh_tw": "半路厝",
            "En": "BanLuCuo"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.17874,
            "PositionLat": 22.99834
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10265",
          "StopID": "10265",
          "StopName": {
            "Zh_tw": "臨海社區",
            "En": "LinHai Community"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.18221,
            "PositionLat": 22.99831
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10267",
          "StopID": "10267",
          "StopName": {
            "Zh_tw": "平安里",
            "En": "PingAn Vil."
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.18511,
            "PositionLat": 22.99802
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10268",
          "StopID": "10268",
          "StopName": {
            "Zh_tw": "民生路臨時停車場",
            "En": "Minsheng Rd. Temporary Parking Lot"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.18793,
            "PositionLat": 22.99764
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10269",
          "StopID": "10269",
          "StopName": {
            "Zh_tw": "民生路二段",
            "En": "Sec. 2 Minsheng Rd."
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.19057,
            "PositionLat": 22.99712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9029",
          "StopID": "9029",
          "StopName": {
            "Zh_tw": "協進國小(民生路)",
            "En": "Sie-Jin Elementary School(Minsheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.19262,
            "PositionLat": 22.99655
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9030",
          "StopID": "9030",
          "StopName": {
            "Zh_tw": "郭綜合醫院",
            "En": "Guo’s General Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.19847,
            "PositionLat": 22.99467
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9031",
          "StopID": "9031",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9032",
          "StopID": "9032",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9033",
          "StopID": "9033",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19748,
            "PositionLat": 22.98661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9034",
          "StopID": "9034",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19752,
            "PositionLat": 22.98445
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9035",
          "StopID": "9035",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19756,
            "PositionLat": 22.98237
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9036",
          "StopID": "9036",
          "StopName": {
            "Zh_tw": "家齊高中",
            "En": "Chia-Chi Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.20141,
            "PositionLat": 22.98135
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9038",
          "StopID": "9038",
          "StopName": {
            "Zh_tw": "南門路",
            "En": "Nan-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.20374,
            "PositionLat": 22.98149
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14001",
          "StopID": "14001",
          "StopName": {
            "Zh_tw": "中山國中",
            "En": "Jhongshan Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.20409,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9039",
          "StopID": "9039",
          "StopName": {
            "Zh_tw": "大南門城",
            "En": "Great South Gate"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20447,
            "PositionLat": 22.98713
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9040",
          "StopID": "9040",
          "StopName": {
            "Zh_tw": "建興國中(南門路)",
            "En": "Jian-Sing Junior High School(Nan-Men Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20458,
            "PositionLat": 22.98822
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9041",
          "StopID": "9041",
          "StopName": {
            "Zh_tw": "孔廟(臺灣文學館、臺南市美術館1館)",
            "En": "Confucius Temple(Museum of Taiwan Literature、Tainan Art Museum 1 Bldg.)"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20498,
            "PositionLat": 22.99145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16020",
          "StopID": "16020",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20605,
            "PositionLat": 22.99308
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9043",
          "StopID": "9043",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20723,
            "PositionLat": 22.99388
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9044",
          "StopID": "9044",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20937,
            "PositionLat": 22.99528
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9045",
          "StopID": "9045",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9046",
          "StopID": "9046",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9047",
          "StopID": "9047",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siaodong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21574,
            "PositionLat": 23.00113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9048",
          "StopID": "9048",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.00092
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9049",
          "StopID": "9049",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.22137,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10765",
          "StopID": "10765",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.22527,
            "PositionLat": 23.00038
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9050",
          "StopID": "9050",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.22892,
            "PositionLat": 22.99946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9051",
          "StopID": "9051",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.23221,
            "PositionLat": 22.99858
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9052",
          "StopID": "9052",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.23596,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9053",
          "StopID": "9053",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.23813,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9054",
          "StopID": "9054",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Ying-Jyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.24312,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9055",
          "StopID": "9055",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.24592,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9056",
          "StopID": "9056",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.24932,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9057",
          "StopID": "9057",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University of Technology"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.25349,
            "PositionLat": 22.99832
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10162",
      "RouteID": "10162",
      "RouteName": {
        "Zh_tw": "2",
        "En": "2"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101723",
      "SubRouteID": "101723",
      "SubRouteName": {
        "Zh_tw": "2路 三鯤鯓→崑山科大",
        "En": "2 Sankunshen→Kun Shan University"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN10823",
          "StopID": "10823",
          "StopName": {
            "Zh_tw": "三鯤鯓",
            "En": "SanKunShen"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.16141,
            "PositionLat": 22.97703
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10271",
          "StopID": "10271",
          "StopName": {
            "Zh_tw": "天壇",
            "En": "TianTan"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.15971,
            "PositionLat": 22.97698
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10246",
          "StopID": "10246",
          "StopName": {
            "Zh_tw": "漁光分校",
            "En": "Yuguang Campus"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.15842,
            "PositionLat": 22.97797
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10247",
          "StopID": "10247",
          "StopName": {
            "Zh_tw": "瑞復中心",
            "En": "St. Raphael Opportunity Center"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.15667,
            "PositionLat": 22.98013
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14466",
          "StopID": "14466",
          "StopName": {
            "Zh_tw": "濱海站",
            "En": "BinHai Station"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.15552,
            "PositionLat": 22.98187
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14468",
          "StopID": "14468",
          "StopName": {
            "Zh_tw": "漁光里",
            "En": "Yuguang Vil."
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.15363,
            "PositionLat": 22.98455
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10251",
          "StopID": "10251",
          "StopName": {
            "Zh_tw": "億載金城",
            "En": "Eternal Golden Castle"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.16026,
            "PositionLat": 22.98909
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10825",
          "StopID": "10825",
          "StopName": {
            "Zh_tw": "億載國小",
            "En": "Yi-Zai Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.16198,
            "PositionLat": 22.98949
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14201",
          "StopID": "14201",
          "StopName": {
            "Zh_tw": "郡平路口",
            "En": "Jyunping Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.16705,
            "PositionLat": 22.98964
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14172",
          "StopID": "14172",
          "StopName": {
            "Zh_tw": "育平派出所",
            "En": "Yuping Police Station"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.16753,
            "PositionLat": 22.99251
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10252",
          "StopID": "10252",
          "StopName": {
            "Zh_tw": "安平區公所(育平路)",
            "En": "AnPing District Office(YuPing Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.16766,
            "PositionLat": 22.99433
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10253",
          "StopID": "10253",
          "StopName": {
            "Zh_tw": "安平國中(育平路)",
            "En": "AnPing Junior High School(YuPing Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.16759,
            "PositionLat": 22.99702
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10254",
          "StopID": "10254",
          "StopName": {
            "Zh_tw": "運河博物館",
            "En": "Canal Museum"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.16376,
            "PositionLat": 22.99886
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10824",
          "StopID": "10824",
          "StopName": {
            "Zh_tw": "延平街",
            "En": "Yanping St."
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.16434,
            "PositionLat": 23.00058
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN13953",
          "StopID": "13953",
          "StopName": {
            "Zh_tw": "漁民村",
            "En": "Fisherman Village"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.16263,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN13954",
          "StopID": "13954",
          "StopName": {
            "Zh_tw": "安平古堡(安北路)",
            "En": "Fort Zeelandia(An-Bei Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.16052,
            "PositionLat": 23.00278
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN13955",
          "StopID": "13955",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.15828,
            "PositionLat": 23.00221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16310",
          "StopID": "16310",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.15426,
            "PositionLat": 23.00044
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16311",
          "StopID": "16311",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.15311,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14382",
          "StopID": "14382",
          "StopName": {
            "Zh_tw": "白鷺灣社區",
            "En": "Bailuwan Community"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.14794,
            "PositionLat": 22.99762
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14383",
          "StopID": "14383",
          "StopName": {
            "Zh_tw": "沙灘忠誠社區",
            "En": "Shatan & Jhongcheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.14884,
            "PositionLat": 22.99712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN21013",
          "StopID": "21013",
          "StopName": {
            "Zh_tw": "世平路世平一街口",
            "En": "Shihping Rd. & Shihping first St."
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.15085,
            "PositionLat": 22.99491
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16259",
          "StopID": "16259",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.15231,
            "PositionLat": 22.99334
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14451",
          "StopID": "14451",
          "StopName": {
            "Zh_tw": "同平路",
            "En": "Tongping Rd."
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.15395,
            "PositionLat": 22.99623
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14405",
          "StopID": "14405",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.15317,
            "PositionLat": 22.99922
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15975",
          "StopID": "15975",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.15414,
            "PositionLat": 23.00035
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14411",
          "StopID": "14411",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋(850巷)",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.15838,
            "PositionLat": 23.00181
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10272",
          "StopID": "10272",
          "StopName": {
            "Zh_tw": "安平古堡(安平路)",
            "En": "Anping Fort(AnPing Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.16068,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10258",
          "StopID": "10258",
          "StopName": {
            "Zh_tw": "天妃里",
            "En": "Tianfei Vil."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.16202,
            "PositionLat": 23.00015
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10259",
          "StopID": "10259",
          "StopName": {
            "Zh_tw": "安平",
            "En": "An-Ping"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.16427,
            "PositionLat": 22.99959
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10820",
          "StopID": "10820",
          "StopName": {
            "Zh_tw": "石門國小",
            "En": "Shih-Men Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.16574,
            "PositionLat": 22.99947
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10260",
          "StopID": "10260",
          "StopName": {
            "Zh_tw": "安北路口",
            "En": "An-Bei Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.16761,
            "PositionLat": 22.99916
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10261",
          "StopID": "10261",
          "StopName": {
            "Zh_tw": "安平國中",
            "En": "AnPing Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.16951,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10262",
          "StopID": "10262",
          "StopName": {
            "Zh_tw": "承天橋口",
            "En": "Chengtian Bridge Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.17125,
            "PositionLat": 22.99833
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10263",
          "StopID": "10263",
          "StopName": {
            "Zh_tw": "南興",
            "En": "Nan-Sing"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.17287,
            "PositionLat": 22.99805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10816",
          "StopID": "10816",
          "StopName": {
            "Zh_tw": "望月橋",
            "En": "Full Moon Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.17509,
            "PositionLat": 22.99807
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10266",
          "StopID": "10266",
          "StopName": {
            "Zh_tw": "半路厝",
            "En": "BanLuCuo"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.17874,
            "PositionLat": 22.99834
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10265",
          "StopID": "10265",
          "StopName": {
            "Zh_tw": "臨海社區",
            "En": "LinHai Community"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.18221,
            "PositionLat": 22.99831
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10267",
          "StopID": "10267",
          "StopName": {
            "Zh_tw": "平安里",
            "En": "PingAn Vil."
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.18511,
            "PositionLat": 22.99802
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10268",
          "StopID": "10268",
          "StopName": {
            "Zh_tw": "民生路臨時停車場",
            "En": "Minsheng Rd. Temporary Parking Lot"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.18793,
            "PositionLat": 22.99764
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10269",
          "StopID": "10269",
          "StopName": {
            "Zh_tw": "民生路二段",
            "En": "Sec. 2 Minsheng Rd."
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.19057,
            "PositionLat": 22.99712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9029",
          "StopID": "9029",
          "StopName": {
            "Zh_tw": "協進國小(民生路)",
            "En": "Sie-Jin Elementary School(Minsheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.19262,
            "PositionLat": 22.99655
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9030",
          "StopID": "9030",
          "StopName": {
            "Zh_tw": "郭綜合醫院",
            "En": "Guo’s General Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.19847,
            "PositionLat": 22.99467
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9031",
          "StopID": "9031",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9032",
          "StopID": "9032",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9033",
          "StopID": "9033",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.19748,
            "PositionLat": 22.98661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9034",
          "StopID": "9034",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.19752,
            "PositionLat": 22.98445
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9035",
          "StopID": "9035",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.19756,
            "PositionLat": 22.98237
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9036",
          "StopID": "9036",
          "StopName": {
            "Zh_tw": "家齊高中",
            "En": "Chia-Chi Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.20141,
            "PositionLat": 22.98135
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9038",
          "StopID": "9038",
          "StopName": {
            "Zh_tw": "南門路",
            "En": "Nan-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.20374,
            "PositionLat": 22.98149
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14001",
          "StopID": "14001",
          "StopName": {
            "Zh_tw": "中山國中",
            "En": "Jhongshan Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.20409,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9039",
          "StopID": "9039",
          "StopName": {
            "Zh_tw": "大南門城",
            "En": "Great South Gate"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.20447,
            "PositionLat": 22.98713
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9040",
          "StopID": "9040",
          "StopName": {
            "Zh_tw": "建興國中(南門路)",
            "En": "Jian-Sing Junior High School(Nan-Men Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.20458,
            "PositionLat": 22.98822
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9041",
          "StopID": "9041",
          "StopName": {
            "Zh_tw": "孔廟(臺灣文學館、臺南市美術館1館)",
            "En": "Confucius Temple(Museum of Taiwan Literature、Tainan Art Museum 1 Bldg.)"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.20498,
            "PositionLat": 22.99145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16020",
          "StopID": "16020",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.20605,
            "PositionLat": 22.99308
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9043",
          "StopID": "9043",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.20723,
            "PositionLat": 22.99388
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9044",
          "StopID": "9044",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.20937,
            "PositionLat": 22.99528
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9045",
          "StopID": "9045",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9046",
          "StopID": "9046",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9047",
          "StopID": "9047",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siaodong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 60,
          "StopPosition": {
            "PositionLon": 120.21574,
            "PositionLat": 23.00113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9048",
          "StopID": "9048",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 61,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.00092
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9049",
          "StopID": "9049",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 62,
          "StopPosition": {
            "PositionLon": 120.22137,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10765",
          "StopID": "10765",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 63,
          "StopPosition": {
            "PositionLon": 120.22527,
            "PositionLat": 23.00038
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9050",
          "StopID": "9050",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 64,
          "StopPosition": {
            "PositionLon": 120.22892,
            "PositionLat": 22.99946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9051",
          "StopID": "9051",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 65,
          "StopPosition": {
            "PositionLon": 120.23221,
            "PositionLat": 22.99858
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9052",
          "StopID": "9052",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 66,
          "StopPosition": {
            "PositionLon": 120.23596,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9053",
          "StopID": "9053",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 67,
          "StopPosition": {
            "PositionLon": 120.23813,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9054",
          "StopID": "9054",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Ying-Jyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 68,
          "StopPosition": {
            "PositionLon": 120.24312,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9055",
          "StopID": "9055",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 69,
          "StopPosition": {
            "PositionLon": 120.24592,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9056",
          "StopID": "9056",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 70,
          "StopPosition": {
            "PositionLon": 120.24932,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9057",
          "StopID": "9057",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University of Technology"
          },
          "BoardingType": 0,
          "StopSequence": 71,
          "StopPosition": {
            "PositionLon": 120.25349,
            "PositionLat": 22.99832
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10162",
      "RouteID": "10162",
      "RouteName": {
        "Zh_tw": "2",
        "En": "2"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101626",
      "SubRouteID": "101626",
      "SubRouteName": {
        "Zh_tw": "2路 崑山科大→四草",
        "En": "2 Kun Shan University→Sihcao"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN9001",
          "StopID": "9001",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.25331,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9002",
          "StopID": "9002",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.24933,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9003",
          "StopID": "9003",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.24621,
            "PositionLat": 22.99872
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9004",
          "StopID": "9004",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Yingjyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.24336,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9005",
          "StopID": "9005",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.23969,
            "PositionLat": 22.99857
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9006",
          "StopID": "9006",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.23598,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9007",
          "StopID": "9007",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.23257,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9008",
          "StopID": "9008",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.22912,
            "PositionLat": 22.99963
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10764",
          "StopID": "10764",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.22531,
            "PositionLat": 23.00055
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9009",
          "StopID": "9009",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.22142,
            "PositionLat": 23.00089
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9010",
          "StopID": "9010",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21812,
            "PositionLat": 23.00109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9011",
          "StopID": "9011",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siao-Dong Road"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21601,
            "PositionLat": 23.00131
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9012",
          "StopID": "9012",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9013",
          "StopID": "9013",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9014",
          "StopID": "9014",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20914,
            "PositionLat": 22.99531
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9015",
          "StopID": "9015",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20709,
            "PositionLat": 22.99393
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16019",
          "StopID": "16019",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20626,
            "PositionLat": 22.99338
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9016",
          "StopID": "9016",
          "StopName": {
            "Zh_tw": "孔廟(臺灣文學館、臺南市美術館1館)",
            "En": "Confucius Temple(Museum of Taiwan Literature、Tainan Art Museum 1 Bldg.)"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20486,
            "PositionLat": 22.99127
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9017",
          "StopID": "9017",
          "StopName": {
            "Zh_tw": "建興國中(南門路)",
            "En": "Jian-Sing Junior High School(Nan-Men Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20454,
            "PositionLat": 22.98856
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9018",
          "StopID": "9018",
          "StopName": {
            "Zh_tw": "大南門城",
            "En": "Great South Gate"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20436,
            "PositionLat": 22.98701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14000",
          "StopID": "14000",
          "StopName": {
            "Zh_tw": "中山國中",
            "En": "Jhongshan Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20405,
            "PositionLat": 22.98434
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9019",
          "StopID": "9019",
          "StopName": {
            "Zh_tw": "南門路",
            "En": "Nan-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20374,
            "PositionLat": 22.98181
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9020",
          "StopID": "9020",
          "StopName": {
            "Zh_tw": "臺南高商",
            "En": "TNCVS"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20304,
            "PositionLat": 22.98144
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9021",
          "StopID": "9021",
          "StopName": {
            "Zh_tw": "家齊高中",
            "En": "Chia-Chi Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20116,
            "PositionLat": 22.98145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9022",
          "StopID": "9022",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.19769,
            "PositionLat": 22.98216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9023",
          "StopID": "9023",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.19766,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9024",
          "StopID": "9024",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19764,
            "PositionLat": 22.98711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9025",
          "StopID": "9025",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9026",
          "StopID": "9026",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9027",
          "StopID": "9027",
          "StopName": {
            "Zh_tw": "郭綜合醫院",
            "En": "Guo’s General Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19782,
            "PositionLat": 22.99506
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9028",
          "StopID": "9028",
          "StopName": {
            "Zh_tw": "協進國小(民生路)",
            "En": "Sie-Jin Elementary School(Minsheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19311,
            "PositionLat": 22.99646
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10215",
          "StopID": "10215",
          "StopName": {
            "Zh_tw": "民生路二段",
            "En": "Sec. 2 Minsheng Rd."
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19201,
            "PositionLat": 22.99681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10216",
          "StopID": "10216",
          "StopName": {
            "Zh_tw": "民生路臨時停車場",
            "En": "Minsheng Rd. Temporary Parking Lot"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18789,
            "PositionLat": 22.99777
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10217",
          "StopID": "10217",
          "StopName": {
            "Zh_tw": "平安里",
            "En": "PingAn Vil."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18515,
            "PositionLat": 22.99817
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10219",
          "StopID": "10219",
          "StopName": {
            "Zh_tw": "臨海社區",
            "En": "LinHai Community"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18199,
            "PositionLat": 22.99842
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10218",
          "StopID": "10218",
          "StopName": {
            "Zh_tw": "半路厝",
            "En": "Ban-Lu-Cuo"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.17821,
            "PositionLat": 22.99835
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10815",
          "StopID": "10815",
          "StopName": {
            "Zh_tw": "望月橋",
            "En": "Full Moon Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.17493,
            "PositionLat": 22.99821
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10221",
          "StopID": "10221",
          "StopName": {
            "Zh_tw": "南興",
            "En": "Nan-Sing"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.17267,
            "PositionLat": 22.99818
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10222",
          "StopID": "10222",
          "StopName": {
            "Zh_tw": "承天橋口",
            "En": "Cheng-Tian Bridge Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.17112,
            "PositionLat": 22.99837
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10223",
          "StopID": "10223",
          "StopName": {
            "Zh_tw": "安平國中",
            "En": "An-Ping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.16938,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10226",
          "StopID": "10226",
          "StopName": {
            "Zh_tw": "石門里",
            "En": "Shihmen Village"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.16664,
            "PositionLat": 23.00066
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10227",
          "StopID": "10227",
          "StopName": {
            "Zh_tw": "安平蚵灰窯文化館",
            "En": "AnPing Oyster Shell Cement Kiln Museum"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.16428,
            "PositionLat": 23.00243
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10228",
          "StopID": "10228",
          "StopName": {
            "Zh_tw": "漁民村",
            "En": "Fisherman Village"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.16263,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10229",
          "StopID": "10229",
          "StopName": {
            "Zh_tw": "安平古堡(安北路)",
            "En": "Fort Zeelandia(An-Bei Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.16052,
            "PositionLat": 23.00278
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10230",
          "StopID": "10230",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.15828,
            "PositionLat": 23.00221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15974",
          "StopID": "15974",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.15426,
            "PositionLat": 23.00044
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10231",
          "StopID": "10231",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.15311,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14450",
          "StopID": "14450",
          "StopName": {
            "Zh_tw": "同平路",
            "En": "Tongping Rd."
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.15378,
            "PositionLat": 22.99639
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16258",
          "StopID": "16258",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.15237,
            "PositionLat": 22.99343
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN21010",
          "StopID": "21010",
          "StopName": {
            "Zh_tw": "世平路世平一街口",
            "En": "Shihping Rd. ＆ Shihping first St."
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.15102,
            "PositionLat": 22.99477
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14380",
          "StopID": "14380",
          "StopName": {
            "Zh_tw": "沙灘忠誠社區",
            "En": "Shatan ＆ Jhongcheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.14912,
            "PositionLat": 22.99705
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14381",
          "StopID": "14381",
          "StopName": {
            "Zh_tw": "白鷺灣社區",
            "En": "Bailuwan Community"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.14685,
            "PositionLat": 22.99731
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17162",
          "StopID": "17162",
          "StopName": {
            "Zh_tw": "台江國家公園管理處",
            "En": "Taijiang National Park Headquarters"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.13564,
            "PositionLat": 23.00326
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN13978",
          "StopID": "13978",
          "StopName": {
            "Zh_tw": "大社角",
            "En": "Da-She-Jiao"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.13101,
            "PositionLat": 23.01817
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN13979",
          "StopID": "13979",
          "StopName": {
            "Zh_tw": "四草",
            "En": "Sih-Cao"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.12908,
            "PositionLat": 23.01758
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10162",
      "RouteID": "10162",
      "RouteName": {
        "Zh_tw": "2",
        "En": "2"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101726",
      "SubRouteID": "101726",
      "SubRouteName": {
        "Zh_tw": "2路 崑山科大→白鷺灣社區(經復華里)",
        "En": "2 Kun Shan University→Bailuwan Community[Via Fuhua Vil.]"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN9001",
          "StopID": "9001",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.25331,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9002",
          "StopID": "9002",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.24933,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17164",
          "StopID": "17164",
          "StopName": {
            "Zh_tw": "影三華廈",
            "En": "Yingsan Huasia"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.24638,
            "PositionLat": 23.00074
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17165",
          "StopID": "17165",
          "StopName": {
            "Zh_tw": "復國一路90巷口",
            "En": "Lane 90 Fuguo 1st Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.24607,
            "PositionLat": 23.00391
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17166",
          "StopID": "17166",
          "StopName": {
            "Zh_tw": "復華一街口",
            "En": "Fuhua 1st St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.24611,
            "PositionLat": 23.00573
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17167",
          "StopID": "17167",
          "StopName": {
            "Zh_tw": "復華二街口",
            "En": "Fuhua 2nd St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.24625,
            "PositionLat": 23.00761
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17168",
          "StopID": "17168",
          "StopName": {
            "Zh_tw": "復華五街口",
            "En": "Fuhua 5th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.24649,
            "PositionLat": 23.01084
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17169",
          "StopID": "17169",
          "StopName": {
            "Zh_tw": "復華六街口",
            "En": "Fuhua 6th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.24664,
            "PositionLat": 23.01278
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17170",
          "StopID": "17170",
          "StopName": {
            "Zh_tw": "復國一路475巷口",
            "En": "Lane 475 Fuguo 1st Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.24476,
            "PositionLat": 23.01531
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4390",
          "StopID": "4390",
          "StopName": {
            "Zh_tw": "復華里",
            "En": "Fuhua Vil."
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.24361,
            "PositionLat": 23.01661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4405",
          "StopID": "4405",
          "StopName": {
            "Zh_tw": "復國一路475巷口",
            "En": "Lane 475 Fuguo 1st Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.24483,
            "PositionLat": 23.01524
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4404",
          "StopID": "4404",
          "StopName": {
            "Zh_tw": "復華六街口",
            "En": "Fuhua 6th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.24652,
            "PositionLat": 23.01288
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4403",
          "StopID": "4403",
          "StopName": {
            "Zh_tw": "復華五街口",
            "En": "Fuhua 5th St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.24654,
            "PositionLat": 23.01128
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4402",
          "StopID": "4402",
          "StopName": {
            "Zh_tw": "復華二街口",
            "En": "Fuhua 2nd St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.24618,
            "PositionLat": 23.00765
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4401",
          "StopID": "4401",
          "StopName": {
            "Zh_tw": "復華一街口",
            "En": "Fuhua 1st St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.24609,
            "PositionLat": 23.00565
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4400",
          "StopID": "4400",
          "StopName": {
            "Zh_tw": "復國一路90巷口",
            "En": "Lane 90 Fuguo 1st Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.24596,
            "PositionLat": 23.00276
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN4399",
          "StopID": "4399",
          "StopName": {
            "Zh_tw": "影三華廈",
            "En": "Yingsan Huasia"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.24628,
            "PositionLat": 23.00067
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9003",
          "StopID": "9003",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.24621,
            "PositionLat": 22.99872
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9004",
          "StopID": "9004",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Yingjyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.24336,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9005",
          "StopID": "9005",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.23969,
            "PositionLat": 22.99857
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9006",
          "StopID": "9006",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.23598,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9007",
          "StopID": "9007",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.23257,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9008",
          "StopID": "9008",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.22912,
            "PositionLat": 22.99963
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10764",
          "StopID": "10764",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.22531,
            "PositionLat": 23.00055
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9009",
          "StopID": "9009",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.22142,
            "PositionLat": 23.00089
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9010",
          "StopID": "9010",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.21812,
            "PositionLat": 23.00109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9011",
          "StopID": "9011",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siao-Dong Road"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.21601,
            "PositionLat": 23.00131
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9012",
          "StopID": "9012",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9013",
          "StopID": "9013",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9014",
          "StopID": "9014",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.20914,
            "PositionLat": 22.99531
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9015",
          "StopID": "9015",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.20709,
            "PositionLat": 22.99393
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16019",
          "StopID": "16019",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.20626,
            "PositionLat": 22.99338
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9016",
          "StopID": "9016",
          "StopName": {
            "Zh_tw": "孔廟(臺灣文學館、臺南市美術館1館)",
            "En": "Confucius Temple(Museum of Taiwan Literature、Tainan Art Museum 1 Bldg.)"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20486,
            "PositionLat": 22.99127
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9017",
          "StopID": "9017",
          "StopName": {
            "Zh_tw": "建興國中(南門路)",
            "En": "Jian-Sing Junior High School(Nan-Men Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20454,
            "PositionLat": 22.98856
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9018",
          "StopID": "9018",
          "StopName": {
            "Zh_tw": "大南門城",
            "En": "Great South Gate"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20436,
            "PositionLat": 22.98701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14000",
          "StopID": "14000",
          "StopName": {
            "Zh_tw": "中山國中",
            "En": "Jhongshan Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20405,
            "PositionLat": 22.98434
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9019",
          "StopID": "9019",
          "StopName": {
            "Zh_tw": "南門路",
            "En": "Nan-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20374,
            "PositionLat": 22.98181
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9020",
          "StopID": "9020",
          "StopName": {
            "Zh_tw": "臺南高商",
            "En": "TNCVS"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20304,
            "PositionLat": 22.98144
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9021",
          "StopID": "9021",
          "StopName": {
            "Zh_tw": "家齊高中",
            "En": "Chia-Chi Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.20116,
            "PositionLat": 22.98145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9022",
          "StopID": "9022",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.19769,
            "PositionLat": 22.98216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9023",
          "StopID": "9023",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.19766,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9024",
          "StopID": "9024",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.19764,
            "PositionLat": 22.98711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9025",
          "StopID": "9025",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9026",
          "StopID": "9026",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9027",
          "StopID": "9027",
          "StopName": {
            "Zh_tw": "郭綜合醫院",
            "En": "Guo’s General Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.19782,
            "PositionLat": 22.99506
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9028",
          "StopID": "9028",
          "StopName": {
            "Zh_tw": "協進國小(民生路)",
            "En": "Sie-Jin Elementary School(Minsheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.19311,
            "PositionLat": 22.99646
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10215",
          "StopID": "10215",
          "StopName": {
            "Zh_tw": "民生路二段",
            "En": "Sec. 2 Minsheng Rd."
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.19201,
            "PositionLat": 22.99681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10216",
          "StopID": "10216",
          "StopName": {
            "Zh_tw": "民生路臨時停車場",
            "En": "Minsheng Rd. Temporary Parking Lot"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.18789,
            "PositionLat": 22.99777
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10217",
          "StopID": "10217",
          "StopName": {
            "Zh_tw": "平安里",
            "En": "PingAn Vil."
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.18515,
            "PositionLat": 22.99817
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10219",
          "StopID": "10219",
          "StopName": {
            "Zh_tw": "臨海社區",
            "En": "LinHai Community"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.18199,
            "PositionLat": 22.99842
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10218",
          "StopID": "10218",
          "StopName": {
            "Zh_tw": "半路厝",
            "En": "Ban-Lu-Cuo"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.17821,
            "PositionLat": 22.99835
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10815",
          "StopID": "10815",
          "StopName": {
            "Zh_tw": "望月橋",
            "En": "Full Moon Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.17493,
            "PositionLat": 22.99821
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10221",
          "StopID": "10221",
          "StopName": {
            "Zh_tw": "南興",
            "En": "Nan-Sing"
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.17267,
            "PositionLat": 22.99818
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10222",
          "StopID": "10222",
          "StopName": {
            "Zh_tw": "承天橋口",
            "En": "Cheng-Tian Bridge Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.17112,
            "PositionLat": 22.99837
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10223",
          "StopID": "10223",
          "StopName": {
            "Zh_tw": "安平國中",
            "En": "An-Ping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 55,
          "StopPosition": {
            "PositionLon": 120.16938,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10226",
          "StopID": "10226",
          "StopName": {
            "Zh_tw": "石門里",
            "En": "Shihmen Village"
          },
          "BoardingType": 0,
          "StopSequence": 56,
          "StopPosition": {
            "PositionLon": 120.16664,
            "PositionLat": 23.00066
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10227",
          "StopID": "10227",
          "StopName": {
            "Zh_tw": "安平蚵灰窯文化館",
            "En": "AnPing Oyster Shell Cement Kiln Museum"
          },
          "BoardingType": 0,
          "StopSequence": 57,
          "StopPosition": {
            "PositionLon": 120.16428,
            "PositionLat": 23.00243
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10228",
          "StopID": "10228",
          "StopName": {
            "Zh_tw": "漁民村",
            "En": "Fisherman Village"
          },
          "BoardingType": 0,
          "StopSequence": 58,
          "StopPosition": {
            "PositionLon": 120.16263,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10229",
          "StopID": "10229",
          "StopName": {
            "Zh_tw": "安平古堡(安北路)",
            "En": "Fort Zeelandia(An-Bei Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 59,
          "StopPosition": {
            "PositionLon": 120.16052,
            "PositionLat": 23.00278
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10230",
          "StopID": "10230",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 60,
          "StopPosition": {
            "PositionLon": 120.15828,
            "PositionLat": 23.00221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15974",
          "StopID": "15974",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 61,
          "StopPosition": {
            "PositionLon": 120.15426,
            "PositionLat": 23.00044
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10231",
          "StopID": "10231",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 62,
          "StopPosition": {
            "PositionLon": 120.15311,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14450",
          "StopID": "14450",
          "StopName": {
            "Zh_tw": "同平路",
            "En": "Tongping Rd."
          },
          "BoardingType": 0,
          "StopSequence": 63,
          "StopPosition": {
            "PositionLon": 120.15378,
            "PositionLat": 22.99639
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16258",
          "StopID": "16258",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 64,
          "StopPosition": {
            "PositionLon": 120.15237,
            "PositionLat": 22.99343
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN21010",
          "StopID": "21010",
          "StopName": {
            "Zh_tw": "世平路世平一街口",
            "En": "Shihping Rd. ＆ Shihping first St."
          },
          "BoardingType": 0,
          "StopSequence": 65,
          "StopPosition": {
            "PositionLon": 120.15102,
            "PositionLat": 22.99477
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14380",
          "StopID": "14380",
          "StopName": {
            "Zh_tw": "沙灘忠誠社區",
            "En": "Shatan ＆ Jhongcheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 66,
          "StopPosition": {
            "PositionLon": 120.14912,
            "PositionLat": 22.99705
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14381",
          "StopID": "14381",
          "StopName": {
            "Zh_tw": "白鷺灣社區",
            "En": "Bailuwan Community"
          },
          "BoardingType": 0,
          "StopSequence": 67,
          "StopPosition": {
            "PositionLon": 120.14685,
            "PositionLat": 22.99731
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10162",
      "RouteID": "10162",
      "RouteName": {
        "Zh_tw": "2",
        "En": "2"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101627",
      "SubRouteID": "101627",
      "SubRouteName": {
        "Zh_tw": "2路 四草→崑山科大",
        "En": "2 Sihcao→Kun Shan University"
      },
      "Direction": 1,
      "Stops": [
        {
          "StopUID": "TNN13990",
          "StopID": "13990",
          "StopName": {
            "Zh_tw": "四草",
            "En": "Sih-Cao"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.12908,
            "PositionLat": 23.01758
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN17163",
          "StopID": "17163",
          "StopName": {
            "Zh_tw": "台江國家公園管理處",
            "En": "Taijiang National Park Headquarters"
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.13581,
            "PositionLat": 23.00155
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14382",
          "StopID": "14382",
          "StopName": {
            "Zh_tw": "白鷺灣社區",
            "En": "Bailuwan Community"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.14794,
            "PositionLat": 22.99762
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14383",
          "StopID": "14383",
          "StopName": {
            "Zh_tw": "沙灘忠誠社區",
            "En": "Shatan & Jhongcheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.14884,
            "PositionLat": 22.99712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN21013",
          "StopID": "21013",
          "StopName": {
            "Zh_tw": "世平路世平一街口",
            "En": "Shihping Rd. & Shihping first St."
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.15085,
            "PositionLat": 22.99491
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16259",
          "StopID": "16259",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.15231,
            "PositionLat": 22.99334
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14451",
          "StopID": "14451",
          "StopName": {
            "Zh_tw": "同平路",
            "En": "Tongping Rd."
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.15395,
            "PositionLat": 22.99623
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14405",
          "StopID": "14405",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.15317,
            "PositionLat": 22.99922
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15975",
          "StopID": "15975",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.15414,
            "PositionLat": 23.00035
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14411",
          "StopID": "14411",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋(850巷)",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.15838,
            "PositionLat": 23.00181
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10272",
          "StopID": "10272",
          "StopName": {
            "Zh_tw": "安平古堡(安平路)",
            "En": "Anping Fort(AnPing Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.16068,
            "PositionLat": 23.00018
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10258",
          "StopID": "10258",
          "StopName": {
            "Zh_tw": "天妃里",
            "En": "Tianfei Vil."
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.16202,
            "PositionLat": 23.00015
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10259",
          "StopID": "10259",
          "StopName": {
            "Zh_tw": "安平",
            "En": "An-Ping"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.16427,
            "PositionLat": 22.99959
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10820",
          "StopID": "10820",
          "StopName": {
            "Zh_tw": "石門國小",
            "En": "Shih-Men Elementary School"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.16574,
            "PositionLat": 22.99947
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10260",
          "StopID": "10260",
          "StopName": {
            "Zh_tw": "安北路口",
            "En": "An-Bei Rd. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.16761,
            "PositionLat": 22.99916
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10261",
          "StopID": "10261",
          "StopName": {
            "Zh_tw": "安平國中",
            "En": "AnPing Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.16951,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10262",
          "StopID": "10262",
          "StopName": {
            "Zh_tw": "承天橋口",
            "En": "Chengtian Bridge Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.17125,
            "PositionLat": 22.99833
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10263",
          "StopID": "10263",
          "StopName": {
            "Zh_tw": "南興",
            "En": "Nan-Sing"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.17287,
            "PositionLat": 22.99805
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10816",
          "StopID": "10816",
          "StopName": {
            "Zh_tw": "望月橋",
            "En": "Full Moon Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.17509,
            "PositionLat": 22.99807
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10266",
          "StopID": "10266",
          "StopName": {
            "Zh_tw": "半路厝",
            "En": "BanLuCuo"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.17874,
            "PositionLat": 22.99834
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10265",
          "StopID": "10265",
          "StopName": {
            "Zh_tw": "臨海社區",
            "En": "LinHai Community"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.18221,
            "PositionLat": 22.99831
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10267",
          "StopID": "10267",
          "StopName": {
            "Zh_tw": "平安里",
            "En": "PingAn Vil."
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.18511,
            "PositionLat": 22.99802
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10268",
          "StopID": "10268",
          "StopName": {
            "Zh_tw": "民生路臨時停車場",
            "En": "Minsheng Rd. Temporary Parking Lot"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.18793,
            "PositionLat": 22.99764
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10269",
          "StopID": "10269",
          "StopName": {
            "Zh_tw": "民生路二段",
            "En": "Sec. 2 Minsheng Rd."
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.19057,
            "PositionLat": 22.99712
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9029",
          "StopID": "9029",
          "StopName": {
            "Zh_tw": "協進國小(民生路)",
            "En": "Sie-Jin Elementary School(Minsheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.19262,
            "PositionLat": 22.99655
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9030",
          "StopID": "9030",
          "StopName": {
            "Zh_tw": "郭綜合醫院",
            "En": "Guo’s General Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.19847,
            "PositionLat": 22.99467
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9031",
          "StopID": "9031",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19831,
            "PositionLat": 22.99209
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9032",
          "StopID": "9032",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19744,
            "PositionLat": 22.98885
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9033",
          "StopID": "9033",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19748,
            "PositionLat": 22.98661
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9034",
          "StopID": "9034",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Simen Rd."
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19752,
            "PositionLat": 22.98445
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9035",
          "StopID": "9035",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19756,
            "PositionLat": 22.98237
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9036",
          "StopID": "9036",
          "StopName": {
            "Zh_tw": "家齊高中",
            "En": "Chia-Chi Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.20141,
            "PositionLat": 22.98135
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9038",
          "StopID": "9038",
          "StopName": {
            "Zh_tw": "南門路",
            "En": "Nan-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.20374,
            "PositionLat": 22.98149
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14001",
          "StopID": "14001",
          "StopName": {
            "Zh_tw": "中山國中",
            "En": "Jhongshan Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.20409,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9039",
          "StopID": "9039",
          "StopName": {
            "Zh_tw": "大南門城",
            "En": "Great South Gate"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.20447,
            "PositionLat": 22.98713
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9040",
          "StopID": "9040",
          "StopName": {
            "Zh_tw": "建興國中(南門路)",
            "En": "Jian-Sing Junior High School(Nan-Men Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.20458,
            "PositionLat": 22.98822
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9041",
          "StopID": "9041",
          "StopName": {
            "Zh_tw": "孔廟(臺灣文學館、臺南市美術館1館)",
            "En": "Confucius Temple(Museum of Taiwan Literature、Tainan Art Museum 1 Bldg.)"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.20498,
            "PositionLat": 22.99145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16020",
          "StopID": "16020",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.20605,
            "PositionLat": 22.99308
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9043",
          "StopID": "9043",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.20723,
            "PositionLat": 22.99388
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9044",
          "StopID": "9044",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.20937,
            "PositionLat": 22.99528
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9045",
          "StopID": "9045",
          "StopName": {
            "Zh_tw": "臺南火車站(南站)",
            "En": "Tainan Train Station(South Station)"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.21127,
            "PositionLat": 22.99709
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9046",
          "StopID": "9046",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.21308,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9047",
          "StopID": "9047",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siaodong Rd."
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.21574,
            "PositionLat": 23.00113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9048",
          "StopID": "9048",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.21794,
            "PositionLat": 23.00092
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9049",
          "StopID": "9049",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.22137,
            "PositionLat": 23.00069
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10765",
          "StopID": "10765",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.22527,
            "PositionLat": 23.00038
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9050",
          "StopID": "9050",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.22892,
            "PositionLat": 22.99946
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9051",
          "StopID": "9051",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.23221,
            "PositionLat": 22.99858
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9052",
          "StopID": "9052",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.23596,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9053",
          "StopID": "9053",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.23813,
            "PositionLat": 22.99838
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9054",
          "StopID": "9054",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Ying-Jyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.24312,
            "PositionLat": 22.99854
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9055",
          "StopID": "9055",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.24592,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9056",
          "StopID": "9056",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 53,
          "StopPosition": {
            "PositionLon": 120.24932,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9057",
          "StopID": "9057",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University of Technology"
          },
          "BoardingType": 0,
          "StopSequence": 54,
          "StopPosition": {
            "PositionLon": 120.25349,
            "PositionLat": 22.99832
          },
          "IsSectionPoint": false
        }
      ]
    },
    {
      "RouteUID": "TNN10162",
      "RouteID": "10162",
      "RouteName": {
        "Zh_tw": "2",
        "En": "2"
      },
      "Operators": [
        {
          "OperatorID": "10001",
          "OperatorName": {
            "Zh_tw": "府城客運",
            "En": "Tainan City Bus"
          },
          "OperatorCode": "TainanCityBus",
          "OperatorNo": "0803"
        }
      ],
      "SubRouteUID": "TNN101623",
      "SubRouteID": "101623",
      "SubRouteName": {
        "Zh_tw": "2路 崑山科大→白鷺灣社區",
        "En": "2 Kun Shan University→Bailuwan Community"
      },
      "Direction": 0,
      "Stops": [
        {
          "StopUID": "TNN9001",
          "StopID": "9001",
          "StopName": {
            "Zh_tw": "崑山科大",
            "En": "Kun Shan University"
          },
          "BoardingType": 0,
          "StopSequence": 1,
          "StopPosition": {
            "PositionLon": 120.25331,
            "PositionLat": 22.99852
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9002",
          "StopID": "9002",
          "StopName": {
            "Zh_tw": "建國里",
            "En": "Jianguo Vil."
          },
          "BoardingType": 0,
          "StopSequence": 2,
          "StopPosition": {
            "PositionLon": 120.24933,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9003",
          "StopID": "9003",
          "StopName": {
            "Zh_tw": "漢聲電台",
            "En": "Voice of Han Broadcasting Network"
          },
          "BoardingType": 0,
          "StopSequence": 3,
          "StopPosition": {
            "PositionLon": 120.24621,
            "PositionLat": 22.99872
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9004",
          "StopID": "9004",
          "StopName": {
            "Zh_tw": "影劇三村",
            "En": "Yingjyu 3rd Village"
          },
          "BoardingType": 0,
          "StopSequence": 4,
          "StopPosition": {
            "PositionLon": 120.24336,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9005",
          "StopID": "9005",
          "StopName": {
            "Zh_tw": "高雄榮總臺南分院(小東路)",
            "En": "Kaohsiung Veterans General Hospital Tainan Branch(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 5,
          "StopPosition": {
            "PositionLon": 120.23969,
            "PositionLat": 22.99857
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9006",
          "StopID": "9006",
          "StopName": {
            "Zh_tw": "臺灣銀行",
            "En": "Bank of Taiwan"
          },
          "BoardingType": 0,
          "StopSequence": 6,
          "StopPosition": {
            "PositionLon": 120.23598,
            "PositionLat": 22.99855
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9007",
          "StopID": "9007",
          "StopName": {
            "Zh_tw": "四份子",
            "En": "Sihfenzih"
          },
          "BoardingType": 0,
          "StopSequence": 7,
          "StopPosition": {
            "PositionLon": 120.23257,
            "PositionLat": 22.99873
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9008",
          "StopID": "9008",
          "StopName": {
            "Zh_tw": "光明街口",
            "En": "Guangming St. Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 8,
          "StopPosition": {
            "PositionLon": 120.22912,
            "PositionLat": 22.99963
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10764",
          "StopID": "10764",
          "StopName": {
            "Zh_tw": "無障礙福利之家",
            "En": "Home for The Disabled"
          },
          "BoardingType": 0,
          "StopSequence": 9,
          "StopPosition": {
            "PositionLon": 120.22531,
            "PositionLat": 23.00055
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9009",
          "StopID": "9009",
          "StopName": {
            "Zh_tw": "成大醫院(小東路)",
            "En": "Cheng Kung University Hospital(Siaodong Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 10,
          "StopPosition": {
            "PositionLon": 120.22142,
            "PositionLat": 23.00089
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9010",
          "StopID": "9010",
          "StopName": {
            "Zh_tw": "成功大學",
            "En": "National Cheng Kung University"
          },
          "BoardingType": 0,
          "StopSequence": 11,
          "StopPosition": {
            "PositionLon": 120.21812,
            "PositionLat": 23.00109
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9011",
          "StopID": "9011",
          "StopName": {
            "Zh_tw": "小東路",
            "En": "Siao-Dong Road"
          },
          "BoardingType": 0,
          "StopSequence": 12,
          "StopPosition": {
            "PositionLon": 120.21601,
            "PositionLat": 23.00131
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9012",
          "StopID": "9012",
          "StopName": {
            "Zh_tw": "臺南公園(北門路)",
            "En": "Tainan Park(Beimen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 13,
          "StopPosition": {
            "PositionLon": 120.21294,
            "PositionLat": 23.00099
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9013",
          "StopID": "9013",
          "StopName": {
            "Zh_tw": "臺南火車站(北站)",
            "En": "Tainan Train Station(North Station)"
          },
          "BoardingType": 0,
          "StopSequence": 14,
          "StopPosition": {
            "PositionLon": 120.21151,
            "PositionLat": 22.99766
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9014",
          "StopID": "9014",
          "StopName": {
            "Zh_tw": "台南醫院",
            "En": "Tainan Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 15,
          "StopPosition": {
            "PositionLon": 120.20914,
            "PositionLat": 22.99531
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9015",
          "StopID": "9015",
          "StopName": {
            "Zh_tw": "中山、民權路口",
            "En": "Jhongshan Rd.＆Mincyuan Rd."
          },
          "BoardingType": 0,
          "StopSequence": 16,
          "StopPosition": {
            "PositionLon": 120.20709,
            "PositionLat": 22.99393
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16019",
          "StopID": "16019",
          "StopName": {
            "Zh_tw": "民生綠園",
            "En": "Minsheng Green Garden"
          },
          "BoardingType": 0,
          "StopSequence": 17,
          "StopPosition": {
            "PositionLon": 120.20626,
            "PositionLat": 22.99338
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9016",
          "StopID": "9016",
          "StopName": {
            "Zh_tw": "孔廟(臺灣文學館、臺南市美術館1館)",
            "En": "Confucius Temple(Museum of Taiwan Literature、Tainan Art Museum 1 Bldg.)"
          },
          "BoardingType": 0,
          "StopSequence": 18,
          "StopPosition": {
            "PositionLon": 120.20486,
            "PositionLat": 22.99127
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9017",
          "StopID": "9017",
          "StopName": {
            "Zh_tw": "建興國中(南門路)",
            "En": "Jian-Sing Junior High School(Nan-Men Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 19,
          "StopPosition": {
            "PositionLon": 120.20454,
            "PositionLat": 22.98856
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9018",
          "StopID": "9018",
          "StopName": {
            "Zh_tw": "大南門城",
            "En": "Great South Gate"
          },
          "BoardingType": 0,
          "StopSequence": 20,
          "StopPosition": {
            "PositionLon": 120.20436,
            "PositionLat": 22.98701
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14000",
          "StopID": "14000",
          "StopName": {
            "Zh_tw": "中山國中",
            "En": "Jhongshan Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 21,
          "StopPosition": {
            "PositionLon": 120.20405,
            "PositionLat": 22.98434
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9019",
          "StopID": "9019",
          "StopName": {
            "Zh_tw": "南門路",
            "En": "Nan-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 22,
          "StopPosition": {
            "PositionLon": 120.20374,
            "PositionLat": 22.98181
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9020",
          "StopID": "9020",
          "StopName": {
            "Zh_tw": "臺南高商",
            "En": "TNCVS"
          },
          "BoardingType": 0,
          "StopSequence": 23,
          "StopPosition": {
            "PositionLon": 120.20304,
            "PositionLat": 22.98144
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9021",
          "StopID": "9021",
          "StopName": {
            "Zh_tw": "家齊高中",
            "En": "Chia-Chi Senior High School"
          },
          "BoardingType": 0,
          "StopSequence": 24,
          "StopPosition": {
            "PositionLon": 120.20116,
            "PositionLat": 22.98145
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9022",
          "StopID": "9022",
          "StopName": {
            "Zh_tw": "西門健康立體停車場",
            "En": "Simen Rd. ＆ Jiankang Rd. Parking Tower"
          },
          "BoardingType": 0,
          "StopSequence": 25,
          "StopPosition": {
            "PositionLon": 120.19769,
            "PositionLat": 22.98216
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9023",
          "StopID": "9023",
          "StopName": {
            "Zh_tw": "西門路一段",
            "En": "Sec. 1 Si-Men Road"
          },
          "BoardingType": 0,
          "StopSequence": 26,
          "StopPosition": {
            "PositionLon": 120.19766,
            "PositionLat": 22.98421
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9024",
          "StopID": "9024",
          "StopName": {
            "Zh_tw": "新光三越新天地",
            "En": "Shinkong Mitsukoshi Department Store"
          },
          "BoardingType": 0,
          "StopSequence": 27,
          "StopPosition": {
            "PositionLon": 120.19764,
            "PositionLat": 22.98711
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9025",
          "StopID": "9025",
          "StopName": {
            "Zh_tw": "小西門(西門路)",
            "En": "Siaosimen(Simen Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 28,
          "StopPosition": {
            "PositionLon": 120.19761,
            "PositionLat": 22.98881
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9026",
          "StopID": "9026",
          "StopName": {
            "Zh_tw": "西門、友愛街口",
            "En": "Simen Rd.＆Youai St."
          },
          "BoardingType": 0,
          "StopSequence": 29,
          "StopPosition": {
            "PositionLon": 120.19817,
            "PositionLat": 22.99113
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9027",
          "StopID": "9027",
          "StopName": {
            "Zh_tw": "郭綜合醫院",
            "En": "Guo’s General Hospital"
          },
          "BoardingType": 0,
          "StopSequence": 30,
          "StopPosition": {
            "PositionLon": 120.19782,
            "PositionLat": 22.99506
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN9028",
          "StopID": "9028",
          "StopName": {
            "Zh_tw": "協進國小(民生路)",
            "En": "Sie-Jin Elementary School(Minsheng Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 31,
          "StopPosition": {
            "PositionLon": 120.19311,
            "PositionLat": 22.99646
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10215",
          "StopID": "10215",
          "StopName": {
            "Zh_tw": "民生路二段",
            "En": "Sec. 2 Minsheng Rd."
          },
          "BoardingType": 0,
          "StopSequence": 32,
          "StopPosition": {
            "PositionLon": 120.19201,
            "PositionLat": 22.99681
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10216",
          "StopID": "10216",
          "StopName": {
            "Zh_tw": "民生路臨時停車場",
            "En": "Minsheng Rd. Temporary Parking Lot"
          },
          "BoardingType": 0,
          "StopSequence": 33,
          "StopPosition": {
            "PositionLon": 120.18789,
            "PositionLat": 22.99777
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10217",
          "StopID": "10217",
          "StopName": {
            "Zh_tw": "平安里",
            "En": "PingAn Vil."
          },
          "BoardingType": 0,
          "StopSequence": 34,
          "StopPosition": {
            "PositionLon": 120.18515,
            "PositionLat": 22.99817
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10219",
          "StopID": "10219",
          "StopName": {
            "Zh_tw": "臨海社區",
            "En": "LinHai Community"
          },
          "BoardingType": 0,
          "StopSequence": 35,
          "StopPosition": {
            "PositionLon": 120.18199,
            "PositionLat": 22.99842
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10218",
          "StopID": "10218",
          "StopName": {
            "Zh_tw": "半路厝",
            "En": "Ban-Lu-Cuo"
          },
          "BoardingType": 0,
          "StopSequence": 36,
          "StopPosition": {
            "PositionLon": 120.17821,
            "PositionLat": 22.99835
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10815",
          "StopID": "10815",
          "StopName": {
            "Zh_tw": "望月橋",
            "En": "Full Moon Bridge"
          },
          "BoardingType": 0,
          "StopSequence": 37,
          "StopPosition": {
            "PositionLon": 120.17493,
            "PositionLat": 22.99821
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10221",
          "StopID": "10221",
          "StopName": {
            "Zh_tw": "南興",
            "En": "Nan-Sing"
          },
          "BoardingType": 0,
          "StopSequence": 38,
          "StopPosition": {
            "PositionLon": 120.17267,
            "PositionLat": 22.99818
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10222",
          "StopID": "10222",
          "StopName": {
            "Zh_tw": "承天橋口",
            "En": "Cheng-Tian Bridge Intersection"
          },
          "BoardingType": 0,
          "StopSequence": 39,
          "StopPosition": {
            "PositionLon": 120.17112,
            "PositionLat": 22.99837
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10223",
          "StopID": "10223",
          "StopName": {
            "Zh_tw": "安平國中",
            "En": "An-Ping Junior High School"
          },
          "BoardingType": 0,
          "StopSequence": 40,
          "StopPosition": {
            "PositionLon": 120.16938,
            "PositionLat": 22.99871
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10226",
          "StopID": "10226",
          "StopName": {
            "Zh_tw": "石門里",
            "En": "Shihmen Village"
          },
          "BoardingType": 0,
          "StopSequence": 41,
          "StopPosition": {
            "PositionLon": 120.16664,
            "PositionLat": 23.00066
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10227",
          "StopID": "10227",
          "StopName": {
            "Zh_tw": "安平蚵灰窯文化館",
            "En": "AnPing Oyster Shell Cement Kiln Museum"
          },
          "BoardingType": 0,
          "StopSequence": 42,
          "StopPosition": {
            "PositionLon": 120.16428,
            "PositionLat": 23.00243
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10228",
          "StopID": "10228",
          "StopName": {
            "Zh_tw": "漁民村",
            "En": "Fisherman Village"
          },
          "BoardingType": 0,
          "StopSequence": 43,
          "StopPosition": {
            "PositionLon": 120.16263,
            "PositionLat": 23.00281
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10229",
          "StopID": "10229",
          "StopName": {
            "Zh_tw": "安平古堡(安北路)",
            "En": "Fort Zeelandia(An-Bei Rd.)"
          },
          "BoardingType": 0,
          "StopSequence": 44,
          "StopPosition": {
            "PositionLon": 120.16052,
            "PositionLat": 23.00278
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10230",
          "StopID": "10230",
          "StopName": {
            "Zh_tw": "德記洋行、安平樹屋",
            "En": "Tait&Co. and Anping Tree House"
          },
          "BoardingType": 0,
          "StopSequence": 45,
          "StopPosition": {
            "PositionLon": 120.15828,
            "PositionLat": 23.00221
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN15974",
          "StopID": "15974",
          "StopName": {
            "Zh_tw": "古運河(福爾摩沙遊艇酒店)",
            "En": "Old Canal(Formosa Yacht Resort)"
          },
          "BoardingType": 0,
          "StopSequence": 46,
          "StopPosition": {
            "PositionLon": 120.15426,
            "PositionLat": 23.00044
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN10231",
          "StopID": "10231",
          "StopName": {
            "Zh_tw": "崇義社區",
            "En": "ChongYi Community"
          },
          "BoardingType": 0,
          "StopSequence": 47,
          "StopPosition": {
            "PositionLon": 120.15311,
            "PositionLat": 22.99907
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14450",
          "StopID": "14450",
          "StopName": {
            "Zh_tw": "同平路",
            "En": "Tongping Rd."
          },
          "BoardingType": 0,
          "StopSequence": 48,
          "StopPosition": {
            "PositionLon": 120.15378,
            "PositionLat": 22.99639
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN16258",
          "StopID": "16258",
          "StopName": {
            "Zh_tw": "臺南海事",
            "En": "National Tainan Senior Marine Fishery Vocational School"
          },
          "BoardingType": 0,
          "StopSequence": 49,
          "StopPosition": {
            "PositionLon": 120.15237,
            "PositionLat": 22.99343
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN21010",
          "StopID": "21010",
          "StopName": {
            "Zh_tw": "世平路世平一街口",
            "En": "Shihping Rd. ＆ Shihping first St."
          },
          "BoardingType": 0,
          "StopSequence": 50,
          "StopPosition": {
            "PositionLon": 120.15102,
            "PositionLat": 22.99477
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14380",
          "StopID": "14380",
          "StopName": {
            "Zh_tw": "沙灘忠誠社區",
            "En": "Shatan ＆ Jhongcheng Community"
          },
          "BoardingType": 0,
          "StopSequence": 51,
          "StopPosition": {
            "PositionLon": 120.14912,
            "PositionLat": 22.99705
          },
          "IsSectionPoint": false
        },
        {
          "StopUID": "TNN14381",
          "StopID": "14381",
          "StopName": {
            "Zh_tw": "白鷺灣社區",
            "En": "Bailuwan Community"
          },
          "BoardingType": 0,
          "StopSequence": 52,
          "StopPosition": {
            "PositionLon": 120.14685,
            "PositionLat": 22.99731
          },
          "IsSectionPoint": false
        }
      ]
    }
  ]
};

//取得路線公車資料和票價
const routesCity = { "VersionID": 8545, "UpdateTime": "2025-12-21T00:00:00+08:00", "UpdateInterval": 14400, "SrcUpdateTime": "2025-12-21T01:05:04+08:00", "SrcUpdateInterval": 86400, "AuthorityCode": "TNN", "Routes": [ { "RouteUID": "TNN10019", "RouteID": "10019", "RouteName": { "Zh_tw": "19", "En": "19" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16303", "OperatorName": { "Zh_tw": "巨業交通(台南)", "En": "Geya Bus Transport Co., Ltd." }, "OperatorCode": "GeyaBus", "OperatorNo": "0504" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "原住民文化會館", "En": "The Indigenous Culture Museum" }, "DestinationStopName": { "Zh_tw": "大灣高中", "En": "Dawan Senior High School" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "16928", "StopName": { "Zh_tw": "臺南海事", "En": "National Tainan Senior Marine Fishery Vocational School" } }, "EndStop": { "StopID": "16107", "StopName": { "Zh_tw": "大灣高中", "En": "Dawan Senior High School" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10019", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10019", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10019.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10019", "RouteDistance": 17 }, { "RouteUID": "TNN10021", "RouteID": "10021", "RouteName": { "Zh_tw": "21", "En": "21" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" }, { "OperatorID": "16273", "OperatorName": { "Zh_tw": "府城小黃", "En": "Tainan City Bus(Shuttle)" }, "OperatorCode": "TainanCityBus(Shuttl" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "火車南站", "En": "Tainan Train Station(South)" }, "DestinationStopName": { "Zh_tw": "永康工業區", "En": "Yongkang Industrial Park" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "8755", "StopName": { "Zh_tw": "臺南火車站(南站)", "En": "Tainan Train Station(South Station)" } }, "EndStop": { "StopID": "16233", "StopName": { "Zh_tw": "永康休閒育樂中心", "En": "Yongkang Recreation Center" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10021", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10021", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10021.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10021", "RouteDistance": 31.1 }, { "RouteUID": "TNN1009", "RouteID": "1009", "RouteName": { "Zh_tw": "9", "En": "9" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16201", "OperatorName": { "Zh_tw": "統聯客運(台南)", "En": "Ubus" }, "OperatorCode": "UnitedHighwayBus", "OperatorNo": "1201" }, { "OperatorID": "16323", "OperatorName": { "Zh_tw": "統聯客運(小巴)", "En": "Ubus" }, "OperatorCode": "UnitedHighwayBus", "OperatorNo": "1201" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" }, "DestinationStopName": { "Zh_tw": "東溪埔寮福安宮", "En": "Dongsipuliao Fuan Temple" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "31046", "StopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" } }, "EndStop": { "StopID": "31163", "StopName": { "Zh_tw": "東溪埔寮福安宮", "En": "Dongsipuliao Fuan Temple" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1009", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1009", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1009.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1009", "RouteDistance": 12.9 }, { "RouteUID": "TNN1010", "RouteID": "1010", "RouteName": { "Zh_tw": "10", "En": "10" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16201", "OperatorName": { "Zh_tw": "統聯客運(台南)", "En": "Ubus" }, "OperatorCode": "UnitedHighwayBus", "OperatorNo": "1201" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 30元", "En": "One-section fare: NT$18. Two-section fare: NT$30." }, "DepartureStopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" }, "DestinationStopName": { "Zh_tw": "鹿耳門天后宮", "En": "Luermen Matsu Temple" }, "FareBufferZoneDescription": { "Zh_tw": "分段點：「海東國小」", "En": "Fare buffer stops: Haidong Elementary School" }, "StartStop": { "StopID": "32359", "StopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" } }, "EndStop": { "StopID": "32294", "StopName": { "Zh_tw": "鹿耳門天后宮", "En": "Luermen Matsu Temple" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1010", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1010", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1010.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1010", "RouteDistance": 23.7 }, { "RouteUID": "TNN10161", "RouteID": "10161", "RouteName": { "Zh_tw": "18", "En": "18" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "大成國中", "En": "Da-Cheng Junior High School" }, "DestinationStopName": { "Zh_tw": "和順轉運站", "En": "Heshun Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "8914", "StopName": { "Zh_tw": "國民路", "En": "Guomin Rd." } }, "EndStop": { "StopID": "31369", "StopName": { "Zh_tw": "和順轉運站", "En": "Heshun Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10161", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10161", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10161.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10161", "RouteDistance": 15.2 }, { "RouteUID": "TNN10162", "RouteID": "10162", "RouteName": { "Zh_tw": "2", "En": "2" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "崑山科大", "En": "KunShan Univ." }, "DestinationStopName": { "Zh_tw": "安平", "En": "Anping" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "9001", "StopName": { "Zh_tw": "崑山科大", "En": "Kun Shan University" } }, "EndStop": { "StopID": "10270", "StopName": { "Zh_tw": "三鯤鯓", "En": "SanKunShen" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10162", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10162", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10162.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10162", "RouteDistance": 14.5 }, { "RouteUID": "TNN10163", "RouteID": "10163", "RouteName": { "Zh_tw": "3", "En": "3" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "海東國小", "En": "Haidong Elementary School" }, "DestinationStopName": { "Zh_tw": "德高國小", "En": "Degao Elementary School" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "10019", "StopName": { "Zh_tw": "海東國小", "En": "Haidong Elementary School" } }, "EndStop": { "StopID": "16496", "StopName": { "Zh_tw": "復興國中", "En": "Fusing Junior High School" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10163", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10163", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10163.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10163", "RouteDistance": 16.9 }, { "RouteUID": "TNN10164", "RouteID": "10164", "RouteName": { "Zh_tw": "5", "En": "5" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "和順轉運站", "En": "Heshun Bus Station" }, "DestinationStopName": { "Zh_tw": "市立醫院、大甲里", "En": "Tainan Municipal Hospital、Dajia Vil." }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "31371", "StopName": { "Zh_tw": "和順轉運站", "En": "Heshun Bus Station" } }, "EndStop": { "StopID": "15916", "StopName": { "Zh_tw": "大甲里", "En": "Dajia Vil." } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10164", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10164", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10164.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10164", "RouteDistance": 29.8 }, { "RouteUID": "TNN10165", "RouteID": "10165", "RouteName": { "Zh_tw": "6", "En": "6" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16201", "OperatorName": { "Zh_tw": "統聯客運(台南)", "En": "Ubus" }, "OperatorCode": "UnitedHighwayBus", "OperatorNo": "1201" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "仁德轉運站", "En": "Rende Bus Station" }, "DestinationStopName": { "Zh_tw": "龍崗國小", "En": "LongGang Elementary School" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "31666", "StopName": { "Zh_tw": "統聯客運永康站", "En": "Ubus Yongkang Station" } }, "EndStop": { "StopID": "11146", "StopName": { "Zh_tw": "龍崗國小", "En": "LongGang Elementary School" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10165", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10165", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10165.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10165", "RouteDistance": 14.4 }, { "RouteUID": "TNN10166", "RouteID": "10166", "RouteName": { "Zh_tw": "7", "En": "7" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "公園北路", "En": "Gongyuan N. Rd." }, "DestinationStopName": { "Zh_tw": "台糖安南學苑", "En": "An-nan Institute" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "27240", "StopName": { "Zh_tw": "公園北路", "En": "Gongyuan N. Rd." } }, "EndStop": { "StopID": "11135", "StopName": { "Zh_tw": "台糖安南學苑", "En": "An-nan Institute" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10166", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10166", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10166.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10166", "RouteDistance": 17.9 }, { "RouteUID": "TNN10169", "RouteID": "10169", "RouteName": { "Zh_tw": "11", "En": "11" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 30元", "En": "One-section fare: NT$18. Two-section fare: NT$30." }, "DepartureStopName": { "Zh_tw": "大成路口", "En": "Dacheng Rd. and Simen Rd." }, "DestinationStopName": { "Zh_tw": "城西里", "En": "Chengsi Village" }, "FareBufferZoneDescription": { "Zh_tw": "分段點：「海東國小」", "En": "Fare buffer stops: Haidong Elementary School" }, "StartStop": { "StopID": "27252", "StopName": { "Zh_tw": "下鯤鯓", "En": "SiaKunShen" } }, "EndStop": { "StopID": "10700", "StopName": { "Zh_tw": "城西里", "En": "Chengsi Village" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10169", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10169", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10169.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10169", "RouteDistance": 24.6 }, { "RouteUID": "TNN10170", "RouteID": "10170", "RouteName": { "Zh_tw": "14", "En": "14" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" }, { "OperatorID": "16273", "OperatorName": { "Zh_tw": "府城小黃", "En": "Tainan City Bus(Shuttle)" }, "OperatorCode": "TainanCityBus(Shuttl" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "臺南火車站", "En": "Tainan Train Station" }, "DestinationStopName": { "Zh_tw": "慈濟高中", "En": "Buddhist Tainan Tzu Chi Senior High School" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "9140", "StopName": { "Zh_tw": "臺南火車站(南站)", "En": "Tainan Train Station(South Station)" } }, "EndStop": { "StopID": "27478", "StopName": { "Zh_tw": "慈濟高中", "En": "Buddhist Tainan Tzu Chi Senior High School" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10170", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10170", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10170.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10170", "RouteDistance": 9 }, { "RouteUID": "TNN1020", "RouteID": "1020", "RouteName": { "Zh_tw": "20", "En": "20" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16303", "OperatorName": { "Zh_tw": "巨業交通(台南)", "En": "Geya Bus Transport Co., Ltd." }, "OperatorCode": "GeyaBus", "OperatorNo": "0504" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "仁德轉運站", "En": "Rende Bus Station" }, "DestinationStopName": { "Zh_tw": "安南醫院", "En": "An-nan Hospital" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "32671", "StopName": { "Zh_tw": "仁德轉運站", "En": "Rende Bus Station" } }, "EndStop": { "StopID": "32575", "StopName": { "Zh_tw": "安南醫院", "En": "An-nan Hospital" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1020", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1020", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1020.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1020", "RouteDistance": 23.6 }, { "RouteUID": "TNN10262", "RouteID": "10262", "RouteName": { "Zh_tw": "H31", "En": "H31" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16233", "OperatorName": { "Zh_tw": "漢程客運", "En": "Han-Cheng Bus Traffic Co., Ltd." }, "OperatorCode": "HanCheng Bus" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": true, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": true, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "免費接駁路線", "En": "Free Shuttle Bus" }, "DepartureStopName": { "Zh_tw": "市政府", "En": "Tainan City Hall" }, "DestinationStopName": { "Zh_tw": "高鐵台南站", "En": "THSR Tainan Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "11012", "StopName": { "Zh_tw": "永華市政中心(府前路)", "En": "Tainan City Hall(Fu-Cian Rd.)" } }, "EndStop": { "StopID": "11016", "StopName": { "Zh_tw": "高鐵台南站", "En": "THSR Tainan Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10262", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10262", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10262.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10262", "RouteDistance": 24.1 }, { "RouteUID": "TNN10265", "RouteID": "10265", "RouteName": { "Zh_tw": "62", "En": "62" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": true, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": true, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "免費接駁路線", "En": "Free Shuttle Bus" }, "DepartureStopName": { "Zh_tw": "奇美醫院", "En": "Chi Mei Medical Center" }, "DestinationStopName": { "Zh_tw": "高鐵台南站", "En": "THSR Tainan Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "20311", "StopName": { "Zh_tw": "桂田酒店", "En": "Queena Plaza Hotel" } }, "EndStop": { "StopID": "11065", "StopName": { "Zh_tw": "高鐵台南站", "En": "THSR Tainan Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10265", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10265", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10265.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10265", "RouteDistance": 21.5 }, { "RouteUID": "TNN1032", "RouteID": "1032", "RouteName": { "Zh_tw": "32", "En": "32" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16303", "OperatorName": { "Zh_tw": "巨業交通(台南)", "En": "Geya Bus Transport Co., Ltd." }, "OperatorCode": "GeyaBus", "OperatorNo": "0504" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 36元", "En": "One-section fare: NT$18. Two-section fare: NT$36" }, "DepartureStopName": { "Zh_tw": "原住民文化會館", "En": "Indigenous Culture Museum" }, "DestinationStopName": { "Zh_tw": "高鐵台南站", "En": "THSR Tainan Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "30927", "StopName": { "Zh_tw": "原住民文化會館", "En": "The Indigenous Culture Museum" } }, "EndStop": { "StopID": "30945", "StopName": { "Zh_tw": "高鐵台南站", "En": "THSR Tainan Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1032", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1032", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1032.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1032", "RouteDistance": 26.1 }, { "RouteUID": "TNN1033", "RouteID": "1033", "RouteName": { "Zh_tw": "33 關子嶺線", "En": "33 Guanzihling" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10190", "OperatorName": { "Zh_tw": "新營客運", "En": "Sinying Bus" }, "OperatorCode": "SinyingBus", "OperatorNo": "1306" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": true, "IsTourBus": true, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "高鐵嘉義站", "En": "THSR Chiayi Station" }, "DestinationStopName": { "Zh_tw": "關子嶺", "En": "Guanzihling" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "17184", "StopName": { "Zh_tw": "高鐵嘉義站", "En": "THSR Chiayi Station" } }, "EndStop": { "StopID": "29592", "StopName": { "Zh_tw": "嶺頂旅遊資訊站", "En": "Lingding Visitor Information Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1033", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1033", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1033.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1033", "RouteDistance": 35.6 }, { "RouteUID": "TNN10450", "RouteID": "10450", "RouteName": { "Zh_tw": "0左", "En": "0L" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16201", "OperatorName": { "Zh_tw": "統聯客運(台南)", "En": "Ubus" }, "OperatorCode": "UnitedHighwayBus", "OperatorNo": "1201" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "火車北站", "En": "Tainan Train Station(North)" }, "DestinationStopName": { "Zh_tw": "火車北站", "En": "Tainan Train Station(North)" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "13767", "StopName": { "Zh_tw": "臺南火車站(北站)", "En": "Tainan Train Station(North Station)" } }, "EndStop": { "StopID": "13772", "StopName": { "Zh_tw": "臺南火車站(北站)", "En": "Tainan Train Station(North Station)" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10450", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10450", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10450.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10450", "RouteDistance": 6.9 }, { "RouteUID": "TNN10451", "RouteID": "10451", "RouteName": { "Zh_tw": "0右", "En": "0R" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16201", "OperatorName": { "Zh_tw": "統聯客運(台南)", "En": "Ubus" }, "OperatorCode": "UnitedHighwayBus", "OperatorNo": "1201" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "火車南站", "En": "Tainan Train Station(South)" }, "DestinationStopName": { "Zh_tw": "火車南站", "En": "Tainan Train Station(South)" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "13706", "StopName": { "Zh_tw": "臺南火車站(南站)", "En": "Tainan Train Station(South Station)" } }, "EndStop": { "StopID": "13736", "StopName": { "Zh_tw": "臺南火車站(南站)", "En": "Tainan Train Station(South Station)" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10451", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10451", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10451.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10451", "RouteDistance": 6.9 }, { "RouteUID": "TNN10452", "RouteID": "10452", "RouteName": { "Zh_tw": "15", "En": "15" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16303", "OperatorName": { "Zh_tw": "巨業交通(台南)", "En": "Geya Bus Transport Co., Ltd." }, "OperatorCode": "GeyaBus", "OperatorNo": "0504" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "臺南市立圖書館", "En": "Tainan Public Library" }, "DestinationStopName": { "Zh_tw": "大成路口", "En": "Dacheng Rd. ＆ Simen Rd." }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "31683", "StopName": { "Zh_tw": "臺南市立圖書館", "En": "Tainan Public Library" } }, "EndStop": { "StopID": "14298", "StopName": { "Zh_tw": "大成路口", "En": "Dacheng Rd. ＆ Simen Rd." } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10452", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=10452", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/10452.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=10452", "RouteDistance": 10.4 }, { "RouteUID": "TNN1055", "RouteID": "1055", "RouteName": { "Zh_tw": "菱波官田線", "En": "55 Lingpo Guantian" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10190", "OperatorName": { "Zh_tw": "新營客運", "En": "Sinying Bus" }, "OperatorCode": "SinyingBus", "OperatorNo": "1306" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": true, "IsTourBus": true, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "" }, "DepartureStopName": { "Zh_tw": "新營", "En": "Sinying" }, "DestinationStopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "24050", "StopName": { "Zh_tw": "新營站", "En": "Sinying Station" } }, "EndStop": { "StopID": "27332", "StopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1055", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1055", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1055.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1055", "RouteDistance": 66.3 }, { "RouteUID": "TNN1061", "RouteID": "1061", "RouteName": { "Zh_tw": "61 西濱快線", "En": "61 West Coast Shuttle Bus" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10190", "OperatorName": { "Zh_tw": "新營客運", "En": "Sinying Bus" }, "OperatorCode": "SinyingBus", "OperatorNo": "1306" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": true, "IsTourBus": true, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "新營", "En": "Sinying" }, "DestinationStopName": { "Zh_tw": "臺灣鹽博物館", "En": "Taiwan Salt Museum" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "21660", "StopName": { "Zh_tw": "新營站", "En": "Sinying Station" } }, "EndStop": { "StopID": "21696", "StopName": { "Zh_tw": "臺灣鹽博物館", "En": "Taiwan Salt Museum" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1061", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1061", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1061.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1061", "RouteDistance": 76.2 }, { "RouteUID": "TNN1070", "RouteID": "1070", "RouteName": { "Zh_tw": "70", "En": "70" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "70左", "En": "70 Left" }, "DestinationStopName": { "Zh_tw": "70右", "En": "70 Right" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "20840", "StopName": { "Zh_tw": "永華市政中心(府前路)", "En": "Tainan City Hall(Fu-Cian Rd.)" } }, "EndStop": { "StopID": "20934", "StopName": { "Zh_tw": "永華市政中心(府前路)", "En": "Tainan City Hall(Fu-Cian Rd.)" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1070", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1070", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1070.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1070", "RouteDistance": 30 }, { "RouteUID": "TNN1077", "RouteID": "1077", "RouteName": { "Zh_tw": "77", "En": "77" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "16303", "OperatorName": { "Zh_tw": "巨業交通(台南)", "En": "Geya Bus Transport Co., Ltd." }, "OperatorCode": "GeyaBus", "OperatorNo": "0504" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "全票18元、半票9元", "En": "Adults Ticket: NT$18. Children/Senior Ticket: NT$9." }, "DepartureStopName": { "Zh_tw": "原住民文化會館", "En": "Indigenous Culture Museum" }, "DestinationStopName": { "Zh_tw": "仁德轉運站", "En": "Rende Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "16609", "StopName": { "Zh_tw": "原住民文化會館", "En": "The Indigenous Culture Museum" } }, "EndStop": { "StopID": "27287", "StopName": { "Zh_tw": "仁德轉運站", "En": "Rende Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1077", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1077", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1077.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1077", "RouteDistance": 11.2 }, { "RouteUID": "TNN1098", "RouteID": "1098", "RouteName": { "Zh_tw": "98", "En": "98" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10001", "OperatorName": { "Zh_tw": "府城客運", "En": "Tainan City Bus" }, "OperatorCode": "TainanCityBus", "OperatorNo": "0803" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": true, "IsTourBus": true, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "二段票，每段票為 18 元，跨分段點時一次性付款為 36元", "En": "One-section fare: NT$18. Two-section fare: NT$36" }, "DepartureStopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" }, "DestinationStopName": { "Zh_tw": "七股鹽山", "En": "Cigu Salt Mountain" }, "FareBufferZoneDescription": { "Zh_tw": "分段點為「觀夕平台」", "En": "Fare buffer stops: Sunset Platform" }, "StartStop": { "StopID": "31288", "StopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" } }, "EndStop": { "StopID": "31321", "StopName": { "Zh_tw": "黑面琵鷺賞鳥亭", "En": "Black-faced Spoonbill Bird-Watching Pavilion" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1098", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1098", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1098.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1098", "RouteDistance": 45.9 }, { "RouteUID": "TNN1100", "RouteID": "1100", "RouteName": { "Zh_tw": "綠幹線", "En": "Green" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": true, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" }, "DestinationStopName": { "Zh_tw": "玉井站", "En": "Yujing Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "4483", "StopName": { "Zh_tw": "臺南轉運站", "En": "Tainan Bus Station" } }, "EndStop": { "StopID": "4541", "StopName": { "Zh_tw": "玉井站", "En": "Yujing Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1100", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1100", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1100.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1100", "RouteDistance": 42.4 }, { "RouteUID": "TNN1101", "RouteID": "1101", "RouteName": { "Zh_tw": "綠1", "En": "G1" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "新化", "En": "Sinhua" }, "DestinationStopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "4601", "StopName": { "Zh_tw": "新化站", "En": "Sinhua Bus Station" } }, "EndStop": { "StopID": "4627", "StopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1101", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1101", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1101.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1101", "RouteDistance": 13.5 }, { "RouteUID": "TNN1102", "RouteID": "1102", "RouteName": { "Zh_tw": "綠2", "En": "G2" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "新化", "En": "Sinhua" }, "DestinationStopName": { "Zh_tw": "山上", "En": "Shanshang" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "4655", "StopName": { "Zh_tw": "新化站", "En": "Sinhua Bus Station" } }, "EndStop": { "StopID": "4688", "StopName": { "Zh_tw": "山上市場", "En": "Shanshang Market" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1102", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1102", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1102.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1102", "RouteDistance": 12.7 }, { "RouteUID": "TNN1103", "RouteID": "1103", "RouteName": { "Zh_tw": "綠3", "En": "G3" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "新化", "En": "Sinhua" }, "DestinationStopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "4737", "StopName": { "Zh_tw": "新化站", "En": "Sinhua Bus Station" } }, "EndStop": { "StopID": "4762", "StopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1103", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1103", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1103.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1103", "RouteDistance": 10.6 }, { "RouteUID": "TNN1104", "RouteID": "1104", "RouteName": { "Zh_tw": "綠4", "En": "G4" }, "RouteLongName": {}, "HasSubRoutes": true, "Operators": [ { "OperatorID": "10160", "OperatorName": { "Zh_tw": "興南客運", "En": "ShingNan Bus" }, "OperatorCode": "ShingNanBus", "OperatorNo": "1601" } ], "RouteType": 11, "ServiceType": { "IsFreeBus": false, "IsTaiwanTripBus": false, "IsTourBus": false, "IsTouristBus": false, "IsBRTBus": false, "IsMedicalBus": false, "IsNightBus": false, "IsTrunkBus": false, "IsMetroShuttleBus": false, "IsTHSRShuttleBus": false, "IsTRAShuttleBus": false, "IsAirportShuttleBus": false, "IsActivityShuttleBus": false }, "TicketPriceDescription": { "Zh_tw": "依里程計費", "En": "Kilometer Charges" }, "DepartureStopName": { "Zh_tw": "新化", "En": "Sinhua" }, "DestinationStopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" }, "FareBufferZoneDescription": {}, "StartStop": { "StopID": "4789", "StopName": { "Zh_tw": "新化站", "En": "Sinhua Bus Station" } }, "EndStop": { "StopID": "4814", "StopName": { "Zh_tw": "善化轉運站", "En": "Shanhua Bus Station" } }, "IsCircular": false, "RouteURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1104", "LiveBusURL": "http://busmap.tainan.gov.tw/ebus/jsp/ajaxBus.jsp?pathId=1104", "RouteMapImageURL": "http://busmap.tainan.gov.tw/ebus/resources/PathPic/zh_TW/1104.jpg", "FareURL": "http://busmap.tainan.gov.tw/ebus/pathInfo.jsp?pathId=1104", "RouteDistance": 22 } ] };




  return { network, realTimeNearStop, maxBodyLengthapNameURL, subRouteCity, routesCity };
}

export { fetchTainanBusNetwork };
