const dropAreas = document.querySelectorAll(".slot-drop-area");

dropAreas.forEach(area =>{
      area.addEventListener("dragover", (e)=>{
            e.preventDefault();
            area.style.backgroundColor = "#e0f0ff";
      });

      area.addEventListener("dragleave", ()=>{
            area.style.backgroundColor = "";
      });

      area.addEventListener("drop", (e)=>{
            e.preventDefault();
            area.style.backgroundColor = "";

            const dragged = document.querySelector(".dragging");
            if (dragged) {
                  const clone = dragged.cloneNode(true);
                  clone.classList.remove("dragging")
                  clone.draggable = false
                  area.appendChild(clone);
                  dragged.remove();
            }
      })
})


const activities = document.querySelectorAll(".activity");

activities.forEach(activity =>{
      activity.addEventListener("dragstart", ()=>{
            activity.classList.add("dragging");
      });

      activity.addEventListener("dragend", ()=>{
            activity.classList.remove("dragging");
      });
});