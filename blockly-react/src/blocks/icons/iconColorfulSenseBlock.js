import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['icon_sense_colorful'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ICON - sense")
            .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                [
                    ["hear", "icon-hear"],
                    ["sight", "icon-sight"],
                    ["smell", "icon-smell"],
                    ["taste", "icon-taste"],
                    ["touch", "icon-touch"]
                ]
            ), "icon");
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['icon_sense_colorful'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = `"${dropdown_icon}"`;

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};