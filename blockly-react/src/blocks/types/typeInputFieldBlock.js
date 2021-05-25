import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['type_input_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("INPUT FIELD");
        this.appendDummyInput();
        this.appendValueInput("header")
            .setCheck("String")
            .appendField("Header");
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("Title");
        this.setOutput(true, "InputField");
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['type_input_field'] = function (block) {
    var value_header = Blockly.JavaScript.valueToCode(block, 'header', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC) || '';

    // Assemble JavaScript into code variable.

    var code = `InputFieldModel(
        header: ${value_header},
        title: ${value_title}
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};