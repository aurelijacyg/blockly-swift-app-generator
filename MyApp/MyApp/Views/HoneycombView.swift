//
//  HoneycombView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import Foundation
import SwiftUI

struct HoneycombView: View {
    let cols: Int
    let spacing: CGFloat = 10
    let imgsize = CGSize(width: 200, height: 200)
    var hexagonWidth: CGFloat { (imgsize.width / 2) * cos(.pi / 6) * 2 }

    let data: HoneycombModel

    init(data: HoneycombModel) {
        self.data = data
        self.cols = data.columnsNumber
    }

    var body: some View {
        let gridItems = Array(repeating: GridItem(.fixed(hexagonWidth), spacing: spacing), count: cols)

        ScrollView(.vertical) {
            LazyVGrid(columns: gridItems, spacing: spacing) {

                ForEach(Array(data.items.enumerated()), id: \.offset) { index, element in
                    switch element.routeTo {

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            honeycombElement(element, index: index)
                        }

                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            honeycombElement(element, index: index)
                        }

                    case .phrase(let phraseView):
                        NavigationLink(destination: phraseView){
                            honeycombElement(element, index: index)
                        }

                    case _:
                        honeycombElement(element, index: index)
                    }
                }
            }
            .frame(width: (hexagonWidth + spacing) * CGFloat(cols-1))
        }
    }

    private func honeycombElement(_ element: HoneycombItemModel, index: Int) -> some View {
        VStack(spacing: 0) {
            RemoteImage(url: element.imageURL ?? "")
                .frame(width: imgsize.width, height: imgsize.height)
                .clipShape(PolygonShape(sides: 6).rotation(Angle.degrees(90)))
                .offset(x: isEvenRow(index) ? 0 : hexagonWidth / 2 + (spacing/2))
        }
        .frame(width: hexagonWidth, height: imgsize.height * 0.75)
    }

    private func isEvenRow(_ index: Int) -> Bool {
        (index / cols) % 2 == 0
    }
}
