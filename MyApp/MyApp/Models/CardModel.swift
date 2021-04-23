//
//  CardModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CardModel : Identifiable {
    var id: Int
    var imageURL: String
    var category: String
    var heading: String
    var infoText: String
}
