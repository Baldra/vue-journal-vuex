
//  export const myGetter =  ( state ) => {

import store from "@/store"

//  }

export const setEntries =  (state, entries) => {
    state.entries = [] //esto renicia las entradas para no tener duplicados al omonto del created()
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry =  (state, updatedEntry) => {

    state.entries = state.entries.map(item => updatedEntry.id === item.id ? updatedEntry : item)

}

export const addEntry =  (state, newEntry) => {

    state.entries.unshift(newEntry)

}

export const deleteEntry = (state, id) => {
 
    state.entries = state.entries.filter(e => e.id !== id)
}

export const clearEntries = (state) => {
    state.entries = []
}


