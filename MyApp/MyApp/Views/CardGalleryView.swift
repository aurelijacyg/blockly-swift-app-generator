//
//  CardGalleryView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct CardGalleryView: View {

    var categoryColor: Color
    var headingColor: Color
    var infoTextColor: Color
    var navigationBarTextTitle: String
    var cards: [CardModel]


    var body: some View {
        VStack(spacing:25) {
            List(cards){ card in
                Card(
                    photoURL: card.imageURL,
                    category: card.category,
                    heading: card.heading,
                    infoText: card.infoText,
                    categoryColor: categoryColor,
                    headingColor: headingColor,
                    infoTextColor: infoTextColor
                )
            }
        }.navigationBarTitle(
            Text(navigationBarTextTitle),
            displayMode: .inline
        )
    }
}

struct CardGalleryView_Previews: PreviewProvider {
    static var previews: some View {
        CardGalleryView(
            categoryColor: Color.secondary,
            headingColor: Color.primary,
            infoTextColor: Color.secondary,
            navigationBarTextTitle: "Photos",
            cards: []
        )
    }
}
