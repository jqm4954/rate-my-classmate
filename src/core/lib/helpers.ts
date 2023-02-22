export const getUniversityList = () => {
    return fetch(`${process.env.UNIVERSITY_ENDPOINT}/search?country=united%20states`)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
            return [];
        })
}