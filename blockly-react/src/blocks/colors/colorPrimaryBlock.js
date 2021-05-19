import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_primary'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Primary");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_primary'] = function (block) {
    // Assemble JavaScript into code variable.
    var code = `Color.primary`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};