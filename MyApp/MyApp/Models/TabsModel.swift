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
    var screenBackgroundColor: Color?
    var screenBackgroundGradientColor: Color?
    var screenBackgroundImageUrl: String?
    var tabs: [Tab]
}

struct Tab: Identifiable {
    var id = UUID()
    var label: String?
    var image: String?
    var primaryView: PrimaryViewModel?
}
