//
//  SimpleListView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI
import Introspect

struct SimpleListView: View {
    @Environment(\.managedObjectContext) var context
    
    @FetchRequest(fetchRequest: SimpleListItem.getAllSimpleListItems())
        var items: FetchedResults<SimpleListItem>

    @State
    var uiTabBarController: UITabBarController?
    @State
    var inputText: String = ""

    var data: SimpleListModel

    init(data: SimpleListModel) {
        self.data = data
    }

    var body: some View {
        VStack() {
            List {
                if let inputFieldData = data.inputField {
                    Section(header: Text(inputFieldData.header)) {
                        HStack {
                            TextField(inputFieldData.title, text: $inputText).colorMultiply(.secondary)

                            Button(
                                action: {
                                    addRow()
                                },
                                label: {
                                    Text("Save")
                                }
                            )
                        }
                    }
                }

                ForEach(items, id: \.self) { item in
                    Text(item.title ?? "")
                        .foregroundColor(data.itemsColor ?? Color.primary)
                        .multilineTextAlignment(.center)
                }
                .onDelete(perform: self.deleteRow)
                // .onDelete(perform: data.onSwipeDeleteItems ? self.deleteRow : nil)
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

    private func addRow() {
        if !inputText.isEmpty {

            let newItem = SimpleListItem(context: context)
            newItem.title = inputText
            newItem.createdAt = Date()

            do {
                try context.save()
            }
            catch {
                print(error)
            }

            inputText = ""
        }
    }

    private func deleteRow(at indexSet: IndexSet) {
        guard let index = indexSet.first else {
            return
        }

        let itemToDelete = items[index]
        context.delete(itemToDelete)

        do {
            try context.save()
        }
        catch {
            print(error)
        }
    }
}
