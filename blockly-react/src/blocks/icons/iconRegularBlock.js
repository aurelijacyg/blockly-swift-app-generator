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
                    ["account", "icon-account"],
                    ["airplane", "icon-airplane"],
                    ["article", "icon-article"],
                    ["blog", "icon-blog"],
                    ["book", "icon-book"],
                    ["idea", "icon-idea"],
                    ["info", "icon-info"],
                    ["learning", "icon-learning"],
                    ["location", "icon-location"],
                    ["note", "icon-note"],
                    ["travel", "icon-note"],
                    ["gallery", "icon-gallery"]
                ]
            ), "icon");
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['icon_regular'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};