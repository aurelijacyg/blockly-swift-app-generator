import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['text_url'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("URL");
        this.appendDummyInput()
            .appendField("\"")
            .appendField(new Blockly.FieldTextInput(""), "url")
            .appendField("\"");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Url');
    }
};

// Generator stub:

Blockly.JavaScript['text_url'] = function (block) {
    var text_url = block.getFieldValue('url');

    // Assemble JavaScript into code variable.

    var code = `"${text_url}"`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};