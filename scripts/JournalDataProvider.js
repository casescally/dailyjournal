let entries = []

//gets the entries from database
export const getEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedData => {
      entries = parsedData.slice();
    })
}

//deletes the entries from database
export const deleteEntries = entryId => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE"
  }).then(getEntries)
}

//saves the entries from database
export const savedEntries = entry => {
  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry)
  }).then(getEntries)
}

//sorts entries by date
export const useSavedJournalEntries = () => {
  const sortByDate = entries.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortByDate
}
