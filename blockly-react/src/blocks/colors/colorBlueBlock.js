import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_blue'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#3366ff"), "blue");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_blue'] = function (block) {
    var colour_blue = block.getFieldValue('blue').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_blue})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};