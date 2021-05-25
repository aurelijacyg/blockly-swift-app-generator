//
//  SimpleListModel.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import Foundation
import SwiftUI
import CoreData

struct SimpleListModel {
    var itemsColor: Color?
    var onSwipeDeleteItems: Bool
    var isTabBarHidden: Bool
    var inputField: InputFieldModel?
    var navigationBarTitle: String?
}

class SimpleListItem: NSManagedObject, Identifiable {
    @NSManaged var title: String?
    @NSManaged var createdAt: Date?
}

extension SimpleListItem {
    static func getAllSimpleListItems() -> NSFetchRequest<SimpleListItem> {
        let request: NSFetchRequest<SimpleListItem> = SimpleListItem.fetchRequest() as! NSFetchRequest<SimpleListItem>

        let sort = NSSortDescriptor(key: "createdAt", ascending: true)
        request.sortDescriptors = [sort]

        return request
    }
}
