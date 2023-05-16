const BASE_URL = process.env.BASE_URL_DEV || "http://localhost:3000"

export const fetchUserDB = async () => {
    const response = await fetch(`${BASE_URL}/api/users`)
    const jsonResponse = await response.json()

    return jsonResponse;
}