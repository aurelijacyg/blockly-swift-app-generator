//
//  RegularItemsMainView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct PrimaryView: View {
    let data: PrimaryViewModel
    let headerTitle: String

    init(headerTitle: String, data: PrimaryViewModel) {
        self.headerTitle = headerTitle
        self.data = data
    }

    var body: some View {
        ScrollView(.vertical) {
            VStack {
                Spacer(minLength: 10)

                if let URL = data.photoURL {
                    RemoteImage(url: URL).frame(
                        width: UIScreen.screenWidth,
                        height: UIScreen.main.bounds.height * 0.18,
                        alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/
                    )
                    Spacer(minLength: 20)
                }

                switch data.layout {
                case .list(let data):
                    ListView(data: data)
                case .grid(let data):
                    GridView(data: data)
                case .bubbleList(let data):
                    BubbleListView(data: data)
                case .catalogGrid(let data):
                    CatalogGridView(data: data)
                case .honeycomb(let data):
                    HoneycombView(data: data)
                }
            }
        }
        .navigationBarTitle(
            Text(headerTitle),
            displayMode: .large
        )
    }
}
