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
      comment: '',
      loading: true
    }
    this.firebaseUser = base.auth().currentUser
  }

  componentWillMount(){
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
    base.removeBinding(this.ref);
  }

  _removeNote(key){
     base.push(`authentication/userWritable/notes-queue/tasks`, {
       data: {
         timestamp: new Date().toString(),
         action: 'delete',
         language: this.props.language,
         target: key,
         uid: this.firebaseUser.uid
       }
     }).then(() => this.setState({note: ''})).catch(err => console.log(err))
  }

  render() {
    const { language, Text } = this.props
    const { notes, comment } = this.state

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
