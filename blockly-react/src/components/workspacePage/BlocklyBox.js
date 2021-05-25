import React, { useState, forwardRef, useImperativeHandle } from "react";

import BlocklyComponent, { Block, Category, Field } from "../../blockly";
import BlocklyJS from "blockly/javascript";

import { Typography, Link } from "@material-ui/core";

import Alert from "../Alert";

import "../../blocks/appBlock";
import "../../blocks/tabBlock";

import "../../blocks/screens/cardGalleryScreenBlock";
import "../../blocks/screens/paperViewScreenBlock";
import "../../blocks/screens/primaryScreenBlock";
import "../../blocks/screens/phraseScreenBlock";
import "../../blocks/screens/articleScreenBlock";
import "../../blocks/screens/noteScreenBlock";
import "../../blocks/screens/simpleListScreenBlock";

import "../../blocks/layouts/layoutGridBlock";
import "../../blocks/layouts/layoutListBlock";
import "../../blocks/layouts/layoutBubbleListBlock";
import "../../blocks/layouts/layoutCatalogGridBlock";
import "../../blocks/layouts/layoutHoneycombBlock";
import "../../blocks/layouts/layoutAnimatedBoardBlock";

import "../../blocks/layoutElements/listElementBlock";
import "../../blocks/layoutElements/gridElementBlock";
import "../../blocks/layoutElements/bubbleListElementBlock";
import "../../blocks/layoutElements/catalogGridElementBlock";
import "../../blocks/layoutElements/honeycombElementBlock";
import "../../blocks/layoutElements/animatedBoardElementBlock";

import "../../blocks/components/cardBlock";
import "../../blocks/components/flipCardBlock";
import "../../blocks/components/photoBlock";
import "../../blocks/components/bubbleBlock";

import "../../blocks/icons/iconColorfulAstronomyBlock";
import "../../blocks/icons/iconColorfulFoodBlock";
import "../../blocks/icons/iconColorfulSenseBlock";
import "../../blocks/icons/iconColorfulBlock";
import "../../blocks/icons/iconRegularBlock";

import "../../blocks/colors/colorAquamarineBlock";
import "../../blocks/colors/colorBlackBlock";
import "../../blocks/colors/colorBlueBlock";
import "../../blocks/colors/colorGrayBlock";
import "../../blocks/colors/colorGreenBlock";
import "../../blocks/colors/colorMakeBlock";
import "../../blocks/colors/colorOrangeBlock";
import "../../blocks/colors/colorPinkBlock";
import "../../blocks/colors/colorPrimaryBlock";
import "../../blocks/colors/colorPurpleBlock";
import "../../blocks/colors/colorRedBlock";
import "../../blocks/colors/colorSecondaryBlock";
import "../../blocks/colors/colorWhiteBlock";
import "../../blocks/colors/colorYellowBlock";

import "../../blocks/logic/logicBoolFalseBlock";
import "../../blocks/logic/logicBoolTrueBlock";

import "../../blocks/math/mathIntBlock";
import "../../blocks/math/mathDoubleBlock";
import "../../blocks/math/mathCGFloatBlock";

import "../../blocks/text/textStringBlock";
import "../../blocks/text/textURLBlock";

import "../../blocks/functions/funcMakeBackgroundBlock";

import "../../blocks/types/typeShapeBlock";
import "../../blocks/types/typeInputFieldBlock";


const BlocklyBox = forwardRef((props, ref) => {
    const [simpleWorkspace, setSimpleWorkSpace] = useState(React.createRef());
    const [isModalOpen, setModalOpen] = useState(false);

    const modalInformation =
    {
        title: "You made it! Code was successfully generated.",
        text:
            <Typography>
                {"Insert the configured file into the main App code. You can download a full code "}
                <Link color="primary" href="https://github.com/aurelijacyg/blockly-swift-app-generator">
                    here.
                </Link>{" "}
            </Typography>,
    };


    useImperativeHandle(
        ref,
        () => ({
            generateCode
        }),
    )

    const generateCode = () => {
        var code = BlocklyJS.workspaceToCode(
            simpleWorkspace.current.workspace
        );

        var date = new Date();
        var swiftCode = "//\n// AppConfiguration.swift\n// MyApp\n//\n// Created at: " + date + "\n\n\nimport SwiftUI\n\n" + code;

        setModalOpen(true);
        download("AppConfiguration.swift", swiftCode);
    };

    const download = (filename, text) => {
        var element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };

    return (
        <div className="BlocklyBox">
            <Alert
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title={modalInformation.title}
                text={modalInformation.text}
            />
            <BlocklyComponent ref={simpleWorkspace}
                readOnly={false} trashcan={true} media={"media/"}
                move={{
                    scrollbars: true,
                    drag: true,
                    wheel: true
                }}
                initialXml={`
                    <xml xmlns="http://www.w3.org/1999/xhtml">
                    <block type="controls_ifelse" x="0" y="0"></block>
                    </xml>
                `}>

                <Category name="App">
                    <Block type="app_block" />
                    <Block type="tab_block" />
                </Category>

                <Category name="Screens" >
                    <Block type="screen_primary" />
                    <Block type="screen_card_gallery" />
                    <Block type="screen_paper_view" />
                    <Block type="screen_phrase" />
                    <Block type="screen_article" />
                    <Block type="screen_note" />
                    <Block type="screen_simple_list" />
                </Category>

                <Category name="Layouts">
                    <Block type="layout_grid" />
                    <Block type="layout_catalog_grid" />
                    <Block type="layout_list" />
                    <Block type="layout_bubble_list" />
                    <Block type="layout_honeycomb" />
                    <Block type="layout_animated_board" />
                </Category>

                <Category name="Layout elements">
                    <Block type="element_grid_item" />
                    <Block type="element_catalog_grid_item" />
                    <Block type="element_list_item" />
                    <Block type="element_bubble_list_item" />
                    <Block type="element_honeycomb_item" />
                    <Block type="element_animated_board_item" />
                </Category>

                <Category name="Components">
                    <Block type="component_card" />
                    <Block type="component_flip_card" />
                    <Block type="component_photo" />
                    <Block type="component_bubble" />
                </Category>

                <Category name="Text">
                    <Block type="text_string" />
                    <Block type="text_url" />
                </Category>

                <Category name="Math">
                    <Block type="math_int" />
                    <Block type="math_double" />
                    <Block type="math_cgfloat" />
                </Category>

                <Category name="Logic">
                    <Block type="logic_bool_true" />
                    <Block type="logic_bool_false" />
                </Category>

                <Category name="Functions">
                    <Block type="func_make_background" />
                </Category>

                <Category name="Types">
                    <Block type="type_shape" />
                    <Block type="type_input_field" />
                </Category>

                <Category name="Colors">
                    <Block type="color_aquamarine" />
                    <Block type="color_black" />
                    <Block type="color_blue" />
                    <Block type="color_gray" />
                    <Block type="color_green" />     
                    <Block type="color_orange" />
                    <Block type="color_pink" />
                    <Block type="color_purple" />
                    <Block type="color_red" />
                    <Block type="color_white" />
                    <Block type="color_yellow" />
                    <Block type="color_primary" />
                    <Block type="color_secondary" />
                    <Block type="color_make" />
                </Category>

                <Category name="Icons">
                    <Block type="icon_regular" />
                    <Block type="icon_colorful" />
                    <Block type="icon_food_colorful" />
                    <Block type="icon_sense_colorful" />
                    <Block type="icon_astronomy_colorful" />
                </Category>

            </BlocklyComponent>
        </div>
    );
})

export default BlocklyBox;