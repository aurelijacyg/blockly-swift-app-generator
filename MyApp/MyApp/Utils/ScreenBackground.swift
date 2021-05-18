//
//  ScreenBackground.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ScreenBackground {
    func background(color: Color?, gradientColor: Color?, photoURL: String?) -> some View {
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
