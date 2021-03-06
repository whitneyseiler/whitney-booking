'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tile = require('../Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _dates = require('../shared/dates');

var _propTypes3 = require('../shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var className = 'react-calendar__month-view__days__day';

var Day = function Day(_ref) {
  var classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      date = _ref.date,
      otherProps = _objectWithoutProperties(_ref, ['classes', 'currentMonthIndex', 'date']);

  return _react2.default.createElement(
    _Tile2.default,
    _extends({}, otherProps, {
      classes: [].concat(_toConsumableArray(classes), [className, (0, _dates.isWeekend)(date) ? className + '--weekend' : null, date.getMonth() !== currentMonthIndex ? className + '--neighboringMonth' : null]),
      date: date,
      dateTime: (0, _dates.getISOLocalDate)(date) + 'T00:00:00.000',
      maxDateTransform: _dates.getEndOfDay,
      minDateTransform: _dates.getBeginOfDay,
      view: 'month'
    }),
    (0, _dates.getDay)(date)
  );
};

Day.propTypes = _extends({
  currentMonthIndex: _propTypes2.default.number.isRequired
}, _propTypes3.tileProps);

exports.default = Day;