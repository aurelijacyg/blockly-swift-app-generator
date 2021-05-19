import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_honeycomb_item'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("HONEYCOMB ELEMENT");
        this.appendDummyInput();
        this.appendValueInput("photo_url")
            .setCheck(null)
            .appendField("Photo URL ?");
        this.appendValueInput("route_to")
            .setCheck(null)
            .appendField("On Click ?");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("Layout element (honeycomb)");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['element_honeycomb_item'] = function (block) {
    var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_route_to = Blockly.JavaScript.valueToCode(block, 'route_to', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `HoneycombItemModel(
        photoURL: ${value_photo_url},
        routeTo: ${value_route_to}
    ),`;

    return code;
};