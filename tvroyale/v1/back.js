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
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/bannners/toonami.png"],
        ["http://v1.weatherscan.net", "https://backend-megafrog2000.github.io/tvroyale/v1/bannners/weatherscan.png"],
        ["https://the-guardian-3d0e32e7-aa40-49e5-b9d9-c433151fa61a-uk.fast.rakuten.tv/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6437/master.m3u8?ads.Rakuten+TV+EU_channel=&ads.amznbrmid=&ads.amznregion=&ads.amznslots=&ads.app_bundle=com.rakutentv.web&ads.app_name=RakutenTV&ads.app_store_url=rakuten.tv&ads.app_version=&ads.brand_name=&ads.content_classification=15&ads.content_url=rakutentv&ads.device_lmt=0&ads.device_make=firefox&ads.device_model=GENERIC&ads.device_year=2024&ads.did=e796ac3c-4c58-4142-a81d-e26144dde8d3&ads.env=prod&ads.gam_correlator=1545604833847206&ads.gdpr_consent=CQO8ASAQO8ASAAcABBENBiFsAP_gAEPgACiQKrMV5C5cTWFgcTp1QPsEeYUH1sAwgkAAAACBAqABCCAEMBQAgiAgMASABAACAAIAIBBBAQAkCAAEAEAAQAAAAABIIACAgBAIIABAABEBAABACAACAAAAAACIgAAVAAAAkAAAAFKEAEAAAAAAAkAAAAAAAAAAAAIABAAIAAIAAEAIACgAAQAAAAAAAAAAARgAEAkAAAAAAAAAAAAAABAQEAAAAAAgABAAAAAAABBVaCGAAgABYAFQALgAcAA8ACAAEgAKgAZQA0ADUAHAAPAAfgBHACYAFCALgAugBiADQAG8APQAfgBCACGgEQARIAlgBhgDKAGaANEAc4A-AB-gEIAIsAR0AkoBigDXgG4AOIAdQA_oB_wETAIvASIAlYBMQCkQFdgLYAXmAxYBlgDVQGsgPHAfuA_sCP4E3gJzATuAoqBVYAAA.f_wACHwAAAAA&ads.google_ad_manager_nonce=&ads.ifa_type=ppid&ads.market=uk&ads.os_language=&ads.platform=web&ads.player_height=1080&ads.player_width=1920&ads.pod_type=playerpage_midroll&ads.ppid=e796ac3c-4c58-4142-a81d-e26144dde8d3&ads.rtv_channel_name=the-guardian-3d0e32e7-aa40-49e5-b9d9-c433151fa61a_uk&ads.rtv_content_id=6437&ads.rtv_content_language=eng&ads.rtv_language=eng&ads.rtvid=271858&ads.streaming_id=fe770d51-731e-46c0-bc86-9a536be3b490&ads.tivo_devcountry=&ads.tivo_devmakedate=&ads.tivo_mvpd=&ads.tivo_platform=&ads.tivo_usid=&ads.tivo_uxloc=&ads.user_type=visitor&channel_id=6437&publishing_platform_id=5", "https://backend-megafrog2000.github.io/tvroyale/v1/bannners/theguardian.png"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-megafrog2000.github.io/tvroyale/v1/bannners/bobross.png"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/bannners/newsnation.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://backend-megafrog2000.github.io/tvroyale/v1/bannners/adultswim.png"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
    ];
    return channeldb;
}