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
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/toonami.png"],
        ["http://v1.weatherscan.net", "https://backend-megafrog2000.github.io/tvroyale/v1/banners/weatherscan.png"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
    ];
    return channeldb;
}