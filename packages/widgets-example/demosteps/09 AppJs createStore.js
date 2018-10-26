class App extends Component {
    constructor(props) {
      super(props);
  
      // define the initial state where none of the widgets are visible
      this.state = {
        hackerNews: false,
        weather: false
      };
  
      /**
       * configure the store and load the thunk and saga extension
       * The extensions are optional and you can choose extension based on the middleware you use
       * You can also build your own extensions for any other middleware e.g. redux-observable
       */
      this.store = configureStore({}, [getThunkExtension(), getSagaExtension()]);
    }
}