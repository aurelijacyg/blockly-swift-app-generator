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
    var colour_purple = block.getFieldValue('purple');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};