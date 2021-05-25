//
//  Component.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

enum Component {
    case card(CardModel)
    case flipCard(FlipCardModel)
    case photo(PhotoModel)
    case bubble(BubbleModel)
}

extension Component {
    var get: some View {
        switch self {
        case .card(let card):
            return AnyView(
                CardView(
                    card: card,
                    categoryColor: .primary,
                    headingColor: .primary,
                    labelColor: .secondary
                )
            )
        case .flipCard(let card):
            return AnyView(FlipCardView(card: card))
        case .photo(let photo):
            return AnyView(PhotoView(photo: photo))
        case .bubble(let data):
            return AnyView(BubbleView(data: data))
        }
    }
}
