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
                    RemoteImage(url: URL).frame(
                        width: UIScreen.screenWidth,
                        height: UIScreen.main.bounds.height * 0.18,
                        alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/
                    )
                    Spacer(minLength: 20)
                }

                switch data.layout {
                case .list(let model):
                    listView(model)
                case .grid(let model):
                    gridView(model)
                case .bubbleList(let model):
                    bubbleListView(model)
                }
            }
        }
        .navigationBarTitle(
            Text(headerTitle),
            displayMode: .large
        )
    }


    private func listView(_ model: ListModel) -> some View {
        let elements = model.items

        return LazyVStack(spacing: 10, pinnedViews: [.sectionHeaders]) {
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

                    case _:
                        VStack{
                            listElement(element)
                        }.foregroundColor(element.textColor)
                    }
                }
            }
        }
    }

    private func listElement(_ element: ListItemModel) -> some View {
        let elementBackgroundColor = LinearGradient(
            gradient: Gradient(
                colors: [
                    element.backgroundColor,
                    element.backgroundGradientColor ?? element.backgroundColor
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )

        return HStack {
            Spacer()
            Text(element.text)
                .font(.system(size: 20))
                .fontWeight(.bold)
            Spacer()

            if let icon = element.icon {
                Image(icon)
                    .resizable()
                    .frame(
                        width: UIScreen.main.bounds.width * 0.13,
                        height: UIScreen.main.bounds.width * 0.13
                    )
                Spacer()
            }
        }.padding(.all, 15).background(elementBackgroundColor)
    }

    private func gridView(_ model: GridModel) -> some View {
        let elements = model.items
        let columns: [GridItem] = Array(repeating: .init(.flexible()), count: model.columnsNumber)
        let frameSize = gridFrameSize(with: model.columnsNumber)

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

                    case _:
                        VStack{
                            gridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)
                    }
                }
            }
        }
    }

    private func gridElement(_ element: GridItemModel, frameSize: CGFloat) -> some View {
        let elementBackgroundColor = LinearGradient(
            gradient: Gradient(
                colors: [
                    element.backgroundColor,
                    element.backgroundGradientColor ?? element.backgroundColor
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )

        if let _ = element.text, let _ = element.icon {
            return AnyView(gridElementWithTextAndIcon(element, frameSize: frameSize, backgroundColor: elementBackgroundColor))
        } else if let _ = element.text {
            return AnyView(gridElementWithText(element, frameSize: frameSize, backgroundColor: elementBackgroundColor))
        } else if let _ = element.icon {
            return AnyView(gridElementWithIcon(element, frameSize: frameSize, backgroundColor: elementBackgroundColor))
        } else {
            return AnyView(emptyGridElement(element, frameSize: frameSize, backgroundColor: elementBackgroundColor))
        }
    }

    private func gridElementWithTextAndIcon(_ element: GridItemModel,
                                            frameSize: CGFloat,
                                            backgroundColor: LinearGradient) -> some View {
        VStack {
            Image(element.icon!)
                .resizable()
                .frame(width: frameSize * 0.6, height: frameSize * 0.6, alignment: .center)
            Text(element.text!).fontWeight(.bold).padding(10)
        }
        .frame(width: frameSize, height: frameSize, alignment: .center)
        .background(backgroundColor)
        .cornerRadius(element.cornerRadius)
    }

    private func gridElementWithText(_ element: GridItemModel,
                                     frameSize: CGFloat,
                                     backgroundColor: LinearGradient) -> some View {
        Text(element.text!)
            .fontWeight(.bold)
            .frame(width: frameSize, height: frameSize, alignment: .center)
            .background(backgroundColor)
            .cornerRadius(element.cornerRadius)
            .multilineTextAlignment(.center)
            .padding(10)
    }

    private func gridElementWithIcon(_ element: GridItemModel,
                                     frameSize: CGFloat,
                                     backgroundColor: LinearGradient) -> some View {
        VStack {
            Image(element.icon!)
                .resizable()
                .frame(width: frameSize * 0.6, height: frameSize * 0.6, alignment: .center)
        }
        .frame(width: frameSize, height: frameSize, alignment: .center)
        .background(backgroundColor)
        .cornerRadius(element.cornerRadius)
    }

    private func emptyGridElement(_ element: GridItemModel,
                                  frameSize: CGFloat,
                                  backgroundColor: LinearGradient) -> some View {
        VStack{}
            .frame(width: frameSize, height: frameSize, alignment: .center)
            .background(backgroundColor)
            .cornerRadius(element.cornerRadius)
    }

    private func gridFrameSize(with columnsNumber: Int) -> CGFloat {
        if columnsNumber == 1 {
            return UIScreen.main.bounds.width * 0.9
        } else if columnsNumber == 2 {
            return UIScreen.main.bounds.width * 0.45
        } else {
            return UIScreen.main.bounds.width * 0.30
        }
    }

    private func bubbleListView(_ model: BubbleListModel) -> some View {
        let elements = model.items

        return LazyVStack(
            spacing: UIScreen.main.bounds.height * 0.02,
            pinnedViews: [.sectionHeaders]
        ) {
            Section() {
                ForEach(elements){ element in
                    switch element.routeTo {

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            bubbleListElement(element, isItemBig: model.isItemsBig)
                        }.foregroundColor(element.titleColor)


                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            bubbleListElement(element, isItemBig: model.isItemsBig)
                        }.foregroundColor(element.titleColor)

                    case _:
                        VStack{
                            bubbleListElement(element, isItemBig: model.isItemsBig)
                        }.foregroundColor(element.titleColor)
                    }
                }
            }
        }
        .padding(model.isItemsBig ? UIScreen.main.bounds.height * 0.02 : UIScreen.main.bounds.height * 0.075)
    }

    private func bubbleListElement(_ element: BubbleListItemModel, isItemBig: Bool) -> some View {
        let elementBackgroundColor = LinearGradient(
            gradient: Gradient(
                colors: [
                    element.backgroundColor,
                    element.backgroundGradientColor ?? element.backgroundColor
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )

        return ZStack(alignment: .leading) {
            Rectangle()
                .blendMode(.overlay)
                .frame(height: isItemBig ? UIScreen.main.bounds.height * 0.17 : 90)
                .background(elementBackgroundColor)
                .cornerRadius(40)

            HStack {
                VStack {
                    Image(element.icon ?? "")
                        .resizable()
                        .scaledToFit()
                        .frame(
                            width: isItemBig ? 140 : 90,
                            height: isItemBig ? 100 : 60
                        )
                }.padding(isItemBig ? 20 : 20)

                VStack(alignment: .trailing, spacing: 10) {
                    Text(element.title ?? "")
                        .font(.system(size: isItemBig ? 30 : 25))
                        .fontWeight(.bold)
                        .foregroundColor(element.titleColor)

                    Text(element.subtitle ?? "")
                        .font(.system(size: isItemBig ? 20 : 17))
                        .fontWeight(.bold)
                        .foregroundColor(element.subtitleColor)
                }.padding(isItemBig ? 40 : 30)
            }
        }
    }
}
