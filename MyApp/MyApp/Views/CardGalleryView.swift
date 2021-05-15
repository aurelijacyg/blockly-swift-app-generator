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
    var uiTabarController: UITabBarController?

    init(data: CardGalleryModel) {
        self.data = data
    }

    var body: some View {
        VStack(spacing:25) {
            List(data.cards){ card in
                Card(
                    photoURL: card.imageURL,
                    category: card.category,
                    heading: card.heading,
                    label: card.label,
                    categoryColor: data.categoryColor,
                    headingColor: data.headingColor,
                    labelColor: data.labelColor
                )
            }
        }
        .navigationBarTitle(
            Text(data.navigationBarTextTitle),
            displayMode: .inline
        )
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = true
            uiTabarController = UITabBarController
        }.onDisappear{
            uiTabarController?.tabBar.isHidden = false
        }
    }
}
