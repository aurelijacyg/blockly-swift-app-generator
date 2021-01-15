//
//  AppConfigData.swift
//  SimpleApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI


let homePage = HomePageData(
    columnsNumber: 2,
    isLayoutList: false,
    logoURL: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/colorful-abstract-blocks-karolina-perlinska.jpg",
    header: "Tripify",
    headerColor: Color.white,
    subtitleText: "Find your vacation spot...",
    subtitleTextColor: Color.secondary
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
                        Photo(
                            id: 11,
                            imageURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
                            category: "Iceland",
                            heading: "Blue lagoon",
                            infoText: "By AC"
                        ),
                        Photo(
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
                        Photo(
                            id: 11,
                            imageURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
                            category: "Iceland",
                            heading: "Blue lagoon",
                            infoText: "By AC"
                        ),
                        Photo(
                            id: 12,
                            imageURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                            category: "Iceland",
                            heading: "Landscape",
                            infoText: "By AC2"
                        ),
                        Photo(
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
            backgroundColor: Color.purple,
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
            id: 3,
            text: "Norway",
            backgroundColor: Color.purple,
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
            id: 4,
            text: "Canada",
            backgroundColor: Color.purple,
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
        )
    ]


// Nereikalingi jau
/*

let photosIceland =
    [
        Photo(
            id: 11,
            imageURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
            category: "Iceland",
            heading: "Blue lagoon",
            infoText: "By AC"
        ),
        Photo(
            id: 12,
            imageURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
            category: "Iceland",
            heading: "Landscape",
            infoText: "By AC2"
        ),
    ]


let photosNorway =
    [
        Photo(
            id: 21,
            imageURL: "https://media.timeout.com/images/105237855/image.jpg",
            category: "Norway",
            heading: "Town",
            infoText: "By AC"
        ),
        Photo(
            id: 22,
            imageURL: "https://www.state.gov/wp-content/uploads/2018/11/Norway-2560x1328.jpg",
            category: "Norway",
            heading: "Landscape",
            infoText: "By AC2"
        ),
    ]

 let inner1 = ContentPhotos(
     categoryColor: Color.secondary,
     headingColor: Color.primary,
     infoTextColor: Color.secondary,
     navigationBarTextTitle: "Photo gallery - Iceland",
     photosArray: [
         Photo(
             id: 11,
             imageURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
             category: "Iceland",
             heading: "Blue lagoon",
             infoText: "By AC"
         ),
         Photo(
             id: 12,
             imageURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
             category: "Iceland",
             heading: "Landscape",
             infoText: "By AC2"
         ),
     ]
 )

 let inner2 = ContentDetail(
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


*/



