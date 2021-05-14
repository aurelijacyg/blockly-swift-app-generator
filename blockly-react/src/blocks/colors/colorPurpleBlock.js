import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_purple'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#cc33cc"), "purple");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_purple'] = function (block) {
    var colour_purple = block.getFieldValue('purple').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_purple})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};