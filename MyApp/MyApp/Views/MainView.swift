//
//  MainView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct MainView: View {
    let columns: [GridItem] = Array(repeating: .init(.flexible()), count: AppConfiguration().data.columnsNumber)
    let data: MainModel

    init() {
        self.data = AppConfiguration().data
    }

    var body: some View {
        NavigationView {
            ScrollView(.vertical) {
                VStack {
                    Spacer(minLength: 10)
                    RemoteImage(url: data.photoURL)
                        .frame(width: UIScreen.screenWidth, height: 150, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                    Spacer(minLength: 20)

                    switch data.layout {
                    case .list(let elements):
                        listView(elements)
                    case .grid(let elements):
                        gridView(elements)
                    }
                }
            }
            .navigationBarTitle(
                Text(data.header),
                displayMode: .large
            )
        }
    }

    private func headerView() -> some View {
        HStack() {
            // Spacer() - display text in the middle
            Text(data.subtitleText)
                .italic()
                .foregroundColor(data.subtitleTextColor)
                .font(.title2)
            Spacer()
        }.padding(.all, 10).background(Color.white)
    }

    private func listView(_ elements: [ListItemModel]) -> some View {
        LazyVStack(spacing: 3, pinnedViews: [.sectionHeaders]) {
            Section(header: headerView()) {

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

    private func gridView(_ elements: [GridItemModel]) -> some View {
        LazyVGrid(columns: columns, spacing: 5, pinnedViews: [.sectionHeaders]) {
            Section(header: headerView()) {

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
            .frame(width: 205, height: 205, alignment: .center)
            .background(element.backgroundColor)
            .cornerRadius(element.cornerRadius)
            .multilineTextAlignment(.center)
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView()
    }
}

// DEBUG:

extension View {
    func Print(_ vars: Any...) -> some View {
        for v in vars { print(v) }
        return EmptyView()
    }
}
