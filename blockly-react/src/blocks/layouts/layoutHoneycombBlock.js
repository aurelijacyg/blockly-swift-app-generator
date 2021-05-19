import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_honeycomb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - honeycomb");
        this.appendValueInput("columns_number")
            .setCheck(null)
            .appendField("Columns number");
        this.appendDummyInput();
        this.appendStatementInput("elements")
            .setCheck(null)
            .appendField("Elements");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['layout_honeycomb'] = function (block) {
    var value_columns_number = Blockly.JavaScript.valueToCode(block, 'columns_number', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};