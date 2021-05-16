//
//  FlipCardView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct FlipCardView: View {
    let card: FlipCardModel

    @State private var isShowingAnswer = false

    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 25, style: .continuous)
                .fill(Color.white.opacity(0.5))
                .shadow(radius: 10)

            VStack(spacing: 15) {
                Text(card.title)
                    .font(.title2)
                    .bold()
                    .foregroundColor(card.titleColor ?? .black)
                    .lineSpacing(6)
                    .multilineTextAlignment(.center)

                Text(card.subtitle)
                    .font(.title)
                    .bold()
                    .foregroundColor(.black)
                    .lineSpacing(6)
                    .multilineTextAlignment(.center)

                if isShowingAnswer {
                    Text(card.hiddenText)
                        .font(.title)
                        .foregroundColor(card.titleColor)
                }
            }
            .padding(20)
            .multilineTextAlignment(.center)
        }
        .frame(width: 380, height: 200)
        .onTapGesture {
            self.isShowingAnswer.toggle()
        }
    }
}
