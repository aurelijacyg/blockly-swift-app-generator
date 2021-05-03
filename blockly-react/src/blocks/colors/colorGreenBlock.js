import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_green'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#33cc00"), "green");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_green'] = function (block) {
    var colour_green = block.getFieldValue('green');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};