//
//  Screen.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

enum Screen {
    case primary(PrimaryViewModel)
    case paper(PaperModel)
    case cards(CardGalleryModel)
    case phrase(PhraseModel)
    case article(ArticleModel)
    case note(NoteModel)
    case simpleList(SimpleListModel)
}

extension Screen {
    var get: some View {
        switch self {
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
