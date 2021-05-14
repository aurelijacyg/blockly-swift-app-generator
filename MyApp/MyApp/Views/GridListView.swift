//
//  GridListView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct GridListView: View {
    let data: MainModel

    init() {
        self.data = AppConfiguration().data
    }

    var body: some View {
        ScrollView(.vertical) {
            VStack {
                Spacer(minLength: 10)

                if let URL = data.photoURL {
                    RemoteImage(url: URL).frame(width: UIScreen.screenWidth, height: 150, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                    Spacer(minLength: 20)
                }

                switch data.layout {
                case .list(let elements):
                    listView(elements)
                case .grid(let elements, let columnsNumber):
                    gridView(elements, columnsNumber: columnsNumber)
                }
            }
        }
        .navigationBarTitle(
            Text(data.header),
            displayMode: .large
        )
    }


    private func listView(_ elements: [ListItemModel]) -> some View {
        LazyVStack(spacing: 3, pinnedViews: [.sectionHeaders]) {
            Section() {

                ForEach(elements){ element in
                    switch element.routeTo {

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            listElement(element)
                        }.foregroundColor(element.textColor)


                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            listElement(element)
                        }.foregroundColor(element.textColor)
                    }
                }
            }
        }
    }

    private func listElement(_ element: ListItemModel) -> some View {
        HStack {
            Spacer()
            Text(element.text)
            Image(element.icon ?? "").resizable().frame(width: 30, height: 30)
            Spacer()
        }.padding(.all, 30).background(element.backgroundColor)
    }

    private func gridView(_ elements: [GridItemModel], columnsNumber: Int) -> some View {
        let columns: [GridItem] = Array(repeating: .init(.flexible()), count: columnsNumber)

        return LazyVGrid(columns: columns, spacing: 20, pinnedViews: [.sectionHeaders]) {
            Section() {

                ForEach(elements){ element in
                    switch element.routeTo {

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            gridElement(element)
                        }.foregroundColor(element.textColor)

                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            gridElement(element)
                        }.foregroundColor(element.textColor)
                    }

                }
            }
        }
    }

    private func gridElement(_ element: GridItemModel) -> some View {
        Text(element.text)
            .frame(width: 195, height: 195, alignment: .center)
            .background(element.backgroundColor)
            .cornerRadius(element.cornerRadius)
            .multilineTextAlignment(.center)
    }
}
