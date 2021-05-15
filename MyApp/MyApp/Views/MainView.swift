//
//  MainView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct MainView: View {
    let data: TabsModel
    let coloredNavAppearance = UINavigationBarAppearance()
    let backButtonColor: Color

    init() {
        self.data = AppConfiguration().data
        coloredNavAppearance.configureWithOpaqueBackground()
        coloredNavAppearance.backgroundColor = UIColor(data.navigationBarColor)
        coloredNavAppearance.titleTextAttributes = [.foregroundColor: UIColor(data.headerColor)]
        coloredNavAppearance.largeTitleTextAttributes = [.foregroundColor: UIColor(data.headerColor)]
        backButtonColor = data.headerColor

        UINavigationBar.appearance().standardAppearance = coloredNavAppearance
        UINavigationBar.appearance().scrollEdgeAppearance = coloredNavAppearance
    }

    var body: some View {
        TabView {
            tabItem
            tabItem
        }
    }

    private var tabItem: some View {
        let backgroundColor = LinearGradient(
            gradient: Gradient(
                colors: [
                    data.screenBackgroundColor,
                    data.screenBackgroundGradientColor ?? data.screenBackgroundColor
                ]
            ),
            startPoint: .topTrailing,
            endPoint: .bottomTrailing
        )

        return NavigationView {
            HStack {
                RegularItemsMainView(
                    headerTitle: data.header,
                    data: data.regularItemsMainViewData!
                )
            }.background(backgroundColor)
        }
        .accentColor(backButtonColor)
        .tabItem { Label("Menu", systemImage: "list.dash") }
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
