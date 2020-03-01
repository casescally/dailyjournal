const JournalComponent = () => {
  return `
  <form action="" class="" id="entryForm">
  <fieldset class="form">
    <h1 class="heading">Daily Journal</h1>
    <div class="entry__date">
      <label for="journal-date">Date of entry:</label>

      <input type="date" name="journal-date" id="journal-date">
    </div>

    <div class="entry__conceptsCovered">
      <label for="concepts-covered">Concepts Covered:</label>

      <input type="text" name="concepts-covered" id="concepts-covered" placeHolder="Subject">
    </div>
    <br>
    <div class="entry__body">
      <label for="journal-entry">Journal Entry</label>

      <textarea rows="5" cols="50" name="journal-entry" id="journal-entry" placeHolder="What did you learn?"></textarea>
    </div>
    <br>
    <div class="entry__mood">
      <label for="mood">How do you feel about it?</label>

      <select name="mood" id="mood">
        <option value="Good">Good</option>
        <option value="Neutral">Neutral</option>
        <option value="Bad">Bad</option>
      </select>
    </div>

  </fieldset>
  </form>

  <div class="buttons">
  <button id="submit" class="button">Submit</button>
  <button id="showEntries" class="button">Show Entries</button>
  </div>
  `
}

export default JournalComponent
