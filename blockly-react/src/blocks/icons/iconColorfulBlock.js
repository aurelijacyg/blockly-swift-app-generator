import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['icon_colorful'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ICON - colorful")
            .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                [
                    ["book", "book"],
                    ["books", "books"],
                    ["camera", "camera"],
                    ["gallery", "gallery"],
                    ["music", "music"],
                    ["plane", "plane"],
                    ["social", "social"],
                    ["travel", "travel"],
                    ["travel dark", "travel-2"],
                    ["user profile", "user-profile"]
                ]
            ), "icon");
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Icon');
    }
};

// Generator stub:

Blockly.JavaScript['icon_colorful'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = `"${dropdown_icon}"`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};