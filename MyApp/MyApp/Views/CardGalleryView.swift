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
    var labelColor: Color
    var navigationBarTextTitle: String
    var cards: [CardModel]


    var body: some View {
        VStack(spacing:25) {
            List(cards){ card in
                Card(
                    photoURL: card.imageURL,
                    category: card.category,
                    heading: card.heading,
                    label: card.label,
                    categoryColor: categoryColor,
                    headingColor: headingColor,
                    labelColor: labelColor
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
            labelColor: Color.secondary,
            navigationBarTextTitle: "Photos",
            cards: []
        )
    }
}
