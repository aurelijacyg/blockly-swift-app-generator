//
//  ListConfigData.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ListConfigData : Identifiable {
    var id: Int
    var text: String
    var backgroundColor: Color
    var textColor: Color
    var icon: String? = ""
    var destination: Destination
}

