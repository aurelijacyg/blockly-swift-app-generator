//
//  PhotoView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct PhotoView: View {
    let photo: PhotoModel


    init(photo: PhotoModel) {
        self.photo = photo
    }

    var body: some View {
        VStack {
            RemoteImage(url: photo.URL)
                .aspectRatio(contentMode: .fill)
        }
        .cornerRadius(10)
        .overlay(
            RoundedRectangle(cornerRadius: 10)
                .stroke(Color(.sRGB, red: 150/255, green: 150/255, blue: 150/255, opacity: 0.1), lineWidth: 1)
        )
        .padding([.top, .horizontal])
        .frame(width: 380, height: 200)
    }
}
