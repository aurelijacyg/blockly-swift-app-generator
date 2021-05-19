//
//  HoneycombModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct HoneycombModel {
    var columnsNumber: Int
    var items: [HoneycombItemModel]
}

struct HoneycombItemModel : Identifiable {
    var id = UUID()
    var photoURL: String?
    var routeTo: Screen?
}
