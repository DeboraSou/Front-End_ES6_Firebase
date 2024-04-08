export class GuiController {

    #btnToggle;
    #drawerMenu;

    constructor() {

        this.#btnToggle = document.getElementById("btnToggle");
        this.#drawerMenu = document.getElementById("drawerMenu");

        this.#btnToggle.addEventListener(
            "click",
            () => {

                // console.log("O botão foi clicado!");
                // this.#drawerMenu = document.getElementById("drawerMenu");
                console.log(document.getElementById("drawerMenu").style.display);

                if (document.getElementById("drawerMenu").style.display == "") {
                    document.getElementById("drawerMenu").style.display = "block";
                    return;
                }

                if (document.getElementById("drawerMenu").style.display == "none") {
                    document.getElementById("drawerMenu").style.display = "block";
                } else {
                    document.getElementById("drawerMenu").style.display = "none";
                }
            }
        );

    }

}