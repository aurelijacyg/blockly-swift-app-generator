//
//  PhraseView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI
import Introspect

struct PhraseView: View {

    let data: PhraseModel

    @State
    var uiTabarController: UITabBarController?

    init(data: PhraseModel) {
        self.data = data
    }

    var body: some View {
        let backgroundColor = LinearGradient(
            gradient: Gradient(
                colors: [
                    data.backgroundColor,
                    data.backgroundGradientColor ?? data.backgroundColor
                ]
            ),
            startPoint: .topTrailing,
            endPoint: .bottomTrailing
        )

        VStack(alignment: .leading) {
            Text(data.title)
                .font(.custom(data.typeface, size: 30, relativeTo: .title))
                .foregroundColor(data.textColor)

            Text("").font(.system(size: 100))
            Text(data.label)
                .font(.custom(data.typeface, size: 20, relativeTo: .footnote))
                .foregroundColor(data.textColor)
        }
        .padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
        .lineSpacing(5)
        .frame(
            minWidth: 0,
            maxWidth: .infinity,
            minHeight: 0,
            maxHeight: .infinity,
            alignment: .leading
        )
        .background(backgroundColor)
        .ignoresSafeArea()
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = true
            uiTabarController = UITabBarController
        }.onDisappear{
            uiTabarController?.tabBar.isHidden = false
        }
    }
}
