import React from 'react';


export default class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {
          review: '',
        },
      };
    }

    handleChange(event) {
      this.setState(state => {
        const formDataInput = {...state.formData};
        formDataInput.review = event.target.value;
        return {formData: formDataInput}
      })
    };
  
    onSaveButtonClicked(event) {
      event.preventDefault();
      this.props.review(this.state.review);
    }
  
    render() {
      return (
        <form onSubmit="postValue()"> 
        <h5>Add a Review:</h5>
        <label> 
        <input type='text' textarea className ='form-control' value={this.state.formData.review} onChange={this.handleChange} /> 
        </label> 
        <br></br>
        <button className='btn btn-secondary' id='button' type='button' onClick={this.onSaveButtonClicked}>Save</button>
        </form> 

    ); 

  } 

}
