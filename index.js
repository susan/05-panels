
document.addEventListener("DOMContentLoaded", () => {

    const panelTag = document.querySelectorAll(".panel")

    //  function addClass ()  {
    //   this.classList.toggle("open")
    //   this.classList.toggle("open-active")      
    // }
 
    panelTag.forEach(panel => {
      panel.addEventListener("click", () => {
        panel.classList.toggle("open")
       })
    })  
    panelTag.forEach(panel => {
       panel.addEventListener("transitionend", (e) => {
         // console.log("e.propertyName is", e.propertyName)
          if( e.propertyName.includes("flex")) { 
             panel.classList.toggle("open-active")  
          }
        })
     })

   

})