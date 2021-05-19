import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['logic_bool_true'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("BOOL");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "value");
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Bool');
    }
};

// Generator stub:

Blockly.JavaScript['logic_bool_true'] = function (block) {
    var dropdown_value = block.getFieldValue('value');

    // Assemble JavaScript into code variable.

    var code = `${dropdown_value}`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};