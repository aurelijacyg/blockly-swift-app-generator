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

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .phrase(let phraseView):
                        NavigationLink(destination: phraseView){
                            catalogGridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .article(let articleView):
                        NavigationLink(destination: articleView) {
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
                    .padding(EdgeInsets(top: 20, leading: 20, bottom: 0, trailing: 20))

                Divider()
                    .frame(width: UIScreen.main.bounds.width * 0.7)
                    .padding(EdgeInsets(top: 5, leading: 20, bottom: 0, trailing: 20))
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
            return UIScreen.main.bounds.width * 0.9
        } else if columnsNumber == 2 {
            return UIScreen.main.bounds.width * 0.45
        } else {
            return UIScreen.main.bounds.width * 0.30
        }
    }
}
