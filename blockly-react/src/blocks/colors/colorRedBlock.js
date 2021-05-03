import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_red'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "red");
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_red'] = function (block) {
    var colour_red = block.getFieldValue('red');

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};