import create from "zustand";

const useStore = create((set) => ({
player: {
    animation: null,
    position: {
        x: 1,
        y: 1,
        z: 1,
    },
    movement: {
        forward: false,
        backward: false,
        left: false,
        right: false,
        shift: false,
    },
},
updatePlayer: (playerDetails) => set((state) => ({
 pokemons: {
     ...state.player,
     ...playerDetails
 }}))
}));
export default useStore;