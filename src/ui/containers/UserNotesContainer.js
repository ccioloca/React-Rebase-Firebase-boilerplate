import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import UserNotesList from '../components/UserNotesList'
import NewNote from '../components/NewNote'
import ChooseCategory from '../components/ChooseCategory'
import Card from '../layout/Card'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

class UserNotesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [],
      note: '',
      categories: [],
      category: 'all',
      loading: true,
      isPublic: true
    }
    this.firebaseUser = base.auth().currentUser
  }

  componentWillMount(){
    const uid = this.firebaseUser.uid
    const userNotesQuery = { limitToLast: 10 }

    if (this.state.category !== 'all') {
      userNotesQuery.orderByChild = "category"
      userNotesQuery.equalTo = this.state.category
    }

    this.notesRef = base.listenTo(`authentication/userReadable/${uid}/notes`, {
      context: this,
      asArray: true,
      queries: userNotesQuery,
      onFailure: (err) => {
        console.log('inside', err)
        this.setState({loading: false})
      },
      then: (notes) => {
        this.setState({notes: notes, loading: false});
       }
    })

    this.notesCategoriesRef = base.listenTo(`authentication/userReadable/${uid}/notesCategories`, {
      context: this,
      asArray: true,
      onFailure: (err) => {
        console.log('inside', err)
        this.setState({loading: false})
      },
      then: (categories) => {
        this.setState({categories: categories});
       }
    })

  }

  componentWillUnmount(){
    base.removeBinding(this.notesRef)
    base.removeBinding(this.notesCategoriesRef)
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
     }).then(() => this.setState({note: ''})).catch(err => console.log(err));
  }

  _onFormSubmit(event, newNote) {
    event.preventDefault()
    if (newNote.note) {
      newNote.uid = this.firebaseUser.uid
      newNote.category = this.state.category
      base.push(`authentication/userWritable/notes-queue/tasks`, {
        data: {
          timestamp: new Date().toString(),
          action: 'add',
          note: newNote,
          isPublic: this.state.isPublic,
          language: this.props.language
        }
      }).then(() => this.setState({note: '', })).catch(err => console.log(err));
    }
  }

  _onChange(value) {
    this.setState({note:value})
  }

  _onCategoryChange(event) {
    this.setState({category:event.target.value})
  }

  _onCheck() {
    this.setState({isPublic: !this.state.isPublic})
  }

  render() {
    const { language, Text } = this.props
    const { notes, note, categories, category } = this.state
    const { displayName, photoURL } = this.firebaseUser
    console.log('categories', categories)
    console.log('category changed', this.state.category)

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <Grid>
            <Cell desktop='three-quarters' tablet='two-thirds' mobile="one-whole">
              <Card>
                <UserNotesList Text={Text}
                             language={language}
                             notes={notes}
                             displayName={displayName}
                             photoURL={photoURL}
                             removeNote={ (key) => this._removeNote(key) }/>
              </Card>
              <Grid>
                <Cell desktop='three-quarters' tablet='two-thirds' mobile="one-whole">
                  <NewNote onFormSubmit={ this._onFormSubmit.bind(this) }
                              displayName={ displayName }
                              photoURL={ photoURL }
                              value={ note }
                              Text={Text}
                              onChange={ this._onChange.bind(this) }
                              language={language}
                              onCheck={ () => this._onCheck() }
                              isChecked={!this.state.isPublic}/>
                </Cell>
                <Cell desktop='one-quarter' tablet='one-third' mobile='one-whole'>
                  <ChooseCategory
                    categories={categories}
                    category={category}
                    value={category}
                    Text={Text}
                    language={language}
                    onChange={ this._onCategoryChange.bind(this) } />
                </Cell>
              </Grid>
            </Cell>
            <Cell desktop='one-quarter' tablet='one-third' mobile='one-whole'>
              List of Categories as buttons goes here - these buttons would change state of category
            </Cell>
          </Grid>
    );
  }
}

export default UserNotesContainer

UserNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired
}
