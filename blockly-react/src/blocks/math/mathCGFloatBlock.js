import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['math_cgfloat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CGFloat");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "value");
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'CGFloat');
    }
};

// Generator stub: 

Blockly.JavaScript['math_cgfloat'] = function (block) {
    var number_value = block.getFieldValue('value');

    // Assemble JavaScript into code variable.

    var code = `${number_value}`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};