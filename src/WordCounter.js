
import React from 'react';
// import ReactDOM from 'react-dom';

const SUCCESS = "success";
const FAILURE = "failure";
const WAITING = "waiting";
const IDLE = "idle";

function makeFakeRequest() {
  return new Promise((resolve, reject)=> {
    console.log("Please wait. Mocking a Fake Request...");
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('success!');
      } else {
        reject('failed');
      }
    }, 3000);
  });
}

function SaveButton({ handleOnClick }) {
  return (
    <button className="pv2 ph3" onClick={handleOnClick}>Save</button>
  );
}

function AlertBox ({status}) {
  if (status == FAILURE) {
    return <div className='mv2'>Save failed</div>
  } else if (status == success) {
    return <div className='mv2'>Save success</div>
  } else if (status == WATTING) {
    return <div className='mv2'>Save waiting</div>
  } else {
    return null;
  }
}

class SaveManager extends React.Component {
  constructor() {
    super();
    this.state = {saveStatus:IDLE}
    this.save=this.save.bind(this);
  }

  save(event) {
    console.log("Saving...");
    event.preventDefault();
    this.setState(()=> {saveStatus: WAITING})
    this.props.saveFunction(this.props.data).
      then((success) => {
        this.setState(() => ({saveStatus: SUCCESS }));
        console.log("Saved status saved: ", this.state.saveStatus);
      }).
      catch((failure) => {
        this.setState(() => ({saveStatus: FAILURE }) );
        console.log("Saved status failure: ", failure);
      });
  }

  render() {
    return (
      <div className="flex flex-column mv2">
        <SaveButton handleOnClick={this.save}/>
      </div>
    )
  }
}

function Counter ({count}) {
  return (
    <p className="mb2">
    word Count: {count}
    </p>
  )
}

function ProgressBar ({ completion}) {
  const percentage = completion * 100;
  return (
    <div className="mv2 flex flex-column">
      <label htmlFor="progress" className="mv2">
      progress
      </label>
      <progress value={completion} id="progress" className="bn">
      {percentage}%
      </progress>
    </div>
  )
}
function Editor ({text, onTextChange}) {
  function handleChange(event) {
    onTextChange(event.target.value);
  }
  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
      Enter your text
      </label>
      <textarea value={text} onChange={handleChange} id="editor"/>
    </div>
  )
}
function countWords(text) {
  return text ? text.match(/\w+/g).length : 0
}
class WordCounter extends React.Component {
  constructor() {
    super();
    this.state = {text: ''}
    this.handleTextChange  = this.handleTextChange.bind(this);
  }
  handleTextChange(currentText) {
    // const obj = {text: currentText}
    // const func = () => {obj}
    // this.setState(fun);
    this.setState(() => {
      return{ text: currentText}
    })
  }
  render() {
    const { targetWordCount } = this.props;
    const { text } = this.state;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;
    return (
      <form className="measure pa4 sans-serif">
        <Editor text={text} onTextChange={this.handleTextChange}/>
        <Counter count={wordCount}/>
        <ProgressBar completion={progress}/>
        <SaveManager saveFunction={makeFakeRequest} data={this.state}/>
      </form>
    )
  }
}
// function WordCounter({text, targetWordCount}) {
//  const wordCount = countWords(text);
//  const progress = wordCount / targetWordCount;
//  return (
//      <form className="measure pa4 sans-serif">
//       <Editor text={text}/>
//       <Counter count={wordCount}/>
//       <ProgressBar completion={progress}/>
//      </form>
//    )
//   }

export default WordCounter;

// ReactDOM.render(
//   <WordCounter targetWordCount={10}/>,
//   document.getElementById('app')
// );
