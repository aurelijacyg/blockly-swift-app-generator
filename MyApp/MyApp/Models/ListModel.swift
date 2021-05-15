//
//  ListModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ListModel {
    var items: [ListItemModel]
}

struct ListItemModel : Identifiable {
    var id: Int
    var text: String
    var backgroundColor: Color
    var backgroundGradientColor: Color?
    var textColor: Color
    var icon: String? = ""
    var routeTo: Routing?
}
