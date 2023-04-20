function main(){
    let source = document.getElementById("other")
    console.log("testing!");
    console.log(source);

    source.addEventListener("click", function (event) {
        let target = event.getElementById("formSubjectElement");
        if (source.checked){
            target.removeAttribute("hidden");
        }
        else {
            target.hidden;
        }
      });

    
}

addEventListener("DOMContentLoaded", main);