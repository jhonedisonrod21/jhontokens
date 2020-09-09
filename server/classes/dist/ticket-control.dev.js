"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var path = require('path');

var TicketControl =
/*#__PURE__*/
function () {
  function TicketControl() {
    _classCallCheck(this, TicketControl);

    this.ultimo = 0;
    this.hoy = new Date().getDate();

    var data = require('../data/data.json');

    if (data.hoy = this.hoy) {} else {
      this.reiniciarConteo();
    }
  }

  _createClass(TicketControl, [{
    key: "reiniciarConteo",
    value: function reiniciarConteo() {
      var jsonData = {
        ultimo: this.ultimo,
        hoy: new Date().getDate()
      };
      fs.writeFileSync(path.resolve(__dirname, '../data/data.json'), JSON.stringify(jsonData));
    }
  }]);

  return TicketControl;
}();

module.exports = {
  TicketControl: TicketControl
};