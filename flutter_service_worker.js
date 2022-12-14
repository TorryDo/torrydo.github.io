'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "50d4cab797ec76f4f7d09a4b8c4a9766",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d41831b6a58a163dffa2aa6b96fada44",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "014e9dcec548142739e088892e0b4536",
".git/logs/refs/heads/master": "014e9dcec548142739e088892e0b4536",
".git/logs/refs/remotes/origin/master": "52e7036a223730b9e1b0b6f8d4fea2a5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/12/44f2cfefcb7a0b18c4ba2f944031f0aef03b55": "cfb3dc651e9c4ce98bb2b136f67e9a16",
".git/objects/13/6aa9f0983286bc273ae7e68ebd44a1e110b84f": "88580f30df93695344965ae24a3b96f1",
".git/objects/14/a40db108d92000ea108b404794fb2b883ba06d": "421d1577072aaea15c530d4c6e4e0b8d",
".git/objects/19/0cd59aa3416d59114846f556e9d810397d122b": "6103db561776c0ef14e46544b36bbce9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/1c987598e65d743f5c5160e4eb222fe5083fe8": "af8695fad2b60ae609640babcfe6df5d",
".git/objects/20/4576b0e41f140a2a3d427f52f2bb7b29693d3e": "f01c72cc0854c27ec9d6c4efde6f989e",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/e18594f6d03faf32cf58e1ac2a4d7183069a1b": "1f274541f9775ff3d8020aba56e07578",
".git/objects/43/d453506ed130b473fc9e5756b0917e48f1123e": "43f885bec3c04b080c6a6e02e39ec5b1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/3e3ef1aad60c462dd742ee52c53b5360e522ae": "fca1e18d1d9eebdebdd9f7f17fae563d",
".git/objects/5f/5581bd2fc2a30ea97f3b60a4d1ff9c059d3743": "6d8876a2b9e46117bf375da0da53d0f2",
".git/objects/61/a496e6f82dd957de508543b480937e2e1d5dd6": "35045a90848f8630471e432fb1242b94",
".git/objects/61/fb972b4e302cbb4886311fee5ea0ed1898e9f0": "c68089b834789071f52439845626358d",
".git/objects/69/62f2c47d8d6f9ade0f31c2488c170766654d4a": "414646bc2b9a7e281c204d9c57201a38",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6c/e66c9bb6ec3f4ce8d29a18f3e7e1d0d5b5e1bb": "2fbc6794c35dad1889ae1449331c5ed8",
".git/objects/6e/142a3655d5c242f6023178e77ed1e11c8d77d1": "a9eb4af1f700882021d7712c417cfc87",
".git/objects/71/07d8356caf1022a7d327c6999863da4f496fc1": "a3f065f7ed24a23206c8167cf6b90cdb",
".git/objects/72/86642ae9c887e96b1a24d5057fcf77ecf08f08": "377a51c1477c74a42182d937c2f91a73",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/76/66a90ed1050ccb6cd5b9852538dbb8c21663e1": "fa6d661e28cb7090691e246d0e928bc6",
".git/objects/76/ea21e44768fc6533debc135a510ccb549747b5": "05f8cf5e8c09675c0ec919f6cccdc0ee",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ad232e3ed2b63c8746fd3825e3ce1cdee5f210": "21d288eaf80d610265349c1b43bf8251",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/7e/050588e5bafd606f2c7913a537b94822111431": "b3307a9fc8acdda4a358dbec82a8e80c",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/86/3b8aa025fb7d9bcb3fd818aae039fbe390e8d3": "29d15bc3a33c13a35d77d5c14e44eabe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f177ffc9a434111e15f821f87f4eb83a19d8d6": "36a76f0a6e538bb6feff0ee4ea8bc11e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/faba636cee3622ee8748cfa157af8a72ba8891": "85b0d85aa00d705c5ae73b8c48fcca09",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9e/d2197fdf8981dabab202eb69438a942b00d9ce": "ed482b4ad251cc8570a7238b6992b9e3",
".git/objects/9f/011a2fb4740c47fac2cb08e27f555ef1acf185": "eb97fbb49b7954842ac5d64a120f6a9c",
".git/objects/a0/f1d5f41ada1283ecefa8347ffbaca39a2e94f9": "a47f0d37f7cb5f5fe47a031525b84b23",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/3f659fef9a240509720e2e348800d44083c16d": "3c64396ed1f229731632c2325a1d1046",
".git/objects/a8/e5ea3148d4b7baaf6ae80d68fc075bd74366cd": "2be06b9d16c50ae01b39271c2949852a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/79de21362da4e6a5659e1d3e035e5f4dd0aedf": "fb773715d87cfa88823fa24cdb5a6c43",
".git/objects/bb/de962668559367a3698f699df24e05ceca6115": "fbaab759e58df3eb62aa3b2ad2bab193",
".git/objects/bd/61e9c8c943ac919feaf748c018786af00dcd97": "d692d41542707c19fa12e8bd745cf16b",
".git/objects/bf/ca2cec1b2acae3dc1d721c7da807619882373d": "7f2b629d3dea0b8fba81477e435a813d",
".git/objects/c1/aacc8082be0d5d353a340fb85377d330127bd1": "498aade2e25d79dcf90e8e221d394838",
".git/objects/c3/6c737f8fb0070c4f4818e5cfbae4be394bee8f": "26ec38b43deb87b66ce9234436525ddd",
".git/objects/c4/2253a4fd747a5d3850e25df6fc88daa1ef5a79": "c054645ec87e608c2f0ee32bb7bbd891",
".git/objects/c4/7b7d4e4c8f52412ef7ddd8df27e500d4ae4bde": "e8b6eac82ec31e6d32939575b6095543",
".git/objects/c5/942209cdcbe17bebb23871731e6e3e8eeb0ad0": "ea89b7b2ceb6355cc136dcd16ea25178",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/73e0a1bea2575fa33b78b23c022bff0ee567df": "90fdac6c2df8b50a21cd4a728b848597",
".git/objects/d6/179d6a39c6c25096f649e8d88b5b5a5fb44748": "4cb3dfc2cea29249c47c1cd80618a0cf",
".git/objects/d6/47618a61ae3c355b6618767727c186c53d3502": "bad67121f230da951278870a7082efd5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ed715c374e6df091b7f0d39e4a91dc9e07ea50": "d6c3b05ccb78deeb4d0089e781cde05b",
".git/objects/da/8297104f4b1a25ba0418a7e0e6448b24100582": "43c055b73ca58370a09c15de2c1a46fc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/2e137019c2b886fb3e43eb7dc8170c0d5ea47c": "3648c1a0d9de83767c7574911d8e80a6",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/75de6b86af27f100c0f8ce8381c104c42eb74f": "13e1cc0a5cc7ebbf150b477862e33096",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/30c84ffc642a104821ad49c9b09fe9e1df9edb": "58193926f3ea28f04ae4f1af23a95e8c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/622f087a093d116c6d8373f1810f0bff65e08c": "c6b1cb2656fea5414772ef693573d791",
".git/objects/f6/e1e3aadf062258f42245122357f908ff8556d4": "40c0df5bcf7391428d8892ae9c86524b",
".git/objects/fa/3aa6618fac6de3f5044de4f4552d2e6182820c": "a873d0df9b2cf9f66de76d8d53704efc",
".git/refs/heads/master": "5333398098256c4d5cae9e543b7e9311",
".git/refs/remotes/origin/master": "5333398098256c4d5cae9e543b7e9311",
"assets/AssetManifest.json": "87d9ac0f6399086f3dda23c2dae15a66",
"assets/FontManifest.json": "8d501ac574479214d315c2e820f73c5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6c58b876482125c40c36545b87d71291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "9d547411993a5a2728f4bb7c8af5ccd5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "237ffc17c703ec6fb2ed88774fafebdb",
"/": "237ffc17c703ec6fb2ed88774fafebdb",
"main.dart.js": "7b2d9252c2643b80078e0dbd82a159f6",
"manifest.json": "4122e1b3fa438b3f74a95b61b6109caa",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
