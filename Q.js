var fs = require('fs');
var path = require('path');

var code = fs.readFileSync(path.join(__dirname, 'enums.js')).toString();
eval(code);

exports.QType = QType;
exports.QTags = QTags;
exports.QParagraphStyles = QParagraphStyles;
exports.QCharacterStyles = QCharacterStyles;
exports.QLanguage = QLanguage;
exports.QExtendStylesMode = QExtendStylesMode;
exports.QCharacterStyleAttributes = QCharacterStyleAttributes;
exports.QParagraphStyleAttributes = QParagraphStyleAttributes;