"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trans = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function FormattedMessageFixed(props) {
    return _react.default.createElement(_reactIntl.FormattedMessage, props);
}

var trans = function trans(message) {
    var values =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var description =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    //If React is past version 16 a string can be returned, avoiding an extra span
    //The check involves using an undocumented property, so we check for it first
    if (
        typeof _react.default.version === "string" &&
        parseInt(_react.default.version.split(".")[0], 10) >= 16
    ) {
        return _react.default.createElement(
            FormattedMessageFixed,
            {
                id: message,
                description: description,
                defaultMessage: message,
                values: values
            },
            function(message) {
                return message;
            }
        );
    }

    return _react.default.createElement(FormattedMessageFixed, {
        id: message,
        description: description,
        defaultMessage: message,
        values: values
    });
};

exports.trans = trans;
//# sourceMappingURL=index.js.map
