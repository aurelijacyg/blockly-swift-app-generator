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
            RoundedRectangle(cornerRadius: 25, style: .continuous)
                .fill(Color.white.opacity(0.5))
                .shadow(radius: 10)

            VStack(spacing: 15) {
                Text(data.title)
                    .font(.title2)
                    .bold()
                    .foregroundColor(data.titleColor)
                    .lineSpacing(6)
                    .multilineTextAlignment(.center)
            }
            .padding(20)
            .multilineTextAlignment(.center)
        }
    }
}
