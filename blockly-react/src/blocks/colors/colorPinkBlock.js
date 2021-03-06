import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_pink'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ffccff"), "pink");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_pink'] = function (block) {
    var colour_pink = block.getFieldValue('pink').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_pink})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};