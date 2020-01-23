export default (state = [], action) => {
    switch(action.type) {
        case "ADD_QUOTE":
            console.log(`added quote: ${action.quote.content}`);
            return [...state, action.quote]
        case "REMOVE_QUOTE":
            return state.filter(q => q.id !== action.quoteId)
        case "DOWNVOTE_QUOTE":
            return state.map(q => {
                if (q.id === action.quoteId && q.votes !== 0) q.votes--;
                return q;
            })
        case "UPVOTE_QUOTE":
            return state.map(q => {
                if (q.id === action.quoteId) q.votes++;
                return q;
            })
        default:
            return state;
    }
}
