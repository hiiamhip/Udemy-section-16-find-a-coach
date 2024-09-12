export default {
  allRequests(state) {
    return state.requests;
  },
  requests(state, _, rootState) {
    const coachIdRoot = rootState.userId;
    return state.requests.filter((req) => req.coachId === coachIdRoot);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
