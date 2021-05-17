//
//  CircleModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CircleModel : Identifiable {
    var id = UUID()
    var title: String
    var photo: PhotoModel?
    var titleColor: Color?
    var backgroundColor: Color
    var backgroundGradientColor: Color?
    var backgroundOpacity: Double?
}
