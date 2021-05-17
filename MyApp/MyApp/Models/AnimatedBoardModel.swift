//
//  AnimatedBoardModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct AnimatedBoardModel {
    var backgroundColor: Color?
    var backgroundGradientColor: Color?
    var backgroundPhotoURL: String?
    var items: [AnimatedBoardItemModel]
}

struct AnimatedBoardItemModel : Identifiable {
    var id = UUID()
    var title: String
    var backgroundColor: Color
    var backgroundGradientColor: Color?
    var textColor: Color

    var size: CGFloat
    var xPosition: Int
    var yPosition: Int

    var risingComponent: Component?
}
