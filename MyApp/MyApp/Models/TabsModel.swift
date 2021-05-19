//
//  TabsModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//


import SwiftUI

struct TabsModel {
    var header: String
    var headerColor: Color
    var navigationBarColor: Color
    var screenBackground: BackgroundModel
    var tabs: [Tab]
}

struct Tab: Identifiable {
    var id = UUID()
    var label: String?
    var systemImage: String?
    var screen: Screen
}
