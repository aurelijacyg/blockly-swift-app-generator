//
//  ListView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ListView: View {
    let data: ListModel

    init(data: ListModel) {
        self.data = data
    }

    var body: some View {
        let elements = data.items

        return LazyVStack(spacing: 10, pinnedViews: [.sectionHeaders]) {
            Section() {

                ForEach(elements) { element in
                    switch element.routeTo {

                    case .paper(let model):
                        NavigationLink(destination: PaperView(data: model)) {
                            listElement(element)
                        }.foregroundColor(element.textColor)


                    case .cards(let model):
                        NavigationLink(destination: CardGalleryView(data: model)) {
                            listElement(element)
                        }.foregroundColor(element.textColor)

                    case .phrase(let model):
                        NavigationLink(destination: PhraseView(data: model)) {
                            listElement(element)
                        }.foregroundColor(element.textColor)

                    case .article(let model):
                        NavigationLink(destination: ArticleView(data: model)) {
                            listElement(element)
                        }.foregroundColor(element.textColor)

                    case .primary(let model):
                        NavigationLink(destination: PrimaryView(data: model)) {
                            listElement(element)
                        }.foregroundColor(element.textColor)

                    case _:
                        VStack{
                            listElement(element)
                        }.foregroundColor(element.textColor)
                    }
                }
            }
        }
    }

    private func listElement(_ element: ListItemModel) -> some View {
        let elementBackgroundColor = LinearGradient(
            gradient: Gradient(
                colors: [
                    element.backgroundColor,
                    element.backgroundGradientColor ?? element.backgroundColor
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )

        return HStack {
            Spacer()
            Text(element.text)
                .font(.system(size: 20))
                .fontWeight(.bold)
            Spacer()

            if let icon = element.icon {
                Image(icon)
                    .resizable()
                    .frame(
                        width: UIScreen.screenWidth * 0.13,
                        height: UIScreen.screenWidth * 0.13
                    )
                Spacer()
            }
        }
        .frame(height: UIScreen.screenHeight * 0.08)
        .padding(.all, 15)
        .background(elementBackgroundColor)
    }
}
