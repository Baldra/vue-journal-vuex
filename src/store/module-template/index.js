
import state from "./state";
import * as actions from "./state";
import * as getters from "./getters";
import * as muttations from "./muttations";

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    muttations,
    state
}

export default myCustomModule