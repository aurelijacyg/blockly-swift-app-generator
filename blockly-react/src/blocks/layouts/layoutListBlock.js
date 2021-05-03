import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Layout - list");
        this.appendDummyInput();
        this.appendStatementInput("list_elements")
            .setCheck(null)
            .appendField("Elements:");
        this.setOutput(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['layout_list'] = function (block) {
    var statements_list_elements = Blockly.JavaScript.statementToCode(block, 'list_elements');
    
    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};