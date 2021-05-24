//
//  CatalogGridView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CatalogGridView: View {
    let data: CatalogGridModel

    init(data: CatalogGridModel) {
        self.data = data
    }

    var body: some View {
        let elements = data.items
        let columns: [GridItem] = Array(repeating: .init(.flexible()), count: 2)
        let frameSize = gridFrameSize(with: 2)


        let grid = LazyVGrid(columns: columns, spacing: 40, pinnedViews: [.sectionHeaders]) {
            Section() {
                ForEach(elements){ element in
                    switch element.routeTo {

                    case .paper(let model):
                        NavigationLink(destination: PaperView(data: model)){
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .cards(let model):
                        NavigationLink(destination: CardGalleryView(data: model)){
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .phrase(let model):
                        NavigationLink(destination: PhraseView(data: model)){
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .article(let model):
                        NavigationLink(destination: ArticleView(data: model)) {
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .primary(let model):
                        NavigationLink(destination: PrimaryView(data: model)) {
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case _:
                        VStack{
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)
                    }
                }
            }
        }.padding(20)

        return VStack(alignment: .leading, spacing: 10) {
            if let title = data.title {
                Text(title)
                    .font(.system(size: 25))
                    .fontWeight(.bold)
                    .foregroundColor(data.titleColor)
                    .padding(EdgeInsets(top: 20, leading: 0, bottom: 0, trailing: 0))

                Divider()
                    .frame(width: UIScreen.screenWidth * 0.7)
                    .padding(EdgeInsets(top: 5, leading: 0, bottom: 0, trailing: 0))
            }

            grid
        }
        
    }

    private func catalogGridElement(_ element: CatalogGridItemModel, frameSize: CGFloat) -> some View {
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

        let imageStack = VStack {
            Image(element.icon)
                .resizable()
                .frame(width: frameSize * 0.6, height: frameSize * 0.6, alignment: .center)
        }
        .frame(width: frameSize, height: frameSize, alignment: .center)
        .background(elementBackgroundColor)
        .cornerRadius(10.0)

        return VStack(alignment: .center, spacing: 10) {
            imageStack
            Text(element.text).fontWeight(.bold).padding(10).multilineTextAlignment(.center)
        }
    }

    private func gridFrameSize(with columnsNumber: Int) -> CGFloat {
        if columnsNumber == 1 {
            return UIScreen.screenWidth * 0.9
        } else if columnsNumber == 2 {
            return UIScreen.screenWidth * 0.41
        } else {
            return UIScreen.screenWidth * 0.30
        }
    }
}
