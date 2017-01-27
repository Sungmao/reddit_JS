export default function reducer(state={
    user: '',
    inputName: '',
    newtitle: '',
    inputTitle: '',
    newContent: '',
    inputContent: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_USER':
        return {...state, user: state.inputName, inputName: ''}
      case 'CHANGE_INPUT_NAME':
        return {...state, inputName: action.payload}
      case 'CHANGE_TITLE':
        return {...state, newtitle: state.inputTitle, inputTitle: ''}
      case 'CHANGE_INPUT_TITLE':
        return {...state, inputTitle: action.payload}
      case 'CHANGE_CONTENT':
        return {...state, newContent: state.inputContent, inputContent: ''}
      case 'CHANGE_INPUT_CONTENT':
        return {...state, inputContent: action.payload}




      default:
        return state;
    }
}
