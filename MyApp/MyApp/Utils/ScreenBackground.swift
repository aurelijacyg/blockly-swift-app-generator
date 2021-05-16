//
//  ScreenBackground.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ScreenBackground {
    func background(color: Color?, gradientColor: Color?, imageURL: String?) -> some View {
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
        } else if let imageURL = imageURL {
            return AnyView(
                RemoteImage(url: imageURL)
                    .aspectRatio(contentMode: .fill)
            )
        } else {
            return AnyView(
                LinearGradient(
                    gradient: Gradient(
                        colors: [
                            Color.white,
                        ]
                    ),
                    startPoint: .topTrailing,
                    endPoint: .bottomTrailing
                )
            )
        }
    }
}
