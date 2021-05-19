import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_secondary'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Secondary");
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_secondary'] = function (block) {
    // Assemble JavaScript into code variable.
    var code = `Color.secondary`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};