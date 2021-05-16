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
    var uiTabarController: UITabBarController?

    init(data: PaperModel) {
        self.data = data
    }

    var body: some View {

        ScrollView(.vertical) {
            VStack(spacing:15) {
                if data.photo.isRounded {
                    RemoteImageCircle(url: data.photo.URL)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: data.photo.width, height: data.photo.height)
                } else {
                    RemoteImage(url: data.photo.URL)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: data.photo.width, height: data.photo.height)
                }

                Text(data.titleText)
                    .font(.title)
                    .fontWeight(.black)
                    .foregroundColor(data.titleColor)
                    .lineLimit(3)
                    .multilineTextAlignment(.center)
                HStack(alignment: .center) {
                    Text(data.bodyText)
                        .font(.body)
                        .lineSpacing(7)
                        .foregroundColor(data.bodyTextColor)
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
                Text(data.titleText),
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
}
