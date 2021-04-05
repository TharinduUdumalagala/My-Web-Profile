const bodySkin=document.querySelectorAll(".body-skin"),
    totalBodySkin=bodySkin.length;
for (let i=0; i<totalBodySkin; i++){
   bodySkin[i].addEventListener("change", function (){
      if (this.value === "dark"){
         document.body.className="dark";
      }
      else {
         document.body.className="light";
      }
   })
}

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
   document.querySelector(".style-switcher").classList.toggle("open");
});


const  nav = document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;

for (let i=0; i<totalNavList; i++){

   const a= navList[i].querySelector("a");
   a.addEventListener("click", function (){

      for (i=0; i<totalSection; i++){
         allSection[i].classList.remove("back-section");
      }

      for (let j=0; j<totalNavList; j++){

         if (navList[j].querySelector("a").classList.contains("active")){
            allSection[j].classList.add("back-section");
         }

         navList[j].querySelector("a").classList.remove("active");
      }

      this.classList.add("active");
      showSection(this);

   })
}

function showSection(element){

   for (i=0; i<totalSection; i++){
      allSection[i].classList.remove("active");
   }

   const target=element.getAttribute("href").split("#")[1];

   document.querySelector("#"+target).classList.add("active")
}

const navToggleBtn =document.querySelector(".nav-toggle"),
   aside=document.querySelector(".aside");

   navToggleBtn.addEventListener("click",() =>{
      asideSectionToggleBtn();
})

function asideSectionToggleBtn(){
      aside.classList.toggle("open");
      navToggleBtn.classList.toggle("open");
}