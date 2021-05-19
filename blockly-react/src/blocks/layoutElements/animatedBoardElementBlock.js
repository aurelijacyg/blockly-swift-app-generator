import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_animated_board_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ANIMATED BOARD ELEMENT");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck(null)
            .appendField("Title");
        this.appendValueInput("text_color")
            .setCheck(null)
            .appendField("Text color");
        this.appendValueInput("background_color")
            .setCheck(null)
            .appendField("Background color");
        this.appendValueInput("background_color_gradient")
            .setCheck(null)
            .appendField("Background gradient color ?");
        this.appendDummyInput();
        this.appendValueInput("size")
            .setCheck(null)
            .appendField("Size (CGFloat)");
        this.appendValueInput("x_position")
            .setCheck(null)
            .appendField("X Position");
        this.appendValueInput("y_position")
            .setCheck(null)
            .appendField("Y Position");
        this.appendDummyInput();
        this.appendValueInput("component")
            .setCheck(null)
            .appendField("Rising component");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("Layout element (animated board)");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['element_animated_board_item'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC);
    var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x_position = Blockly.JavaScript.valueToCode(block, 'x_position', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y_position = Blockly.JavaScript.valueToCode(block, 'y_position', Blockly.JavaScript.ORDER_ATOMIC);
    var value_component = Blockly.JavaScript.valueToCode(block, 'component', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = `AnimatedBoardItemModel(
        title: ${value_title},
        backgroundColor: ${value_background_color},
        backgroundGradientColor: ${value_background_color_gradient},
        textColor: ${value_text_color},
        size: ${value_size},
        xPosition: ${value_x_position},
        yPosition: ${value_y_position},
        risingComponent: ${value_component}
    )`;

    return code;
};