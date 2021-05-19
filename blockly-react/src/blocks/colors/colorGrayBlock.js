import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_gray'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#999999"), "gray");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_gray'] = function (block) {
    var colour_gray = block.getFieldValue('gray').substring(1);

    // Assemble JavaScript into code variable.
    var code = `Color(rgb: 0x${colour_gray})`;;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};