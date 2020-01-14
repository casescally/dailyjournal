const SavedJournalEntry = entry => {
  return `
    <section class="saved-notes">
        <div class="saved" class="saved-note">Date: ${entry.date}</div>
        <div class="saved" class="saved-note">Concept: ${entry.concepts}</div>
        <div class="saved textarea" class="saved-note">Entry: ${entry.textArea}</div>
        <div class="saved" class="saved-note">Mood: ${entry.mood}</div>
        <button id="deleteEntry--${entry.id}" class="deleteButton">Delete Entry</button>
    </section>
  `
}

export default SavedJournalEntry
