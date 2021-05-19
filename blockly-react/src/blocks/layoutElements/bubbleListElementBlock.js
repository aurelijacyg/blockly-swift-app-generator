import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_bubble_list_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("BUBBLE LIST ELEMENT");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck(null)
            .appendField("Title ?");
        this.appendValueInput("title_color")
            .setCheck(null)
            .appendField("Title color ?");
        this.appendValueInput("subtitle")
            .setCheck(null)
            .appendField("Subtitle ?");
        this.appendValueInput("subtitle_color")
            .setCheck(null)
            .appendField("Subtitle color ?");
        this.appendValueInput("icon")
            .setCheck(null)
            .appendField("Icon ?");
        this.appendValueInput("background_color")
            .setCheck(null)
            .appendField("Background color");
        this.appendValueInput("background_color_gradient")
            .setCheck(null)
            .appendField("Background gradient color ?");
        this.appendDummyInput();
        this.appendValueInput("route_to")
            .setCheck(null)
            .appendField("On Click ?");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("Layout element (bubble list)");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['element_bubble_list_item'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_subtitle = Blockly.JavaScript.valueToCode(block, 'subtitle', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_subtitle_color = Blockly.JavaScript.valueToCode(block, 'subtitle_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_route_to = Blockly.JavaScript.valueToCode(block, 'route_to', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `BubbleListItemModel(
        title: ${value_title},
        subtitle: ${value_subtitle},
        icon: ${value_icon},
        backgroundColor: ${value_background_color},
        backgroundGradientColor: ${value_background_color_gradient},
        titleColor: ${value_title_color},
        subtitleColor: ${value_subtitle_color},
        routeTo: ${value_route_to}
    ),`;

    return code;
};