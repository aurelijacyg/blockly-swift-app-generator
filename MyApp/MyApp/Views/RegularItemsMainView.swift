//
//  RegularItemsMainView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct RegularItemsMainView: View {
    let data: RegularItemsModel
    let headerTitle: String

    init(headerTitle: String, data: RegularItemsModel) {
        self.headerTitle = headerTitle
        self.data = data
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
            Text(headerTitle),
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
        let frameSize = gridFrameSize(with: columnsNumber)

        return LazyVGrid(columns: columns, spacing: 20, pinnedViews: [.sectionHeaders]) {
            Section() {

                ForEach(elements){ element in
                    switch element.routeTo {

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            gridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)

                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            gridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)
                    }

                }
            }
        }
    }

    private func gridElement(_ element: GridItemModel, frameSize: CGFloat) -> some View {
        if let _ = element.text, let _ = element.icon {
            return AnyView(gridElementWithTextAndIcon(element, frameSize: frameSize))
        } else if let _ = element.text {
            return AnyView(gridElementWithText(element, frameSize: frameSize))
        } else if let _ = element.icon {
            return AnyView(gridElementWithIcon(element, frameSize: frameSize))
        } else {
            return AnyView(emptyGridElement(element, frameSize: frameSize))
        }
    }

    private func gridElementWithTextAndIcon(_ element: GridItemModel, frameSize: CGFloat) -> some View {
        VStack {
            Image(element.icon!)
                .resizable()
                .frame(width: frameSize * 0.6, height: frameSize * 0.6, alignment: .center)
            Text(element.text!)
        }
        .frame(width: frameSize, height: frameSize, alignment: .center)
        .background(element.backgroundColor)
        .cornerRadius(element.cornerRadius)
    }

    private func gridElementWithText(_ element: GridItemModel, frameSize: CGFloat) -> some View {
        Text(element.text!)
            .frame(width: frameSize, height: frameSize, alignment: .center)
            .background(element.backgroundColor)
            .cornerRadius(element.cornerRadius)
            .multilineTextAlignment(.center)
    }

    private func gridElementWithIcon(_ element: GridItemModel, frameSize: CGFloat) -> some View {
        VStack {
            Image(element.icon!)
                .resizable()
                .frame(width: frameSize * 0.6, height: frameSize * 0.6, alignment: .center)
        }
        .frame(width: frameSize, height: frameSize, alignment: .center)
        .background(element.backgroundColor)
        .cornerRadius(element.cornerRadius)
    }

    private func emptyGridElement(_ element: GridItemModel, frameSize: CGFloat) -> some View {
        VStack{}
            .frame(width: frameSize, height: frameSize, alignment: .center)
            .background(element.backgroundColor)
            .cornerRadius(element.cornerRadius)
    }

    private func gridFrameSize(with columnsNumber: Int) -> CGFloat {
        if columnsNumber == 1 {
            return 400
        } else if columnsNumber == 2 {
            return 195
        } else {
            return 130
        }
    }
}
