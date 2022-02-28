import { action } from 'easy-peasy';
// Central file for all Easy-Peasy configuration
export default {
    favourites: [],
    toggled: false,
    // Actions
    addItem: action((state, movie) => {
        state.favourites.push(movie);
    }),
    removeItem: action((state, movie) => {
        const index = state.favourites.findIndex(favourite => favourite.imdbID == movie.imdbID);
        state.favourites.splice(index, 1);
    }),
    toggleItem: action((state) => {
        state.toggled = !state.toggled;
    })
}