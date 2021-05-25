//
//  AppConfiguration.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//
//  Test DATA

import SwiftUI

struct AppConfiguration {
    let data = AppModel(
        header: "TODO",
        headerColor: Color.blue,
        navigationBarColor: Color.white,
        screenBackground: BackgroundModel(
            color: Color.white,
            gradientColor: nil,
            photoURL: nil
        ),
        tabs:
            [
                TabModel(
                    label: "Home",
                    systemImage: "homekit",
                    screen: Screen.primary(PrimaryViewModel(isTabBarHidden: false, layout: Layout.list(listModel)))
                ),
                
            ]
    )
}

private let listModel =
    ListModel(
        items:
            [
                ListItemModel(
                    text: "Planets about",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: "planet",
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Mercury",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Venus",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Earth",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Mars",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Jupiter",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Saturn",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Uranus",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                ),

                ListItemModel(
                    text: "Neptune",
                    backgroundColor: Color(rgb: 0x54156F),
                    backgroundGradientColor: Color.black,
                    textColor: Color.white,
                    icon: nil,
                    routeTo: nil
                )

            ]
    )

private let gridModel =
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
                    routeTo: Screen.cards(cardGalleryModel)
                ),

                GridItemModel(
                    text: "Iceland",
                    backgroundColor: Color.white,
                    cornerRadius: 10.0,
                    textColor: Color.pink,
                    routeTo: paperScreen
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
                    routeTo: nil
                ),

                GridItemModel(
                    backgroundColor: Color.pink,
                    cornerRadius: 10.0,
                    textColor: Color.white,
                    routeTo: nil
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

private let bubbleListModel = BubbleListModel(
    isItemsBig: false,
    items:
        [
            BubbleListItemModel(
                title: "Smell",
                subtitle: nil,
                icon: "smell",
                backgroundColor: Color.white,
                titleColor: Color(rgb: 0x272793),
                routeTo: nil
            ),
            BubbleListItemModel(
                title: "Touch",
                subtitle: nil,
                icon: "touch",
                backgroundColor: Color.white,
                titleColor: Color(rgb: 0x272793),
                routeTo: nil
            ),
            BubbleListItemModel(
                title: "Sight",
                icon: "sight",
                backgroundColor: Color.white,
                titleColor: Color(rgb: 0x272793),
                routeTo: nil
            ),
            BubbleListItemModel(
                title: "Taste",
                icon: "taste",
                backgroundColor: Color.white,
                titleColor: Color(rgb: 0x272793),
                routeTo: nil
            ),
            BubbleListItemModel(
                title: "Hear",
                icon: "hear",
                backgroundColor: Color.white,
                titleColor: Color(rgb: 0x272793),
                routeTo: nil
            )
        ]
)

private let catalogGridModel = CatalogGridModel(
    title: nil,
    titleColor: .blue,
    items:
        [
            CatalogGridItemModel(
                text: "Salads",
                icon: "avocado",
                backgroundColor: Color(rgb: 0xF2EAD2),
                backgroundGradientColor: Color(rgb: 0xF1ECDD),
                textColor: Color.gray,
                routeTo: nil
            ),
            CatalogGridItemModel(
                text: "Pizza",
                icon: "pizza",
                backgroundColor: Color(rgb: 0xF2EAD2),
                backgroundGradientColor: Color(rgb: 0xF1ECDD),
                textColor: Color.gray,
                routeTo: nil
            ),
            CatalogGridItemModel(
                text: "Spaghetti",
                icon: "spaghetti",
                backgroundColor: Color(rgb: 0xF2EAD2),
                backgroundGradientColor: Color(rgb: 0xF1ECDD),
                textColor: Color.gray,
                routeTo: nil
            ),
            CatalogGridItemModel(
                text: "Pancakes",
                icon: "pancake",
                backgroundColor: Color(rgb: 0xF2EAD2),
                backgroundGradientColor: Color(rgb: 0xF1ECDD),
                textColor: Color.gray,
                routeTo: nil
            ),
            CatalogGridItemModel(
                text: "Snacks",
                icon: "Salads",
                backgroundColor: Color(rgb: 0xF2EAD2),
                backgroundGradientColor: Color(rgb: 0xF1ECDD),
                textColor: Color.gray,
                routeTo: nil
            ),
            CatalogGridItemModel(
                text: "Cakes",
                icon: "Salads",
                backgroundColor: Color(rgb: 0xF2EAD2),
                backgroundGradientColor: Color(rgb: 0xF1ECDD),
                textColor: Color.gray,
                routeTo: nil
            ),
        ]
)

private let honeycombModel = HoneycombModel(
    columnsNumber: 4,
    items:
        [
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
            HoneycombItemModel(
                photoURL: "https://wallpaperaccess.com/full/2155719.jpg",
                routeTo: nil
            ),
        ]
)

let cardGalleryModel = CardGalleryModel(
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

let noteModel = NoteModel(
    component: flipCardComponent,
    isAnimated: true,
    backgroundColor: BackgroundModel(
        color: nil,
        gradientColor: nil,
        photoURL: nil
    )
)

let animatedBoardModel = AnimatedBoardModel(
    backgroundColor: BackgroundModel(
        color: nil,
        gradientColor: nil,
        photoURL: nil
    ),
    items: [
        AnimatedBoardItemModel(
            title: "Discus",
            backgroundColor: Color(rgb: 0x3E90BE),
            backgroundGradientColor: nil,
            textColor: .white,
            size: 120,
            xPosition: 70,
            yPosition: 30,
            risingComponent: Component.bubble(
                BubbleModel(
                    title: "Discus",
                    photo: PhotoModel.init(
                        URL: "https://fishkeepingguide.net/wp-content/uploads/2020/03/discus_fish-min.jpg",
                        shape: .roundedRectangle(10.0)
                    ),
                    titleColor: .white,
                    backgroundColor: Color(rgb: 0x3E90BE),
                    backgroundGradientColor: nil,
                    backgroundOpacity: 0.5
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "Cichlid",
            backgroundColor: Color(rgb: 0x66D3EE),
            backgroundGradientColor: Color(rgb: 0x97EAFE),
            textColor: .white,
            size: 100,
            xPosition: 300,
            yPosition: 50,
            risingComponent: Component.bubble(
                BubbleModel(
                    title: "Flowerhorn Cichlid",
                    photo: PhotoModel.init(
                        URL: "https://www.fishkeepingworld.com/wp-content/uploads/2019/08/Flowerhorn-Cichlid-Appearance.jpg",
                        shape: .roundedRectangle(10.0)
                    ),
                    titleColor: .white,
                    backgroundColor: Color(rgb: 0x66D3EE),
                    backgroundGradientColor: Color(rgb: 0x97EAFE),
                    backgroundOpacity: 0.5
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "",
            backgroundColor: Color(rgb: 0x379AD0),
            backgroundGradientColor: Color(rgb: 0x6AC1F1),
            textColor: .white,
            size: 70,
            xPosition: 45,
            yPosition: 100,
            risingComponent: nil
        ),

        AnimatedBoardItemModel(
            title: "Ocellaris clownfish",
            backgroundColor: Color(rgb: 0x56B3D9),
            backgroundGradientColor: Color(rgb: 0x41A5CD),
            textColor: .white,
            size: 130,
            xPosition: 200,
            yPosition: 200,
            risingComponent: Component.bubble(
                BubbleModel(
                    title: "Ocellaris clownfish",
                    photo: PhotoModel.init(
                        URL: "https://www.wallpapers13.com/wp-content/uploads/2016/02/Anemone-fish-exotic-fish-Amphiprion-ocellaris-1920x1440.jpg",
                        shape: .circle
                    ),
                    titleColor: .white,
                    backgroundColor: Color(rgb: 0x56B3D9),
                    backgroundGradientColor: Color(rgb: 0x41A5CD),
                    backgroundOpacity: 0.5
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "",
            backgroundColor: Color(rgb: 0x54A9CB),
            backgroundGradientColor: Color(rgb: 0x24B2C6),
            textColor: .white,
            size: 140,
            xPosition: 300,
            yPosition: 450
        ),

        AnimatedBoardItemModel(
            title: "Betta",
            backgroundColor: Color(rgb: 0x24B2C6),
            backgroundGradientColor: Color(rgb: 0x4DA2C2),
            textColor: .white,
            size: 90,
            xPosition: 250,
            yPosition: 600,
            risingComponent: Component.bubble(
                BubbleModel(
                    title: "Betta",
                    photo: PhotoModel.init(
                        URL: "https://i.ytimg.com/vi/QRGl4AkaOzE/maxresdefault.jpg",
                        shape: .circle
                    ),
                    titleColor: .white,
                    backgroundColor: Color(rgb: 0x24B2C6),
                    backgroundGradientColor: Color(rgb: 0x4DA2C2),
                    backgroundOpacity: 0.5
                )
            )
        ),

        AnimatedBoardItemModel(
            title: "",
            backgroundColor: Color(rgb: 0x64A3BA),
            backgroundGradientColor: Color(rgb: 0x5AB1C1),
            textColor: .white,
            size: 200,
            xPosition: 70,
            yPosition: 730,
            risingComponent: nil
        ),

    ]
)

let phraseScreen = Screen.phrase(
    .init(
        title: "Everyone fails, but only the wise find humility.",
        label: "--- C. Bradatan",
        textColor: .white,
        typeface: "Geneva",
        backgroundColor: .init(
            color: nil,
            gradientColor: nil,
            photoURL: nil
        ),
        isTabBarHidden: true
    )
)

let paperScreen = Screen.paper(
    PaperModel(
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

let articleScreen = Screen.article(
    .init(
        title: "Iceland",
        subtitle: "AC blog",
        body: "Iceland is a country of extreme geological contrasts. Widely known as “THE LAND OF FIRE AND ICE”. Iceland is home to some of the largest glaciers in Europe, and some of the world's most active volcanoes. Iceland is also the land of light and darkness. Long summer days with near 24-hours of sunshine are offset by short winter days with only a few hours of daylight. ",
        titlesColor: .blue,
        bodyColor: .secondary,
        photoURL: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1192,w_2121,x_0,y_111/f_auto,q_auto,w_1100/v1554702761/shape/mentalfloss/573469.istock-663874486.jpg",
        isTabBarHidden: true
    )
)

private let simpleListModel =
    SimpleListModel(
        itemsColor: nil,
        onSwipeDeleteItems: true,
        isTabBarHidden: false,
        inputField: InputFieldModel(
            header: "New Task",
            title: "Enter new task"
        )
    )

let simpleCardComponent = Component.card(
    CardModel(
        photoURL: "https://thumb2.holidaypirates.com/fJb5wMJGjT4BPYzX4vY_vBFH94A=/1314x600/https://media.mv.urlaubspiraten.de/images/2018/07/5b472ef9864a98992261485w7bx42y.jpg",
        category: "Iceland",
        heading: "Blue lagoon",
        label: "By AC"
    )
)

let flipCardComponent = Component.flipCard(
    FlipCardModel(
        title: "Planet",
        textColor: Color(rgb: 0x4F815E),
        subtitle: "What is the highest mountain in the world?",
        hiddenText: "Everest"
    )
)

let photoComponent = Component.photo(
    PhotoModel(
        URL: "https://c4.wallpaperflare.com/wallpaper/599/356/1019/digital-art-nature-mountains-portrait-display-wallpaper-preview.jpg",
        shape: .circle,
        width: 200,
        height: 200
    )
)
