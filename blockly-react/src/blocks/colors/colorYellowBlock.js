import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_yellow'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ffff33"), "yellow");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_yellow'] = function (block) {
    var colour_yellow = block.getFieldValue('yellow').substring(1);
    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_yellow})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};