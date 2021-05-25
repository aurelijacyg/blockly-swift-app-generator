//
//  BackgroundModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct BackgroundModel {
    var color: Color?
    var gradientColor: Color?
    var photoURL: String?
}

extension BackgroundModel {
    var getView: some View {
        if let color = color {
            return AnyView(
                LinearGradient(
                    gradient: Gradient(
                        colors: [
                            color,
                            gradientColor ?? color
                        ]
                    ),
                    startPoint: .topTrailing,
                    endPoint: .bottomTrailing
                )
            )
        } else if let photoURL = photoURL {
            return AnyView(
                RemoteImage(url: photoURL, shape: .rectangle)
                    .aspectRatio(contentMode: .fill)
            )
        } else {
            return AnyView(Color.white.opacity(0))
        }
    }
}
