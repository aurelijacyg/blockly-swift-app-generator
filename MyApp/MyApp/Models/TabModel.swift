//
//  TabModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct TabModel: Identifiable {
    var id = UUID()
    var label: String?
    var systemImage: String?
    var screen: Screen
}
