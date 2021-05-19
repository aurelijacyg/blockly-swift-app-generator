import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_aquamarine'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#33ffff"), "aquamarine");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_aquamarine'] = function (block) {
    var colour_aquamarine = block.getFieldValue('aquamarine').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_aquamarine})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};