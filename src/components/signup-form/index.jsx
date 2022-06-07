import React from "react";
import Form from "./form";
import PropTypes from 'prop-types';


const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}
class SignupForm extends React.Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    };

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const {isValid, errors} = this.validate();
         
        if (isValid) {
            console.log(this.state.values);
            this.props.createUser(this.state.values);
            event.target.reset();
            this.setState({values: initValues, agreement: false})
        } else {
         this.setState({ errors })
        }
        

       // console.log(this.state.values);
    };

    validate = () => {
        const errors = {}
        const { values: {name, email, password, gender, birthDate}} = this.state;

        if (!name) {
            errors.name = 'Please enter your name.'
        }
        if(!email) {
            errors.email = 'Please provide your email.'
        }
        if (!password) {
            errors.password = 'Please provide your password.'
        }
        if (!gender) {
            errors.gender = 'Please select your gender.'
        }
        if(!birthDate) {
            errors.birthDate = 'Please provide your BirthDate.'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
    render() {
        return (
            <div>
                <h3>Signup form</h3>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default SignupForm;