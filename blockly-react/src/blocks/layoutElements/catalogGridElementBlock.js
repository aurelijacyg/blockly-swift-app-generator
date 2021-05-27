import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_catalog_grid_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CATALOG GRID ELEMENT");
        this.appendDummyInput();
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("Text");
        this.appendValueInput("text_color")
            .setCheck("Color")
            .appendField("Text color");
        this.appendValueInput("icon")
            .setCheck("Icon")
            .appendField("Icon");
        this.appendValueInput("background_color")
            .setCheck("Color")
            .appendField("Background color");
        this.appendValueInput("background_color_gradient")
            .setCheck("Color")
            .appendField("Background gradient color ?");
        this.appendDummyInput();
        this.appendValueInput("route to")
            .setCheck("Screen")
            .appendField("On Click ?");
        this.setPreviousStatement(true, 'CatalogGridElement');
        this.setNextStatement(true, 'CatalogGridElement');
        this.setColour(290);
        this.setTooltip("Layout element (catalog grid)");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['element_catalog_grid_item'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_route_to = Blockly.JavaScript.valueToCode(block, 'route to', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `CatalogGridItemModel(
        text: ${value_text},
        icon: ${value_icon},
        backgroundColor: ${value_background_color},
        backgroundGradientColor: ${value_background_color_gradient},
        textColor: ${value_text_color},
        routeTo: ${value_route_to}
    ),`;

    return code;
};