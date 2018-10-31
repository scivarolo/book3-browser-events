const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      const stages = document.querySelectorAll(".stage")

      stages.forEach(stage => {
        // Gain reference of item being dragged
        stage.ondragstart = e => {
          e.dataTransfer.setData("text", e.target.classList)
        }
      })


      const targets = document.querySelectorAll(".target")

      targets.forEach(target => {
        // Dragover not supported by default. Turn that off.
        target.ondragover = e => e.preventDefault()

        target.ondrop = e => {
          // Enabled dropping on targets
          e.preventDefault()

          // Determine what's being dropped
          const data = e.dataTransfer.getData("text")

          // Append card to target component as child
          // Only if it has no children.
          // Also avoid nesting stage inside another stage
          if (e.target.classList.contains("target") && e.target.children.length === 0) {
            e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
          }

        }
      })

      // Allow dragging stages back into the middle section
      const origin = document.querySelector(".origin")

      origin.ondragover = e => e.preventDefault()
      origin.ondrop = e => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text")

        if(e.target.classList.contains("origin")) {
          e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
        } else {
          e.target.parentNode.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
        }
      }

    }
  }
})

DragDropManager.init()