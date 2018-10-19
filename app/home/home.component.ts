import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import * as platformModule from "tns-core-modules/platform";

import { RouterExtensions } from "nativescript-angular/router";

import { GridLayout } from "ui/layouts/grid-layout";

import { EventData } from "tns-core-modules/ui/page/page";

import { Image } from "tns-core-modules/ui/image/image";

const orientation = require("nativescript-orientation");

@Component({
  moduleId: module.id,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("gridLayout") gridLayout: ElementRef;
  @ViewChild("alphabet") alphabetRef: ElementRef;
  @ViewChild("number") numberRef: ElementRef;
  @ViewChild("symbol") symbolRef: ElementRef;
  alphabet: Image;
  number: Image;
  symbol: Image;
  router;
  stackBtn;

  constructor(private routerExtensions: RouterExtensions) { }

  startGeo($event: EventData) {

    this.alphabet.className = "mode animate_big";

    setTimeout(() => {
      this.alphabet.className = "mode";
      this.routerExtensions.navigate(["/play", false, "geo"], {
        clearHistory: false,
        transition: {
          name: "fade",
          duration: 900,
          curve: "easeOut"
        }
      });
    }, 1000);

  }

  startGeneral($event: EventData) {

    this.number.className = "mode animate_big";

    setTimeout(() => {
      this.number.className = "mode";
      this.routerExtensions.navigate(["/play", false, "general"], {
        clearHistory: false,
        transition: {
          name: "fade",
          duration: 900,
          curve: "easeOut"
        }
      });
    }, 1000);

  }

  startScience($event: EventData) {

    this.symbol.className = "mode animate_big";

    setTimeout(() => {
      this.number.className = "mode";
      this.routerExtensions.navigate(["/play", false, "science"], {
        clearHistory: false,
        transition: {
          name: "fade",
          duration: 900,
          curve: "easeOut"
        }
      });
    }, 1000);

  }

  // Change Buttons Layout if orientation Changed
  orientationChangedCallback(args) {
    if (args.landscape) {
      // Do something landscap-y
      return;
    }

    // Do something portrait-y
    // Assume this includes updating boundProperty on this module's scope


  }

  ngOnInit() {
    const _deviceType = platformModule.device.deviceType;
    const _gridLayout = <GridLayout>this.gridLayout.nativeElement;
    _gridLayout.className = _deviceType.toLowerCase();

    this.alphabet = <Image>this.alphabetRef.nativeElement;
    this.number = <Image>this.numberRef.nativeElement;
    this.symbol = <Image>this.symbolRef.nativeElement;

    orientation.addOrientationApplier(this.orientationChangedCallback.bind(this));
    orientation.setOrientation("portrait");
    orientation.disableRotation();

  }

}
