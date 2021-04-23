//
//  Card.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct Card: View {
    var photoURL: String
    var category: String
    var heading: String
    var infoText: String
    var categoryColor: Color
    var headingColor: Color
    var infoTextColor: Color

    var body: some View {
        VStack {
            RemoteImage(url: photoURL)
                .aspectRatio(contentMode: .fit)

            HStack {
                VStack(alignment: .leading) {
                    Text(category)
                        .font(.headline)
                        .foregroundColor(categoryColor)
                    Text(heading)
                        .font(.title)
                        .fontWeight(.black)
                        .foregroundColor(headingColor)
                        .lineLimit(3)
                    Text(infoText.uppercased())
                        .font(.caption)
                        .foregroundColor(infoTextColor)
                }
                .layoutPriority(100)

                Spacer()
            }
            .padding()
        }
        .cornerRadius(10)
        .overlay(
            RoundedRectangle(cornerRadius: 10)
                .stroke(Color(.sRGB, red: 150/255, green: 150/255, blue: 150/255, opacity: 0.1), lineWidth: 1)
        )
        .padding([.top, .horizontal])
    }
}

struct Card_Previews: PreviewProvider {
    static var previews: some View {
        Card(
            photoURL: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Canada-Mountains.jpg",
            category: "SwiftUI",
            heading: "Drawing a Border with Rounded Corners",
            infoText: "AC",
            categoryColor: Color.secondary,
            headingColor: Color.primary,
            infoTextColor: Color.secondary
        )
    }
}
