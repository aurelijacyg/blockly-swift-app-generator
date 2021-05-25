//
//  MainView.swift
//  MyApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct MainView: View {
    let data: AppModel
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
            TabView {
                ForEach(data.tabs) {
                    tabItem($0)
                }
            }
        }
    }

    private func regularItem(_ tab: TabModel) -> some View {
        NavigationView {
            modelItem(tab)
                .background(data.screenBackground.getView)
                .edgesIgnoringSafeArea(.bottom)
        }
        .accentColor(buttonsColor)
    }

    private func tabItem(_ tab: TabModel) -> some View {
        NavigationView {
            modelItem(tab)
                .background(data.screenBackground.getView)
                .edgesIgnoringSafeArea(.bottom)
        }
        .accentColor(buttonsColor)
        .tabItem { Label(tab.label ?? "", systemImage: tab.systemImage ?? "list.dash") }
    }

    private func modelItem(_ tab: TabModel) -> some View {
        HStack {
            tab.screen.get
                .navigationBarTitle(
                    Text(data.header),
                    displayMode: .large
                )
        }
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
