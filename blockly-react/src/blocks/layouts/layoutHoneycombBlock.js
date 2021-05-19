import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_honeycomb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - honeycomb");
        this.appendDummyInput()
            .appendField("Columns number")
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "columns_number");
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
    var dropdown_columns_number = block.getFieldValue('columns_number');
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');

    // TODO: Assemble JavaScript into code variable.

    var code = `Layout.honeycomb(
        HoneycombModel(
            columnsNumber: ${dropdown_columns_number},
            items: [
                ${statements_elements},
            ]
        )
    )`;

    // TODO: Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};