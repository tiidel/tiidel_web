import axios from "axios";


function getCookieValue(key) {
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.trim().split('=');
        
        if (cookieKey === key) {
            let json =  decodeURIComponent(cookieValue);
            return JSON.parse(json);
        }
    }
    
    return null;
}

function setCookieValue(key, value, expiryDays) {
    const expires = new Date();
    expires.setDate(expires.getDate() + expiryDays);
    
    const cookieValue = encodeURIComponent(JSON.stringify(value));
    const cookieString = `${key}=${cookieValue}; expires=${expires.toUTCString()}; path=/`;
    
    document.cookie = cookieString;
}

function getLocalStorageValue(key) {
    const data = localStorage.getItem(key)
    
    if(data !== null) {
        return JSON.parse(data)
    }
    return null;
}

var user = getCookieValue('user');
var tenant_user = getLocalStorageValue('tenantUser')


// var user = cookieValue.length > 5 && JSON.parse(decodeURIComponent(cookieValue));


const token = user?.access ? user.access : ""
const tenant_token = tenant_user?.access ? tenant_user.access : ""

const configToken = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

const tenant_conf = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tenant_token}`
    }
}


const config = {
    headers: {
        "Content-Type": "application/json",
    }
}


const tenantConfig = tenant_token ? tenant_conf: config
const configGlobal = token ? configToken : config

const BASEURL = process.env.REACT_APP_SERVER_URL

/**
 * Make a get request to an external URL such as IP address
 * @param { String } endpoint External endpoint url
 * @returns JSON response
 */
export const getExternalRequest = async(endpoint) => {
    try {
        const response = await axios.get(endpoint, configGlobal)
        return response
    } catch (err) {
        return err
    }
}

export const getRequest = async(endpoint) => {
    try {
        const response = await axios.get(`${BASEURL}${endpoint}`, configGlobal)
        return response
    } catch (err) {
        return err
    }
}

/**
 * @param {string} endpoint to which the request is being made to with the id, uuid for a user
 * @param {Object} payload Data you want to update with  
 * @returns {Object}
 */
export const postRequest = async(endpoint, data) => {
    try {
        const response = await axios.post(`${BASEURL}${endpoint}`, data, configGlobal);
        return response
    } catch (error) {
        return error
    }
}


/**
 * @param {string} endpoint to which the request is being made to with the id, uuid for a user
 * @param {Object} payload Data you want to update with  
 * @returns {Object}
 */
export const patchRequest = async(endpoint, data) => {
    try {
        const response = await axios.patch(`${BASEURL}${endpoint}`, data, configGlobal);
        return response
    } catch (error) {
        return error
    }
}

/**
 * @param {string} endpoint to which the request is being made to with the id, uuid for a user
 * @returns {Boolean}
 */
export const deleteRequest = async(endpoint) => {
    try {
        const response = await axios.delete(`${BASEURL}${endpoint}`, configGlobal);
        return response
    } catch (error) {
        return error
    }
}

export const  auth = async (endpoint, data) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const response = await axios.post(`https://rankafrica.site/api/v1/auth/register/`, data, config);
        return response
    } catch (error) {
        return(error)
    }
}







// ========= TENANT REQUESTS ================

const update_token = async(tenant) => {
    let data = {
        "refresh": user?.refresh
    }
    try {
        const response = await axios.post(`https://${tenant}.rankafrica.site/api/v1/auth/token/refresh/`, data, config)
        if(response.status === 200) {
            console.log(user);
            console.log(response.data);
            user.access = response?.data?.access
            console.log(user);
            setCookieValue('user', user, 7);
            // window.location.reload()
        }
    } catch (error) {
        console.warn(error);
        return error
    }

}

export const loginTenant = async(tenant, endpoint, data) => {
    try {
        const response = await axios.post(`https:////${tenant}.rankafrica.site/api/v1${endpoint}`, data, config)
        return response
    } catch (error) {
        return error
    }
}
export const postTenant = async(tenant, endpoint, data) => {
    try {
        const response = await axios.post(`https://${tenant}.rankafrica.site/api/v1${endpoint}`, data, tenantConfig)
        return response
    } catch (error) {
        return error
    }
}

export const getTenant = async(tenant, endpoint) => {
    try {
        const response = await axios.get(`https://${tenant}.rankafrica.site/api/v1${endpoint}`, tenantConfig)
        return response

    } catch (error) {
        if(error?.response?.status === 401) {
            update_token(tenant)
        }
        return error
    }
}

export const patchTenant = async(tenant, endpoint, data) => {
    try {
        const response = await axios.patch(`https://${tenant}.rankafrica.site/api/v1${endpoint}`, data, tenantConfig)
        return response
    } catch (error) {
        return error
    }
}
