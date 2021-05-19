import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['text_string'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("STRING");
        this.appendDummyInput()
            .appendField("\"")
            .appendField(new Blockly.FieldTextInput(""), "textName")
            .appendField("\"");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'String');
    }
};

// Generator stub:

Blockly.JavaScript['text_string'] = function (block) {
    var text_textname = block.getFieldValue('textName');

    // Assemble JavaScript into code variable.
    var code = `"${text_textname}"`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};