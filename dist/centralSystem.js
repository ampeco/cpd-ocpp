'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _connection = require('./connection');

var _constants = require('./constants');

var _centralSystemClient = require('./centralSystemClient');

var _centralSystemClient2 = _interopRequireDefault(_centralSystemClient);

var _basicAuth = require('basic-auth');

var _basicAuth2 = _interopRequireDefault(_basicAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)(_constants.DEBUG_LIBNAME);

var CentralSystem = function () {
  function CentralSystem(options) {
    (0, _classCallCheck3.default)(this, CentralSystem);

    this.options = options || {};
    this.clients = [];
  }

  (0, _createClass3.default)(CentralSystem, [{
    key: 'listen',
    value: function listen() {
      var _this = this;

      var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9220;
      var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.port = port;

      var validateConnection = this.options.validateConnection || function () {
        return [true];
      };

      var wsOptions = (0, _extends3.default)({
        port: port,
        host: host,
        handleProtocols: function handleProtocols(protocols, req) {
          var location = protocols.map(function (proto) {
            return proto.toLowerCase();
          }).indexOf(_constants.OCPP_PROTOCOL_1_6);
          if (location === -1) {
            return '';
          }
          return protocols[location];
        },
        verifyClient: function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(info, cb) {
            var user, _ref2, _ref3, isAccept, code, message;

            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    user = (0, _basicAuth2.default)(info.req);
                    _context.next = 3;
                    return validateConnection(info.req.url, user, info.req.headers['x-forwarded-proto'] || 'http');

                  case 3:
                    _ref2 = _context.sent;
                    _ref3 = (0, _slicedToArray3.default)(_ref2, 3);
                    isAccept = _ref3[0];
                    code = _ref3[1];
                    message = _ref3[2];


                    if (!code) {
                      code = 404;
                    }
                    if (!message) {
                      message = 'Central System does not recognize the charge point identifier in the URL path';
                    }
                    debug('Request for connect "' + info.req.url + '" (' + info.req.headers['sec-websocket-protocol'] + ') - ' + (isAccept ? 'Valid identifier' : 'Invalid identifier') + '. Headers: ' + (0, _stringify2.default)(info.req.headers));

                    cb(isAccept, code, message);

                  case 12:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          function verifyClient(_x3, _x4) {
            return _ref.apply(this, arguments);
          }

          return verifyClient;
        }()
      }, this.options.wsOptions || {});

      this.server = new _ws2.default.Server(wsOptions);

      this.server.on('error', function (ws, req) {
        console.info(ws, req);
      });

      this.server.on('upgrade', function (ws, req) {
        console.info(req);
      });
      this.server.on('connection', function (ws, req) {
        return _this.onNewConnection(ws, req);
      });

      debug('Listen on ' + (host || 'default host') + ':' + port);
    }
  }, {
    key: 'onNewConnection',
    value: function onNewConnection(socket, req) {
      var _this2 = this;

      socket.on('error', function (err) {
        console.info(err, socket.readyState);
      });

      // if (!socket.protocol) {
      //   // From Spec: If the Central System does not agree to using one of the subprotocols offered by the client,
      //   // it MUST complete the WebSocket handshake with a response without a Sec-WebSocket-Protocol header and then
      //   // immediately close the WebSocket connection.
      //   debug(`Close connection due to unsupported protocol`);
      //   return socket.close();
      // }

      var connection = new _connection.Connection(socket, req);

      var client = new _centralSystemClient2.default(connection);

      connection.onRequest = function (command) {
        return _this2.onRequest(client, command);
      };

      socket.on('close', function (err) {
        debug(err);
        var index = _this2.clients.indexOf(client);
        _this2.clients.splice(index, 1);
      });
      this.clients.push(client);
    }
  }, {
    key: 'onRequest',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(client, command) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onRequest(_x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return onRequest;
    }()
  }]);
  return CentralSystem;
}();

exports.default = CentralSystem;
//# sourceMappingURL=centralSystem.js.map