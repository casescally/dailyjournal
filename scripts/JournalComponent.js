const JournalComponent = () => {
  return `
  <form action="" class="" id="entryForm">
  <fieldset class="form">
    <h1>Daily Journal</h1>
    <div class="entries">
      <label for="journal-date">Date of entry:</label>
      <br>
      <input type="date" name="journal-date" id="journal-date">
    </div>
    <br>
    <div class="entries">
      <label for="concepts-covered">Concepts Covered:</label>
      <br>
      <input type="text" name="concepts-covered" id="concepts-covered">
    </div>
    <br>
    <div class="entries">
      <label for="journal-entry">Journal Entry</label>
      <br>
      <textarea rows="5" cols="50" name="journal-entry" id="journal-entry">Type here</textarea>
    </div>
    <br>
    <div class="entries">
      <label for="mood">How do you feel about it?</label>
      <br>
      <select name="mood" id="mood">
        <option value="Good">Good</option>
        <option value="Neutral">Neutral</option>
        <option value="Bad">Bad</option>
      </select>
    </div>
    <br>
  </fieldset>
  </form>

  <div class="btn">
  <button id="submit" class="button">Submit</button>
  <button id="showEntries" class="button">Show Entries</button>
  </div>
  `
}

export default JournalComponent
