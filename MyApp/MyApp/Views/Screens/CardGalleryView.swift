//
//  CardGalleryView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI
import Introspect

struct CardGalleryView: View {
    let data: CardGalleryModel

    @State
    var uiTabBarController: UITabBarController?

    init(data: CardGalleryModel) {
        self.data = data
    }

    var body: some View {
        VStack(spacing:25) {
            List(data.cards){ card in
                CardView(
                    card: card,
                    categoryColor: data.categoryColor,
                    headingColor: data.headingColor,
                    labelColor: data.labelColor
                )
            }
        }
        .navigationBarTitle(
            Text(data.navigationBarTitle),
            displayMode: .inline
        )
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = data.isTabBarHidden
            uiTabBarController = UITabBarController
        }.onDisappear{
            uiTabBarController?.tabBar.isHidden = false
        }
    }
}
