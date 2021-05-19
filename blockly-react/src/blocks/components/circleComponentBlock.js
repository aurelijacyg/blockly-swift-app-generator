import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_circle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CIRCLE COMPONENT");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("Title");
        this.appendValueInput("photo")
            .setCheck("Component")
            .appendField("Photo ?");
        this.appendValueInput("title_color")
            .setCheck("Color")
            .appendField("Title color ?");
        this.appendValueInput("background_color")
            .setCheck("Color")
            .appendField("Background color");
        this.appendValueInput("background_color_gradient")
            .setCheck("Color")
            .appendField("Background gradient color ?");
        this.appendValueInput("background_opacity")
            .setCheck("Double")
            .appendField("Background opacity (Double) ?");
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Component');
    }
};

// Generator stub:

Blockly.JavaScript['component_circle'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_photo = Blockly.JavaScript.valueToCode(block, 'photo', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_background_opacity = Blockly.JavaScript.valueToCode(block, 'background_opacity', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `CircleModel(
        title: ${value_title},
        photo: ${value_photo},
        titleColor: ${value_title_color},
        backgroundColor: ${value_background_color},
        backgroundGradientColor: ${value_background_color_gradient},
        backgroundOpacity: ${value_background_opacity}
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};