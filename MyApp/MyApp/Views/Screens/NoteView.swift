//
//  NoteView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct NoteView: View {
    let data: NoteModel

    @State private var bouncing = false

    init(data: NoteModel) {
        self.data = data
    }

    var body: some View {
        VStack(alignment: .center) {
            component
        }
        .padding(EdgeInsets(top: 0, leading: 15, bottom: 0, trailing: 15))
        .frame(
            minWidth: 0,
            maxWidth: .infinity,
            minHeight: 0,
            maxHeight: .infinity,
            alignment: .center
        )
        .background(data.backgroundColor.getView)
        .ignoresSafeArea()
    }

    private var component: some View {
        if data.isAnimated {
            return AnyView(data.component.get
                .frame(maxHeight: UIScreen.screenHeight * 0.65, alignment: bouncing ? .bottom : .top)
                .animation(Animation.easeInOut(duration: 14.0).repeatForever(autoreverses: true))
                .onAppear {
                    self.bouncing.toggle()
                }
            )
        } else {
            return AnyView(data.component.get)
        }
    }
}
