//
//  BubbleListView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct BubbleListView: View {
    let data: BubbleListModel


    init(data: BubbleListModel) {
        self.data = data
    }

    var body: some View {
        let elements = data.items

        return LazyVStack(
            spacing: UIScreen.screenHeight * 0.02,
            pinnedViews: [.sectionHeaders]
        ) {
            Section() {
                ForEach(elements){ element in
                    switch element.routeTo {

                    case .paper(let paperView):
                        NavigationLink(destination: paperView){
                            bubbleListElement(element, isItemBig: data.isItemsBig)
                        }.foregroundColor(element.titleColor)


                    case .cards(let cardGalleryView):
                        NavigationLink(destination: cardGalleryView){
                            bubbleListElement(element, isItemBig: data.isItemsBig)
                        }.foregroundColor(element.titleColor)

                    case .phrase(let phraseView):
                        NavigationLink(destination: phraseView){
                            bubbleListElement(element, isItemBig: data.isItemsBig)
                        }.foregroundColor(element.titleColor)

                    case .article(let articleView):
                        NavigationLink(destination: articleView) {
                            bubbleListElement(element, isItemBig: data.isItemsBig)
                        }.foregroundColor(element.titleColor)

                    case _:
                        VStack{
                            bubbleListElement(element, isItemBig: data.isItemsBig)
                        }.foregroundColor(element.titleColor)
                    }
                }
            }
        }.padding(data.isItemsBig ? UIScreen.screenHeight * 0.02 : UIScreen.screenHeight * 0.075)
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
                .frame(height: isItemBig ? UIScreen.screenHeight * 0.17 : 90)
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
