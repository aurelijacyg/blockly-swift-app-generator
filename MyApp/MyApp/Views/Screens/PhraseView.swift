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
    let screenBackground = ScreenBackground()

    @State
    var uiTabBarController: UITabBarController?

    init(data: PhraseModel) {
        self.data = data
    }

    var body: some View {
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
        .background(screenBackground.background(
                        color: data.backgroundColor.color,
                        gradientColor: data.backgroundColor.gradientColor,
                        photoURL: data.backgroundColor.photoURL))
        .ignoresSafeArea()
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = data.isTabBarHidden
            uiTabBarController = UITabBarController
        }.onDisappear{
            uiTabBarController?.tabBar.isHidden = false
        }
    }
}
