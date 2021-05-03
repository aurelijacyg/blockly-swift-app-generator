import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_yellow'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ffff33"), "yellow");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_yellow'] = function (block) {
    var colour_yellow = block.getFieldValue('yellow');
    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};