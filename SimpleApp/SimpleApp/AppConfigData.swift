//
//  AppConfigData.swift
//  SimpleApp
//
//  Created by Aurelija Cygaite
//
//  Test DATA

import SwiftUI


let homePage = HomePageData(
    columnsNumber: 2,
    isLayoutList: false,
    logoURL: "https://us.123rf.com/450wm/sergeiminsk/sergeiminsk1709/sergeiminsk170900006/86139704-abbellisca-con-le-siluette-blu-e-porpora-delle-montagne-e-colline-con-il-bello-cielo-sanguinante-di-.jpg?ver=6",
    header: "Tripify",
    headerColor: Color.white,
    subtitleText: "Find your vacation spot...",
    subtitleTextColor: Color.pink
)

// Render LIST LAYOUT:
// var gridElements = [GridConfigData]()

let listElements =
    [
        ListConfigData(
            id: Int.random(in: 0...10000),
            text: "Photo gallery - Iceland",
            backgroundColor: Color.pink,
            textColor: Color.white,
            icon: "gallery-icon",
            destination: Destination.photos(
                ContentPhotos(
                    categoryColor: Color.secondary,
                    headingColor: Color.primary,
                    infoTextColor: Color.secondary,
                    navigationBarTextTitle: "Photo gallery - Iceland",
                    photosArray: [
                        PhotoData(
                            id: 11,
                            imageURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
                            category: "Iceland",
                            heading: "Blue lagoon",
                            infoText: "By AC"
                        ),
                        PhotoData(
                            id: 12,
                            imageURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                            category: "Iceland",
                            heading: "Landscape",
                            infoText: "By AC2"
                        ),
                    ]
                )
            )
        ),

        ListConfigData(
            id: Int.random(in: 0...10000),
            text: "Iceland",
            backgroundColor: Color.purple,
            textColor: Color.white,
            icon: nil,
            destination: Destination.content(
                ContentDetail(
                    titleText: "Iceland",
                    bodyText: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                    titleColor: Color.primary,
                    bodyTextColor: Color.secondary,
                    image: ImageData(
                        URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                        width: 250,
                        height: 250,
                        isRounded: true
                    )
                )
            )
        )
    ]

// Render GRID LAYOUT:
// var listElements = [ListConfigData]()

let gridElements =
    [
        GridConfigData(
            id: 1,
            text: "Photo gallery - Iceland",
            backgroundColor: Color.pink,
            cornerRadius: 10.0,
            textColor: Color.white,
            destination: Destination.photos(
                ContentPhotos(
                    categoryColor: Color.secondary,
                    headingColor: Color.primary,
                    infoTextColor: Color.secondary,
                    navigationBarTextTitle: "Photo gallery - Iceland",
                    photosArray: [
                        PhotoData(
                            id: 11,
                            imageURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
                            category: "Iceland",
                            heading: "Blue lagoon",
                            infoText: "By AC"
                        ),
                        PhotoData(
                            id: 12,
                            imageURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                            category: "Iceland",
                            heading: "Landscape",
                            infoText: "By AC2"
                        ),
                        PhotoData(
                            id: 13,
                            imageURL: "https://guidetoiceland.imgix.net/279996/x/0/horse-riding2-copy-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                            category: "Iceland",
                            heading: "Mountains",
                            infoText: "By AC"
                        ),
                    ]
                )
            )
        ),

        GridConfigData(
            id: 2,
            text: "Iceland",
            backgroundColor: Color.white,
            cornerRadius: 10.0,
            textColor: Color.pink,
            destination: Destination.content(
                ContentDetail(
                    titleText: "Iceland",
                    bodyText: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                    titleColor: Color.primary,
                    bodyTextColor: Color.secondary,
                    image: ImageData(
                        URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                        width: 250,
                        height: 250,
                        isRounded: true
                    )
                )
            )
        ),

        GridConfigData(
            id: 3,
            text: "Norway",
            backgroundColor: Color.white,
            cornerRadius: 10.0,
            textColor: Color.pink,
            destination: Destination.content(
                ContentDetail(
                    titleText: "Iceland",
                    bodyText: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                    titleColor: Color.primary,
                    bodyTextColor: Color.secondary,
                    image: ImageData(
                        URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                        width: 250,
                        height: 250,
                        isRounded: true
                    )
                )
            )
        ),

        GridConfigData(
            id: 4,
            text: "Norway-gallery",
            backgroundColor: Color.pink,
            cornerRadius: 10.0,
            textColor: Color.white,
            destination: Destination.content(
                ContentDetail(
                    titleText: "Iceland",
                    bodyText: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                    titleColor: Color.primary,
                    bodyTextColor: Color.secondary,
                    image: ImageData(
                        URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                        width: 250,
                        height: 250,
                        isRounded: true
                    )
                )
            )
        ),

        GridConfigData(
            id: 5,
            text: "Canada-gallery",
            backgroundColor: Color.pink,
            cornerRadius: 10.0,
            textColor: Color.white,
            destination: Destination.content(
                ContentDetail(
                    titleText: "Iceland",
                    bodyText: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                    titleColor: Color.primary,
                    bodyTextColor: Color.secondary,
                    image: ImageData(
                        URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                        width: 250,
                        height: 250,
                        isRounded: true
                    )
                )
            )
        ),

        GridConfigData(
            id: 6,
            text: "Canada",
            backgroundColor: Color.white,
            cornerRadius: 10.0,
            textColor: Color.pink,
            destination: Destination.content(
                ContentDetail(
                    titleText: "Iceland",
                    bodyText: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                    titleColor: Color.primary,
                    bodyTextColor: Color.secondary,
                    image: ImageData(
                        URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                        width: 250,
                        height: 250,
                        isRounded: true
                    )
                )
            )
        )
    ]

