import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class MyResponse {

    HTTP_SUCCESS_RESPONSE = 200
    HTTP_BAD_REQUEST = 400
    HTTP_UNAUTHORIZED = 401
    HTTP_RESPONSE = 0

    getResponse(response) {
        this.HTTP_RESPONSE = response.status
        if (this.HTTP_RESPONSE == this.HTTP_SUCCESS_RESPONSE) {
            return this.successResponse(response) 
        } else if (this.HTTP_RESPONSE == this.HTTP_BAD_REQUEST) {
            return this.badResponse(response)
        } else if (this.HTTP_RESPONSE == this.HTTP_UNAUTHORIZED) {
            return this.unauthorizedResponse(response)
        } else {
            return "Internal Server Error"
        }
    }

    private successResponse(response)
    {
        let successReponse = JSON.parse(JSON.stringify(response))
        console.log(successReponse)    
        //return successReponse.message
    }

    private badResponse(response)
    {
        return JSON.parse(JSON.parse(JSON.stringify(response)).error.messages[0]).message[0]
    }

    private unauthorizedResponse(response)
    {
        return JSON.parse(JSON.stringify(response)).error.messages[0]
    }

    public getToken()
    {
        return localStorage.getItem('token')
    }

    public getLoggedInfo() 
    {
        return localStorage.getItem('user')
    }
}
