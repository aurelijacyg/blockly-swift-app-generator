//
//  CatalogGridModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CatalogGridModel {
    var title: String
    var titleColor: Color
    var items: [CatalogGridItemModel]
}

struct CatalogGridItemModel : Identifiable {
    var id = UUID()
    var text: String
    var icon: String
    var backgroundColor: Color
    var backgroundGradientColor: Color?
    var textColor: Color
    var routeTo: Routing?
}
