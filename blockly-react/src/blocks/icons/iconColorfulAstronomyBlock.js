import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['icon_astronomy_colorful'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ICON - astronomy")
            .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                [
                    ["earth", "icon-earth"],
                    ["moon", "icon-moon"],
                    ["star", "icon-start"],
                    ["sun", "icon-sun"],
                    ["planet", "icon-planet"],
                    ["saturn", "icon-saturn"]
                ]
            ), "icon");
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Icon');
    }
};

// Generator stub:

Blockly.JavaScript['icon_astronomy_colorful'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = `"${dropdown_icon}"`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};