//
//  GridModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct GridModel {
    var columnsNumber: Int
    var items: [GridItemModel]
}

struct GridItemModel : Identifiable {
    var id = UUID()
    var text: String?
    var icon: String?
    var backgroundColor: Color
    var backgroundGradientColor: Color?
    var cornerRadius: CGFloat
    var textColor: Color? = .primary
    var routeTo: Screen?
}
