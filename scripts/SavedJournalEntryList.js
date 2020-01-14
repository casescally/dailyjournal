import { useSavedJournalEntries, getEntries, deleteEntries } from "./JournalDataProvider.js"
import SavedJournalEntry from "./SavedJournalEntry.js"

const eventHub = document.querySelector("#container")
const entrySection = document.querySelector("#entrySection")

//Show button clicked
const SavedEntryList = () => {
  eventHub.addEventListener("showButtonClicked", () => {
    getEntries().then(() => {
      const shownEntries = useSavedJournalEntries()
      renderData(shownEntries)
    })
  })
}

// //Show button clicked
// const SavedEntryList = () => {
//   const allJournals = useSavedJournalEntries()
//   renderData(allJournals)
//     }

//Delete entry button clicked
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteButton")) {
    const [prefix, id] = clickEvent.target.id.split("--")
    deleteEntries(id).then(() => {
      const newEntry = useSavedJournalEntries()
      renderData(newEntry)
    })
  }
})

//Render entries
const renderData = entriesCollection => {
  entrySection.innerHTML = 
      `
        <section>
          <h2 class="notes-title">Notes:</h2>
          ${entriesCollection.map(entry => SavedJournalEntry(entry)).join("")}
        </section>
      `
}

export default SavedEntryList
