import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_white'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ffffff"), "white");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_white'] = function (block) {
    var colour_white = block.getFieldValue('white');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};