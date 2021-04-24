import React, { useState, forwardRef, useImperativeHandle } from 'react';

import BlocklyComponent, { Block, Category, Field } from '../../blockly';
import BlocklyJS from 'blockly/javascript';

import '../../blocks/appBlock';
import '../../blocks/galleryPhotoBlock';
import '../../blocks/gridElementBlock';
import '../../blocks/homeScreenBlock';
import '../../blocks/imageBlock';
import '../../blocks/infoScreenBlock';
import '../../blocks/listElementBlock';
import '../../blocks/photoGalleryScreenBlock';


const BlocklyBox = forwardRef((props, ref) => {
    const [simpleWorkspace, setSimpleWorkSpace] = useState(React.createRef());

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

        var swiftCode = '//\n//--- APP CONFIG ---\n//\n\n\nimport SwiftUI\n\n' + code + '\n]'
        console.log(swiftCode);

        download("AppConfigData.swift", swiftCode);
        alert("Code was sucessfully generated")

    };

    const download = (filename, text) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    return (
        <div className="BlocklyBox">

            <BlocklyComponent ref={simpleWorkspace}
                readOnly={false} trashcan={true} media={'media/'}
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

                <Category name="Beginning of the app">
                    <Block type="app">
                        <Field name="appName" />
                    </Block>
                </Category>

                <Category name="Screens" >
                    <Block type="home_screen">
                        <Field name="header">My app</Field>
                        <Field name="subtitleText">A sentence about your app</Field>
                        <Field name="subtitleTextColorDropdown">black</Field>
                        <Field name="logoURL">https://image.com</Field>
                        <Field name="layoutDropdown">grid</Field>
                        <Field name="columnsNumber">2</Field>
                    </Block>

                    <Block type="destination_content">
                        <Field name="titleText">title</Field>
                        <Field name="titleColorDropdown">black</Field>
                        <Field name="bodyText">body</Field>
                        <Field name="bodyColorDropdown">black</Field>
                    </Block>

                    <Block type="destination_photos">
                        <Field name="galleryName">default</Field>
                        <Field name="navigationBarTextTitle">screen</Field>
                        <Field name="categoryColor">primary</Field>
                        <Field name="headingColor">primary</Field>
                        <Field name="labelColor">primary</Field>
                    </Block>
                </Category>

                <Category name="Layout elements">
                    <Block type="list_element">
                        <Field name="text">Element text</Field>
                        <Field name="textColor">black</Field>
                        <Field name="icon">travel-icon</Field>
                        <Field name="backgroundColor">black</Field>
                        <Field name="destinationScreenName">screenName</Field>
                        <Field name="destinationDropdwon">content</Field>
                    </Block>

                    <Block type="grid_element">
                        <Field name="Text">Element text</Field>
                        <Field name="textColorDropdown">black</Field>
                        <Field name="cornerRadius">10</Field>
                        <Field name="backgroundDropdown">black</Field>
                        <Field name="destinationScreenName">screenName</Field>
                        <Field name="destinationDropdown">content</Field>
                    </Block>
                </Category>

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

            </BlocklyComponent>
        </div>
    );
})

export default BlocklyBox;
