const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

let id=(id)=>document.getElementById(id);

let classes=(classes)=>document.getElementsByClassName(classes);

let docu = id("docu"),
contra = id("contra"),
errorMsg=classes("error"),
successIcon=classes("success-icon"),
failureIcon=classes("failure-icon");

formlogin.addEventListener("submit", (e)=>{
    e.preventDefault();
    let docuValid = engine(docu, 0, "Ingresa un documento valido", /^[0-9]{8,10}$/);
    let contravalid = engine(contra, 1, "Contraseña Incorrecta", /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    if(docuValid && contravalid){
      window.location.href = "../views/index.html"
    }
  });

let engine=(id, serial, message, regex)=>{
    if(id.value.trim()==="" || !regex.test(id.value.trim())){
        errorMsg[serial].innerHTML=message;
        id.style.border="2px solid red"
        id.style.borderRadius="55px";
         id.style.padding = "0 0.7rem"
        id.style.width = "102%"

        //Icons
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
        return false
    }else{
        errorMsg[serial].innerHTML=" ";
        id.style.border="2px solid green";
        id.style.borderRadius="55px";

        //  Icons
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
        return true
    }
}

docu.addEventListener("input", () => {
  engine(docu, 0, "Ingresa un documento válido", /^[0-9]{8,10}$/);
});

contra.addEventListener("input", () => {
  engine(contra, 1, "Contraseña Incorrecta", /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
});
