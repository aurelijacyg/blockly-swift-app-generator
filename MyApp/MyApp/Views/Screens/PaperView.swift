//
//  PaperView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI
import Introspect

struct PaperView: View {
    let data: PaperModel

    @State
    var uiTabBarController: UITabBarController?

    init(data: PaperModel) {
        self.data = data
    }

    var body: some View {

        ScrollView(.vertical) {
            VStack(spacing:15) {
                RemoteImage(url: data.photo.URL, shape: data.photo.shape)
                    .aspectRatio(contentMode: .fit)
                    .frame(width: data.photo.width, height: data.photo.height)

                Text(data.title)
                    .font(.title)
                    .fontWeight(.black)
                    .foregroundColor(data.titleColor)
                    .lineLimit(3)
                    .multilineTextAlignment(.center)
                HStack(alignment: .center) {
                    Text(data.body)
                        .font(.body)
                        .lineSpacing(7)
                        .foregroundColor(data.bodyColor)
                        .multilineTextAlignment(.center)
                }
            }
            .cornerRadius(10)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(Color(.sRGB, red: 150/255, green: 150/255, blue: 150/255, opacity: 0.1), lineWidth: 1)
            )
            .padding([.top, .horizontal])
            .navigationBarTitle(
                Text(data.title),
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
}
