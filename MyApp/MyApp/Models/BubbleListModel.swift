//
//  BubbleListModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct BubbleListModel {
    var backgroundColor: Color = .white
    var isItemsBig: Bool
    var items: [BubbleListItemModel]
}

struct BubbleListItemModel : Identifiable {
    var id: Int
    var title: String?
    var subtitle: String?
    var icon: String?
    var backgroundColor: Color = .purple
    var backgroundGradientColor: Color?
    var titleColor: Color? = .white
    var subtitleColor: Color? = .black
    var routeTo: Routing?
}
