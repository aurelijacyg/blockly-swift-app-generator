import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_orange'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff6600"), "orange");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_orange'] = function (block) {
    var colour_orange = block.getFieldValue('orange').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_orange})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};