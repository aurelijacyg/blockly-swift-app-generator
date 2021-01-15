//
//  Photo.swift
//  SimpleApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct Photo : Identifiable {
    var id: Int
    var imageURL: String
    var category: String
    var heading: String
    var infoText: String
}
