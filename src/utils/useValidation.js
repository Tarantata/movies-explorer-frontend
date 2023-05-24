import { useState, useCallback } from "react";
import { validationNameError, validationEmailError } from "./messages";

export function useValidation() {
   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});
   const [isValid, setIsValid] = useState(false);

   const handleChange = (evt) => {
      const target = evt.target;
      const name = target.name;
      const value = target.value;

      switch (name) {
         case "username":
            target.validity.patternMismatch
               ? target.setCustomValidity(validationNameError)
               : target.setCustomValidity("");
            break;
         case "email":
            target.validity.patternMismatch
               ? target.setCustomValidity(validationEmailError)
               : target.setCustomValidity("");
            break;
         default:
            target.setCustomValidity("");
      }

      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
   };

   const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
         setValues(newValues);
         setErrors(newErrors);
         setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
   );

   return {
      values,
      setValues,
      handleChange,
      errors,
      isValid,
      // setIsValid,
      resetForm,
   };
}
