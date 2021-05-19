import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_white'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ffffff"), "white");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_white'] = function (block) {
    var colour_white = block.getFieldValue('white').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_white})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};