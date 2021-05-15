//
//  GridItemModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct GridItemModel : Identifiable {
    var id: Int
    var text: String?
    var icon: String?
    var backgroundColor: Color
    var cornerRadius: CGFloat
    var textColor: Color
    var routeTo: Routing
}
