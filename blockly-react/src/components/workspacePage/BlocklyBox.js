import React, { useState, forwardRef, useImperativeHandle } from "react";

import BlocklyComponent, { Block, Category, Field } from "../../blockly";
import BlocklyJS from "blockly/javascript";

import { Typography, Link } from "@material-ui/core";

import Alert from "../Alert";

import "../../blocks/appBlock";

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

import "../../blocks/elements/cardBlock";
import "../../blocks/elements/gridElementBlock";
import "../../blocks/elements/listElementBlock";
import "../../blocks/elements/photoBlock";
import "../../blocks/elements/textBlock";

import "../../blocks/layouts/layoutGridBlock";
import "../../blocks/layouts/layoutListBlock";

import "../../blocks/screens/cardGalleryScreenBlock";
import "../../blocks/screens/homeScreenBlock";
import "../../blocks/screens/paperViewScreenBlock";


const BlocklyBox = forwardRef((props, ref) => {
    const [simpleWorkspace, setSimpleWorkSpace] = useState(React.createRef());
    const [isModalOpen, setModalOpen] = useState(false);

    const modalInformation =
    {
        title: "Code was sucessfully generated!",
        text:
            <Typography>
                {"Insert the configurated file to the main app code. You can download a full code "}
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

        var swiftCode = "//\n//--- APP CONFIG ---\n//\n\n\nimport SwiftUI\n\n" + code + "\n]"

        setModalOpen(true);
        download("AppConfigData.swift", swiftCode);
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
                    <Block type="app">
                        <Field name="app_name" />
                    </Block>
                </Category>

                <Category name="Screens" >
                    <Block type="home_screen" />
                    <Block type="card_gallery_screen" />
                    <Block type="paper_view_screen" />
                </Category>

                <Category name="Elements">
                    <Block type="text_block" />
                    <Block type="list_element" />
                    <Block type="grid_element" />
                    <Block type="card" />
                    <Block type="photo" />
                </Category>

                <Category name="Layouts">
                    <Block type="layout_grid" />
                    <Block type="layout_list" />
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

            </BlocklyComponent>
        </div>
    );
})

export default BlocklyBox;

/*

<Category name="Images">
                    <Block type="image">
                        <Field name="imageURL">https://www...</Field>
                        <Field name="width">250</Field>
                        <Field name="height">250</Field>
                        <Field name="imageType">rounded</Field>
                    </Block>

                    <Block type="photo">
                        <Field name="imageURL">https://www...</Field>
                        <Field name="category">category</Field>
                        <Field name="heading">heading</Field>
                        <Field name="label">label</Field>
                    </Block>
                </Category>
*/