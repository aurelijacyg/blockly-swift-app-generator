import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_blue'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#3366ff"), "blue");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_blue'] = function (block) {
    var colour_blue = block.getFieldValue('blue');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};