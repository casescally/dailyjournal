import EntryList from "./EntryList.js"
import SavedEntryList from "./SavedEntryList.js"
import { getEntries } from "./JournalDataProvider.js"

EntryList()
getEntries().then(SavedEntryList)
