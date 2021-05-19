import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_green'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#33cc00"), "green");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_green'] = function (block) {
    var colour_green = block.getFieldValue('green').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_green})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};