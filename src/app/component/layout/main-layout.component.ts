import { Component, HostListener} from "@angular/core";

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {

  btnActive: boolean = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;
    if (verticalOffset > 20)
      this.btnActive = true
    else
      this.btnActive = false
  }

  // When the user clicks on the button, scroll to the top of the document
  toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
