//
//  ContentDetail.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ContentDetail: View {

    var titleText: String
    var bodyText: String
    var titleColor: Color
    var bodyTextColor: Color
    var image: ImageData

    var body: some View {

        ScrollView(.vertical) {
            VStack(spacing:25) {
                if image.isRounded {
                    RemoteImageCircle(url: image.URL)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: image.width, height: image.height)
                } else {
                    RemoteImage(url: image.URL)
                        .aspectRatio(contentMode: .fit)
                        .frame(width: image.width, height: image.height)
                }

                Text(titleText)
                    .font(.title)
                    .fontWeight(.black)
                    .foregroundColor(titleColor)
                    .lineLimit(3)
                HStack {
                    Spacer()
                    Text(bodyText)
                        .font(.footnote)
                        .foregroundColor(bodyTextColor)
                    Spacer()
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

struct ContentDetail_Previews: PreviewProvider {
    static var previews: some View {
        ContentDetail(
            titleText: "Title",
            bodyText: "text",
            titleColor:  Color.primary,
            bodyTextColor: Color.secondary,
            image: ImageData.init(
                URL: "www.image",
                width: 250,
                height: 250,
                isRounded: true
            )
        )
    }
}
