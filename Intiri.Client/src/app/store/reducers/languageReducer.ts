import * as LanguageActions from 'src/app/store/actions/language.actions'

const defaultState = {
  currentLang: 'en',
};

//Helper function to create new state object
const newState = (state = defaultState, newData: any) => {
  return Object.assign({}, state, newData);
};

export type Action = LanguageActions.All;

export function languageReducer (state = defaultState, action: Action) {
  switch (action.type) {
    case LanguageActions.GET:
      return state;
    case LanguageActions.SET:
      return newState(state, { currentLang: action.payload });
    default:
      return state;
  }
}
