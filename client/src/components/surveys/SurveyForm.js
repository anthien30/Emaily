import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

const SurveyForm = (props) => {
  const renderFields = () => {
    return (
      <div>
        {FIELDS.map((field) => (
          <Field
            key={field.label}
            label={field.label}
            type="text"
            name={field.name}
            component={SurveyField}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}

        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
          <i className="material-icons right">cancel</i>
        </Link>

        <button className="teal btn-flat right white-text" type="submit">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
