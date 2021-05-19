import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_catalog_grid_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CATALOG GRID ELEMENT");
        this.appendDummyInput();
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("Text");
        this.appendValueInput("text_color")
            .setCheck(null)
            .appendField("Text color");
        this.appendValueInput("icon")
            .setCheck(null)
            .appendField("Icon");
        this.appendValueInput("background_color")
            .setCheck(null)
            .appendField("Background color");
        this.appendValueInput("background_color_gradient")
            .setCheck(null)
            .appendField("Background gradient color ?");
        this.appendDummyInput();
        this.appendValueInput("route to")
            .setCheck(null)
            .appendField("On Click");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("Layout element (catalog grid)");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['element_catalog_grid_item'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC);
    var value_route_to = Blockly.JavaScript.valueToCode(block, 'route to', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = '...;\n';

    return code;
};