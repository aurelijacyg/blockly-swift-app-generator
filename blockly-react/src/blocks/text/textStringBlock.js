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
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['text_string'] = function (block) {
    var text_textname = block.getFieldValue('textName');

    // Assemble JavaScript into code variable.
    var code = `"${text_textname}"`;

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};