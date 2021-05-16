//
//  NoteView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct NoteView: View {
    let data: NoteModel

    @State private var bouncing = false

    init(data: NoteModel) {
        self.data = data
    }

    var body: some View {
        if let _ = data.backgroundColor {
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
            .background(screenBackgroundColor)
            .ignoresSafeArea()
        } else if let backgroundImage = data.backgroundPhotoURL {
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
                RemoteImage(url: backgroundImage).aspectRatio(contentMode: .fill)
            )
            .ignoresSafeArea()
        } else {
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
            .background(Color.white)
            .ignoresSafeArea()
        }
    }

    private var screenBackgroundColor: LinearGradient {
        LinearGradient(
            gradient: Gradient(
                colors: [
                    data.backgroundColor!,
                    data.backgroundGradientColor ?? data.backgroundColor!
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )
    }

    private var component: some View {
        componentView
            .frame(maxHeight: UIScreen.main.bounds.height * 0.65, alignment: bouncing ? .bottom : .top)
            .animation(Animation.easeInOut(duration: 14.0).repeatForever(autoreverses: true))
            .onAppear {
                self.bouncing.toggle()
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
        }
    }
}
