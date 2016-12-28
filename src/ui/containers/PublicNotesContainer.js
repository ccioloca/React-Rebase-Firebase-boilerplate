import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import PublicNotesList from '../components/PublicNotesList'
import Card from '../layout/Card'

class PublicNotesContainer extends Component {

  constructor(props){
    super(props);
    let comment = new Array(10)
    comment.forEach((com) => {com = ''})
    this.state = {
      notes: [],
      comment: comment,
      loading: true,
      newCommentValue: {},
      showAddNewComment: -1
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

  _onAddNewCommentFormSubmit(event, newCommentValue, key) {
    event.preventDefault()
    console.log('onAddNewCommentFormSubmit', this.props.language)
    if (newCommentValue) {
      base.push(`authentication/userWritable/comments-queue/tasks`, {
       data: {
         timestamp: new Date().toString(),
         action: 'add',
         note_id: key,
         language: this.props.language,
         uid: this.firebaseUser.uid,
         comment: newCommentValue.addNewComment
       }
     }).then(() => {
       let comment = this.state.comment
       comment.forEach((com) => {
         console.log('forEach', newCommentValue.addNewComment)
         if(com == newCommentValue.addNewComment) {
           com = ''
         }
       })
       this.setState({note: ''})
    }).catch(err => console.log(err))}
  }

  _onAddNewCommentChange(value, index) {
    console.log('onAddNewCommentChange', value)
    let comment = this.state.comment
    comment[index] = value
    this.setState({comment:comment},() => {console.log('onAddNewCommentChangeSetState', this.state.comment)})
  }

  _toggleShowAddNewComment(index) {
    if( this.state.showAddNewComment === index ) {
      this.setState({showAddNewComment: -1})
    } else {
      this.setState({showAddNewComment: index})
    }
  }

  render() {
    const { language, Text } = this.props
    const { notes, comment, showAddNewComment } = this.state


    return (
        this.state.loading
        ? <Card><Center height={'300px'}><LoadingAnimation height='auto'/></Center></Card>
        : <Card>
            <PublicNotesList Text={Text}
                           language={language}
                           notes={notes}
                           removeNote={ (key) => this._removeNote(key) }
                           onAddNewCommentFormSubmit={this._onAddNewCommentFormSubmit.bind(this) }
                           onAddNewCommentChange={ this._onAddNewCommentChange.bind(this) }
                           toggleShowAddNewComment={ this._toggleShowAddNewComment.bind(this) }
                           value={ comment }
                           showAddNewComment={ showAddNewComment } />
          </Card>
    );
  }
}

export default PublicNotesContainer

PublicNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
