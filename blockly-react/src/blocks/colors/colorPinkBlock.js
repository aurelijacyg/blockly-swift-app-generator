import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_pink'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ffccff"), "pink");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_pink'] = function (block) {
    var colour_pink = block.getFieldValue('pink');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};