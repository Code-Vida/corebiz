export const reducer = (state, action) => {
    switch (action.type) {
        case "add": {
            return [...state, action.data];
        }
        case "remove": {
            return state.splice(action,1);
          }
        default:
            return state;
    }
};