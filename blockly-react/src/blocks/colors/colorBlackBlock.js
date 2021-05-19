import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_black'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#000000"), "black");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_black'] = function (block) {
    var colour_black = block.getFieldValue('black').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_black})`;
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};