//
//  FlipCardModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct FlipCardModel : Identifiable {
    var id = UUID()
    var title: String
    var textColor: Color?
    var subtitle: String
    var hiddenText: String
}
