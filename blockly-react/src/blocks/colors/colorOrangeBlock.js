import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_orange'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff6600"), "orange");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_orange'] = function (block) {
    var colour_orange = block.getFieldValue('orange');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};