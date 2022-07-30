import { Component } from "@angular/core";

@Component({
    selector: "app-binding",
    templateUrl: "./binding.component.html",
    styleUrls: ["./binding.component.css"]
})
export class BindingComponent {
    user = {
        name: "Doe",
        firstName: "John",
        age: 25,
        quote: "",
        photo: "https://randomuser.me/api/portraits/lego/1.jpg"
    };
    isShow = true;

    showAge() {
        this.isShow = !this.isShow;
    }
}
