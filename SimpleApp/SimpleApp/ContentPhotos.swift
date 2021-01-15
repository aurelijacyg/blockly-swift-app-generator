//
//  ContentPhotos.swift
//  SimpleApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct ContentPhotos: View {

    var categoryColor: Color
    var headingColor: Color
    var infoTextColor: Color
    var navigationBarTextTitle: String
    var photosArray: [Photo]


    var body: some View {
        VStack(spacing:25) {
            List(photosArray){ onePhoto in
                CardView(
                    imageURL: onePhoto.imageURL,
                    category: onePhoto.category,
                    heading: onePhoto.heading,
                    infoText: onePhoto.infoText,
                    categoryColor: categoryColor,
                    headingColor: headingColor,
                    infoTextColor: infoTextColor
                )
            }
        }.navigationBarTitle(
            Text(navigationBarTextTitle),
            displayMode: .inline
        )
    }
}

struct ContentPhotos_Previews: PreviewProvider {
    static var previews: some View {
        ContentPhotos(
            categoryColor: Color.secondary,
            headingColor: Color.primary,
            infoTextColor: Color.secondary,
            navigationBarTextTitle: "Photos",
            photosArray: []
        )
    }
}
