'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      width = _ref.width,
      height = _ref.height,
      _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === undefined ? 'middle' : _ref$verticalAlign,
      props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height', 'verticalAlign']);

  var _ref2$reactIconBase = _ref2.reactIconBase,
      reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';

  var baseStyle = reactIconBase.style || {};
  var styleProp = _extends({}, baseStyle, style);
  if (verticalAlign !== 'none') styleProp.verticalAlign = verticalAlign;

  var computedColor = color || style.color || reactIconBase.color || baseStyle.color;
  if (computedColor) {
    styleProp.color = computedColor;
  }

  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: styleProp
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];
