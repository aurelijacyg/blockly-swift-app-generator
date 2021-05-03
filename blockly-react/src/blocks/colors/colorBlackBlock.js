import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_black'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#000000"), "black");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_black'] = function (block) {
    var colour_black = block.getFieldValue('black');

    // Assemble JavaScript into code variable.
    var code = '...';
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};