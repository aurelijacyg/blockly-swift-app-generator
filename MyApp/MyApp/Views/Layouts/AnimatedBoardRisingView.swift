//
//  AnimatedBoardRisingView.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct AnimatedBoardRisingView: View {

    let screen = UIScreen.main.bounds
    let itemHeight = 100
    let itemWidth = 150

    let timer = Timer.publish(every: 4.2, on: .main, in: .common).autoconnect()
    @State private var counter = 0
    @State private var activated = 0

    @State var showingView = false
    @State var btFrame: CGRect = .zero

    let totalViews: Int
    let data: AnimatedBoardModel

    init(data: AnimatedBoardModel) {
        self.data = data
        self.totalViews = data.items.count
    }

    var body: some View {
        VStack(spacing: 10) {
            GeometryReader { g in
                ZStack {
                    Rectangle().fill(Color.clear)

                    ForEach(Array(data.items.enumerated()), id: \.offset) { index, item in
                        self.activatingRectangle(
                            frame: CGRect(x: item.xPosition, y: item.yPosition, width: itemWidth, height: itemHeight),
                            viewNumber: index,
                            item: item
                        )
                    }

                    if self.showingView {
                        self.componentView
                            .zIndex(1)
                            .transition(
                                AnyTransition
                                    .scale(scale: 0.12)
                                    .combined(with: AnyTransition.offset(
                                        x: self.btFrame.origin.x - g.size.width/2.0,
                                        y: self.btFrame.origin.y - g.size.height/2.0
                                    ))
                            )
                            .padding(.bottom, 80)
                    }
                }
            }
        }
        .padding(.top, 10)
        .background(data.backgroundColor.getView)
    }

    func activatingRectangle(frame: CGRect,
                             viewNumber: Int,
                             item: AnimatedBoardItemModel) -> some View {

        return VStack {
            Text(item.title)
                .padding()
                .foregroundColor(item.textColor)
                .multilineTextAlignment(.center)
                .frame(width: item.size, height: item.size)
                .onReceive(timer) { _ in
                    if self.activated == viewNumber && self.counter == 2 {
                        self.activated == totalViews-1 ? (self.activated = 0) : (self.activated += 1)
                        self.counter = 0
                    } else if self.activated == viewNumber && self.counter < 2 {
                        withAnimation(Animation.easeInOut(duration: 4.0)) {
                            self.btFrame = frame
                            self.showingView.toggle()
                        }
                        self.counter += 1
                    }
                }
        }
        .background(Circle().fill(backgroundColor(item: item)).shadow(radius: 3))
        .position(frame.origin)
    }

    private var componentView: some View {
        if let risingComponent = data.items[activated].risingComponent {
            return AnyView(risingComponent.get)
        } else {
            return AnyView(bubble)
        }
    }

    var bubble: some View {
        Circle().fill(data.items[activated].backgroundColor.opacity(0.5)).frame(width: 300, height: 300)
    }

    func backgroundColor(item: AnimatedBoardItemModel) -> LinearGradient {
        LinearGradient(
            gradient: Gradient(
                colors: [
                    item.backgroundColor,
                    item.backgroundGradientColor ?? item.backgroundColor
                ]
            ),
            startPoint: .leading,
            endPoint: .trailing
        )
    }
}
