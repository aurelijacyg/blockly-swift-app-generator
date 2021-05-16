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
    let buttonsColor: Color

    init() {
        self.data = AppConfiguration().data
        coloredNavAppearance.configureWithOpaqueBackground()
        coloredNavAppearance.backgroundColor = UIColor(data.navigationBarColor)
        coloredNavAppearance.titleTextAttributes = [.foregroundColor: UIColor(data.headerColor)]
        coloredNavAppearance.largeTitleTextAttributes = [.foregroundColor: UIColor(data.headerColor)]
        buttonsColor = data.headerColor

        UINavigationBar.appearance().standardAppearance = coloredNavAppearance
        UINavigationBar.appearance().scrollEdgeAppearance = coloredNavAppearance
    }

    var body: some View {
        if data.tabs.count == 1 {
            regularItem(data.tabs.first!)
        } else {
            ZStack {
                TabView {
                    ForEach(data.tabs) {
                        tabItem($0)
                    }
                }
            }
        }
    }

    private func regularItem(_ tab: Tab) -> some View {
        NavigationView {
            modelItem(tab)
                .background(screenBackgroundColor)
                .edgesIgnoringSafeArea(.bottom)
        }
        .accentColor(buttonsColor)
    }

    private func tabItem(_ tab: Tab) -> some View {
        NavigationView {
            modelItem(tab)
                .background(screenBackgroundColor)
                .edgesIgnoringSafeArea(.bottom)
        }
        .accentColor(buttonsColor)
        .tabItem { Label(tab.label ?? "", systemImage: tab.image ?? "list.dash") }
    }

    private func modelItem(_ tab: Tab) -> some View {
        var tabStack: HStack<PrimaryView>?

        if let primaryViewModel = tab.primaryView {
            tabStack = HStack {
                PrimaryView(
                    headerTitle: data.header,
                    data: primaryViewModel
                )
            }
        }

        return tabStack
    }

    private var screenBackgroundColor: LinearGradient {
        LinearGradient(
            gradient: Gradient(
                colors: [
                    data.screenBackgroundColor,
                    data.screenBackgroundGradientColor ?? data.screenBackgroundColor
                ]
            ),
            startPoint: .topTrailing,
            endPoint: .bottomTrailing
        )
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
