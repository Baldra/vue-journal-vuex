import journalApi from "@/api/journalApi"
import { Object } from "core-js"

//  export const myAction = async ({commit}) => {


//  }


export const loadEntries = async ({commit}) => {

    const {data} = await journalApi.get('/entries.json')

    if(!data) {
        commit('setEntries', [entries])
        return
    }
    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    
    commit('setEntries', entries)
}

export const updateEntry = async ( {commit} , entryUpdate) => {
    const {id, date, picture, text} = entryUpdate
    const dataToSave = {date, picture, text}

    const resp = await journalApi.put(`entries/${id}.json`, dataToSave)
    //console.log(resp)

    commit('updateEntry', { ...entryUpdate})
}

export const createEntry = async ({commit}, newEntry) => {

    const {date, picture, text} = newEntry
    const dataToSave = {date, picture, text}

    const {data} = await journalApi.post(`entries.json`, dataToSave)

    newEntry.id = data.name

    commit('addEntry', {...newEntry})

}

export const deleteEntry = async ({commit}, id) => {

    await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntry', id)

}