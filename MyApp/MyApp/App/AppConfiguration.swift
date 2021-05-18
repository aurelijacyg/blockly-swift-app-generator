//
//  AppConfiguration.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//
//  Test DATA

import SwiftUI

struct AppConfiguration {
    let data = TabsModel(
        header: "My app",
        headerColor: Color.pink,
        navigationBarColor: Color.white,
        screenBackground: BackgroundModel(
            color: Color.white,
            gradientColor: nil
            //imageURL: "https://c4.wallpaperflare.com/wallpaper/599/356/1019/digital-art-nature-mountains-portrait-display-wallpaper-preview.jpg"
        ),
        tabs:
            [
                .init(
                    label: "Label",
                    systemImage: "",
                    screen: Screen.primary(
                        PrimaryViewModel(
                            photoURL: nil,
                            layout: Layout.bubbleList(bubbleListElements)
                        )
                    )
                ),
                
                .init(
                    screen: Screen.phrase(
                        PhraseModel(
                            title: "Hello",
                            label: "world",
                            textColor: .red,
                            typeface: "calibri",
                            backgroundColor: .init(
                                color: .blue,
                                gradientColor: .purple,
                                photoURL: nil
                            ),
                            isTabBarHidden: false
                        )
                    )
                ),
                
                .init(
                    screen: Screen.primary(
                        PrimaryViewModel(
                            photoURL: nil,
                            layout: Layout.animatedBoard(animatedBoardModel)
                        )
                    )
                ),

            ]
    )
}

private let listElements =
    ListModel(
        items:
            [
                ListItemModel(
                    text: "Photo gallery - Iceland",
                    backgroundColor: Color.pink,
                    backgroundGradientColor: Color.purple,
                    textColor: Color.white,
                    icon: "gallery-icon",
                    routeTo: Routing.cards(
                        CardGalleryView(
                            data: CardGalleryModel(
                                categoryColor: Color.secondary,
                                headingColor: Color.primary,
                                labelColor: Color.secondary,
                                navigationBarTitle: "Photo gallery - Iceland",
                                isTabBarHidden: true,
                                cards: [
                                    CardModel(
                                        photoURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
                                        category: "Iceland",
                                        heading: "Blue lagoon",
                                        label: "By AC"
                                    ),
                                    CardModel(
                                        photoURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                                        category: "Iceland",
                                        heading: "Landscape",
                                        label: "By AC2"
                                    ),
                                ]
                            )
                        )
                    )
                ),

                ListItemModel(
                    text: "Iceland",
                    backgroundColor: Color.purple,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: Routing.paper(
                        PaperView(
                            data: PaperModel(
                                title: "Iceland",
                                body: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                                titleColor: Color.primary,
                                bodyColor: Color.secondary,
                                isTabBarHidden: true,
                                photo: PhotoModel(
                                    URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                                    shape: .circle,
                                    width: 250,
                                    height: 250
                                )
                            )
                        )
                    )
                )
            ]
    )

private let gridElements =
    GridModel(
        columnsNumber: 2,
        items:
            [
                GridItemModel(
                    text: "Photo gallery - Iceland",
                    icon: "books",
                    backgroundColor: Color.pink,
                    backgroundGradientColor: Color.purple,
                    cornerRadius: 10.0,
                    textColor: Color.white,
                    routeTo: Routing.cards(
                        CardGalleryView(
                            data: CardGalleryModel(
                                categoryColor: Color.secondary,
                                headingColor: Color.primary,
                                labelColor: Color.secondary,
                                navigationBarTitle: "Photo gallery - Iceland",
                                isTabBarHidden: true,
                                cards: [
                                    CardModel(
                                        photoURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
                                        category: "Iceland",
                                        heading: "Blue lagoon",
                                        label: "By AC"
                                    ),
                                    CardModel(
                                        photoURL: "https://guidetoiceland.imgix.net/190432/x/0/w4a5319fb-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                                        category: "Iceland",
                                        heading: "Landscape",
                                        label: "By AC2"
                                    ),
                                    CardModel(
                                        photoURL: "https://guidetoiceland.imgix.net/279996/x/0/horse-riding2-copy-jpg?w=860&h=480&fit=crop&auto=format%2C%20compress&dpr=2&ixlib=react-8.6.4",
                                        category: "Iceland",
                                        heading: "Mountains",
                                        label: "By AC"
                                    ),
                                ]
                            )
                        )
                    )
                ),

                GridItemModel(
                    text: "Iceland",
                    backgroundColor: Color.white,
                    cornerRadius: 10.0,
                    textColor: Color.pink,
                    routeTo: Routing.paper(
                        PaperView(
                            data: PaperModel(
                                title: "Iceland",
                                body: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                                titleColor: Color.primary,
                                bodyColor: Color.secondary,
                                isTabBarHidden: true,
                                photo: PhotoModel(
                                    URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                                    shape: .circle,
                                    width: 250,
                                    height: 250
                                )
                            )
                        )
                    )
                ),

                GridItemModel(
                    text: "Norway",
                    backgroundColor: Color.white,
                    cornerRadius: 10.0,
                    textColor: Color.pink,
                    routeTo: nil
                ),

                GridItemModel(
                    text: "Norway-gallery",
                    backgroundColor: Color.pink,
                    cornerRadius: 10.0,
                    textColor: Color.white,
                    routeTo: Routing.paper(
                        PaperView(
                            data: PaperModel(
                                title: "Iceland",
                                body: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                                titleColor: Color.primary,
                                bodyColor: Color.secondary,
                                isTabBarHidden: true,
                                photo: PhotoModel(
                                    URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                                    shape: .circle,
                                    width: 250,
                                    height: 250
                                )
                            )
                        )
                    )
                ),

                GridItemModel(
                    backgroundColor: Color.pink,
                    cornerRadius: 10.0,
                    textColor: Color.white,
                    routeTo: Routing.paper(
                        PaperView(
                            data: PaperModel(
                                title: "Iceland",
                                body: "Iceland is a Nordic island country in the North Atlantic Ocean, with a population of 356,991 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe.[e][13] The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. Iceland is volcanically and geologically active. The interior consists of a plateau characterised by sand and lava fields, mountains, and glaciers, and many glacial rivers flow to the sea through the lowlands. Iceland is warmed by the Gulf Stream and has a temperate climate, despite a high latitude just outside the Arctic Circle. Its high latitude and marine influence keep summers chilly, with most of the archipelago having a polar climate.",
                                titleColor: Color.primary,
                                bodyColor: Color.secondary,
                                isTabBarHidden: true,
                                photo: PhotoModel(
                                    URL: "https://www.telegraph.co.uk/content/dam/Travel/commerce-partners/scenic/RESTRICTED-SCENIC-icelanddiscovery-productcard-TRAVEL.jpg",
                                    shape: .circle,
                                    width: 250,
                                    height: 250
                                )
                            )
                        )
                    )
                ),

                GridItemModel(
                    text: "Canada",
                    backgroundColor: Color.white,
                    cornerRadius: 10.0,
                    textColor: Color.pink,
                    routeTo: nil
                )
            ]
    )

private let bubbleListElements = BubbleListModel(
    isItemsBig: true,
    items:
        [
            BubbleListItemModel(
                title: "Title 1",
                subtitle: "Subtitle 1",
                icon: "developer",
                backgroundColor: .pink,
                routeTo: nil
            ),
            BubbleListItemModel(
                title: "Title 2",
                subtitle: nil,
                icon: nil,
                backgroundColor: .blue,
                backgroundGradientColor: .purple,
                routeTo: nil
            ),
            BubbleListItemModel(
                title: nil,
                subtitle: "Subtitle 2",
                icon: nil,
                backgroundColor: .green,
                backgroundGradientColor: .yellow,
                routeTo: nil
            )
        ]
)

private let catalogGridElements = CatalogGridModel(
    title: "Long long text",
    titleColor: .blue,
    items:
        [
            CatalogGridItemModel(
                text: "Title 1",
                icon: "developer",
                backgroundColor: .white,
                backgroundGradientColor: nil,
                textColor: .blue,
                routeTo: Routing.phrase(
                    PhraseView(
                        data: .init(
                            title: "Everyone fails, but only the wise find humility.",
                            label: "--- C. Bradatan",
                            textColor: .white,
                            typeface: "Geneva",
                            backgroundColor: .init(
                                color: nil,
                                gradientColor: nil,
                                photoURL: "https://www.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png"
                            ),
                            isTabBarHidden: true
                        )
                    )
                )
            ),
            CatalogGridItemModel(
                text: "Title 2",
                icon: "developer",
                backgroundColor: .blue,
                backgroundGradientColor: nil,
                textColor: .blue,
                routeTo: Routing.article(
                    ArticleView(
                        data: ArticleModel(
                            title: "Article title should be long to see whats",
                            subtitle: "AC",
                            body: "Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility.Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility. Everyone fails, but only the wise find humility.  Everyone fails, but only the wise find humility. ",
                            titlesColor: .blue,
                            bodyColor: .secondary,
                            photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                            isTabBarHidden: true
                        )
                    )
                )
            ),
            CatalogGridItemModel(
                text: "Title 3",
                icon: "developer",
                backgroundColor: .white,
                backgroundGradientColor: nil,
                textColor: .blue,
                routeTo: nil
            ),
            CatalogGridItemModel(
                text: "Title 4",
                icon: "developer",
                backgroundColor: .blue,
                backgroundGradientColor: nil,
                textColor: .blue,
                routeTo: nil
            ),
        ]
)

private let honeycombElements = HoneycombModel(
    columnsNumber: 6,
    items:
        [
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
                routeTo: nil
            )
        ]
)

let noteElement = NoteModel(
    component: flipCard,
    isAnimated: true,
    backgroundColor: BackgroundModel(
        color: nil,
        gradientColor: nil,
        photoURL: "https://wallpaperaccess.com/full/3227808.jpg"
    )
)

let simpleCard = Component.card(
    CardModel(
        photoURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
        category: "Iceland",
        heading: "Blue lagoon",
        label: "By AC"
    )
)

let flipCard = Component.flipCard(
    FlipCardModel(
        title: "Solar system",
        textColor: .blue,
        subtitle: "What is the second planet closest to the sun?",
        hiddenText: "Venus"
    )
)

let photoCard = Component.photo(
    PhotoModel(
        URL: "https://c4.wallpaperflare.com/wallpaper/599/356/1019/digital-art-nature-mountains-portrait-display-wallpaper-preview.jpg",
        shape: .circle,
        width: 200,
        height: 200
    )
)

let animatedBoardModel = AnimatedBoardModel(
    backgroundColor: BackgroundModel(
        color: nil,
        gradientColor: nil,
        photoURL: "https://static.vecteezy.com/system/resources/previews/000/273/920/original/deep-ocean-background-vector.jpg"
    ),
    items: [
        AnimatedBoardItemModel(
            title: "Fish 1",
            backgroundColor: .blue,
            backgroundGradientColor: nil,
            textColor: .white,
            size: 120,
            xPosition: 70,
            yPosition: 30,
            risingComponent: Component.card(
                CardModel(
                    photoURL: "https://cdn.mos.cms.futurecdn.net/4UdEs7tTKwLJbxZPUYR3hF-1200-80.jpg",
                    category: "Fish",
                    heading: "Nice fish",
                    label: ""
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "Fish 2",
            backgroundColor: Color(rgb: 0x333FFF),
            backgroundGradientColor: nil,
            textColor: .white,
            size: 100,
            xPosition: 300,
            yPosition: 30,
            risingComponent: Component.circle(
                CircleModel(
                    title: "Fish",
                    photo: PhotoModel(
                        URL: "https://4animalmagnetism.com/wp-content/uploads/2019/03/fish.jpeg",
                        shape: .roundedRectangle(20),
                        width: nil,
                        height: nil
                    ),
                    titleColor: .white,
                    backgroundColor: Color(rgb: 0x333FFF),
                    backgroundGradientColor: .blue,
                    backgroundOpacity: 0.5
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "Fish 3",
            backgroundColor: .blue,
            backgroundGradientColor: nil,
            textColor: .white,
            size: 70,
            xPosition: 45,
            yPosition: 100
        ),

        AnimatedBoardItemModel(
            title: "Fish4",
            backgroundColor: .blue,
            backgroundGradientColor: nil,
            textColor: .white,
            size: 130,
            xPosition: 200,
            yPosition: 200,
            risingComponent: Component.photo(
                PhotoModel(
                    URL: "https://www.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png",
                    shape: .rectangle,
                    width: 120,
                    height: 120
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "Title 5",
            backgroundColor: Color(rgb: 0x333FFF),
            backgroundGradientColor: .purple,
            textColor: .white,
            size: 140,
            xPosition: 300,
            yPosition: 450
        ),

    ]
)
