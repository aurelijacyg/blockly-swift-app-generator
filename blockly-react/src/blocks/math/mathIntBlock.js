import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['math_int'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("INT");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "value");
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Int');
    }
};

// Generator stub:

Blockly.JavaScript['math_int'] = function (block) {
    var number_value = block.getFieldValue('value');

    // Assemble JavaScript into code variable.

    var code = `${number_value}`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};