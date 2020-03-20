import React from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function SmurfForm({errors, touched}) {
   
    return(
        <div>
            <Form>
                <label htmlFor='name'/>
                <Field id='name'
                type='text'
                name='name'
                placeholder='Smurf Name'></Field>

                {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )}

                <label htmlFor='age'/>
                <Field id='age'
                type='text'
                name='age'
                placeholder='Smurf Age'></Field>

                {touched.age && errors.age && (
                    <p>{errors.age}</p>
                )}

                <label htmlFor='height'/>
                <Field id='height'
                type='text'
                name='height'
                placeholder='Smurf height'></Field>

                <button className='submit-button' type='submit'>Ajouter Smurf</button>
            </Form>
        </div>
    );
}

const SmurfFormF = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            age: props.age || 0,
            height: props.height || "",
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Il faut entrer un nom valide!'),
        age: Yup.string().required("L'age du Smurf c'est obligatoire"),
        height: Yup.string().required("Il a besoin d'une hauteur")
    }),
    handleSubmit(values, { resetForm }) {
        axios.post('http://localhost:3333/smurfs', values).then(response => {
            console.log("Post Response", response)
            resetForm();
        }).catch(error => console.log("Post Error: ", error));
    }
})(SmurfForm);

export default SmurfFormF;