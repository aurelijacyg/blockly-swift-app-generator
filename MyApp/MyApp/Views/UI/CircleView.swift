//
//  CircleView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CircleView: View {
    let data: CircleModel


    init(data: CircleModel) {
        self.data = data
    }

    var body: some View {
        ZStack {
            Circle()
                .fill(backgroundColor(item: data)).opacity(data.backgroundOpacity ?? 0)
                .shadow(radius: 10)


            VStack() {
                if let photo = data.photo {
                    RemoteImage(url: photo.URL, shape: photo.shape)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 300, height: 260)
                }

                Text(data.title)
                    .font(.title)
                    .bold()
                    .foregroundColor(data.titleColor)
                    .multilineTextAlignment(.center)
            }
        }
    }

    func backgroundColor(item: CircleModel) -> LinearGradient {
        LinearGradient(
            gradient: Gradient(
                colors: [
                    item.backgroundColor,
                    item.backgroundGradientColor ?? item.backgroundColor
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )
    }
}
