import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['logic_bool_true'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("BOOL");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "value");
        this.setOutput(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['logic_bool_true'] = function (block) {
    var dropdown_value = block.getFieldValue('value');

    // Assemble JavaScript into code variable.

    var code = `${dropdown_value}`;

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};