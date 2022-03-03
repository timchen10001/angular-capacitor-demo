//
//  EchoPlugin.swift
//  App
//
//  Created by 陳宜庭 on 2022/3/4.
//

import Foundation
import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }
}
