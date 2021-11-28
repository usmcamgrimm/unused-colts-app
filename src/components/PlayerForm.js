import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

const PlayerForm(props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    position: Yup.string().required("Required"),
    number: Yup.number()
      .positive("Invalid")
      .integer("Invalid")
      .required("Required"),
  })
  console.log(props)

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="name" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="position" type="text" 
                className="form-control" />
            <ErrorMessage
              name="position"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="number" type="number" 
                className="form-control" />
            <ErrorMessage
              name="number"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
          <Button className="py-2 px-4 bg-red text-white rounded-md shadow-md hover:bg-red-500" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default PlayerForm;