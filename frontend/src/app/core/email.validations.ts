import {
    AbstractControl,
    ValidationErrors
} from "@angular/forms";

export const emailValidator = (
    control:AbstractControl
    ):ValidationErrors | null => {
        const email = control.value
        const acceptedDomains = ["yahoo.com", "gmail.com", "msn.com"]

        if (email) {
            if (email.includes("@") && acceptedDomains.includes(email.split("@")[1])) {
                return { "invalidEmail": false }
            }
        }
        return { "invalidEmail": true}
    }
