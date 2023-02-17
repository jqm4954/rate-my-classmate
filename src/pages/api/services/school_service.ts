/**
 * This service is for getting the school name from a school email
 */

import fs from 'fs/promises';


export function getSchoolFromEmail(email: String){

    let regex = "(?<=@)[^.]+(?=\.)"

    let emailDomain = email.match(regex)

    fs.readFile("src/pages/api/services/resources/domains.json")
        .then((data) => {
            //turn json indo data then parse
            let json = JSON.parse(data.toString())
            console.log(json)

            json.find(x => x.domains.contains(emailDomain))

            if(json.field("domains").containsKey(emailDomain)){

            }


        })
        .catch((error) => {
            // Do something if error
        });
}