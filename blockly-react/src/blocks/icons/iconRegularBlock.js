import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['icon_regular'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ICON - regular")
            .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                [
                    ["account", "account-icon"],
                    ["airplane", "airplane-icon"],
                    ["article", "icon-article"],
                    ["blog", "blog-icon"],
                    ["book", "book-icon"],
                    ["idea", "idea-icon"],
                    ["info", "info-icon"],
                    ["learning", "learning-icon"],
                    ["location", "location-icon"],
                    ["note", "note-icon"],
                    ["travel", "travel-icon"],
                    ["gallery", "gallery-icon"]
                ]
            ), "icon");
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Icon');
    }
};

// Generator stub:

Blockly.JavaScript['icon_regular'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = `"${dropdown_icon}"`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};