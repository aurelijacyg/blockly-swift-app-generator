//
//  SimpleListView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI
import Introspect

struct SimpleListView: View {
    @Environment(\.managedObjectContext)

    @State
    var data: SimpleListModel
    @State
    var uiTabBarController: UITabBarController?
    @State
    var inputText: String = ""
    let currentScreen = CurrentScreen()

    init(data: SimpleListModel) {
        self.data = data
    }

    var body: some View {
        VStack() {
            List {
                if let inputFieldData = data.inputField {
                    Section(header: Text(inputFieldData.header)) {
                        HStack {
                            TextField(inputFieldData.title, text: $inputText)

                            Button(
                                action: {},
                                label: {
                                    Text("Save")
                                }
                            )
                        }
                    }
                }

                ForEach(data.items, id: \.self) { item in
                    Text(item.title ?? "")
                        .foregroundColor(data.itemsColor ?? Color.primary)
                        .multilineTextAlignment(.center)
                }
                .onDelete(perform: data.onSwipeDeleteItems ? self.deleteRow : nil)
            }
        }
        .padding(EdgeInsets(top: 0, leading: -15, bottom: 0, trailing: -15))
        .introspectTabBarController { (UITabBarController) in
            UITabBarController.tabBar.isHidden = data.isTabBarHidden
            uiTabBarController = UITabBarController
        }.onDisappear {
            uiTabBarController?.tabBar.isHidden = false
        }
    }

    private func deleteRow(at indexSet: IndexSet) {
        self.data.items.remove(atOffsets: indexSet)
    }
}
