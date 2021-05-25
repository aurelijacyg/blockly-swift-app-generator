//
//  GridView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct GridView: View {
    let data: GridModel
    let currentScreen = CurrentScreen()

    init(data: GridModel) {
        self.data = data
    }

    var body: some View {
        let elements = data.items
        let columns: [GridItem] = Array(repeating: .init(.flexible()), count: data.columnsNumber)
        let frameSize = gridFrameSize(with: data.columnsNumber)

        return LazyVGrid(columns: columns, spacing: 20, pinnedViews: [.sectionHeaders]) {
            Section() {
                ForEach(elements){ element in
                    if let destinationScreen = element.routeTo {
                        NavigationLink(destination: currentScreen.get(destinationScreen)) {
                            gridElement(element, frameSize: frameSize)
                        }.foregroundColor(element.textColor)
                    } else {
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
            return UIScreen.screenWidth * 0.9
        } else if columnsNumber == 2 {
            return UIScreen.screenWidth * 0.45
        } else {
            return UIScreen.screenWidth * 0.30
        }
    }
}
