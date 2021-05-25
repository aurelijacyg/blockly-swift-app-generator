//
//  CurrentScreen.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct CurrentScreen {
    func get(_ screen: Screen) -> some View {
        switch screen {
        case .primary(let viewModel):
            return AnyView(PrimaryView(data: viewModel))

        case .article(let viewModel):
            return AnyView(ArticleView(data: viewModel))

        case .cards(let viewModel):
            return AnyView(CardGalleryView(data: viewModel))

        case .paper(let viewModel):
            return AnyView(PaperView(data: viewModel))

        case .phrase(let viewModel):
            return AnyView(PhraseView(data: viewModel))

        case .note(let viewModel):
            return AnyView(NoteView(data: viewModel))

        case .simpleList(let viewModel):
            return AnyView(SimpleListView(data: viewModel))
        }
    }
}
