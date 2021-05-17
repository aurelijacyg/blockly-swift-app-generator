//
//  CustomShape.swift
//  MyApp
//
//  Created by Aurelija Cygaite
//

import SwiftUI

struct AnyShape: Shape {
    init<S: Shape>(_ wrapped: S) {
        _path = { rect in
            let path = wrapped.path(in: rect)
            return path
        }
    }

    func path(in rect: CGRect) -> Path {
        return _path(rect)
    }

    private let _path: (CGRect) -> Path
}

enum CustomShape {
    case circle
    case rectangle
    case roundedRectangle(CGFloat)
    case ellipse
    case capsule
}
