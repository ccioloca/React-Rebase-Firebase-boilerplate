import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import UserNotesList from '../components/UserNotesList'
import NewNote from '../components/NewNote'
import ChooseCategory from '../components/ChooseCategory'
import NotesCategoriesList from '../components/NotesCategoriesList'
import EditForm from '../components/EditForm'
import Card from '../layout/Card'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

class UserNotesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [],
      note: '',
      customCategories: [],
      chooseCategory: 'Category 1',
      queryCategory: 'all',
      test: [],
      loading: true,
      isPublic: true,
      showAddNewCategory: false,
      newCategoryValue: '',
      selectedEditNote: '',
      editValue: ''
    }
    this.firebaseUser = base.auth().currentUser
    this.defaultCategories = ['Category 1', 'Category 2', 'Category 3']
  }

  componentWillMount(){
    const uid = this.firebaseUser.uid

    this._getNotes()

    this.notesCategoriesRef = base.syncState(`authentication/userOwned/${uid}/notesCategories`, {
      context: this,
      state: 'customCategories',
      asArray: true,
      onFailure: (err) => {
          console.log(err)
          this.setState({loading: false})
      }
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.notesCategoriesRef)
    base.removeBinding(this.notesRef)
  }

  _getNotes(queryCategory = this.state.queryCategory) {

    const uid = this.firebaseUser.uid

    if (this.notesRef) {
      base.removeBinding(this.notesRef)
    }

    const userNotesQuery = { limitToLast: 10 }

    if (this.state.queryCategory !== 'all') {
      userNotesQuery.orderByChild = "category"
      userNotesQuery.equalTo = this.state.queryCategory
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
     }).then( () => {this.setState({note: ''}) }).catch(err => console.log(err) )
  }

  _onNewNoteFormSubmit(event, newNote) {
    event.preventDefault()
    if (newNote.note) {
      newNote.uid = this.firebaseUser.uid
      newNote.category = this.state.chooseCategory
      base.push(`authentication/userWritable/notes-queue/tasks`, {
        data: {
          timestamp: new Date().toString(),
          action: 'add',
          note: newNote,
          isPublic: this.state.isPublic,
          language: this.props.language
        }
      })
      .then(() => {this.setState({note: '', })})
      .catch(err => console.log(err));
    }
  }

  _onNoteChange(value) {
    this.setState({note:value})
  }

  _onCategoryChange(event) {
    event.preventDefault()
    this.setState({chooseCategory:event.target.value, queryCategory:event.target.value})
  }

  _onAddCategory(category) {
    const newCustomCategories = this.state.customCategories.concat[category]
    this.setState({customCategories:newCustomCategories})
  }

  _onCheck() {
    this.setState({isPublic: !this.state.isPublic})
  }

  _handleChangeCategoryQuery(event, value) {
    event.preventDefault()
    this.setState({queryCategory: value}, () => {
      this._getNotes()
    })
  }

  _onAddNewCategoryFormSubmit(event, newCategoryValue) {
    event.preventDefault()
    if (newCategoryValue) {
      this.setState({customCategories: this.state.customCategories.concat([newCategoryValue.addNewCategory])})
      this.setState({newCategoryValue: ''})
     }
  }

  _onAddNewCategoryChange(value) {
    this.setState({newCategoryValue:value},() => {console.log('onAddNewCategoryChangeSetState', this.state.newCategoryValue)})
  }

  _toggleShowAddNewCategory() {
    this.setState({showAddNewCategory: !this.state.showAddNewCategory})
  }

  _removeCategory(event, category) {
    event.preventDefault()
    var customCategories = this.state.customCategories
    for(var i = 0; i < customCategories.length; i++) {
      if(customCategories[i] === category) {
        customCategories[i] = []
      }
    }
    this.setState({customCategories: customCategories})
  }

  _toggleEditFormVisibility(key, data) {
    console.log('toggleEdit...key', key)
    console.log('toggleEdit...data', data)
    if ( this.state.selectedEditNote === key ) {
      this.setState({selectedEditNote: '', editValue: ''})
    } else {
      this.setState({selectedEditNote: key, editValue: data})
    }
  }

  _handleEditChange(editValue) {
    this.setState({editValue})
  }

  _handleEditSubmit(event, data) {
    console.log(data)
    event.preventDefault()
    const key = this.state.selectedEditNote

    if (data && key) {
      base.auth().currentUser.getToken(true).then(idToken => {
        base.push(`authentication/userWritable/notes-queue/tasks`, {
          data: {
            timestamp: new Date().toString(),
            action: 'edit',
            note_id: key,
            language: this.props.language,
            data: data,
            idToken: idToken
          }
        }).then(() => {
          this.setState({editValue: '', selectedEditNote: ''})
        }).catch(err => console.log(err))
      })
    }
  }

  render() {
    const { language, Text } = this.props
    const { isPublic, notes, note, customCategories, chooseCategory, showAddNewCategory, newCategoryValue, editValue, selectedEditNote } = this.state
    const { displayName, photoURL } = this.firebaseUser
    const categories = this.defaultCategories.concat(customCategories)

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
                             removeNote={ (key) => this._removeNote(key) }
                             toggleEditFormVisibility={ this._toggleEditFormVisibility.bind(this) }
                             selectedEditNote={ selectedEditNote } >
                             
                  <EditForm Text={Text}
                            language={language}
                            handleSubmit={this._handleEditSubmit.bind(this) }
                            handleChange={this._handleEditChange.bind(this) }
                            value={editValue} />
                </UserNotesList>
              </Card>
              <Grid>
                <Cell desktop='three-quarters' tablet='two-thirds' mobile="one-whole">
                  <NewNote onFormSubmit={ this._onNewNoteFormSubmit.bind(this) }
                              displayName={ displayName }
                              photoURL={ photoURL }
                              value={ note }
                              Text={Text}
                              onChange={ this._onNoteChange.bind(this) }
                              language={language}
                              onCheck={ () => this._onCheck() }
                              isChecked={!isPublic}/>
                </Cell>
                <Cell desktop='one-quarter' tablet='one-third' mobile='one-whole'>
                  <ChooseCategory
                    categories={categories}
                    selectedCategory={chooseCategory}
                    selectValue={chooseCategory}
                    Text={Text}
                    language={language}
                    onChange={ this._onCategoryChange.bind(this) }
                    toggleShowAddNewCategory={() => this._toggleShowAddNewCategory() }
                    showAddNewCategory={ showAddNewCategory }
                    onAddNewCategoryFormSubmit={ this._onAddNewCategoryFormSubmit.bind(this) }
                    onAddNewCategoryChange={ this._onAddNewCategoryChange.bind(this) }
                    inputTextValue={ newCategoryValue } />
                </Cell>
              </Grid>
            </Cell>
            <Cell desktop='one-quarter' tablet='one-third' mobile='one-whole'>
              <NotesCategoriesList
                handleClick={ this._handleChangeCategoryQuery.bind(this) }
                categories={customCategories}
                Text={Text}
                language={language}
                removeCategory={ this._removeCategory.bind(this) } />
            </Cell>
          </Grid>
    );
  }
}

export default UserNotesContainer

UserNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
