import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['text_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"")
            .appendField(new Blockly.FieldTextInput(""), "textName")
            .appendField("\"");
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['text_block'] = function (block) {
    var text_textname = block.getFieldValue('textName');

    // Assemble JavaScript into code variable.
    var code = '...';
    return [code, Blockly.JavaScript.ORDER_NONE];
};