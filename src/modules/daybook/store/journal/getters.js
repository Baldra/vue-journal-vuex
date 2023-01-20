
//  export const myGetter =  (state) => {
//    return state.algo
//  }


export const getEntriesByTerm =  (state) => (term='') => {

    //if(term.length === 0) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase() ) )
}

export const getEntryById =  (state) => (id = '') => {
  
    const entryById = state.entries.find(entry => entry.id === id)
    if(!entryById) return
    return {...entryById}
}

