import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import PublicNotesList from '../components/PublicNotesList'
import Card from '../layout/Card'

class PublicNotesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      note: '',
      loading: true
    }
    this.firebaseUser = base.auth().currentUser
  }
  componentWillMount(){

    /*
     * We bind the 'notes' firebase endopint to our 'notes' state.
     * Anytime the firebase updates, it will call 'setState' on this component
     * with the new state.
     *
     * Any time we call 'setState' on our 'notes' state, it will
     * updated the Firebase '/notes' endpoint. Firebase will then emit the changes,
     * which causes our local instance (and any other instances) to update
     * state to reflect those changes.
     */

    this.ref = base.listenTo(`authentication/allMembers/notes/${this.props.language}`, {
      context: this,
      asArray: true,
      queries: { limitToLast: 10,},
      onFailure: (err) => {
        console.log('inside', err)
        this.setState({loading: false})
      },
      then: (notes) => {
        this.setState({notes: notes, loading: false});
       }
    })
  }
  componentWillUnmount(){
    /*
     * When the component unmounts, we remove the binding.
     * Invoking syncState (or bindToState or listenTo)
     * will return a reference to that listener (see line 30).
     * You will use that ref to remove the binding here.
     */

    base.removeBinding(this.ref);
  }

  _removeNote(key){

    /*
     * Calling setState here will update the '/notes' ref on our Firebase.
     * Notice that I'm also updating the 'show' state.  Because there is no
     * binding to our 'show' state, it will update the local 'show' state normally,
     * without going to Firebase.
     */

     base.push(`authentication/userWritable/notes-queue/tasks`, {
       data: {
         timestamp: new Date().toString(),
         action: 'delete',
         language: this.props.language,
         target: key,
         uid: this.firebaseUser.uid
       }
     }).then(() => this.setState({note: ''})).catch(err => console.log(err));

  }

  render() {
    const { language, Text } = this.props
    const { notes, note } = this.state

    return (
        this.state.loading
        ? <Card><Center height={'300px'}><LoadingAnimation height='auto'/></Center></Card>
        : <Card>
            <PublicNotesList Text={Text}
                           language={language}
                           notes={notes}
                           removeNote={ (key) => this._removeNote(key) }/>
          </Card>
    );
  }
}

export default PublicNotesContainer

PublicNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
