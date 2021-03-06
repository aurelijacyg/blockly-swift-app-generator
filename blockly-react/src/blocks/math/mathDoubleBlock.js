import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['math_double'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DOUBLE");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "value");
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Double');
    }
};

// Generator stub:

Blockly.JavaScript['math_double'] = function (block) {
    var number_value = block.getFieldValue('value');

    // Assemble JavaScript into code variable.

    var code = `${number_value}`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};