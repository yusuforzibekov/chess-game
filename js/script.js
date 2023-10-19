function func() {
    var objects = document.getElementsByClassName("pieces");
    var previousSelected = null;

    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];

        object.addEventListener("click", function () {
            if (previousSelected) {
                previousSelected.style.border = "";
            }

            this.style.border = "4px solid blue";
            previousSelected = this;
        });
    }
}

function def() {
    var a = document.getElementsByClassName("btn");
    var b = document.getElementsByClassName("pieces");

    // Trigger a click event on each element with the class "btn"
    for (var i = 0; i < a.length; i++) {
        a[i].click();
    }
        
    // Remove the border from elements with the class "pieces"
    for (var i = 0; i < b.length; i++) {
        b[i].style.border = "none";
    }
}

func();
def();