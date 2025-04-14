function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function geturl() {
    url = ""
    return url
}
function getchannels() {
    let channeldb = [
        ["NULL", "NULL"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/toonami.png"],
        ["http://v1.weatherscan.net", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/weatherscan.png"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/awe.png"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/bobross.png"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/newsnation.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/adultswim.png"],
        ["http://fl2.moveonjoy.com/FX/index.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/fx.png"],
        ["http://fl2.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/e.png"],
        ["https://www.stvr.sk/embed/live/1", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/stvr1.png"],
        ["https://www.stvr.sk/embed/live/2", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/stvr2.png"],
        ["https://www.stvr.sk/embed/live/3", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/stvr24.png"],
        ["https://www.joj.sk/live", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/joj.png"],
        ["https://plus.joj.sk/live", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/jojplus.png"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/marzika.png"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/doma.png"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/dajto.png"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}