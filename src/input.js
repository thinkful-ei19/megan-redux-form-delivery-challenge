import React from 'react';

export default class InputComponent extends React.Component{
    componentDidUpdate(prevProps){
        if(!prevProps.meta.active && this.props.meta.active){
            this.input.focus()
            // old react: this.refs.inputTag.focus()
        }
    }
    render(){
        const ElementType = this.props.element|| "input";

        let validationError;
        if(this.props.meta.touched && this.props.meta.error){
            validationError=
            <div className="validation-err">
                {this.props.meta.error}
            </div>
        }

        return(
            <div className="form-input">
            <div className="labels and errors">
                <label htmlFor={this.props.input.name}>
                    {this.props.input.name}
                    {validationError}
                </label>
            </div>
                <ElementType  
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={inputTag => (this.input = inputTag)}
                    // old react version: ref='inputTag'
                    //Mentor Notes: what is this ^ doing
                    //What is ref and where are we getting just input from?
                    //Why does the didUpdate function only work if this is here?
                    >
                        {this.props.children}
                    </ElementType>
            </div>
        )
    }
}