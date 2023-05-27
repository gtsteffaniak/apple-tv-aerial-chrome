(function () {
    'use strict';

    /* sourceType: module */

    const screensavers = [{
      "location": "Greenland",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_GL_G004_C010_v03_6Mbps.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D011_D009_SIGNCMP_v15_6Mbps.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_LA_A005_C009_v05_t9_6M.mov"
    }, {
      "location": "Hong Kong",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_B005_C011_t9_6M_tag0.mov"
    }, {
      "location": "Hong Kong",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_H004_C008_v10_6Mbps.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_LA_A009_C009_t9_6M_tag0.mov"
    }, {
      "location": "China",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_C002_C005_0818SC_001_v01_6M_HB_tag0.mov"
    }, {
      "location": "Greenland",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_GL_G010_C006_v08_6Mbps.mov"
    }, {
      "location": "Liwa",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_LW_L001_C006_t9_6M_tag0.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D011_C010_v10_6Mbps.mov"
    }, {
      "location": "Greenland",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/plate_G002_C002_BG_t9_6M_HB_tag0.mov"
    }, {
      "location": "China",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_C007_C011_08244D_001_v01_6M_HB_tag0.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_LA_A006_C008_t9_6M_HB_tag0.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D001_C001_v03_6Mbps.mov"
    }, {
      "location": "Hong Kong",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_H004_C010_4k_v01_6Mbps.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_LA_A008_C004_ALT_v33_6Mbps.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D002_C003_t9_6M_HB_tag0.mov"
    }, {
      "location": "China",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_C007_C004_0824AJ_001_v01_6M_HB_tag0.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D001_C005_t9_6M_HB_tag0.mov"
    }, {
      "location": "Hong Kong",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_H004_C013_t9_6M_HB_tag0.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D008_C010_v04_6Mbps.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-1.mov"
    }, {
      "location": "London",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-2.mov"
    }, {
      "location": "New York City",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-3.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b1-4.mov"
    }, {
      "location": "China",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-1.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-2.mov"
    }, {
      "location": "New York City",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-3.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b2-4.mov"
    }, {
      "location": "London",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b3-1.mov"
    }, {
      "location": "New York City",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b3-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b3-3.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-1.mov"
    }, {
      "location": "New York City",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-3.mov"
    }, {
      "location": "China",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-1.mov"
    }, {
      "location": "London",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-3.mov"
    }, {
      "location": "China",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-1.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-2.mov"
    }, {
      "location": "London",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-3.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-4.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b7-1.mov"
    }, {
      "location": "New York City",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b7-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b7-3.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-4.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-3.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-1.mov"
    }, {
      "location": "London",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-3.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-1.mov"
    }, {
      "location": "New York City",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-2.mov"
    }, {
      "location": "San Francisco",
      "timeOfDay": "day",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b10-3.mov"
    }, {
      "location": "Hawaii",
      "timeOfDay": "night",
      "type": "video",
      "url": "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-1.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/DB_D011_C009_2K_SDR_HEVC.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/LA_A006_C008_2K_SDR_HEVC.mov"
    }, {
      "location": "Liwa",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/LW_L001_C006_2K_SDR_HEVC.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/DB_D008_C010_2K_SDR_HEVC.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/LA_A009_C009_2K_SDR_HEVC.mov"
    }, {
      "location": "Hong Kong",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/HK_B005_C011_2K_SDR_HEVC.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/DB_D001_C001_2K_SDR_HEVC.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/LA_A005_C009_2K_SDR_HEVC.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/DB_D001_C005_2K_SDR_HEVC.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/LA_A008_C004_2K_SDR_HEVC.mov"
    }, {
      "location": "Greenland",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/GL_G004_C010_2K_SDR_HEVC.mov"
    }, {
      "location": "Dubai",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/DB_D011_C010_2K_SDR_HEVC.mov"
    }, {
      "location": "Hong Kong",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/HK_H004_C013_2K_SDR_HEVC.mov"
    }, {
      "location": "Los Angeles",
      "timeOfDay": "4K",
      "type": "video",
      "url": "https://sylvan.apple.com/Aerials/2x/Videos/LA_A011_C003_2K_SDR_HEVC.mov"
    }];

    window.onload = function () {
      const vid = document.querySelector('video');
      const loc = document.querySelector('h1.description');
      let video = screensavers[Math.floor(Math.random() * screensavers.length) - 1];
      while (video.timeOfDay == '4K') video = screensavers[Math.floor(Math.random() * screensavers.length) - 1];
      vid.src = video.url;
      loc.innerText = video.location;
      vid.addEventListener('focus', function () {
        vid.play();
      });
      vid.addEventListener('blur', function () {
        vid.pause();
      });
      vid.addEventListener('dblclick', function () {
        location.reload();
      });
      vid.addEventListener('click', function () {
        if (vid.paused) {
          vid.play();
        } else {
          vid.pause();
        }
      });
    };

})();
//# sourceMappingURL=bundle.js.map
