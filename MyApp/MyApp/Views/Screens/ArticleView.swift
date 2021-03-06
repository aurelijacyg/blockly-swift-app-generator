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
    var uiTabBarController: UITabBarController?

    init(data: ArticleModel) {
        self.data = data
    }

    var body: some View {
        VStack {
            ScrollView(.vertical) {
                VStack(spacing:15) {
                    VStack(alignment: .leading, spacing: 20) {
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
                    }.padding(20)
                }
            }

            if let photoURL = data.photoURL {
                RemoteImageCropped(url: photoURL)
                    .frame(width: UIScreen.screenWidth, height: UIScreen.screenWidth * 0.5)
            }
        }
        .ignoresSafeArea(edges: data.isTabBarHidden ? .bottom : .horizontal)
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = data.isTabBarHidden
            uiTabBarController = UITabBarController
        }.onDisappear{
            uiTabBarController?.tabBar.isHidden = false
        }
    }
}
