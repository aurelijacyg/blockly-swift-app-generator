//
//  ArticleView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//


import SwiftUI
import Introspect

struct ArticleView: View {
    let data: ArticleModel

    @State
    var uiTabarController: UITabBarController?

    init(data: ArticleModel) {
        self.data = data
    }

    var body: some View {
        VStack {
            ScrollView(.vertical) {
                VStack(spacing:15) {
                    VStack(alignment: .leading, spacing: 15) {
                        Text(data.title)
                            .font(.title)
                            .fontWeight(.black)
                            .foregroundColor(data.titlesColor)
                            .lineLimit(3)
                            .multilineTextAlignment(.leading)

                        Text(data.subtitle)
                            .font(.subheadline)
                            .foregroundColor(data.titlesColor)
                            .lineLimit(3)
                            .multilineTextAlignment(.leading)

                        HStack(alignment: .center) {
                            Text(data.body)
                                .font(.body)
                                .lineSpacing(7)
                                .foregroundColor(data.bodyColor)
                                .multilineTextAlignment(.leading)
                        }
                    }.padding(9)
                }
            }

            if let photoURL = data.photoURL {
                RemoteImageCropped(url: photoURL)
                    .frame(width: .infinity, height: UIScreen.screenWidth * 0.5)
            }
        }
        .ignoresSafeArea(edges: .bottom)
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = data.isTabBarHidden
            uiTabarController = UITabBarController
        }.onDisappear{
            uiTabarController?.tabBar.isHidden = false
        }
    }
}
