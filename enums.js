var QType = {
    Size: "Size",
    Bool: "Bool",
    Font: "Font",
    Color: "Color",
    FontStyle: "FontStyle", //Regular, Italic e.t.c
    PointSize: "PointSize"
}

var QTags = {
    P: "p",
    Image: "image",
    Title: "title"
}

var QStylesSuffix = {
    First: "_first",
    Last: "_last"
}

var QModule = {
    CreateBook: "CreateBook"
}

var QParagraphStyles = {
    Paragraph: "qpub_p"

}

var QCharacterStyles = {
    Underline: "qpub_u",
    Bold: "qpub_b",
    Italic: "qpub_i"
}

var QLanguage = {
    UK_UA: "uk_UA",
    RU_RU: "ru_RU",
    EN_US: "en_US",
    EN_UK: "en_UK"
}

var QExtendStylesMode = {
    XmlTag: "XmlTag",
    PStyle: "PStyle"
}

var QCharacterStyleAttributes = [
    {
        name: "appliedFont",
        type: QType.Font
    },
    {
        name: "fillColor",
        type: QType.Color
    },
    {
        name: "fontStyle",
        type: QType.FontStyle
    },
    {
        name: "pointSize",
        type: QType.PointSize
    },
    {
        name: "strikeThru", //Line through the text
        type: QType.Bool
    },
    {
        name: "underline",
        type: QType.Bool
    }
];

QParagraphStyleAttributes = [
    //{
//    name: "",
//        type: QType.
//},
];
QParagraphStyleAttributes = QParagraphStyleAttributes.concat(QCharacterStyleAttributes);

var QPubConfig = {
    documentPreferencesAttributes: [
        {
            name: "pageHeight",
            type: QType.Size
        },
        {
            name: "pageWidth",
            type: QType.Size
        }
    ],
    pageMarginsAttributes: [
        {
            name: "top",
            type: QType.Size
        },
        {
            name: "bottom",
            type: QType.Size
        },
        {
            name: "inside",
            type: QType.Size
        },
        {
            name: "outside",
            type: QType.Size
        }
    ]
};

var Q = {};
Q.QType = QType;
Q.QTags = QTags;
Q.QParagraphStyles = QParagraphStyles;
Q.QCharacterStyles = QCharacterStyles;
Q.QLanguage = QLanguage;
Q.QExtendStylesMode = QExtendStylesMode;
Q.QCharacterStyleAttributes = QCharacterStyleAttributes;
Q.QParagraphStyleAttributes = QParagraphStyleAttributes;
Q.QModule = QModule;
Q.QStylesSuffix = QStylesSuffix;
