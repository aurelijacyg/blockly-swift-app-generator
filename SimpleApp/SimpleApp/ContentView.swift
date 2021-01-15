//
//  ContentView.swift
//  SimpleApp
//
//  Created by Aurelija Cygaite 
//

import SwiftUI

struct ContentView: View {
    let columns: [GridItem] = Array(repeating: .init(.flexible()), count: homePage.columnsNumber)

    var body: some View {
        NavigationView {
            ScrollView(.vertical) {
                VStack {
                    Spacer(minLength: 10)
                    RemoteImage(url: homePage.logoURL)
                        .frame(width: UIScreen.screenWidth, height: 150, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                    Spacer(minLength: 20)

                    if homePage.isLayoutList {
                        LazyVStack(spacing: 3, pinnedViews: [.sectionHeaders]) {
                            Section(header: headerView()) {

                                ForEach(listElements){ element in
                                    switch element.destination {

                                    case .content(let contentDest):
                                        NavigationLink(destination: contentDest){
                                            HStack {
                                                Spacer()
                                                Text(element.text)
                                                Image(element.icon ?? "").resizable().frame(width: 30, height: 30)
                                                Spacer()
                                            }.padding(.all, 30).background(element.backgroundColor)
                                     }.foregroundColor(element.textColor)


                                    case .photos(let photosDest):
                                        NavigationLink(destination: photosDest){
                                            HStack {
                                                Spacer()
                                                Text(element.text)
                                                Image(element.icon ?? "").resizable().frame(width: 30, height: 30)
                                                Spacer()
                                            }.padding(.all, 30).background(element.backgroundColor)
                                         }.foregroundColor(element.textColor)
                                    }
                                }
                             }
                        }
                    } else {
                        LazyVGrid(columns: columns, spacing: 5, pinnedViews: [.sectionHeaders]) {
                           Section(header: headerView()) {
                                ForEach(gridElements){ element in
                                    switch element.destination {

                                    case .content(let contentDest):
                                        NavigationLink(destination: contentDest){
                                        Text(element.text)
                                            .frame(width: 205, height: 205, alignment: .center)
                                            .background(element.backgroundColor)
                                            .cornerRadius(element.cornerRadius)
                                            .multilineTextAlignment(.center)
                                     }.foregroundColor(element.textColor)


                                    case .photos(let photosDest):
                                        NavigationLink(destination: photosDest){
                                            Text(element.text)
                                                .frame(width: 205, height: 205, alignment: .center)
                                                .background(element.backgroundColor)
                                                .cornerRadius(element.cornerRadius)
                                                .multilineTextAlignment(.center)
                                         }.foregroundColor(element.textColor)
                                    }

                                }
                            }
                        }
                    }
                }
            }
            .navigationBarTitle(
                Text(homePage.header),
                displayMode: .large
            )
        }
    }

    func headerView() -> some View{
        return HStack() {
            // Spacer() - display text in the middle
            Text(homePage.subtitleText)
                .italic()
                .foregroundColor(homePage.subtitleTextColor)
                .font(.title2)
            Spacer()
        }.padding(.all, 10).background(Color.white)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

// DEBUG:

extension View {
    func Print(_ vars: Any...) -> some View {
        for v in vars { print(v) }
        return EmptyView()
    }
}
