import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_red'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "red");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_red'] = function (block) {
    var colour_red = block.getFieldValue('red').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_red})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};