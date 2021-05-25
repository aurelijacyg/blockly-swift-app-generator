//
//  NoteView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct NoteView: View {
    let data: NoteModel
    let screenBackground = ScreenBackground()

    @State private var bouncing = false

    init(data: NoteModel) {
        self.data = data
    }

    var body: some View {
        VStack(alignment: .center) {
            component
        }
        .padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
        .frame(
            minWidth: 0,
            maxWidth: .infinity,
            minHeight: 0,
            maxHeight: .infinity,
            alignment: .center
        )
        .background(
            screenBackground.background(
                color: data.backgroundColor.color,
                gradientColor: data.backgroundColor.gradientColor,
                photoURL: data.backgroundColor.photoURL
            )
        )
        .ignoresSafeArea()
    }

    private var component: some View {
        if data.isAnimated {
            return AnyView(componentView
                .frame(maxHeight: UIScreen.screenHeight * 0.65, alignment: bouncing ? .bottom : .top)
                .animation(Animation.easeInOut(duration: 14.0).repeatForever(autoreverses: true))
                .onAppear {
                    self.bouncing.toggle()
                }
            )
        } else {
            return AnyView(componentView)
        }
    }

    private var componentView: some View {
        switch data.component {
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
