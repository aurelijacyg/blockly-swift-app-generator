import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_grid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Layout - grid");
        this.appendDummyInput()
            .appendField("Columns number: ")
            .appendField(new Blockly.FieldDropdown([["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"]]), "columns_number");
        this.appendDummyInput();
        this.appendStatementInput("grid_elements")
            .setCheck(null)
            .appendField("Elements:");
        this.setOutput(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['layout_grid'] = function (block) {
    var dropdown_columns_number = block.getFieldValue('columns_number');
    var statements_grid_elements = Blockly.JavaScript.statementToCode(block, 'grid_elements');

    // Assemble JavaScript into code variable.
    var code = `Layout.grid(
                    [
                        ${statements_grid_elements}
                    ],
                    ${dropdown_columns_number}
                )`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};