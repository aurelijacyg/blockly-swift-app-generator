//
//  CardView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct CardView: View {
    let card: CardModel
    let categoryColor: Color
    let headingColor: Color
    let labelColor: Color

    @State private var bouncing = false

    init(card: CardModel,
         categoryColor: Color?,
         headingColor: Color?,
         labelColor: Color?
    ) {
        self.card = card
        self.categoryColor = categoryColor ?? .primary
        self.headingColor = headingColor ?? .primary
        self.labelColor = labelColor ?? .secondary
    }

    var body: some View {
        VStack {
            RemoteImage(url: card.imageURL)
                .aspectRatio(contentMode: .fit)

            HStack {
                VStack(alignment: .leading) {
                    Text(card.category)
                        .font(.headline)
                        .foregroundColor(categoryColor)
                    Text(card.heading)
                        .font(.title)
                        .fontWeight(.black)
                        .foregroundColor(headingColor)
                        .lineLimit(3)
                    Text(card.label.uppercased())
                        .font(.caption)
                        .foregroundColor(labelColor)
                }
                .layoutPriority(100)

                Spacer()
            }
            .padding()
            .background(Color.white)
        }
        .cornerRadius(10)
        .overlay(
            RoundedRectangle(cornerRadius: 10)
                .stroke(Color(.sRGB, red: 150/255, green: 150/255, blue: 150/255, opacity: 0.1), lineWidth: 1)
        )
        .padding([.top, .horizontal])
    }
}
