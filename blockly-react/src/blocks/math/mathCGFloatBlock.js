import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['math_cgfloat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CGFloat");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "value");
        this.setOutput(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub: 

Blockly.JavaScript['math_cgfloat'] = function (block) {
    var number_value = block.getFieldValue('value');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};