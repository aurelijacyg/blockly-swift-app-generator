import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['math_double'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DOUBLE");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "number");
        this.setOutput(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['math_double'] = function (block) {
    var number_number = block.getFieldValue('number');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};