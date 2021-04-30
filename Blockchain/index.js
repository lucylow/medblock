"use strict";

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/web.timers");

require("regenerator-runtime/runtime");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Libp2p = require("libp2p");

var Mplex = require("libp2p-mplex");

var _require = require("libp2p-noise"),
    NOISE = _require.NOISE;

var Gossipsub = require("libp2p-gossipsub");

var Websockets = require("libp2p-websockets");

var Bootstrap = require("libp2p-bootstrap");

var createNode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(listen) {
    var node;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Libp2p.create({
              addresses: {
                listen: listen
              },
              modules: {
                transport: [Websockets],
                streamMuxer: [Mplex],
                connEncryption: [NOISE],
                pubsub: Gossipsub,
                peerDiscovery: [Bootstrap]
              },
              config: {
                peerDiscovery: _defineProperty({}, Bootstrap.tag, {
                  enabled: true,
                  list: ["/dns4/1.pubsub.aira.life/tcp/443/wss/ipfs/QmdfQmbmXt6sqjZyowxPUsmvBsgSGQjm4VXrV7WGy62dv8", "/dns4/2.pubsub.aira.life/tcp/443/wss/ipfs/QmPTFt7GJ2MfDuVYwJJTULr6EnsQtGVp8ahYn9NSyoxmd9", "/dns4/3.pubsub.aira.life/tcp/443/wss/ipfs/QmWZSKTEQQ985mnNzMqhGCrwQ1aTA6sxVsorsycQz9cQrw"]
                })
              }
            });

          case 2:
            node = _context.sent;
            _context.next = 5;
            return node.start();

          case 5:
            return _context.abrupt("return", node);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNode(_x) {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var topic, node;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          topic = "airalab.lighthouse.5.robonomics.eth";
          _context2.next = 3;
          return createNode(["/ip4/0.0.0.0/tcp/10333/ws"]);

        case 3:
          node = _context2.sent;
          console.log('peerId', node.peerId.toB58String());
          node.pubsub.on(topic, function (msg) {
            try {
              var data = JSON.parse(msg.data.toString());

              if (data.time && data.id === "medblock") {
                console.log(msg.data.toString());
              }
            } catch (_) {}
          });
          _context2.next = 7;
          return node.pubsub.subscribe(topic);

        case 7:
          setInterval(function () {
            node.pubsub.publish(topic, Buffer.from(JSON.stringify({
              time: Date.now(),
              id: "medblock",
              type: "iot"
            })));
          }, 5000);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();
