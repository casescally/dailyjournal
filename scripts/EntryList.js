import { savedEntries, getEntries } from "./JournalDataProvider.js"
import JournalComponent from "./JournalComponent.js"

const EntryList = () => {
  const journalHTMl = document.querySelector("#journal")
  const eventHub = document.querySelector("#container")

//submit a new journal entry
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
      const newEntry = {
        date: document.querySelector("#journal-date").value,
        concepts: document.querySelector("#concepts-covered").value,
        textArea: document.querySelector("#journal-entry").value,
        mood: document.querySelector("#mood").value
      }
      savedEntries(newEntry).then(getEntries)
    }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showEntries") {
      const customEventListener = new CustomEvent("showButtonClicked")
      eventHub.dispatchEvent(customEventListener)
    }
  })

  journalHTMl.innerHTML = `<section>${JournalComponent()}</section>`
}

export default EntryList
