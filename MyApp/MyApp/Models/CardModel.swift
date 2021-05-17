//
//  CardModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CardModel : Identifiable {
    var id = UUID()
    var photoURL: String
    var category: String
    var heading: String
    var label: String
}
