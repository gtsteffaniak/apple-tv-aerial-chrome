// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = screensavers;
},{}],4:[function(require,module,exports) {
"use strict";

var _screensavers = require("./screensavers.js");

var _screensavers2 = _interopRequireDefault(_screensavers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  const vid = document.querySelector('video');
  const loc = document.querySelector('h1.description');
  const video = _screensavers2.default[Math.floor(Math.random() * _screensavers2.default.length) - 1];
  vid.src = video.url;
  loc.innerText = video.location;
};
},{"./screensavers.js":6}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:52412/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = () => {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,4])