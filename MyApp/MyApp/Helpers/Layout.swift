//
//  Layout.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

enum Layout {
    case list(ListModel)
    case grid(GridModel)
    case bubbleList(BubbleListModel)
    case catalogGrid(CatalogGridModel)
    case honeycomb(HoneycombModel)
    case animatedBoard(AnimatedBoardModel)
}

extension Layout {
    var get: some View {
        switch self {
        case .list(let data):
            return AnyView(ListView(data: data))
        case .grid(let data):
            return AnyView(GridView(data: data))
        case .bubbleList(let data):
            return AnyView(BubbleListView(data: data))
        case .catalogGrid(let data):
            return AnyView(CatalogGridView(data: data))
        case .honeycomb(let data):
            return AnyView(HoneycombView(data: data))
        case _:
            return AnyView(Text("Failed to load screen"))
        }
    }
}
