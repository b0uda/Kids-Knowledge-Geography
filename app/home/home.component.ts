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
  @ViewChild("general") generalRef: ElementRef;
  @ViewChild("capitals") capitalsRef: ElementRef;
  @ViewChild("earth") earthRef: ElementRef;
  @ViewChild("oceans") oceansRef: ElementRef;
  general: Image;
  capitals: Image;
  earth: Image;
  oceans: Image;
  router;
  stackBtn;

  constructor(private routerExtensions: RouterExtensions) { }

  startCapitals($event: EventData) {

    this.capitals.className = "mode animate_big";

    setTimeout(() => {
      this.capitals.className = "mode";
      this.routerExtensions.navigate(["/play", false, "capitals"], {
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

    this.general.className = "mode animate_big";

    setTimeout(() => {
      this.general.className = "mode";
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

  startEarth($event: EventData) {

    this.earth.className = "mode animate_big";

    setTimeout(() => {
      this.earth.className = "mode";
      this.routerExtensions.navigate(["/play", false, "earth"], {
        clearHistory: false,
        transition: {
          name: "fade",
          duration: 900,
          curve: "easeOut"
        }
      });
    }, 1000);

  }


  startOceans($event: EventData) {

    this.oceans.className = "mode animate_big";

    setTimeout(() => {
      this.oceans.className = "mode";
      this.routerExtensions.navigate(["/play", false, "oceans"], {
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

    this.general = <Image>this.generalRef.nativeElement;
    this.earth = <Image>this.earthRef.nativeElement;
    this.capitals = <Image>this.capitalsRef.nativeElement;
    this.oceans = <Image>this.oceansRef.nativeElement;

    orientation.addOrientationApplier(this.orientationChangedCallback.bind(this));
    orientation.setOrientation("portrait");
    orientation.disableRotation();

  }

}
