//
//  ListView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct ListView: View {
    let data: ListModel
    let currentScreen = CurrentScreen()

    init(data: ListModel) {
        self.data = data
    }

    var body: some View {
        let elements = data.items

        return LazyVStack(spacing: 15, pinnedViews: [.sectionHeaders]) {
            Section() {
                ForEach(elements) { element in
                    if let destinationScreen = element.routeTo {
                        NavigationLink(destination: currentScreen.get(destinationScreen)) {
                            listElement(element)
                        }.foregroundColor(element.textColor)
                    } else {
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
                        width: UIScreen.screenWidth * 0.13,
                        height: UIScreen.screenWidth * 0.13
                    )
                Spacer()
            }
        }
        .frame(height: UIScreen.screenHeight * 0.08)
        .padding(.all, 15)
        .background(elementBackgroundColor)
    }
}
