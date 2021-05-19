import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_catalog_grid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - catalog grid");
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("Title ?");
        this.appendValueInput("title_color")
            .setCheck("Color")
            .appendField("Title color ?");
        this.appendDummyInput();
        this.appendStatementInput("elements")
            .setCheck("CatalogGridElement")
            .appendField("Elements");
        this.setInputsInline(false);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Layout');
    }
};

// Generator stub:

Blockly.JavaScript['layout_catalog_grid'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements', Blockly.JavaScript.ORDER_COMMA);

    // Assemble JavaScript into code variable.

    var code = `Layout.catalogGrid(
        CatalogGridModel(
            title: ${value_title},
            titleColor: ${value_title_color},
            items: [
                ${statements_elements}
            ]
        )
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};