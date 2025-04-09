function getchannels() {
    channels = [
        ["https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8", "nochan.gif"],
        ["NULL", "NULL"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-megafrog2000.github.io/tvchrome/v3/ch2.gif"],
        ["http://fl2.moveonjoy.com/FX/index.m3u8", "https://backend-megafrog2000.github.io/tvchrome/v3/ch3.gif"],
        ["https://v2.weatherscan.net/", "https://backend-megafrog2000.github.io/tvchrome/v3/ch4.gif"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-megafrog2000.github.io/tvchrome/v3/ch5.gif"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-megafrog2000.github.io/tvchrome/v3/ch6.gif"],
        ["http://fl2.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-megafrog2000.github.io/tvchrome/v3/ch7.gif"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channels;
}

function getupdate() {
    update = 0;
    return update
}

function getupdateurl() {
    updateurl = "";
    return updateurl
}