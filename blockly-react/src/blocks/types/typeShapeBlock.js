import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['type_shape'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SHAPE");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["rectangle", "rectangle"], ["circle", "circle"], ["ellipse", "ellipse"], ["capsule", "capsule"], ["rounded rectangle", "roundedRectangle"]]), "selected_shape");
        this.appendDummyInput();
        this.appendValueInput("corner_radius")
            .setCheck(null)
            .appendField("If rounded, corner radius (CGFloat)");
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'TypeShape');
    }
};

// Generator stub:

Blockly.JavaScript['type_shape'] = function (block) {
    var dropdown_selected_shape = block.getFieldValue('selected_shape');
    var value_corner_radius = Blockly.JavaScript.valueToCode(block, 'corner_radius', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var shape;
    if (dropdown_selected_shape === 'roundedRectangle') {
        shape = `roundedRectangle(${value_corner_radius})`
    } else {
        shape = `${dropdown_selected_shape}`
    }

    var code = `ComponentShape.${shape}`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};