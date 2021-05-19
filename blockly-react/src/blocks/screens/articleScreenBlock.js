import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_article'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ARTICLE SCREEN");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("Title");
        this.appendValueInput("subtitle")
            .setCheck("String")
            .appendField("Subtitle");
        this.appendValueInput("body")
            .setCheck("String")
            .appendField("Body");
        this.appendValueInput("title_color")
            .setCheck("Color")
            .appendField("Title and subtitle color");
        this.appendValueInput("body_color")
            .setCheck("Color")
            .appendField("Body color");
        this.appendValueInput("photo_url")
            .setCheck("Url")
            .appendField("Photo URL ?");
        this.appendValueInput("is_tabbar_hidden")
            .setCheck("Bool")
            .appendField("Is tabbar hidden ?");
        this.setInputsInline(false);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Screen');
    }
};

// Generator stub:

Blockly.JavaScript['screen_article'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_subtitle = Blockly.JavaScript.valueToCode(block, 'subtitle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_body = Blockly.JavaScript.valueToCode(block, 'body', Blockly.JavaScript.ORDER_ATOMIC);
    var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_body_color = Blockly.JavaScript.valueToCode(block, 'body_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC) || 'false';

    // Assemble JavaScript into code variable.

    var code = `Screen.article(
        ArticleModel(
            title: ${value_title},
            subtitle: ${value_subtitle},
            body: ${value_body},
            titlesColor: ${value_title_color},
            bodyColor: ${value_body_color},
            photoURL: ${value_photo_url},
            isTabBarHidden: ${value_is_tabbar_hidden}
        )
      )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};