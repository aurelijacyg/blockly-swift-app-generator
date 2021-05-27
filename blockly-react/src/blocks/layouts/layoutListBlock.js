import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - regular list");
        this.appendDummyInput();
        this.appendStatementInput("list_elements")
            .setCheck("ListElement")
            .appendField("Elements:");
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Layout');
    }
};

// Generator stub:

Blockly.JavaScript['layout_list'] = function (block) {
    var statements_list_elements = Blockly.JavaScript.statementToCode(block, 'list_elements');
    
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