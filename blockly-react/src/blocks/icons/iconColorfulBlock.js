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
                    ["book", "icon-book"],
                    ["books", "icon-books"],
                    ["camera", "icon-camera"],
                    ["gallery", "icon-gallery"],
                    ["music", "icon-music"],
                    ["plane", "icon-plane"],
                    ["social", "icon-social"],
                    ["travel", "icon-travel"],
                    ["travel dark", "icon-travel-2"],
                    ["user profile", "icon-user-profile"]
                ]
            ), "icon");
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['icon_colorful'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};