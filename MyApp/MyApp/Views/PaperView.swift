//
//  PaperView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct PaperView: View {

    var titleText: String
    var bodyText: String
    var titleColor: Color
    var bodyTextColor: Color
    var photo: PhotoModel

    var body: some View {

        ScrollView(.vertical) {
            VStack(spacing:15) {
                if photo.isRounded {
                    RemoteImageCircle(url: photo.URL)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: photo.width, height: photo.height)
                } else {
                    RemoteImage(url: photo.URL)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: photo.width, height: photo.height)
                }

                Text(titleText)
                    .font(.title)
                    .fontWeight(.black)
                    .foregroundColor(titleColor)
                    .lineLimit(3)
                    .multilineTextAlignment(.center)
                HStack(alignment: .center) {
                    Text(bodyText)
                        .font(.body)
                        .lineSpacing(7)
                        .foregroundColor(bodyTextColor)
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
                Text(titleText),
                displayMode: .inline
            )
        }
    }
}

struct PaperView_Previews: PreviewProvider {
    static var previews: some View {
        PaperView(
            titleText: "Title",
            bodyText: "text",
            titleColor:  Color.primary,
            bodyTextColor: Color.secondary,
            photo: PhotoModel.init(
                URL: "www.image",
                width: 250,
                height: 250,
                isRounded: true
            )
        )
    }
}
