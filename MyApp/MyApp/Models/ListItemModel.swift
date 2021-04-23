//
//  ListItemModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ListItemModel : Identifiable {
    var id: Int
    var text: String
    var backgroundColor: Color
    var textColor: Color
    var icon: String? = ""
    var routeTo: Routing
}

