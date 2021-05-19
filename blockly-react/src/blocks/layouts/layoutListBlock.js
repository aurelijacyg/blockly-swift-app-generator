import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - regular list");
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
    var statements_list_elements = Blockly.JavaScript.statementToCode(block, 'list_elements', Blockly.JavaScript.ORDER_COMMA);
    
    // Assemble JavaScript into code variable.

    var code = `Layout.list(
        ListModel(
            items: [
                ${statements_list_elements}
            ]
        )
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};