// Actions
const AUTHENTICATE = 'marc1-client/auth/AUTHENTICATE';

// Reducer
export default function reducer(state = {authenticated: false}, action = {}) {
  switch (action.type) {
    case AUTHENTICATE:
      return {authenticated: true}

    default: return state;
  }
}

// Action Creators
export function authenticate() {
  return { type: AUTHENTICATE };
}

