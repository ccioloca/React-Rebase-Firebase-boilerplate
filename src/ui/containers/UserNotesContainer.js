import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import UserNotesList from '../components/UserNotesList'
import NewNote from '../components/NewNote'
import ChooseCategory from '../components/ChooseCategory'
import CategoryButtons from '../components/CategoryButtons'
import Card from '../layout/Card'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import uuidV4 from 'uuid/v4'

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
      newCategoryValue: ''
    }
    this.firebaseUser = base.auth().currentUser
    this.defaultCategories = ['Category 1', 'Category 2', 'Category 3']
    this.uniqueId = uuidV4()
  }

  componentWillMount(){

    const uid = this.firebaseUser.uid

    const userNotesQuery = { limitToLast: 10 }
    if (this.state.queryCategory !== 'all') {
      userNotesQuery.orderByChild = "category"
      userNotesQuery.equalTo = this.state.queryCategory
    }
    base.fetch(`authentication/userReadable/${uid}/notes`, {
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
      }).then(() => {
        this.setState({note: '', })
        setTimeout(() => {
          const uid = this.firebaseUser.uid
          const userNotesQuery = { limitToLast: 10 }
          if (this.state.queryCategory !== 'all') {
            userNotesQuery.orderByChild = "category"
            userNotesQuery.equalTo = this.state.queryCategory
          }
          base.fetch(`authentication/userReadable/${uid}/notes`, {
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
        }, 1000)
      }).catch(err => console.log(err));
    }
  }

  _onNoteChange(value) {
    this.setState({note:value})
  }

  _onCategoryChange(event) {
    event.preventDefault()
    this.setState({chooseCategory:event.target.value, queryCategory:event.target.value})
    this.uniqueId = uuidV4()
  }

  _onAddCategory(category) {
    const newCustomCategories = this.state.customCategories.concat[category]
    this.setState({customCategories:newCustomCategories})
  }

  _onCheck() {
    this.setState({isPublic: !this.state.isPublic})
  }

  _handleChangeCategoryQuery(value) {
    this.setState({queryCategory: value}, () => {
      const uid = this.firebaseUser.uid
      const userNotesQuery = { limitToLast: 10 }
      if (this.state.queryCategory !== 'all') {
        userNotesQuery.orderByChild = "category"
        userNotesQuery.equalTo = this.state.queryCategory
      }
      base.fetch(`authentication/userReadable/${uid}/notes`, {
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
    })
  }

  _onAddNewCategoryFormSubmit(event, newCategoryValue) {
    event.preventDefault()
    console.log('onAddNewCategoryFormSubmit', newCategoryValue)
    if (newCategoryValue) {
      this.setState({customCategories: this.state.customCategories.concat([newCategoryValue.addNewCategory])})
      this.setState({newCategoryValue: ''})
     }
  }

  _onAddNewCategoryChange(value) {
    console.log('onAddNewCategoryChange', value)
    this.setState({newCategoryValue:value},() => {console.log('onAddNewCategoryChangeSetState', this.state.newCategoryValue)})
  }

  _toggleShowAddNewCategory() {
    this.setState({showAddNewCategory: !this.state.showAddNewCategory})
  }

  render() {
    const { language, Text } = this.props
    const { isPublic, notes, note, customCategories, chooseCategory, showAddNewCategory, newCategoryValue } = this.state
    const { displayName, photoURL } = this.firebaseUser
    const categories = this.defaultCategories.concat(customCategories)
    const uniqueId = this.uniqueId

    console.log('render', newCategoryValue)

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <Grid key={uniqueId}>
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
                    value={chooseCategory}
                    Text={Text}
                    language={language}
                    onChange={ this._onCategoryChange.bind(this) }
                    toggleShowAddNewCategory={() => this._toggleShowAddNewCategory() }
                    showAddNewCategory={ showAddNewCategory }
                    onAddNewCategoryFormSubmit={ this._onAddNewCategoryFormSubmit.bind(this) }
                    onAddNewCategoryChange={ this._onAddNewCategoryChange.bind(this) }
                    value={ newCategoryValue } />
                </Cell>
              </Grid>
            </Cell>
            <Cell desktop='one-quarter' tablet='one-third' mobile='one-whole'>
              List of Categories as buttons goes here - these buttons would change state of category
              <CategoryButtons 
                handleClick={ this._handleChangeCategoryQuery.bind(this) }
                categories={categories}
                Text={Text}
                language={language}/>
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
