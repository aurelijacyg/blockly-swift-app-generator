//
//  RegularItemsMainView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI
import Introspect

struct PrimaryView: View {
    let data: PrimaryViewModel

    @State
    var uiTabBarController: UITabBarController?

    init(data: PrimaryViewModel) {
        self.data = data
    }

    var body: some View {
        switch data.layout {
        case .animatedBoard(let data):
            VStack {
                AnimatedBoardRisingView(data: data)
            }
        case _:
            scrollView
        }
    }

    private var scrollView: some View {
        ScrollView(.vertical) {
            VStack {
                Spacer(minLength: 10)

                if let URL = data.photoURL {
                    RemoteImage(url: URL, shape: nil).frame(
                        width: UIScreen.screenWidth,
                        height: UIScreen.screenHeight * 0.18,
                        alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/
                    )
                    Spacer(minLength: 20)
                }

                switch data.layout {
                case .list(let data):
                    ListView(data: data)
                case .grid(let data):
                    GridView(data: data)
                case .bubbleList(let data):
                    BubbleListView(data: data)
                case .catalogGrid(let data):
                    CatalogGridView(data: data)
                case .honeycomb(let data):
                    HoneycombView(data: data)
                case _:
                    Text("Failed to load screen")
                }
            }
        }.introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = data.isTabBarHidden
            uiTabBarController = UITabBarController
        }.onDisappear{
            uiTabBarController?.tabBar.isHidden = false
        }
    }
}
